/**
 * A field people never see and bots fill in anyway. Anything arriving with it
 * set is dropped by the mailer Worker, which still answers 200 so the sender
 * has no signal it was caught.
 *
 * Deliberately not `display: none` or `type="hidden"`: the crawlers worth
 * catching skip both. Off-screen, untabbable and hidden from screen readers is
 * the combination that stays invisible to people without hiding it from bots.
 */
export function HoneypotField({
  value,
  onChange,
}: {
  value: string
  onChange: (value: string) => void
}) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute left-[-9999px] h-px w-px overflow-hidden">
      <label>
        Website
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={value}
          onChange={(event) => onChange(event.target.value)}
        />
      </label>
    </div>
  )
}
