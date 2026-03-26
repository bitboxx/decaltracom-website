import { DemoRequestButton, PlainButtonLink } from '@/components/elements/button'
import { Container } from '@/components/elements/container'
import { ArrowNarrowRightIcon } from '@/components/icons/arrow-narrow-right-icon'
import { ChartBarIcon } from '@/components/icons/chart-bar-icon'
import { ChartLineIcon } from '@/components/icons/chart-line-icon'
import { CheckmarkIcon } from '@/components/icons/checkmark-icon'
import { ChevronIcon } from '@/components/icons/chevron-icon'
import { ClockIcon } from '@/components/icons/clock-icon'
import { DocumentIcon } from '@/components/icons/document-icon'
import { FingerprintIcon } from '@/components/icons/fingerprint-icon'
import { LightBulbIcon } from '@/components/icons/light-bulb-icon'
import { CallToActionSimple } from '@/components/sections/call-to-action-simple'
import { Section } from '@/components/elements/section'

const outcomes = [
  {
    icon: ClockIcon,
    title: 'Move faster',
    text: 'Compress manual spreading work into a structured, reviewable workflow',
  },
  {
    icon: CheckmarkIcon,
    title: 'Catch issues early',
    text: 'Surface validation checks before inconsistencies slow down decision making',
  },
  {
    icon: FingerprintIcon,
    title: 'Stay fully traceable',
    text: 'Keep every figure connected to calculations and source material',
  },
]

const capabilities = [
  {
    icon: ChartLineIcon,
    title: 'Multi-year financials and ratio models',
    text: 'Structured financial views across periods with analysis ready for review',
  },
  {
    icon: LightBulbIcon,
    title: 'Automated validation checks',
    text: 'Identify missing values, broken relationships, and anomalies automatically',
  },
  {
    icon: ChartBarIcon,
    title: 'Peer benchmarking',
    text: 'See relative performance through tables and visuals that are easy to interpret',
  },
  {
    icon: DocumentIcon,
    title: 'Full traceability',
    text: 'Move from outputs back to underlying figures, calculations, and sources instantly',
  },
]

const workflow = [
  {
    step: '01',
    title: 'Ingest',
    text: 'Bring statements, files, and historical financials into one structured workflow',
  },
  {
    step: '02',
    title: 'Standardise',
    text: 'Generate ratios, run validation checks, and structure outputs consistently',
  },
  {
    step: '03',
    title: 'Review',
    text: 'Benchmark, verify, and move clean analysis into downstream decision processes',
  },
]

export default function FinancialSpreadingPage() {
  return (
    <>
      <section className="py-16">
        <Container className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center">
          <div className="max-w-2xl space-y-6">
            <div className="space-y-3">
              <p className="text-sm/7 font-semibold text-mist-700">DecAltra Financial Spreading</p>
              <h1 className="font-display text-5xl/14 font-medium tracking-tight text-mist-950">
                Financial spreading your team can trust at speed
              </h1>
            </div>
            <p className="text-lg/8 text-mist-700">
              Transform financial statements and raw financials into structured, validated and explainable analysis
              that fits directly into your decision workflow.
            </p>
            <div className="flex items-center gap-4">
              <DemoRequestButton size="lg">Request a demo</DemoRequestButton>
              <PlainButtonLink href="/contact" size="lg">
                Contact us <ChevronIcon />
              </PlainButtonLink>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-mist-200 bg-[linear-gradient(135deg,rgba(255,255,255,0.96),rgba(228,237,241,0.96))] p-6 shadow-sm">
            <div className="absolute inset-x-0 top-0 h-28 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.95),transparent_70%)]" />
            <div className="relative grid gap-4">
              <div className="rounded-2xl border border-mist-200 bg-white p-4 shadow-sm">
                <div className="flex items-center justify-between">
                  <p className="text-sm/6 font-semibold uppercase tracking-[0.16em] text-mist-500">Spread preview</p>
                  <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-emerald-700">
                    Validated
                  </span>
                </div>
                <div className="mt-4 grid gap-3 sm:grid-cols-[1.1fr_0.9fr]">
                  <div className="rounded-2xl border border-mist-200 bg-mist-50 p-4">
                    <div className="grid grid-cols-4 gap-2 text-[0.7rem] uppercase tracking-[0.14em] text-mist-500">
                      <span>Metric</span>
                      <span>2022</span>
                      <span>2023</span>
                      <span>2024</span>
                    </div>
                    <div className="mt-3 space-y-2 text-sm/6 text-mist-700">
                      <div className="grid grid-cols-4 gap-2 rounded-xl bg-white px-3 py-2">
                        <span>Revenue</span>
                        <span>52.4</span>
                        <span>58.1</span>
                        <span>63.7</span>
                      </div>
                      <div className="grid grid-cols-4 gap-2 rounded-xl bg-white px-3 py-2">
                        <span>EBITDA</span>
                        <span>9.8</span>
                        <span>10.6</span>
                        <span>12.4</span>
                      </div>
                      <div className="grid grid-cols-4 gap-2 rounded-xl bg-white px-3 py-2">
                        <span>Debt / EBITDA</span>
                        <span>3.8x</span>
                        <span>3.3x</span>
                        <span>2.9x</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="rounded-2xl border border-mist-200 bg-white p-4">
                      <p className="text-sm/6 font-semibold text-mist-950">Checks passed</p>
                      <div className="mt-3 space-y-2 text-sm/6 text-mist-700">
                        <div className="flex items-center gap-2">
                          <CheckmarkIcon className="size-3.5 text-emerald-700" />
                          Balance sheet balanced
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckmarkIcon className="size-3.5 text-emerald-700" />
                          Ratio model consistent
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckmarkIcon className="size-3.5 text-emerald-700" />
                          Source references linked
                        </div>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-mist-200 bg-mist-950 p-4 text-white">
                      <p className="text-sm/6 font-semibold uppercase tracking-[0.16em] text-mist-300">Peer benchmark</p>
                      <div className="mt-4 flex items-end gap-2">
                        <div className="h-10 w-8 rounded-t-xl bg-white/30" />
                        <div className="h-14 w-8 rounded-t-xl bg-white/45" />
                        <div className="h-18 w-8 rounded-t-xl bg-white/60" />
                        <div className="h-12 w-8 rounded-t-xl bg-white/35" />
                        <div className="h-20 w-8 rounded-t-xl bg-white" />
                      </div>
                      <p className="mt-3 text-base/7 text-mist-300">See relative performance instantly, not after a spreadsheet clean-up cycle.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-mist-200 bg-white p-4 shadow-sm">
                  <p className="text-sm/6 font-semibold uppercase tracking-[0.16em] text-mist-500">Output</p>
                  <p className="mt-2 font-display text-2xl/8 tracking-tight text-mist-950">Structured</p>
                </div>
                <div className="rounded-2xl border border-mist-200 bg-white p-4 shadow-sm">
                  <p className="text-sm/6 font-semibold uppercase tracking-[0.16em] text-mist-500">Review</p>
                  <p className="mt-2 font-display text-2xl/8 tracking-tight text-mist-950">Explainable</p>
                </div>
                <div className="rounded-2xl border border-mist-200 bg-white p-4 shadow-sm">
                  <p className="text-sm/6 font-semibold uppercase tracking-[0.16em] text-mist-500">Process</p>
                  <p className="mt-2 font-display text-2xl/8 tracking-tight text-mist-950">Traceable</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Section
        id="outcomes"
        eyebrow="Why it matters"
        headline="Less spreadsheet work. More decision-ready analysis."
        subheadline={
          <p>
            Financial Spreading is built to shorten the distance between raw inputs and high-quality financial review.
          </p>
        }
      >
        <div className="grid gap-4 md:grid-cols-3">
          {outcomes.map((outcome) => {
            const Icon = outcome.icon
            return (
              <article key={outcome.title} className="rounded-2xl border border-mist-200 bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-mist-200 bg-mist-100 text-mist-700">
                  <Icon className="size-5" />
                </div>
                <h2 className="mt-5 font-display text-2xl/8 font-medium tracking-tight text-mist-950">
                  {outcome.title}
                </h2>
                <p className="mt-3 text-base/7 text-mist-700">{outcome.text}</p>
              </article>
            )
          })}
        </div>
      </Section>

      <Section
        id="workflow"
        eyebrow="How it works"
        headline="From raw statements to decision-ready analysis"
        subheadline={
          <p>A compact workflow designed for institutions that need speed, consistency, and reviewability.</p>
        }
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {workflow.map((item, index) => (
            <article key={item.step} className="relative rounded-2xl border border-mist-200 bg-white p-6 shadow-sm">
              {index < workflow.length - 1 ? (
                <div className="pointer-events-none absolute right-0 top-1/2 hidden translate-x-1/2 -translate-y-1/2 lg:block">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-mist-200 bg-white text-mist-700 shadow-sm">
                    <ArrowNarrowRightIcon className="size-4" />
                  </div>
                </div>
              ) : null}
              <span className="inline-flex rounded-full border border-mist-200 bg-mist-100 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-mist-600">
                {item.step}
              </span>
              <h2 className="mt-5 font-display text-2xl/8 font-medium tracking-tight text-mist-950">{item.title}</h2>
              <p className="mt-3 text-base/7 text-mist-700">{item.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        id="capabilities"
        eyebrow="What you get"
        headline="Purpose-built capabilities for financial review"
        subheadline={
          <p>Everything your team needs to move from raw inputs to clean analysis without losing confidence.</p>
        }
      >
        <div className="grid gap-4 md:grid-cols-2">
          {capabilities.map((capability) => {
            const Icon = capability.icon
            return (
              <article key={capability.title} className="rounded-2xl border border-mist-200 bg-white p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-mist-200 bg-mist-100 text-mist-700">
                    <Icon className="size-5" />
                  </div>
                  <div>
                    <h2 className="font-display text-2xl/8 font-medium tracking-tight text-mist-950">{capability.title}</h2>
                    <p className="mt-3 text-base/7 text-mist-700">{capability.text}</p>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </Section>

      <Section
        id="visuals"
        eyebrow="Outputs your team can review"
        headline="Designed for review, not just generation"
        subheadline={
          <p>Financial Spreading produces outputs that are structured, benchmarked, and easy to challenge or confirm.</p>
        }
      >
        <div className="grid gap-4 lg:grid-cols-3">
          <article className="overflow-hidden rounded-2xl border border-mist-200 bg-white shadow-sm">
            <div className="h-40 bg-[linear-gradient(135deg,rgba(18,27,33,1),rgba(61,90,102,0.92),rgba(157,181,190,0.84))]" />
            <div className="p-6">
              <h2 className="font-display text-2xl/8 font-medium tracking-tight text-mist-950">Structured spread outputs</h2>
              <p className="mt-3 text-base/7 text-mist-700">Move from raw financials to analysis your team can immediately work with.</p>
            </div>
          </article>
          <article className="overflow-hidden rounded-2xl border border-mist-200 bg-white shadow-sm">
            <div className="h-40 bg-[linear-gradient(135deg,rgba(25,35,42,1),rgba(88,110,118,0.92),rgba(215,226,231,0.85))]" />
            <div className="p-6">
              <h2 className="font-display text-2xl/8 font-medium tracking-tight text-mist-950">Validation-led review</h2>
              <p className="mt-3 text-base/7 text-mist-700">Highlight inconsistencies before they create friction in downstream decisions.</p>
            </div>
          </article>
          <article className="overflow-hidden rounded-2xl border border-mist-200 bg-white shadow-sm">
            <div className="h-40 bg-[linear-gradient(135deg,rgba(20,30,36,1),rgba(70,95,108,0.92),rgba(175,196,205,0.86))]" />
            <div className="p-6">
              <h2 className="font-display text-2xl/8 font-medium tracking-tight text-mist-950">Benchmarking at a glance</h2>
              <p className="mt-3 text-base/7 text-mist-700">See relative position and outliers quickly through visual comparison views.</p>
            </div>
          </article>
        </div>
      </Section>

      <CallToActionSimple
        id="call-to-action"
        headline="Ready to modernize financial spreading?"
        subheadline={
          <p>See how DecAltra can help your team produce faster, cleaner, and more explainable financial analysis.</p>
        }
        cta={
          <div className="flex items-center gap-4">
            <DemoRequestButton size="lg">Request a demo</DemoRequestButton>
            <PlainButtonLink href="/contact" size="lg">
              Contact us <ChevronIcon />
            </PlainButtonLink>
          </div>
        }
      />
    </>
  )
}
