import { useState, type FormEvent } from 'react';
import { Button } from '@/components/elements/button';
import { Container } from '@/components/elements/container';
import { useMailerForm } from '@/components/hooks/useMailerForm';
import styles from './contact-page.module.css';

export default function ContactPage() {
  const [preferCall, setPreferCall] = useState(false);
  const { ready, sending, sent, error, submit } = useMailerForm();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!ready || sending || sent) return;
    const data = new FormData(event.currentTarget);
    const field = (name: string) => String(data.get(name) ?? '').trim();
    await submit({
      name: field('name'),
      email: field('email'),
      company: field('company'),
      phone: preferCall ? field('phone') || undefined : undefined,
      message: [
        'Contact enquiry',
        `Preferred follow-up: ${preferCall ? 'Call — arrange a suitable time by email' : 'Email'}`,
        '',
        field('message'),
      ].join('\n'),
    });
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className={styles.section}
    >
      <Container className={styles.layout}>
        <div className={styles.intro}>
          <p className={styles.eyebrow}>Contact us</p>
          <h1 id="contact-title">Let’s talk</h1>
          <p className={styles.description}>
            Explore how DecAltra could support your team, ask a question, or
            discuss working together.
          </p>
          <div className={styles.email}>
            <span>Prefer to email us directly?</span>
            <a href="mailto:info@decaltra.com">
              info@decaltra.com <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
        <div className={styles.card}>
          <h2>How can we help?</h2>
          <p className={styles.formIntro}>
            Tell us a little about what you have in mind.
          </p>
          {sent ? (
            <div role="status" className={styles.success}>
              <h3>Thank you for getting in touch</h3>
              <p>
                We’ve received your message. The DecAltra team will follow up by
                email
                {preferCall ? ' to arrange a suitable time for your call' : ''}.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.form}>
              <fieldset disabled={sending}>
                <div className={styles.row}>
                  <label>
                    Full name
                    <input
                      name="name"
                      autoComplete="name"
                      required
                      maxLength={150}
                    />
                  </label>
                  <label>
                    Work email
                    <input
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      maxLength={254}
                    />
                  </label>
                </div>
                <label>
                  Company
                  <input
                    name="company"
                    autoComplete="organization"
                    required
                    maxLength={200}
                  />
                </label>
                <label>
                  How can we help?
                  <textarea
                    name="message"
                    required
                    rows={4}
                    maxLength={5000}
                    placeholder="Tell us about your question, your team, or what you’re looking to explore."
                  />
                </label>
                <label className={styles.callPreference}>
                  <input
                    type="checkbox"
                    checked={preferCall}
                    onChange={event => setPreferCall(event.target.checked)}
                    aria-controls="contact-call-details"
                    aria-expanded={preferCall}
                  />
                  <span>I’d prefer a call</span>
                </label>
                {preferCall && (
                  <div id="contact-call-details" className={styles.callDetails}>
                    <label>
                      Phone number{' '}
                      <span className={styles.optional}>(optional)</span>
                      <input
                        type="tel"
                        name="phone"
                        autoComplete="tel"
                        maxLength={50}
                        placeholder="Include your country code"
                        aria-describedby="contact-call-note"
                      />
                    </label>
                    <p id="contact-call-note">
                      We’ll confirm a suitable time by email.
                    </p>
                  </div>
                )}
              </fieldset>
              <p className={styles.privacy}>
                We’ll use your details to respond to your enquiry.{' '}
                <a href="/privacy-policy">Privacy policy</a>
              </p>
              {error && (
                <p role="alert" className={styles.error}>
                  Your message couldn’t be sent. Please try again or email{' '}
                  <a href="mailto:info@decaltra.com">info@decaltra.com</a>.
                </p>
              )}
              <Button
                type="submit"
                size="lg"
                disabled={!ready || sending}
                className={styles.submit}
              >
                {sending
                  ? 'Sending…'
                  : !ready
                    ? 'Preparing form…'
                    : 'Send message'}
              </Button>
            </form>
          )}
        </div>
      </Container>
    </section>
  );
}
