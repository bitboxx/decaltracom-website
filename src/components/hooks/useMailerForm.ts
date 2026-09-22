import { useCallback, useEffect, useRef, useState } from 'react'

const MAILER_URL =
  import.meta.env.PUBLIC_MAILER_URL ?? 'https://decaltracom-mailer.michaelbolle1981.workers.dev'
const ATTACH_DELAY_MS = 10_000

export function useMailerForm() {
  const [ready, setReady] = useState(false)
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState(false)
  const mountedAt = useRef(Date.now())

  useEffect(() => {
    const timer = setTimeout(() => setReady(true), ATTACH_DELAY_MS)
    return () => clearTimeout(timer)
  }, [])

  const submit = useCallback(
    async (payload: {
      name: string
      email: string
      message: string
      company?: string
      phone?: string
      website?: string
    }) => {
      setSending(true)
      setError(false)

      // Bot guard: the worker is only called once the page has been open for
      // ATTACH_DELAY_MS. A human who fills the form faster than that waits out
      // the remainder rather than having the submission silently dropped.
      const waitFor = ATTACH_DELAY_MS - (Date.now() - mountedAt.current)
      if (waitFor > 0) {
        await new Promise((resolve) => setTimeout(resolve, waitFor))
      }

      try {
        const response = await fetch(MAILER_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...payload,
            language: 'en-gb',
          }),
        })

        if (!response.ok) throw new Error(`HTTP ${response.status}`)

        setSent(true)
      } catch {
        setError(true)
      } finally {
        setSending(false)
      }
    },
    [],
  )

  return { ready, sending, sent, error, submit }
}
