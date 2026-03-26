import { useMemo, useState } from 'react'
import { ElDialog, ElDialogPanel } from '@tailwindplus/elements/react'
import { Button } from '@/components/elements/button'
import { CheckmarkIcon } from '@/components/icons/checkmark-icon'

const DEMO_REQUEST_EMAIL = 'demo@decaltra.com'

type FormState = {
  fullName: string
  workEmail: string
  company: string
  role: string
  priority: string
  timeline: string
}

const initialState: FormState = {
  fullName: '',
  workEmail: '',
  company: '',
  role: '',
  priority: '',
  timeline: 'This week',
}

export default function DemoRequestModal() {
  const [formState, setFormState] = useState<FormState>(initialState)
  const [submitted, setSubmitted] = useState(false)

  const body = useMemo(() => {
    const lines = [
      'New demo request',
      '',
      `Full name: ${formState.fullName}`,
      `Work email: ${formState.workEmail}`,
      `Company: ${formState.company}`,
      `Role: ${formState.role}`,
      `Priority: ${formState.priority}`,
      `Timeline: ${formState.timeline}`,
      '',
      'Please follow up with a tailored DecAltra demo.',
    ]

    return encodeURIComponent(lines.join('\n'))
  }, [formState])

  function updateField<Key extends keyof FormState>(key: Key, value: FormState[Key]) {
    setFormState((current) => ({ ...current, [key]: value }))
  }

  function handleSubmit(event: { preventDefault: () => void }) {
    event.preventDefault()
    const subject = encodeURIComponent(`Demo request from ${formState.company || formState.fullName}`)
    window.location.href = `mailto:${DEMO_REQUEST_EMAIL}?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  return (
    <ElDialog>
      <dialog id="demo-request-modal" className="backdrop:bg-mist-950/40">
        <ElDialogPanel className="fixed inset-0 z-50 overflow-y-auto px-4 py-6 sm:px-6">
          <div className="mx-auto flex min-h-full max-w-5xl items-center justify-center">
            <div className="grid w-full overflow-hidden rounded-2xl border border-mist-200 bg-white shadow-2xl lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
              <div className="bg-mist-950 p-6 text-white sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm/6 font-semibold uppercase tracking-[0.16em] text-mist-300">Request a demo</p>
                    <h2 className="mt-2 font-display text-3xl/9 font-medium tracking-tight">
                      See how DecAltra could work for your team
                    </h2>
                  </div>
                  <button
                    type="button"
                    command="close"
                    commandfor="demo-request-modal"
                    aria-label="Close demo request modal"
                    className="inline-flex rounded-full p-1.5 text-white/80 hover:bg-white/10 hover:text-white"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <p className="mt-5 text-base/7 text-mist-300">
                  Share a few details and we&apos;ll tailor the conversation around your workflows, governance needs,
                  and where you want to improve speed or quality first.
                </p>

                <div className="mt-8 space-y-4">
                  {[
                    'A focused conversation tailored to your institution',
                    'Clear next steps based on your current decision workflow',
                    'No spam and no generic product tour',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3 text-base/7 text-mist-200">
                      <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full border border-white/15 bg-white/10">
                        <CheckmarkIcon className="size-3" />
                      </span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm/6 font-semibold uppercase tracking-[0.16em] text-mist-300">Best results</p>
                  <p className="mt-2 text-base/7 text-mist-300">
                    Use your work email and the one priority you care about most right now. That gives us enough
                    context to make the demo relevant from the start.
                  </p>
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <form className="space-y-5" onSubmit={handleSubmit}>
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
                      <span className="text-sm/6 font-medium text-mist-950">Work email</span>
                      <input
                        required
                        type="email"
                        value={formState.workEmail}
                        onChange={(event) => updateField('workEmail', event.target.value)}
                        className="rounded-2xl border border-mist-200 bg-white px-4 py-3 text-sm/6 text-mist-950 outline-none transition focus:border-mist-400"
                        placeholder="jane@institution.eu"
                      />
                    </label>
                    <label className="flex flex-col gap-2">
                      <span className="text-sm/6 font-medium text-mist-950">Company</span>
                      <input
                        required
                        value={formState.company}
                        onChange={(event) => updateField('company', event.target.value)}
                        className="rounded-2xl border border-mist-200 bg-white px-4 py-3 text-sm/6 text-mist-950 outline-none transition focus:border-mist-400"
                        placeholder="European Bank"
                      />
                    </label>
                    <label className="flex flex-col gap-2">
                      <span className="text-sm/6 font-medium text-mist-950">Role</span>
                      <input
                        required
                        value={formState.role}
                        onChange={(event) => updateField('role', event.target.value)}
                        className="rounded-2xl border border-mist-200 bg-white px-4 py-3 text-sm/6 text-mist-950 outline-none transition focus:border-mist-400"
                        placeholder="Head of Credit Risk"
                      />
                    </label>
                  </div>

                  <label className="flex flex-col gap-2">
                    <span className="text-sm/6 font-medium text-mist-950">What are your top priorities?</span>
                    <textarea
                      required
                      rows={4}
                      value={formState.priority}
                      onChange={(event) => updateField('priority', event.target.value)}
                      className="rounded-2xl border border-mist-200 bg-white px-4 py-3 text-sm/6 text-mist-950 outline-none transition focus:border-mist-400"
                      placeholder="For example: faster initial analysis, more explainable risk ratings, or better memo production"
                    />
                  </label>

                  <label className="flex flex-col gap-2">
                    <span className="text-sm/6 font-medium text-mist-950">When would you prefer to have the demo</span>
                    <select
                      value={formState.timeline}
                      onChange={(event) => updateField('timeline', event.target.value)}
                      className="rounded-2xl border border-mist-200 bg-white px-4 py-3 text-sm/6 text-mist-950 outline-none transition focus:border-mist-400"
                    >
                      <option>This week</option>
                      <option>Next week</option>
                      <option>In about a month or later</option>
                    </select>
                  </label>

                  <div className="rounded-2xl border border-mist-200 bg-mist-50 p-4 text-base/7 text-mist-700">
                    We&apos;ll use this information only to prepare a relevant conversation. You&apos;re not signing up
                    to a mailing list.
                  </div>

                  {submitted ? (
                    <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-base/7 text-emerald-800">
                      Your email client should open with the demo request pre-filled. If it doesn&apos;t, send the same
                      details to <strong>{DEMO_REQUEST_EMAIL}</strong>.
                    </div>
                  ) : null}

                  <div className="flex">
                    <Button size="lg" type="submit">
                      Request my demo
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </ElDialogPanel>
      </dialog>
    </ElDialog>
  )
}
