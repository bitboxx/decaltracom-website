import { clsx } from 'clsx/lite'
import type { ComponentProps, ReactNode } from 'react'
import { Container } from './container'
import { Eyebrow } from './eyebrow'
import { Subheading } from './subheading'
import { Text } from './text'

export function Section({
  eyebrow,
  headline,
  subheadline,
  cta,
  headerClassName,
  className,
  children,
  ...props
}: {
  eyebrow?: ReactNode
  headline?: ReactNode
  subheadline?: ReactNode
  cta?: ReactNode
  headerClassName?: string
} & ComponentProps<'section'>) {
  return (
    <section className={clsx('my-24', className)} {...props}>
      <Container>
        {headline && (
          <div className={clsx('max-w-2xl', headerClassName)}>
            {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
            <Subheading className="mt-2">{headline}</Subheading>
            {subheadline && <Text className="mt-2 text-pretty">{subheadline}</Text>}
            {cta}
          </div>
        )}
        <div className="mt-10">{children}</div>
      </Container>
    </section>
  )
}
