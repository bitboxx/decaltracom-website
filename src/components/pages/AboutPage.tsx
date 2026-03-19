import { ButtonLink, PlainButtonLink } from '@/components/elements/button'
import { ChevronIcon } from '@/components/icons/chevron-icon'
import { CallToActionSimple } from '@/components/sections/call-to-action-simple'
import { HeroSimpleCentered } from '@/components/sections/hero-simple-centered'
import { Stat, StatsWithGraph } from '@/components/sections/stats-with-graph'

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <HeroSimpleCentered
        id="hero"
        headline="A more productive Europe where capital reaches opportunity faster."
        subheadline={
          <p>
            We're on a mission to empower capital providers to make fast, high-quality decisions by integrating
            adaptive, explainable AI into their workflows.
          </p>
        }
      />
      {/* Stats */}
      <StatsWithGraph
        id="stats"
        eyebrow="Our impact"
        headline="Transforming how capital providers make decisions."
        subheadline={
          <p>
            DecAltra is building the decision infrastructure that European capital markets need. From credit analysis to
            portfolio allocation, we help teams work smarter and move faster.
          </p>
        }
      >
        <Stat stat="10x" text="Faster initial analysis compared to traditional manual workflows." />
        <Stat stat="99.9%" text="Uptime — because capital markets don't wait." />
      </StatsWithGraph>
      {/* Call To Action */}
      <CallToActionSimple
        id="call-to-action"
        headline="Want to learn more?"
        subheadline={
          <p>Talk to our team about how DecAltra can transform your capital decision workflows.</p>
        }
        cta={
          <div className="flex items-center gap-4">
            <ButtonLink href="#" size="lg">
              Contact us
            </ButtonLink>
            <PlainButtonLink href="#" size="lg">
              Request a demo <ChevronIcon />
            </PlainButtonLink>
          </div>
        }
      />
    </>
  )
}
