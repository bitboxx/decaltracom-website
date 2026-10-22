import { fetchMock, SELF } from 'cloudflare:test';
import { afterEach, beforeAll, describe, expect, it } from 'vitest';
import { graphMessage } from '../src/graph-mailer';

const ORIGIN = 'https://decaltra.com';
const submission = { name: 'Test Visitor', email: 'visitor@example.com', company: 'Example BV', message: 'Hello from the test.', language: 'en-gb' };

function post(body: unknown) {
  return SELF.fetch('https://decaltracom-mailer.example/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Origin: ORIGIN },
    body: JSON.stringify(body),
  });
}

describe('the message form mailer', () => {
  beforeAll(() => {
    fetchMock.activate();
    fetchMock.disableNetConnect();
  });
  afterEach(() => fetchMock.assertNoPendingInterceptors());

  it('builds a Graph message with the reply-to the inbox needs', () => {
    const body = graphMessage({ to: { name: 'Decaltra', email: 'info@decaltra.com' }, replyTo: { name: 'V', email: 'v@example.com' }, subject: 'S', text: 't', html: '<p>t</p>' });
    expect(body.message.toRecipients[0].emailAddress.address).toBe('info@decaltra.com');
    expect(body.message.replyTo[0].emailAddress.address).toBe('v@example.com');
    expect(body.saveToSentItems).toBe(false);
  });

  it('sends the notification and the confirmation as the website mailbox', async () => {
    const sent: unknown[] = [];
    fetchMock.get('https://login.microsoftonline.com').intercept({ path: '/tenant/oauth2/v2.0/token', method: 'POST' }).reply(200, { access_token: 'tok' });
    fetchMock.get('https://graph.microsoft.com').intercept({ path: '/v1.0/users/website%40decaltra.com/sendMail', method: 'POST' })
      .reply(202, (options) => { sent.push(JSON.parse(String(options.body))); return ''; }).times(2);
    const response = await post(submission);
    expect(response.status).toBe(200);
    expect(sent).toHaveLength(2);
    const [notification, confirmation] = sent as Array<ReturnType<typeof graphMessage>>;
    expect(notification.message.toRecipients[0].emailAddress.address).toBe('info@decaltra.com');
    expect(notification.message.replyTo[0].emailAddress.address).toBe('visitor@example.com');
    expect(notification.message.subject).toContain('Test Visitor');
    expect(confirmation.message.toRecipients[0].emailAddress.address).toBe('visitor@example.com');
    expect(confirmation.message.replyTo[0].emailAddress.address).toBe('info@decaltra.com');
  });

  it('sends nothing when the honeypot is filled, and still answers 200', async () => {
    const response = await post({ ...submission, website: 'http://spam.example' });
    expect(response.status).toBe(200);
  });

  it('refuses an origin that is not the site', async () => {
    const response = await SELF.fetch('https://decaltracom-mailer.example/', { method: 'POST', headers: { Origin: 'https://evil.example' }, body: '{}' });
    expect(response.status).toBe(403);
  });

  it('reports a failed token request as a server error without sending', async () => {
    fetchMock.get('https://login.microsoftonline.com').intercept({ path: '/tenant/oauth2/v2.0/token', method: 'POST' }).reply(401, { error_description: 'bad secret' });
    const response = await post(submission);
    expect(response.status).toBe(500);
  });
});
