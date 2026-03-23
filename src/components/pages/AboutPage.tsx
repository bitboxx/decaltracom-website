import { type ReactNode, useState } from 'react'
import { DemoRequestButton, PlainButtonLink } from '@/components/elements/button'
import { ChevronIcon } from '@/components/icons/chevron-icon'
import { BuildingLibraryIcon } from '@/components/icons/building-library-icon'
import { ChartLineIcon } from '@/components/icons/chart-line-icon'
import { CompassIcon } from '@/components/icons/compass-icon'
import { CpuIcon } from '@/components/icons/cpu-icon'
import { FingerprintIcon } from '@/components/icons/fingerprint-icon'
import { LightBulbIcon } from '@/components/icons/light-bulb-icon'
import { Section } from '@/components/elements/section'
import { CallToActionSimple } from '@/components/sections/call-to-action-simple'
import AboutSectionNav from '@/components/pages/AboutSectionNav'

type StorySection = {
  step: string
  eyebrow: string
  title: string
  icon: typeof BuildingLibraryIcon
  pictureClassName: string
  accentClassName: string
  content: ReactNode[]
  highlights?: string[]
  outcomes?: string[]
  closing?: string
}

const storySections: StorySection[] = [
  {
    step: '01',
    eyebrow: "Today's reality",
    title: 'Capital shapes the future of Europe',
    icon: BuildingLibraryIcon,
    pictureClassName:
      'bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.28),transparent_40%),linear-gradient(135deg,rgba(18,27,33,1),rgba(57,81,89,0.96)_52%,rgba(134,162,173,0.88))]',
    accentClassName: 'bg-white/15',
    content: [
      <>
        Every day, <strong>financial professionals decide where capital flows</strong> - to businesses that grow,
        infrastructure that connects societies, and innovations that move industries forward.
      </>,
      <>
        When capital reaches the right opportunity at the right time, economies become more productive and societies
        more resilient. But today,
        <br />
        <strong>
          the way many financial decisions are made has not kept pace with the complexity and speed of modern markets.
        </strong>
      </>,
      <>
        As a result, capital does not always move as quickly or as effectively as it could.{' '}
        <strong>Unlocking the financial decision making processes decides whether opportunities get realised or lost.</strong>
      </>,
    ],
    highlights: [
      'Information is fragmented across systems and sources',
      'Analysis remains heavily reliant on manual human input',
      'Financial decision processes are often slow, inconsistent, and difficult to scale',
    ],
  },
  {
    step: '02',
    eyebrow: 'The real challenge',
    title: 'The challenge is not a lack of data',
    icon: ChartLineIcon,
    pictureClassName:
      'bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.26),transparent_35%),linear-gradient(135deg,rgba(18,27,33,1),rgba(51,68,76,0.96)_45%,rgba(92,132,146,0.9))]',
    accentClassName: 'bg-[#cfe4ec]/25',
    content: [
      'Financial institutions have more information than ever before.',
      <>
        <strong>The real challenge is transforming data and information into high-quality decisions</strong>{' '}
        - quickly, consistently, and with full accountability.
      </>,
      'Financial professionals need better solutions to bring everything together and apply judgement with confidence. They need infrastructure designed for modern financial decision making.',
    ],
  },
  {
    step: '03',
    eyebrow: 'Our mission',
    title: 'The solution we work on every day',
    icon: CpuIcon,
    pictureClassName:
      'bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.22),transparent_38%),linear-gradient(145deg,rgba(20,29,36,1),rgba(44,72,84,0.94)_50%,rgba(84,121,138,0.88))]',
    accentClassName: 'bg-[#d0e0ea]/20',
    content: [
      <strong>DecAltra builds financial decision making infrastructure.</strong>,
      <strong>Our products integrate adaptive, explainable AI directly into the workflows where financial decisions are made.</strong>,
      'By connecting internal and external data, structuring analysis, and supporting professional judgement, we enable teams to move faster without compromising quality or governance.',
      'DecAltra does not replace human expertise. It strengthens it.',
    ],
  },
  {
    step: '04',
    eyebrow: 'Built for Europe',
    title: 'What makes us different',
    icon: FingerprintIcon,
    pictureClassName:
      'bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.24),transparent_38%),linear-gradient(145deg,rgba(22,31,38,1),rgba(47,71,81,0.96)_48%,rgba(132,152,164,0.82))]',
    accentClassName: 'bg-[#e3edf2]/25',
    content: [
      <>
        DecAltra is <strong>European</strong> by design.
      </>,
      <>
        Our products are built to be <strong>customer-centric</strong>, AI-supported decision modules that{' '}
        <strong>adapt</strong> to your governance frameworks. The outputs are <strong>explainable</strong>, our
        architecture is <strong>open</strong>, and our AI supports <strong>human judgement</strong> rather than replacing
        accountability.
      </>,
      <>
        We are <strong>impact driven</strong>.
      </>,
    ],
    outcomes: [
      'Faster decision cycles',
      'Higher-quality analysis',
      'Greater consistency across teams',
      'Transparent, explainable decisions',
    ],
  },
  {
    step: '05',
    eyebrow: 'Purpose',
    title: 'Improve how capital is provided',
    icon: LightBulbIcon,
    pictureClassName:
      'bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.22),transparent_42%),linear-gradient(135deg,rgba(23,33,40,1),rgba(64,88,98,0.95)_50%,rgba(146,168,177,0.82))]',
    accentClassName: 'bg-[#f3f7f9]/25',
    content: [
      <>
        Our purpose is simple but powerful: <strong>Improve how capital is provided.</strong>
      </>,
      'When financial professionals can make better decisions faster, capital reaches opportunity sooner.',
    ],
    outcomes: ['Businesses grow', 'Infrastructure develops', 'Innovation accelerates'],
    closing: 'And the entire economy becomes more productive.',
  },
  {
    step: '06',
    eyebrow: 'Vision',
    title: 'A more productive Europe',
    icon: CompassIcon,
    pictureClassName:
      'bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.24),transparent_42%),linear-gradient(135deg,rgba(20,28,35,1),rgba(55,76,87,0.95)_48%,rgba(107,141,156,0.84))]',
    accentClassName: 'bg-[#dce9ef]/20',
    content: [
      "We believe in a future where Europe's capital flows more effectively to the opportunities that matter most.",
      'A future where financial professionals are empowered by technology that enhances their expertise, strengthens governance, and unlocks better decisions.',
      <strong>A future with a more productive Europe where capital reaches opportunity faster.</strong>,
      'This is the future DecAltra is building.',
    ],
  },
]

export default function AboutPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const activeSection = storySections[activeIndex ?? 0]

  return (
    <>
      <AboutSectionNav />
      <section id="about" className="scroll-mt-24 pt-8 pb-16">
        <div className="mx-auto flex w-full max-w-2xl flex-col gap-10 px-6 md:max-w-3xl lg:max-w-7xl lg:px-10">
          <div className="flex max-w-5xl flex-col gap-6">
            <div className="flex flex-col gap-2">
              <p className="text-sm/7 font-semibold text-mist-700">About DecAltra</p>
              <h1 className="font-display text-[2rem]/10 font-medium tracking-tight text-mist-950 sm:text-5xl/14 lg:whitespace-nowrap">
                Financial decision <br className="sm:hidden" />
                making infrastructure
              </h1>
            </div>
            <p className="text-lg/8 text-mist-700">
              Learn about our story and what drives us through the sequence below
            </p>
          </div>

          <div className="space-y-3 lg:hidden">
            {storySections.map((section, index) => {
              const isActive = index === activeIndex

              return (
                <article
                  key={section.step}
                  className={`overflow-hidden rounded-[1.75rem] border transition duration-300 ${
                    isActive ? 'border-mist-950 bg-white shadow-xl shadow-mist-950/10' : 'border-mist-200 bg-white shadow-sm'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                    className="flex w-full items-center justify-between gap-4 p-4 text-left"
                  >
                    <div className="min-w-0">
                      <div className="flex items-center gap-3">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-mist-200 bg-mist-100 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-mist-600">
                          {section.step}
                        </span>
                        <p className="text-sm/6 font-semibold uppercase tracking-[0.16em] text-mist-500">
                          {section.eyebrow}
                        </p>
                      </div>
                      <h2 className="mt-3 font-display text-xl/7 font-medium tracking-tight text-mist-950">
                        {section.title}
                      </h2>
                    </div>
                    <span className="shrink-0 text-xl leading-none text-mist-500">{isActive ? '−' : '+'}</span>
                  </button>

                  {isActive ? (
                    <div className="border-t border-mist-200 px-4 pb-5 pt-4 text-base/8 text-mist-700">
                      <div className="space-y-5">
                        {(section.highlights ? section.content.slice(0, -1) : section.content).map((paragraph, paragraphIndex) => (
                          <p key={`${section.step}-mobile-paragraph-${paragraphIndex}`}>{paragraph}</p>
                        ))}

                        {section.highlights ? (
                          <div className="grid gap-3 sm:grid-cols-3">
                            {section.highlights.map((highlight) => (
                              <div
                                key={highlight}
                                className="flex min-h-24 items-center justify-center rounded-2xl border border-mist-200 bg-mist-50 px-4 py-3 text-center text-sm/6 font-medium text-mist-950"
                              >
                                {highlight}
                              </div>
                            ))}
                          </div>
                        ) : null}

                        {section.highlights ? <p>{section.content.at(-1)}</p> : null}

                        {section.outcomes ? (
                          <div className="grid gap-3 sm:grid-cols-2">
                            {section.outcomes.map((outcome) => (
                              <div
                                key={outcome}
                                className="rounded-2xl border border-mist-200 bg-mist-50 px-4 py-3 text-sm/6 font-medium text-mist-950"
                              >
                                {outcome}
                              </div>
                            ))}
                          </div>
                        ) : null}

                        {section.closing ? <p className="text-base/8 font-bold text-mist-950">{section.closing}</p> : null}
                      </div>
                    </div>
                  ) : null}
                </article>
              )
            })}
          </div>

          <div className="hidden gap-8 lg:grid lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <div className="space-y-3">
                {storySections.map((section, index) => {
                  const isActive = index === activeIndex

                  return (
                    <button
                      key={section.step}
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      className={`group relative flex w-full overflow-hidden rounded-[1.75rem] border p-4 text-left transition duration-300 ${
                        isActive
                          ? 'border-mist-950 shadow-2xl shadow-mist-950/20 ring-1 ring-mist-950/10'
                          : 'border-mist-200 shadow-sm hover:-translate-y-0.5 hover:border-mist-400 hover:shadow-lg'
                      } ${section.pictureClassName}`}
                      style={{ minHeight: '102px' }}
                    >
                      {isActive ? <div className="absolute inset-y-4 left-0 w-1 rounded-r-full bg-white/85" /> : null}
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(9,15,19,0.38))]" />
                      <div className="absolute right-5 top-5">
                        <span
                          className={`rounded-full border px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.18em] ${
                            isActive
                              ? 'border-white/30 bg-white text-mist-950 shadow-md'
                              : 'border-white/20 bg-white/8 text-white/85'
                          }`}
                        >
                          {section.step}
                        </span>
                      </div>
                      <div className="relative flex w-full items-start gap-4">
                        <div className="max-w-[19rem]">
                          <p className="text-sm/6 font-semibold uppercase tracking-[0.16em] text-white/70">
                            {section.eyebrow}
                          </p>
                          <h2 className="mt-1.5 font-display text-xl/7 font-medium tracking-tight text-white lg:whitespace-nowrap">
                            {section.title}
                          </h2>
                        </div>
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>

            <article className="rounded-[2rem] border border-mist-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="border-b border-mist-200 pb-6">
                <div className="flex items-start justify-between gap-4">
                  <p className="text-sm/6 font-semibold uppercase tracking-[0.16em] text-mist-500">
                    {activeSection.eyebrow}
                  </p>
                  <span className="shrink-0 rounded-full border border-mist-200 bg-mist-100 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-mist-600">
                    Step {activeSection.step}
                  </span>
                </div>
                <h2 className="mt-2 font-display text-3xl/9 font-medium tracking-tight text-mist-950 lg:whitespace-nowrap">
                  {activeSection.title}
                </h2>
              </div>

              <div className="space-y-5 pt-6 text-base/8 text-mist-700">
                {(activeSection.highlights ? activeSection.content.slice(0, -1) : activeSection.content).map((paragraph, paragraphIndex) => (
                  <p key={`${activeSection.step}-desktop-paragraph-${paragraphIndex}`}>{paragraph}</p>
                ))}

                {activeSection.highlights ? (
                  <div className="grid gap-3 sm:grid-cols-3">
                    {activeSection.highlights.map((highlight) => (
                      <div
                        key={highlight}
                        className="flex min-h-24 items-center justify-center rounded-2xl border border-mist-200 bg-mist-50 px-4 py-3 text-center text-sm/6 font-medium text-mist-950"
                      >
                        {highlight}
                      </div>
                    ))}
                  </div>
                ) : null}

                {activeSection.highlights ? <p>{activeSection.content.at(-1)}</p> : null}

                {activeSection.outcomes ? (
                  <div className="grid gap-3 sm:grid-cols-2">
                    {activeSection.outcomes.map((outcome) => (
                      <div
                        key={outcome}
                        className="rounded-2xl border border-mist-200 bg-mist-50 px-4 py-3 text-sm/6 font-medium text-mist-950"
                      >
                        {outcome}
                      </div>
                    ))}
                  </div>
                ) : null}

                {activeSection.closing ? <p className="text-base/8 font-bold text-mist-950">{activeSection.closing}</p> : null}
              </div>
            </article>
          </div>
        </div>
      </section>

      <Section
        id="team"
        eyebrow="The team"
        headline="The people behind DecAltra"
        headerClassName="max-w-4xl"
        subheadline={
          <p>
            DecAltra is led by a focused founding team combining strategic vision and technical execution
          </p>
        }
      >
        <div className="grid gap-4 md:grid-cols-2">
          <article className="rounded-[1.75rem] border border-mist-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-3xl border border-mist-200 bg-mist-100 font-display text-lg font-medium text-mist-700">
                MB
              </div>
              <div>
                <h3 className="font-display text-2xl/8 font-medium tracking-tight text-mist-950">Michael Bolle</h3>
                <p className="mt-1 text-sm/6 font-semibold uppercase tracking-[0.14em] text-mist-500">CEO</p>
              </div>
            </div>
            <p className="mt-4 text-sm/7 text-mist-700">
              Leads DecAltra&apos;s overall direction, commercial development, and the mission to improve how financial
              decisions are made across European institutions.
            </p>
          </article>

          <article className="rounded-[1.75rem] border border-mist-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-3xl border border-mist-200 bg-mist-100 font-display text-lg font-medium text-mist-700">
                MT
              </div>
              <div>
                <h3 className="font-display text-2xl/8 font-medium tracking-tight text-mist-950">
                  Martin Tedjawardhana
                </h3>
                <p className="mt-1 text-sm/6 font-semibold uppercase tracking-[0.14em] text-mist-500">CTO</p>
              </div>
            </div>
            <p className="mt-4 text-sm/7 text-mist-700">
              Leads the technical architecture behind DecAltra, shaping the platform, AI systems, and integration
              layer that make governed financial decision making possible.
            </p>
          </article>
        </div>
      </Section>

      <CallToActionSimple
        id="call-to-action"
        headline="Want to learn more?"
        subheadline={
          <p>
            See how DecAltra can transform your financial decision making workflows to be faster and of
            higher-quality with adaptive, explainable AI.
          </p>
        }
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
