import { useState } from 'react'
import { ElDialog, ElDialogPanel } from '@tailwindplus/elements/react'
import { Button } from '@/components/elements/button'
import { CheckmarkIcon } from '@/components/icons/checkmark-icon'
import { HoneypotField } from '@/components/elements/honeypot-field'
import { useMailerForm } from '@/components/hooks/useMailerForm'

type FormState = {
  fullName: string
  workEmail: string
  company: string
  message: string
  website: string
}

const initialState: FormState = {
  fullName: '',
  workEmail: '',
  company: '',
  message: '',
  website: '',
}

export default function MessageModal() {
  const [formState, setFormState] = useState<FormState>(initialState)
  const { sending, sent, error, submit } = useMailerForm()

  function updateField<Key extends keyof FormState>(key: Key, value: FormState[Key]) {
    setFormState((current) => ({ ...current, [key]: value }))
  }

  async function handleSubmit(event: { preventDefault: () => void }) {
    event.preventDefault()
    await submit({
      website: formState.website,
      name: formState.fullName,
      email: formState.workEmail,
      company: formState.company || undefined,
      message: formState.message,
    })
  }

  return (
    <ElDialog>
      <dialog id="message-modal" className="backdrop:bg-mist-950/40">
        <ElDialogPanel className="fixed inset-0 z-50 overflow-y-auto px-4 py-6 sm:px-6">
          <div className="mx-auto flex min-h-full max-w-5xl items-center justify-center">
            <div className="grid w-full overflow-hidden rounded-2xl border border-mist-200 bg-white shadow-2xl lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]">
              <div className="bg-mist-950 p-6 text-white sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm/6 font-semibold uppercase tracking-[0.16em] text-mist-300">Write to us</p>
                    <h2 className="mt-2 font-display text-3xl/9 font-medium tracking-tight">
                      Send us a message
                    </h2>
                  </div>
                  <button
                    type="button"
                    command="close"
                    commandfor="message-modal"
                    aria-label="Close message modal"
                    className="inline-flex rounded-full p-1.5 text-white/80 hover:bg-white/10 hover:text-white"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <p className="mt-5 text-base/7 text-mist-300">
                  Your message reaches both founders directly. We answer every enquiry ourselves.
                </p>

                <div className="mt-8 space-y-4">
                  {[
                    'Questions about the platform and the decision modules',
                    'Partnerships, data providers and integrations',
                    'Anything else you would rather put in writing first',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3 text-base/7 text-mist-200">
                      <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full border border-white/15 bg-white/10">
                        <CheckmarkIcon className="size-3" />
                      </span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <form className="space-y-5" onSubmit={handleSubmit}>
                  <HoneypotField value={formState.website} onChange={(value) => updateField('website', value)} />
                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="flex flex-col gap-2">
                      <span className="text-sm/6 font-medium text-mist-950">Full name</span>
                      <input
                        required
                        value={formState.fullName}
                        onChange={(event) => updateField('fullName', event.target.value)}
                        className="rounded-2xl border border-mist-200 bg-white px-4 py-3 text-sm/6 text-mist-950 outline-none transition focus:border-mist-400"
                        placeholder="Jane Smith"
                      />
                    </label>
                    <label className="flex flex-col gap-2">
                      <span className="text-sm/6 font-medium text-mist-950">Email</span>
                      <input
                        required
                        type="email"
                        value={formState.workEmail}
                        onChange={(event) => updateField('workEmail', event.target.value)}
                        className="rounded-2xl border border-mist-200 bg-white px-4 py-3 text-sm/6 text-mist-950 outline-none transition focus:border-mist-400"
                        placeholder="jane@institution.eu"
                      />
                    </label>
                  </div>

                  <label className="flex flex-col gap-2">
                    <span className="text-sm/6 font-medium text-mist-950">Company (optional)</span>
                    <input
                      value={formState.company}
                      onChange={(event) => updateField('company', event.target.value)}
                      className="rounded-2xl border border-mist-200 bg-white px-4 py-3 text-sm/6 text-mist-950 outline-none transition focus:border-mist-400"
                      placeholder="European Bank"
                    />
                  </label>

                  <label className="flex flex-col gap-2">
                    <span className="text-sm/6 font-medium text-mist-950">Your message</span>
                    <textarea
                      required
                      rows={6}
                      value={formState.message}
                      onChange={(event) => updateField('message', event.target.value)}
                      className="rounded-2xl border border-mist-200 bg-white px-4 py-3 text-sm/6 text-mist-950 outline-none transition focus:border-mist-400"
                      placeholder="A few lines of context so it reaches the right person"
                    />
                  </label>

                  {sent ? (
                    <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-base/7 text-emerald-800">
                      Thank you, your message is on its way. We will come back to you shortly.
                    </div>
                  ) : null}

                  {error ? (
                    <div className="rounded-2xl border border-red-200 bg-red-50 p-4 text-base/7 text-red-800">
                      Something went wrong. Please try again or email us at <strong>info@decaltra.com</strong>.
                    </div>
                  ) : null}

                  {!sent ? (
                    <div className="flex">
                      <Button size="lg" type="submit" disabled={sending}>
                        {sending ? 'Sending…' : 'Send message'}
                      </Button>
                    </div>
                  ) : null}
                </form>
              </div>
            </div>
          </div>
        </ElDialogPanel>
      </dialog>
    </ElDialog>
  )
}
