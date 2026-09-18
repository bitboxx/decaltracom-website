import { Eyebrow } from '@/components/elements/eyebrow';
import { CallToActionSimple } from '@/components/sections/call-to-action-simple';
import { HeroSimpleCentered } from '@/components/sections/hero-simple-centered';

type CreditModulePlaceholderPageProps = {
  title: string;
  summary: string;
};

export default function CreditModulePlaceholderPage({
  title,
  summary,
}: CreditModulePlaceholderPageProps) {
  return (
    <>
      <HeroSimpleCentered
        id="hero"
        eyebrow={<Eyebrow>Credit Decisioning</Eyebrow>}
        headline={title}
        subheadline={<p>{summary}</p>}
        subheadlineClassName="lg:max-w-none"
      />

      <CallToActionSimple
        id="coming-next"
        eyebrow="Module detail"
        headline="Detailed product content is coming next."
        subheadline={
          <p>
            This page is ready for product screenshots, capability detail, and
            customer workflow examples.
          </p>
        }
      />
    </>
  );
}
