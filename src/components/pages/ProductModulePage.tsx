import type { ReactNode } from 'react'
import { DemoRequestButton, PlainButtonLink } from '@/components/elements/button'
import { Eyebrow } from '@/components/elements/eyebrow'
import { ChevronIcon } from '@/components/icons/chevron-icon'
import { CallToActionSimple } from '@/components/sections/call-to-action-simple'
import { Feature, FeaturesThreeColumn } from '@/components/sections/features-three-column'
import { HeroSimpleCentered } from '@/components/sections/hero-simple-centered'
import { Stat, StatsThreeColumnWithDescription } from '@/components/sections/stats-three-column-with-description'

type ProductModulePageProps = {
  eyebrow: string
  headline: string
  subheadline: ReactNode
  benefitsEyebrow: string
  benefitsHeadline: string
  benefitsSubheadline: ReactNode
  benefits: Array<{
    icon: ReactNode
    headline: string
    subheadline: ReactNode
  }>
  workflowHeading: string
  workflowDescription: ReactNode
  workflowSteps: Array<{
    stat: string
    text: string
  }>
  capabilitiesEyebrow: string
  capabilitiesHeadline: string
  capabilitiesSubheadline: ReactNode
  capabilities: Array<{
    icon: ReactNode
    headline: string
    subheadline: ReactNode
  }>
  ctaHeadline: string
  ctaSubheadline: ReactNode
}

export default function ProductModulePage({
  eyebrow,
  headline,
  subheadline,
  benefitsEyebrow,
  benefitsHeadline,
  benefitsSubheadline,
  benefits,
  workflowHeading,
  workflowDescription,
  workflowSteps,
  capabilitiesEyebrow,
  capabilitiesHeadline,
  capabilitiesSubheadline,
  capabilities,
  ctaHeadline,
  ctaSubheadline,
}: ProductModulePageProps) {
  return (
    <>
      <HeroSimpleCentered
        id="hero"
        eyebrow={<Eyebrow>{eyebrow}</Eyebrow>}
        headline={headline}
        subheadline={subheadline}
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

      <FeaturesThreeColumn
        id="benefits"
        eyebrow={benefitsEyebrow}
        headline={benefitsHeadline}
        subheadline={benefitsSubheadline}
        features={
          <>
            {benefits.map((benefit) => (
              <Feature key={benefit.headline} icon={benefit.icon} headline={benefit.headline} subheadline={benefit.subheadline} />
            ))}
          </>
        }
      />

      <StatsThreeColumnWithDescription id="workflow" heading={workflowHeading} description={workflowDescription}>
        {workflowSteps.map((step) => (
          <Stat key={step.stat} stat={step.stat} text={step.text} />
        ))}
      </StatsThreeColumnWithDescription>

      <FeaturesThreeColumn
        id="capabilities"
        eyebrow={capabilitiesEyebrow}
        headline={capabilitiesHeadline}
        subheadline={capabilitiesSubheadline}
        features={
          <>
            {capabilities.map((capability) => (
              <Feature
                key={capability.headline}
                icon={capability.icon}
                headline={capability.headline}
                subheadline={capability.subheadline}
              />
            ))}
          </>
        }
      />

      <CallToActionSimple
        id="call-to-action"
        headline={ctaHeadline}
        subheadline={ctaSubheadline}
        cta={
          <div className="flex items-center gap-4">
            <DemoRequestButton size="lg">
              Request a demo
            </DemoRequestButton>
            <PlainButtonLink href="/contact" size="lg">
              Contact us <ChevronIcon />
            </PlainButtonLink>
          </div>
        }
      />
    </>
  )
}
