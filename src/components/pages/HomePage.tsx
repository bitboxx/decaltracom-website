import { HomepageHero } from '@/components/sections/homepage-hero';
import type { ReactNode } from 'react';

export default function HomePage({ children }: { children: ReactNode }) {
  return (
    <>
      {/* Hero */}
      <HomepageHero>{children}</HomepageHero>
    </>
  );
}
