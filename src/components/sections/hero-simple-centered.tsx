import { clsx } from 'clsx/lite'
import type { ComponentProps, ReactNode } from 'react'
import { Container } from '../elements/container'
import { Heading } from '../elements/heading'
import { Text } from '../elements/text'

export function HeroSimpleCentered({
  eyebrow,
  headline,
  subheadline,
  cta,
  backgroundImageSrc,
  className,
  ...props
}: {
  eyebrow?: ReactNode
  headline: ReactNode
  subheadline: ReactNode
  cta?: ReactNode
  backgroundImageSrc?: string
} & ComponentProps<'section'>) {
  return (
    <section
      className={clsx(
        'py-16',
        backgroundImageSrc && 'relative isolate overflow-hidden py-20 sm:py-24',
        className,
      )}
      {...props}
    >
      {backgroundImageSrc && (
        <>
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url("${backgroundImageSrc}")` }}
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(180deg,rgba(249,250,251,0.96)_0%,rgba(249,250,251,0.82)_34%,rgba(15,23,42,0.38)_100%)]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.92),transparent_72%)]"
          />
        </>
      )}
      <Container className={clsx('relative z-10 flex flex-col items-center gap-6', backgroundImageSrc && 'sm:gap-8')}>
        <div
          className={clsx(
            'flex flex-col items-center gap-6',
            backgroundImageSrc &&
              'w-full rounded-2xl border border-white/70 bg-white/58 px-6 py-10 text-center shadow-[0_32px_90px_-48px_rgba(15,23,42,0.75)] backdrop-blur-md sm:px-10 sm:py-12',
          )}
        >
          {eyebrow}
          <Heading className="max-w-5xl text-center">{headline}</Heading>
          <Text size="lg" className="flex max-w-2xl flex-col gap-4 text-center">
            {subheadline}
          </Text>
          {cta}
        </div>
      </Container>
    </section>
  )
}
