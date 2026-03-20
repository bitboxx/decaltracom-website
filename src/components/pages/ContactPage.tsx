import { DemoRequestButton, PlainButtonLink } from '@/components/elements/button'
import { MailIcon } from '@/components/icons/mail-icon'
import { ChevronIcon } from '@/components/icons/chevron-icon'
import { CallToActionSimple } from '@/components/sections/call-to-action-simple'
import { DocumentCentered } from '@/components/sections/document-centered'

export default function ContactPage() {
  return (
    <>
      <DocumentCentered
        id="contact"
        headline="Contact us"
        subheadline={
          <p>
            Get in touch to explore how DecAltra can support faster, higher-quality financial decision making.
          </p>
        }
      >
        <h2>Talk to the DecAltra team</h2>
        <p>
          We would be happy to discuss your workflows, your governance requirements, and how DecAltra could fit within
          your institution.
        </p>
        <p>
          Whether you want to request a demo, explore a product module, or understand the DecAltra Platform in more
          detail, we can point you to the right next step.
        </p>
        <div className="rounded-[1.75rem] border border-mist-200 bg-mist-50 p-5 text-mist-950">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-mist-200 bg-white text-mist-700">
              <MailIcon className="size-4" />
            </div>
            <div>
              <p className="text-sm/6 font-semibold uppercase tracking-[0.16em] text-mist-500">Email</p>
              <a href="mailto:Privacy@DecAltra.com" className="font-medium text-mist-950 underline underline-offset-4">
                Privacy@DecAltra.com
              </a>
            </div>
          </div>
        </div>
      </DocumentCentered>

      <CallToActionSimple
        id="call-to-action"
        headline="Want to see DecAltra in action?"
        subheadline={
          <p>Request a demo or contact us directly to start the conversation.</p>
        }
        cta={
          <div className="flex items-center gap-4">
            <DemoRequestButton size="lg">
              Request a demo
            </DemoRequestButton>
            <PlainButtonLink href="/" size="lg">
              Back to homepage <ChevronIcon />
            </PlainButtonLink>
          </div>
        }
      />
    </>
  )
}
