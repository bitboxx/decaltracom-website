import { ButtonLink, FeedbackButton, PlainButtonLink, RequestCallButton } from '@/components/elements/button'
import { MailIcon } from '@/components/icons/mail-icon'
import { ChevronIcon } from '@/components/icons/chevron-icon'
import { CameraVideoIcon } from '@/components/icons/camera-video-icon'
import { Section } from '@/components/elements/section'
import ContactSectionNav from '@/components/pages/ContactSectionNav'

export default function ContactPage() {
  return (
    <>
      <ContactSectionNav />
      <Section
        id="contact"
        eyebrow="Contact us"
        headline="How would you like to get in touch?"
        headerClassName="max-w-4xl"
        subheadline={
          <p>
            Whether you have a question about DecAltra or want to speak with us directly, choose the option that suits
            you best.
          </p>
        }
      >
        <div className="grid gap-4 lg:grid-cols-2">
          <article className="flex h-full flex-col rounded-2xl border border-mist-200 bg-white p-6 shadow-sm">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-mist-200 bg-mist-100 text-mist-700">
                  <CameraVideoIcon className="size-5" />
                </div>
                <div>
                  <p className="text-sm/6 font-semibold uppercase tracking-[0.16em] text-mist-500">Talk directly</p>
                </div>
              </div>
              <div>
                <RequestCallButton size="lg">Request a call</RequestCallButton>
              </div>
            </div>
            <div className="mt-4">
              <div className="rounded-2xl border border-mist-200 bg-mist-50 p-4 text-base/7 text-mist-700 sm:flex-1">
                Suitable for new enquiries and existing clients alike.
              </div>
            </div>
          </article>

          <article className="flex h-full flex-col rounded-2xl border border-mist-200 bg-white p-6 shadow-sm">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-mist-200 bg-mist-100 text-mist-700">
                  <MailIcon className="size-5" />
                </div>
                <div>
                  <p className="text-sm/6 font-semibold uppercase tracking-[0.16em] text-mist-500">Write first</p>
                </div>
              </div>
              <div>
                <ButtonLink href="mailto:info@DecAltra.com" size="lg">
                  info@DecAltra.com
                </ButtonLink>
              </div>
            </div>
            <div className="mt-4 rounded-2xl border border-mist-200 bg-mist-50 p-4">
              <p className="text-base/7 text-mist-600">Include a few lines of context so it reaches the right person.</p>
            </div>
          </article>
        </div>

      </Section>

      <Section
        id="contact-navigation"
        className="pt-0"
        headline="Need something else?"
        subheadline={
          <p>
            You can always return to the homepage, continue exploring DecAltra&apos;s products, or share feedback on
            what feels strong, unclear, or missing.
          </p>
        }
      >
        <div className="flex items-center gap-4">
          <PlainButtonLink href="/" size="lg">
            Back to homepage <ChevronIcon />
          </PlainButtonLink>
          <FeedbackButton size="lg">Share feedback</FeedbackButton>
        </div>
      </Section>
    </>
  )
}
