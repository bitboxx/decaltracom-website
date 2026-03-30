import { type ReactNode } from 'react'
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
import { HeroAboutWithPhoto } from '@/components/sections/hero-about-with-photo'
import AboutSectionNav from '@/components/pages/AboutSectionNav'
import { Feature106, type Feature106Item } from '@/components/shadcnblocks/feature106'

type StorySection = {
  step: string
  eyebrow: string
  title: string
  icon: typeof BuildingLibraryIcon
  pictureClassName: string
  accentClassName: string
  content: ReactNode[]
  highlights?: string[]
  outcomes?: ReactNode[]
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
    outcomes: [
      <>
        Businesses
        <br />
        grow
      </>,
      <>
        Infrastructure
        <br />
        develops
      </>,
      <>
        Innovation
        <br />
        accelerates
      </>,
    ],
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
  return (
    <>
      <AboutSectionNav />
      <HeroAboutWithPhoto
        id="about"
        className="scroll-mt-24"
        eyebrow="About DecAltra"
        headline={<>Financial decision <br className="sm:hidden" />making infrastructure</>}
        subheadline="Learn about our story and what drives us through the sequence below"
        photo={<img src="/img/originals/matthias-groeneveld-oeRnTQQKRho-unsplash-cropped.jpg" alt="European cityscape" />}
      />
      <Feature106
        features={storySections.map<Feature106Item>((section, index) => ({
          id: index + 1,
          header: section.eyebrow,
          excerpt: section.title,
          content: (
            <>
              <div className="border-b border-mist-200 pb-5">
                <h2 className="text-2xl/8 font-medium text-mist-950">{section.title}</h2>
              </div>
              <div className="space-y-4">
                {(section.highlights ? section.content.slice(0, -1) : section.content).map((paragraph, pIdx) => (
                  <p key={pIdx}>{paragraph}</p>
                ))}
              </div>
              {section.highlights ? (
                <div className="grid gap-3 sm:grid-cols-3">
                  {section.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="flex min-h-24 items-center justify-center rounded-2xl border border-mist-200 bg-mist-50 px-4 py-3 text-center text-base/7 font-medium text-mist-950"
                    >
                      {highlight}
                    </div>
                  ))}
                </div>
              ) : null}
              {section.highlights ? <p>{section.content.at(-1)}</p> : null}
              {section.outcomes ? (
                <div className="grid gap-3 sm:grid-cols-3">
                  {section.outcomes.map((outcome) => (
                    <div
                      key={outcome}
                      className="rounded-2xl border border-mist-200 bg-mist-50 px-4 py-3 text-center text-base/7 font-medium text-mist-950"
                    >
                      {outcome}
                    </div>
                  ))}
                </div>
              ) : null}
              {section.closing ? (
                <p className="font-bold text-mist-950">{section.closing}</p>
              ) : null}
            </>
          ),
        }))}
      />
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
