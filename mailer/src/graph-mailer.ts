// Sends through Microsoft Graph as the tenant's website mailbox, with an app registration that
// an Exchange application access policy restricts to that one mailbox. Replaced SMTP through
// MXroute on 22 Oct 2026: decaltra.com mail had moved to Microsoft 365 on 14 Sept, and the old
// server kept delivering the form notifications to its own dead copy of info@.

export interface GraphCredentials {
  tenantId: string;
  clientId: string;
  clientSecret: string;
}

export interface Party {
  name: string;
  email: string;
}

export interface OutgoingMail {
  to: Party;
  replyTo: Party;
  subject: string;
  text: string;
  html: string;
}

export const TOKEN_HOST = 'https://login.microsoftonline.com';
export const GRAPH_HOST = 'https://graph.microsoft.com';

const recipient = (party: Party) => ({ emailAddress: { address: party.email, name: party.name } });

/** The sendMail body Graph expects. The HTML carries the text alternative implicitly; Graph builds it. */
export const graphMessage = (mail: OutgoingMail) => ({
  message: {
    subject: mail.subject,
    body: { contentType: 'HTML', content: mail.html },
    toRecipients: [recipient(mail.to)],
    replyTo: [recipient(mail.replyTo)],
  },
  saveToSentItems: false,
});

export async function acquireToken(credentials: GraphCredentials, fetcher: typeof fetch = fetch): Promise<string> {
  const body = new URLSearchParams({
    client_id: credentials.clientId,
    client_secret: credentials.clientSecret,
    scope: 'https://graph.microsoft.com/.default',
    grant_type: 'client_credentials',
  });
  const response = await fetcher(`${TOKEN_HOST}/${credentials.tenantId}/oauth2/v2.0/token`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body,
  });
  const payload = (await response.json().catch(() => null)) as { access_token?: string; error_description?: string } | null;
  if (!response.ok || !payload?.access_token) {
    throw new Error(`Graph token request failed (${response.status}): ${payload?.error_description || 'no detail'}`);
  }
  return payload.access_token;
}

export async function sendAs(sender: string, token: string, mail: OutgoingMail, fetcher: typeof fetch = fetch): Promise<void> {
  const response = await fetcher(`${GRAPH_HOST}/v1.0/users/${encodeURIComponent(sender)}/sendMail`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(graphMessage(mail)),
  });
  if (response.status !== 202) {
    const detail = await response.text().catch(() => '');
    throw new Error(`Graph sendMail failed (${response.status}): ${detail.slice(0, 300)}`);
  }
}
