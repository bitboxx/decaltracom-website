import { ButtonLink, PlainButtonLink } from '@/components/elements/button'
import { ArrowNarrowRightIcon } from '@/components/icons/arrow-narrow-right-icon'
import { ChevronIcon } from '@/components/icons/chevron-icon'
import { BookOpenIcon } from '@/components/icons/book-open-icon'
import { ChartBarIcon } from '@/components/icons/chart-bar-icon'
import { ClockIcon } from '@/components/icons/clock-icon'
import { CpuIcon } from '@/components/icons/cpu-icon'
import { DocumentIcon } from '@/components/icons/document-icon'
import { FingerprintIcon } from '@/components/icons/fingerprint-icon'
import { LightBulbIcon } from '@/components/icons/light-bulb-icon'
import { LockIcon } from '@/components/icons/lock-icon'
import { ShieldExclamationIcon } from '@/components/icons/shield-exclamation-icon'
import { CallToActionSimple } from '@/components/sections/call-to-action-simple'
import { FAQsTwoColumnAccordion, Faq } from '@/components/sections/faqs-two-column-accordion'
import { Feature, FeaturesThreeColumn } from '@/components/sections/features-three-column'
import { HeroSimpleCentered } from '@/components/sections/hero-simple-centered'
import { Stat, StatsThreeColumnWithDescription } from '@/components/sections/stats-three-column-with-description'
import { Eyebrow } from '@/components/elements/eyebrow'

export default function MeridianPage() {
  return (
    <>
      {/* Hero */}
      <HeroSimpleCentered
        id="hero"
        eyebrow={<Eyebrow>Veltrax Meridian</Eyebrow>}
        headline="Credit memos, reimagined with AI."
        subheadline={
          <p>
            Meridian transforms the credit memo process from weeks of manual effort into a streamlined, AI-assisted
            workflow — while keeping your analysts firmly in control.
          </p>
        }
        cta={
          <div className="flex items-center gap-4">
            <ButtonLink href="#" size="lg">
              Request a demo
            </ButtonLink>
            <PlainButtonLink href="#how-it-works" size="lg">
              See how it works <ArrowNarrowRightIcon />
            </PlainButtonLink>
          </div>
        }
      />
      {/* Key benefits */}
      <FeaturesThreeColumn
        id="benefits"
        eyebrow="Why Meridian"
        headline="Faster memos. Sharper analysis. Full control."
        subheadline={
          <p>
            Meridian augments your credit team's expertise with adaptive AI that understands your institution's
            frameworks, risk appetite, and documentation standards.
          </p>
        }
        features={
          <>
            <Feature
              icon={<ClockIcon />}
              headline="Days, not weeks"
              subheadline={
                <p>
                  Accelerate credit memo drafting from weeks of manual research and writing to days of focused,
                  AI-assisted analysis.
                </p>
              }
            />
            <Feature
              icon={<LightBulbIcon />}
              headline="Analyst-led, AI-powered"
              subheadline={
                <p>
                  Your analysts drive every decision. Meridian surfaces insights, drafts sections, and flags risks — but
                  the judgment stays human.
                </p>
              }
            />
            <Feature
              icon={<FingerprintIcon />}
              headline="Your framework, your standards"
              subheadline={
                <p>
                  Adapts to your institution's credit policies, templates, and governance requirements. Not a
                  one-size-fits-all tool.
                </p>
              }
            />
            <Feature
              icon={<CpuIcon />}
              headline="Integrated data analysis"
              subheadline={
                <p>
                  Connects to internal and external data sources — financials, market data, ESG scores — and synthesizes
                  them into a coherent narrative.
                </p>
              }
            />
            <Feature
              icon={<ShieldExclamationIcon />}
              headline="Built-in risk flagging"
              subheadline={
                <p>
                  Automatically identifies risk factors, covenant breaches, and concentration issues before your
                  committee review.
                </p>
              }
            />
            <Feature
              icon={<LockIcon />}
              headline="European data sovereignty"
              subheadline={
                <p>
                  Your credit data never leaves your control. EU-compliant infrastructure with no shared model training
                  on client data.
                </p>
              }
            />
          </>
        }
      />
      {/* How it works */}
      <StatsThreeColumnWithDescription
        id="how-it-works"
        heading="From raw data to committee-ready memo."
        description={
          <p>
            Meridian follows your existing credit process — it just makes every step faster, more consistent, and better
            documented.
          </p>
        }
      >
        <Stat stat="1" text="Ingest — Connect your data sources: financials, CRM, market feeds, and internal risk models." />
        <Stat stat="2" text="Analyse — AI synthesises data into draft sections, flags risks, and benchmarks against peers." />
        <Stat stat="3" text="Review — Your analysts refine, adjust, and approve. Every change is tracked and auditable." />
      </StatsThreeColumnWithDescription>
      {/* Detailed features */}
      <FeaturesThreeColumn
        id="capabilities"
        eyebrow="Capabilities"
        headline="Everything your credit team needs."
        subheadline={
          <p>
            Purpose-built for the credit memo workflow, from initial screening to committee presentation.
          </p>
        }
        features={
          <>
            <Feature
              icon={<DocumentIcon />}
              headline="Automated draft generation"
              subheadline={
                <p>
                  Generates structured memo sections — executive summary, financial analysis, risk assessment — based on
                  your templates and ingested data.
                </p>
              }
            />
            <Feature
              icon={<ChartBarIcon />}
              headline="Financial spreading & analysis"
              subheadline={
                <p>
                  Automatically spreads financials, calculates ratios, identifies trends, and benchmarks against sector
                  peers.
                </p>
              }
            />
            <Feature
              icon={<BookOpenIcon />}
              headline="Audit trail & versioning"
              subheadline={
                <p>
                  Every AI suggestion, analyst edit, and data source is tracked. Full transparency for compliance and
                  committee review.
                </p>
              }
            />
          </>
        }
      />
      {/* FAQs */}
      <FAQsTwoColumnAccordion id="faqs" headline="Questions & Answers">
        <Faq
          id="faq-1"
          question="How does Meridian handle confidential credit data?"
          answer="Your data is processed within EU-compliant infrastructure under your control. We never use client data to train shared models, and all data processing agreements comply with GDPR and financial sector regulations."
        />
        <Faq
          id="faq-2"
          question="Can Meridian work with our existing credit templates?"
          answer="Yes. Meridian is designed to adapt to your institution's specific templates, policies, and documentation standards. During onboarding, we configure the system to match your exact credit memo format and governance requirements."
        />
        <Faq
          id="faq-3"
          question="Does Meridian replace our credit analysts?"
          answer="No. Meridian accelerates and augments your analysts' work — it drafts sections, surfaces insights, and flags risks. But every conclusion, recommendation, and final memo is reviewed and approved by your team. Human-led decisions are a core principle."
        />
        <Faq
          id="faq-4"
          question="What data sources does Meridian integrate with?"
          answer="Meridian connects to internal systems (core banking, CRM, risk models) and external sources (financial data providers, market feeds, ESG databases, company registries). We support standard APIs and can build custom connectors for proprietary systems."
        />
        <Faq
          id="faq-5"
          question="How long does implementation take?"
          answer="A typical pilot starts within 4–6 weeks. We begin with a focused use case — such as a specific asset class or credit type — and expand from there based on your team's feedback and confidence."
        />
        <Faq
          id="faq-6"
          question="How does Meridian ensure consistency across analysts?"
          answer="Meridian applies your institution's credit framework uniformly across all memos, ensuring consistent risk flagging, financial analysis methodology, and documentation quality — regardless of which analyst is working on the case."
        />
      </FAQsTwoColumnAccordion>
      {/* CTA */}
      <CallToActionSimple
        id="call-to-action"
        headline="Ready to transform your credit memo process?"
        subheadline={
          <p>
            See how Meridian can help your team produce higher-quality credit memos in a fraction of the time.
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
