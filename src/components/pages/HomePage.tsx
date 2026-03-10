import { ButtonLink, PlainButtonLink } from '@/components/elements/button'
import { ArrowNarrowRightIcon } from '@/components/icons/arrow-narrow-right-icon'
import { ChevronIcon } from '@/components/icons/chevron-icon'
import { BuildingLibraryIcon } from '@/components/icons/building-library-icon'
import { ChartLineIcon } from '@/components/icons/chart-line-icon'
import { CpuIcon } from '@/components/icons/cpu-icon'
import { FingerprintIcon } from '@/components/icons/fingerprint-icon'
import { LightBulbIcon } from '@/components/icons/light-bulb-icon'
import { SlidersIcon } from '@/components/icons/sliders-icon'
import { CallToActionSimple } from '@/components/sections/call-to-action-simple'
import { FAQsTwoColumnAccordion, Faq } from '@/components/sections/faqs-two-column-accordion'
import { Feature, FeaturesThreeColumn } from '@/components/sections/features-three-column'
import { HeroSimpleCentered } from '@/components/sections/hero-simple-centered'
import { Stat, StatsWithGraph } from '@/components/sections/stats-with-graph'

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <HeroSimpleCentered
        id="hero"
        headline="Capital decisions, accelerated by AI."
        subheadline={
          <p>
            We empower capital providers to make fast, high-quality decisions by integrating adaptive, explainable AI into
            their workflows.
          </p>
        }
        cta={
          <div className="flex items-center gap-4">
            <ButtonLink href="#" size="lg">
              Request a demo
            </ButtonLink>
            <PlainButtonLink href="#features" size="lg">
              Learn more <ArrowNarrowRightIcon />
            </PlainButtonLink>
          </div>
        }
      />
      {/* Features */}
      <FeaturesThreeColumn
        id="features"
        eyebrow="Why Veltrax"
        headline="AI-enabled decision infrastructure for capital providers."
        subheadline={
          <p>
            Purpose-built for banks, asset managers, and institutional lenders who need to move faster without
            compromising on quality or governance.
          </p>
        }
        features={
          <>
            <Feature
              icon={<BuildingLibraryIcon />}
              headline="European by design"
              subheadline={
                <p>Stay in control of your data and AI models. Built for European regulatory frameworks from the ground up.</p>
              }
            />
            <Feature
              icon={<SlidersIcon />}
              headline="Customer centric"
              subheadline={
                <p>AI-supported products that adapt to your governance frameworks — not the other way around.</p>
              }
            />
            <Feature
              icon={<LightBulbIcon />}
              headline="Human-led decisions"
              subheadline={
                <p>AI supports judgment, it never replaces accountability. Your experts stay in the driver's seat.</p>
              }
            />
            <Feature
              icon={<CpuIcon />}
              headline="Open architecture"
              subheadline={
                <p>Integrate internal and external data sources seamlessly into a unified decision workflow.</p>
              }
            />
            <Feature
              icon={<ChartLineIcon />}
              headline="Impact-driven"
              subheadline={
                <p>Measurable improvements in speed, quality, and consistency of capital allocation decisions.</p>
              }
            />
            <Feature
              icon={<FingerprintIcon />}
              headline="Explainable AI"
              subheadline={
                <p>Every recommendation comes with transparent reasoning that auditors and regulators can review.</p>
              }
            />
          </>
        }
      />
      {/* Stats */}
      <StatsWithGraph
        id="stats"
        eyebrow="Built for impact"
        headline="Faster decisions. Better outcomes."
        subheadline={
          <p>
            Veltrax helps capital providers across Europe make higher-quality decisions in less time. From credit
            analysis to portfolio allocation, our AI infrastructure delivers measurable improvements.
          </p>
        }
      >
        <Stat stat="10x" text="Faster initial credit analysis compared to traditional manual workflows." />
        <Stat stat="99.9%" text="Uptime — because capital markets don't wait." />
      </StatsWithGraph>
      {/* FAQs */}
      <FAQsTwoColumnAccordion id="faqs" headline="Questions & Answers">
        <Faq
          id="faq-1"
          question="How does Veltrax integrate with our existing systems?"
          answer="Veltrax is built on an open architecture that connects to your existing data sources, risk models, and workflow tools via standard APIs. We work alongside your current infrastructure, not against it."
        />
        <Faq
          id="faq-2"
          question="Is our data safe with Veltrax?"
          answer="Absolutely. We are European by design — your data stays under your control, processed within EU-compliant infrastructure. We never use client data to train shared models."
        />
        <Faq
          id="faq-3"
          question="Does Veltrax replace our credit analysts?"
          answer="No. Veltrax augments your team's expertise. Our AI provides recommendations and analysis, but every decision remains with your people. Human-led decisions are a core principle."
        />
        <Faq
          id="faq-4"
          question="What types of capital providers does Veltrax serve?"
          answer="We work with banks, asset managers, institutional lenders, and other capital providers across Europe who need to make faster, more consistent capital allocation decisions."
        />
      </FAQsTwoColumnAccordion>
      {/* Call To Action */}
      <CallToActionSimple
        id="call-to-action"
        headline="Ready to accelerate your capital decisions?"
        subheadline={
          <p>
            See how Veltrax can transform your team's decision-making workflow with adaptive, explainable AI.
          </p>
        }
        cta={
          <div className="flex items-center gap-4">
            <ButtonLink href="#" size="lg">
              Request a demo
            </ButtonLink>
            <PlainButtonLink href="#" size="lg">
              Contact sales <ChevronIcon />
            </PlainButtonLink>
          </div>
        }
      />
    </>
  )
}
