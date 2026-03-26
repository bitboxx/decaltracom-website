import { clsx } from 'clsx/lite'
import type { ComponentProps, ReactNode } from 'react'

export function HeroAboutWithPhoto({
  eyebrow,
  headline,
  subheadline,
  photo,
  className,
  ...props
}: {
  eyebrow?: ReactNode
  headline: ReactNode
  subheadline?: ReactNode
  photo: ReactNode
} & ComponentProps<'section'>) {
  return (
    <section className={clsx('my-8', className)} {...props}>
      <div className="mx-auto max-w-2xl px-6 md:max-w-3xl lg:max-w-7xl lg:px-10">
        <div className="max-w-5xl">
          {eyebrow ? (
            <p className="text-sm/7 font-semibold text-mist-700">{eyebrow}</p>
          ) : null}
          <h1 className="mt-2 font-display text-[2rem]/10 font-medium tracking-tight text-mist-950 sm:text-5xl/14">
            {headline}
          </h1>
          {subheadline ? (
            <p className="mt-2 text-lg/8 text-mist-700">{subheadline}</p>
          ) : null}
        </div>
      </div>
      <div className="mt-10 w-full *:size-full *:object-cover">
        {photo}
      </div>
    </section>
  )
}
