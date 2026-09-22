import { useEffect, useState } from 'react'

const STORAGE_KEY = 'decaltra-cookie-notice-dismissed'

/**
 * DecAltra sets no cookies beyond what the site needs to function, and the
 * analytics we run are cookieless, so nothing here is a consent gate: it is a
 * notice. If a tool that writes to the visitor's device is ever added, this
 * component has to become a real consent manager and the analytics script in
 * Layout.astro has to move behind it.
 */
export default function CookieNotice() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    try {
      if (window.localStorage.getItem(STORAGE_KEY) !== 'true') setVisible(true)
    } catch {
      // Private mode or storage disabled: show the notice, do not persist it.
      setVisible(true)
    }
  }, [])

  function dismiss() {
    setVisible(false)
    try {
      window.localStorage.setItem(STORAGE_KEY, 'true')
    } catch {
      // Nothing to do, the notice reappears next visit.
    }
  }

  if (!visible) return null

  return (
    <div
      role="region"
      aria-label="Cookie notice"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-mist-200 bg-white/95 px-4 py-4 shadow-[0_-4px_24px_rgba(15,23,42,0.08)] backdrop-blur sm:px-6"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm/6 text-mist-700">
          This site uses no tracking cookies. Visitor statistics are collected without cookies and without personal
          data, on servers in the European Union. Read our{' '}
          <a href="/cookie-policy" className="underline">
            cookie policy
          </a>
          .
        </p>
        <button
          type="button"
          onClick={dismiss}
          className="inline-flex shrink-0 items-center justify-center rounded-full bg-mist-950 px-5 py-2 text-sm/7 font-medium text-white hover:bg-mist-800"
        >
          Got it
        </button>
      </div>
    </div>
  )
}
