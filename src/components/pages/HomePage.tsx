import { DemoRequestButton, PlainButtonLink } from '@/components/elements/button'
import { ChevronIcon } from '@/components/icons/chevron-icon'
import { BuildingLibraryIcon } from '@/components/icons/building-library-icon'
import { ChartLineIcon } from '@/components/icons/chart-line-icon'
import { CpuIcon } from '@/components/icons/cpu-icon'
import { FingerprintIcon } from '@/components/icons/fingerprint-icon'
import { LightBulbIcon } from '@/components/icons/light-bulb-icon'
import { SlidersIcon } from '@/components/icons/sliders-icon'
import { CallToActionSimple } from '@/components/sections/call-to-action-simple'
import { Feature, FeaturesThreeColumn } from '@/components/sections/features-three-column'
import { HeroSimpleCentered } from '@/components/sections/hero-simple-centered'
import { ProductCompositionSection } from '@/components/sections/product-composition-section'

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <HeroSimpleCentered
        id="hero"
        headline="Beyond financial decision making"
        subheadline={
          <p>
            We empower financial professionals to make faster, higher-quality decisions
            <br className="hidden sm:block" /> by integrating adaptive, explainable AI directly into their workflows
          </p>
        }
        cta={
          <div className="flex items-center justify-center">
            <DemoRequestButton size="lg">
              Request a demo
            </DemoRequestButton>
          </div>
        }
      />
      {/* Product composition */}
      <ProductCompositionSection id="product-architecture" className="pt-6 pb-0" />
      {/* Features */}
      <FeaturesThreeColumn
        id="features"
        eyebrow="Why DecAltra"
        headline="Built for European financial institutions"
        headerClassName="max-w-4xl"
        subheadline={
          <p>
            DecAltra is not a generic AI layer added on top of some data. We provide financial decision making
            infrastructure that is needed for the current realities of European financial markets
          </p>
        }
        features={
          <>
            <Feature
              icon={<BuildingLibraryIcon />}
              headline="European by design"
              subheadline={
                <p>Built with European cloud and AI partners, we keep client data in Europe and aligned with the regulatory expectations of European institutions</p>
              }
            />
            <Feature
              icon={<SlidersIcon />}
              headline="Customer centric"
              subheadline={
                <p>AI-supported modules that can be adapted to your governance frameworks - not the other way around</p>
              }
            />
            <Feature
              icon={<FingerprintIcon />}
              headline="Explainable AI"
              subheadline={
                <p>Every recommendation comes with transparent reasoning that users, auditors and regulators can review</p>
              }
            />
            <Feature
              icon={<LightBulbIcon />}
              headline="Human-led decisions"
              subheadline={
                <p>Our AI agents support judgment, they never replace accountability. You remain in control of the decisions</p>
              }
            />
            <Feature
              icon={<CpuIcon />}
              headline="Open architecture"
              subheadline={
                <p>Integrate internal and external data sources seamlessly into a unified decision workflow</p>
              }
            />
            <Feature
              icon={<ChartLineIcon />}
              headline="Impact-driven"
              subheadline={
                <p>Measurable improvements in speed, quality, and consistency of financial decisions</p>
              }
            />
          </>
        }
      />
      {/* Call To Action */}
      <CallToActionSimple
        id="call-to-action"
        headline="Ready to accelerate your financial decisions?"
        subheadline={
          <p>
            See how DecAltra can transform your financial decision making workflows to be faster and of higher-quality
            with adaptive, explainable AI.
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
