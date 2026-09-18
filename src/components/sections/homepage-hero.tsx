import { DemoRequestButton } from '@/components/elements/button';
import { Container } from '@/components/elements/container';
import type { ReactNode } from 'react';
import { PlatformCarousel } from './platform-carousel';

export function HomepageHero({ children }: { children: ReactNode }) {
  return (
    <section id="hero" aria-labelledby="hero-title" className="bg-mist-100">
      <Container className="grid items-start gap-12 pt-8 pb-15 min-[561px]:pt-10 min-[561px]:pb-20 lg:min-h-[580px] lg:grid-cols-2 lg:pt-[clamp(40px,4vw,60px)] xl:gap-16">
        <div className="min-w-0 min-[901px]:max-w-[600px]">
          <h1
            id="hero-title"
            className="m-0 max-w-[620px] font-display text-[clamp(30px,8.5vw,48px)] leading-[1.06] font-medium tracking-tight text-[#171b1d] lg:text-[clamp(40px,4.2vw,56px)]"
          >
            <span className="block">Beyond financial</span>{' '}
            <span className="block">decision making</span>
          </h1>
          <div className="mt-[31px] mb-[29px] max-w-[555px] space-y-3 text-lg leading-[1.5] tracking-[-0.02em] text-[#5c686d] min-[561px]:text-xl">
            <p>
              DecAltra empowers financial institutions to scale their
              decision-making processes and stay competitive
            </p>
            <p>
              Our adaptable platform uses AI to reduce manual work, maintains an
              evidence chain from raw information to final decisions, and keeps
              professionals in control
            </p>
          </div>
          <p className="mb-[29px] flex items-center gap-[11px] text-xs font-[750] tracking-[0.12em] text-[#171b1d] uppercase">
            <span
              aria-hidden="true"
              className="size-2 shrink-0 rounded-full bg-[#0a7e7d]"
            />
            Now available · Credit Decisioning
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <DemoRequestButton className="px-[22px]! py-4! text-[15px]! font-[650]!">
              Request a demo
            </DemoRequestButton>
            <a
              href="/credit-decisioning"
              className="text-[15px] font-[650] text-[#171b1d] hover:underline"
            >
              Explore Credit Decisioning{' '}
              <span
                aria-hidden="true"
                className="ml-1.5 text-[19px] text-[#0a7e7d]"
              >
                →
              </span>
            </a>
          </div>
        </div>
        <PlatformCarousel>{children}</PlatformCarousel>
      </Container>
    </section>
  );
}
