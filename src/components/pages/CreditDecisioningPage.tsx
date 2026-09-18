import { DemoRequestButton } from '@/components/elements/button';
import CreditDecisioningSectionNav from '@/components/pages/CreditDecisioningSectionNav';
import { CreditDecisioningBanner } from '@/components/sections/credit-decisioning-banner';
import { HeroSimpleCentered } from '@/components/sections/hero-simple-centered';
import { ProductCompositionSection } from '@/components/sections/product-composition-section';
import styles from './credit-decisioning-cta.module.css';

export default function CreditDecisioningPage() {
  return (
    <>
      <CreditDecisioningSectionNav />
      <HeroSimpleCentered
        id="hero"
        className="pt-16 pb-4"
        headline="Stay in control of your credit decision process"
        headlineClassName="max-w-7xl"
      />

      <CreditDecisioningBanner />

      <ProductCompositionSection id="product-architecture" className="pt-6 pb-0" />

      <section
        id="call-to-action"
        aria-labelledby="credit-decisioning-closing-title"
        className={styles.closing}
      >
        <div className={styles.copy}>
          <h2 id="credit-decisioning-closing-title" className={styles.heading}>
            Interested?
          </h2>
          <p>
            Learn how DecAltra's intelligent decision infrastructure could enable
            you to stay ahead.
          </p>
        </div>
        <div className={styles.actions}>
          <DemoRequestButton className={styles.demo}>
            Request a demo
          </DemoRequestButton>
          <a className={styles.contact} href="/contact">
            Contact us{' '}
            <span className={styles.arrow} aria-hidden="true">→</span>
          </a>
        </div>
      </section>
    </>
  );
}
