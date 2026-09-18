import { type ReactNode } from 'react'
import { DemoRequestButton } from '@/components/elements/button'
import { Container } from '@/components/elements/container'
import { BuildingLibraryIcon } from '@/components/icons/building-library-icon'
import { ChartLineIcon } from '@/components/icons/chart-line-icon'
import { CompassIcon } from '@/components/icons/compass-icon'
import { Document2StackedIcon } from '@/components/icons/document-2-stacked-icon'
import { CpuIcon } from '@/components/icons/cpu-icon'
import { FingerprintIcon } from '@/components/icons/fingerprint-icon'
import { KeyIcon } from '@/components/icons/key-icon'
import { LightBulbIcon } from '@/components/icons/light-bulb-icon'
import { SlidersIcon } from '@/components/icons/sliders-icon'
import { SparklesIcon } from '@/components/icons/sparkles-icon'
import { Section } from '@/components/elements/section'
import { HeroAboutWithPhoto } from '@/components/sections/hero-about-with-photo'
import AboutSectionNav from '@/components/pages/AboutSectionNav'
import { Feature106, type Feature106Item } from '@/components/shadcnblocks/feature106'
import styles from './about-page.module.css'

const benefits = [
  {
    icon: SlidersIcon,
    title: 'Built around your institution',
    description: 'Adapt the platform to your processes with your data and tools',
  },
  {
    icon: Document2StackedIcon,
    title: 'Confidence with every decision',
    description: 'Trace every decision back through the evidence chain',
  },
  {
    icon: SparklesIcon,
    title: 'AI assistance, human authority',
    description: 'Let AI handle the groundwork while professionals make the decisions',
  },
  {
    icon: KeyIcon,
    title: 'Control who sees and does what',
    description: 'Give every team and person the right level of access',
  },
  {
    icon: ChartLineIcon,
    title: 'Visibility and follow-through',
    description: 'See what needs attention and keep decisions moving forward',
  },
  {
    icon: CompassIcon,
    title: 'Stay ahead',
    description: 'Make faster, higher-quality decisions and stay competitive',
  },
]

const founders = [
  {
    name: 'Michael Bolle',
    portraitPosition: 'left',
    role: 'Co-Founder | CEO',
    expertise: 'Financial services • Credit & risk • Strategy • Product',
    experience: '20+ years building and commercialising credit solutions',
    background: 'S&P Global Market Intelligence • Scope Ratings',
    linkedin: 'https://www.linkedin.com/in/michael-bolle/',
  },
  {
    name: 'Martin Tedjawardhana',
    portraitPosition: 'right',
    role: 'Co-Founder | CTO',
    expertise: 'Software engineering • AI • Architecture • Data',
    experience: '20+ years building technology platforms and infrastructure',
    background: 'Achmea • Lloyds Banking Group • Signal AI',
    linkedin: 'https://www.linkedin.com/in/martin-ted/',
  },
]

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
    title: 'Financial decisions shape Europe’s future',
    icon: BuildingLibraryIcon,
    pictureClassName:
      'bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.28),transparent_40%),linear-gradient(135deg,rgba(18,27,33,1),rgba(57,81,89,0.96)_52%,rgba(134,162,173,0.88))]',
    accentClassName: 'bg-white/15',
    content: [
      'Every day, financial professionals decide which businesses grow, which infrastructure gets built and which innovations move forward.',
      'When well-informed decisions happen sooner, capital reaches opportunity faster. That matters for financial institutions and for the economies they serve.',
    ],
  },
  {
    step: '02',
    eyebrow: 'The real challenge',
    title: 'Decision making needs to scale',
    icon: ChartLineIcon,
    pictureClassName:
      'bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.26),transparent_35%),linear-gradient(135deg,rgba(18,27,33,1),rgba(51,68,76,0.96)_45%,rgba(92,132,146,0.9))]',
    accentClassName: 'bg-[#cfe4ec]/25',
    content: [
      'More information does not automatically create more capacity. Fragmented data and manual preparation make it difficult for teams to handle growing workloads consistently.',
      'Financial institutions need to scale their decision processes without losing the quality of their analysis or control over how decisions are made.',
    ],
    highlights: [
      'Fragmented information',
      'Manual preparation',
      'Disconnected workflows',
    ],
  },
  {
    step: '03',
    eyebrow: 'Our mission',
    title: 'Intelligent decision infrastructure',
    icon: CpuIcon,
    pictureClassName:
      'bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.22),transparent_38%),linear-gradient(145deg,rgba(20,29,36,1),rgba(44,72,84,0.94)_50%,rgba(84,121,138,0.88))]',
    accentClassName: 'bg-[#d0e0ea]/20',
    content: [
      'DecAltra builds intelligent decision infrastructure that connects information, analysis and professional judgement.',
      'AI handles more of the preparation while connected modules carry the work forward. An evidence chain links source information to the final decision so professionals can review with confidence and remain in control.',
    ],
  },
  {
    step: '04',
    eyebrow: 'Our approach',
    title: 'Your standards at scale',
    icon: FingerprintIcon,
    pictureClassName:
      'bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.24),transparent_38%),linear-gradient(145deg,rgba(22,31,38,1),rgba(47,71,81,0.96)_48%,rgba(132,152,164,0.82))]',
    accentClassName: 'bg-[#e3edf2]/25',
    content: [
      'European by design, DecAltra adapts to your institution’s processes and governance requirements.',
      'Our open architecture connects with your data and tools. Explainable AI supports human judgement and helps teams apply your standards consistently as decision volumes grow.',
    ],
    outcomes: [
      'Faster decision cycles',
      'Higher-quality analysis',
      'Consistency at scale',
      'Traceable decisions',
    ],
  },
  {
    step: '05',
    eyebrow: 'Our purpose',
    title: 'Help capital reach opportunity sooner',
    icon: LightBulbIcon,
    pictureClassName:
      'bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.22),transparent_42%),linear-gradient(135deg,rgba(23,33,40,1),rgba(64,88,98,0.95)_50%,rgba(146,168,177,0.82))]',
    accentClassName: 'bg-[#f3f7f9]/25',
    content: [
      'We help financial professionals spend less time preparing information and more time understanding the opportunities in front of them.',
      'Better decisions made sooner can put capital to work where it matters.',
    ],
    outcomes: [
      'Businesses grow',
      'Infrastructure develops',
      'Innovation moves forward',
    ],
  },
  {
    step: '06',
    eyebrow: 'Our vision',
    title: 'Stay ahead',
    icon: CompassIcon,
    pictureClassName:
      'bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.24),transparent_42%),linear-gradient(135deg,rgba(20,28,35,1),rgba(55,76,87,0.95)_48%,rgba(107,141,156,0.84))]',
    accentClassName: 'bg-[#dce9ef]/20',
    content: [
      'We see a future where financial institutions build on what they know instead of starting again with every decision.',
      'Connected decision records preserve knowledge that teams can draw on over time. As institutional intelligence grows, it helps professionals recognise patterns and respond to new opportunities with greater confidence.',
      'Our vision is a more productive Europe, supported by financial institutions equipped to adapt, scale and stay ahead.',
    ],
  },
]

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <AboutSectionNav />
      <HeroAboutWithPhoto
        id="about"
        className={styles.hero}
        eyebrow="About DecAltra"
        headline="Beyond financial decision making"
        subheadline="Intelligent decision infrastructure that helps financial institutions scale and stay ahead"
        photoClassName={styles.heroPhoto}
        photo={<img src="/img/originals/matthias-groeneveld-oeRnTQQKRho-unsplash-cropped.jpg" alt="Aerial view of a European road junction and surrounding green spaces" />}
      />
      <Feature106
        id="our-story"
        className={styles.section}
        features={storySections.map<Feature106Item>((section, index) => ({
          id: index + 1,
          header: section.eyebrow,
          excerpt: section.title,
          content: (
            <>
              <div className="space-y-4">
                {section.content.map((paragraph, pIdx) => (
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
              {section.outcomes ? (
                <div className={`grid gap-3 ${section.outcomes.length === 4 ? 'sm:grid-cols-2' : 'sm:grid-cols-3'}`}>
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
        id="why-decaltra"
        className={styles.section}
        eyebrow="Why DecAltra"
        headline="Financial decision-making infrastructure, built for control"
        headerClassName="max-w-none"
        subheadline={
          <p>
            DecAltra brings governed data, configurable processes, AI assistance,
            and human accountability into one connected platform
          </p>
        }
      >
        <div className={styles.benefits}>
          {benefits.map(({ icon: Icon, title, description }) => (
            <article key={title} className={styles.benefit}>
              <span className={styles.benefitIcon}><Icon /></span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </Section>
      <Section
        id="team"
        className={`${styles.section} ${styles.teamSection}`}
        eyebrow="The team"
        headline="Built by people who understand credit decision processes and technology"
        headerClassName="max-w-none"
      >
        <div className={styles.teamGrid}>
          {founders.map(founder => (
            <article key={founder.name} className={styles.teamCard}>
              <div className={styles.teamIdentity}>
                <div>
                  <h3 className={styles.teamName}>{founder.name}</h3>
                  <p className={styles.teamRole}>{founder.role}</p>
                </div>
                <div className={styles.teamPortrait}>
                  <img
                    src="/img/team/decaltra-founders-portraits.png"
                    alt={`Portrait of ${founder.name}`}
                    width={104}
                    height={104}
                    loading="lazy"
                    style={{ objectPosition: founder.portraitPosition }}
                  />
                </div>
              </div>
              <div className={styles.teamBio}>
                <p className={styles.teamExpertise}>{founder.expertise}</p>
                <p className={styles.teamExperience}>{founder.experience}</p>
                <p className={styles.teamBackground}>{founder.background}</p>
              </div>
              <a
                href={founder.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.profileLink}
                aria-label={`View ${founder.name} on LinkedIn (opens in a new tab)`}
              >
                View LinkedIn <span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </div>
      </Section>

      <section
        id="call-to-action"
        aria-labelledby="about-closing-title"
        className={`${styles.section} ${styles.closingSection}`}
      >
        <Container>
          <div className={styles.closing}>
            <div className={styles.closingCopy}>
              <h2 id="about-closing-title">Interested?</h2>
              <p>
                See how DecAltra can help your institution make better-informed decisions
                faster and scale with confidence
              </p>
            </div>
            <div className={styles.closingActions}>
              <DemoRequestButton className={styles.demo}>
                Request a demo
              </DemoRequestButton>
              <a className={styles.contact} href="/contact">
                Contact us <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}
