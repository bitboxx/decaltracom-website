import {
  DemoRequestButton,
  PlainButtonLink,
} from '@/components/elements/button';
import { ChevronIcon } from '@/components/icons/chevron-icon';
import {
  NavbarLink,
  NavbarLogo,
  NavbarWithLinksActionsAndCenteredLogo,
} from '@/components/sections/navbar-with-links-actions-and-centered-logo';
import { type MouseEvent, useEffect, useRef, useState } from 'react';

export default function Navbar() {
  const [isCreditMenuOpen, setIsCreditMenuOpen] = useState(false);
  const [isAboutMenuOpen, setIsAboutMenuOpen] = useState(false);
  const creditMenuRef = useRef<HTMLDivElement>(null);
  const aboutMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target as Node;

      if (!creditMenuRef.current?.contains(target)) setIsCreditMenuOpen(false);
      if (!aboutMenuRef.current?.contains(target)) setIsAboutMenuOpen(false);
    };

    document.addEventListener('pointerdown', handlePointerDown);
    return () => document.removeEventListener('pointerdown', handlePointerDown);
  }, []);

  const handleMenuNavigation = (event: MouseEvent<HTMLAnchorElement>) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

    event.preventDefault();
    window.location.assign(event.currentTarget.href);
  };

  return (
    <NavbarWithLinksActionsAndCenteredLogo
      id="navbar"
      compactLinks={
        <>
          <a href="/credit-decisioning" className="hover:underline">Credit Decisioning</a>
          <a href="/insights-news" className="hover:underline">Insights &amp; News</a>
        </>
      }
      links={
        <>
          <div ref={creditMenuRef} className="relative hidden lg:block">
            <div className="relative">
              <button
                type="button"
                aria-controls="credit-decisioning-menu"
                aria-expanded={isCreditMenuOpen}
                className="inline-flex items-center gap-2 text-sm/7 font-medium text-mist-950 hover:text-mist-700"
                onClick={() => setIsCreditMenuOpen((isOpen) => !isOpen)}
                onKeyDown={(event) => {
                  if (event.key === 'Escape') setIsCreditMenuOpen(false);
                }}
              >
                Credit Decisioning
                <ChevronIcon
                  className={`size-3 transition-transform ${isCreditMenuOpen ? 'rotate-270' : 'rotate-90'}`}
                />
              </button>
              <div
                id="credit-decisioning-menu"
                hidden={!isCreditMenuOpen}
                className="absolute left-0 top-full z-20 mt-1 w-64 rounded-3xl border border-mist-200 bg-white p-2 shadow-xl"
                onPointerDown={(event) => event.stopPropagation()}
                onKeyDown={(event) => {
                  if (event.key === 'Escape') setIsCreditMenuOpen(false);
                }}
              >
                <a
                  href="/credit-decisioning"
                  onClick={handleMenuNavigation}
                  className="block rounded-2xl px-4 py-3 text-sm/6 font-medium text-mist-950 transition hover:bg-mist-100"
                >
                  Credit Decisioning - Overview
                </a>
                <div className="px-4 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-mist-500 underline decoration-mist-300 underline-offset-4">
                  Modules
                </div>
                <a
                  href="/credit-decisioning/financial-spreading"
                  onClick={handleMenuNavigation}
                  className="block rounded-2xl px-4 py-3 text-sm/6 font-medium text-mist-950 transition hover:bg-mist-100"
                >
                  Financial spreading
                </a>
                <a
                  href="/credit-decisioning/analytics"
                  onClick={handleMenuNavigation}
                  className="block rounded-2xl px-4 py-3 text-sm/6 font-medium text-mist-950 transition hover:bg-mist-100"
                >
                  Analytics
                </a>
                <a
                  href="/credit-decisioning/memo"
                  onClick={handleMenuNavigation}
                  className="block rounded-2xl px-4 py-3 text-sm/6 font-medium text-mist-950 transition hover:bg-mist-100"
                >
                  Memo
                </a>
              </div>
            </div>
          </div>
          <div className="hidden lg:block"><NavbarLink href="/insights-news">Insights &amp; News</NavbarLink></div>
          <div className="flex flex-col gap-6 lg:hidden">
            <section aria-labelledby="mobile-credit-heading">
              <h2 id="mobile-credit-heading" className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-mist-500">
                Credit Decisioning
              </h2>
              <a href="/credit-decisioning" className="flex min-h-11 items-center text-xl font-medium text-mist-950 hover:underline">
                Overview
              </a>
              <div className="mt-2 border-l border-mist-300 pl-4">
                <p className="mb-1 text-xs font-medium text-mist-500">Modules</p>
                <a href="/credit-decisioning/financial-spreading" className="flex min-h-11 items-center text-base text-mist-700 hover:underline">Financial spreading</a>
                <a href="/credit-decisioning/analytics" className="flex min-h-11 items-center text-base text-mist-700 hover:underline">Analytics</a>
                <a href="/credit-decisioning/memo" className="flex min-h-11 items-center text-base text-mist-700 hover:underline">Memo</a>
              </div>
            </section>
            <section aria-labelledby="mobile-insights-heading" className="border-t border-mist-200 pt-5">
              <h2 id="mobile-insights-heading" className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-mist-500">Insights &amp; News</h2>
              <a href="/insights-news" className="flex min-h-11 items-center text-xl font-medium text-mist-950 hover:underline">Insights &amp; News</a>
            </section>
            <section aria-labelledby="mobile-company-heading" className="border-t border-mist-200 pt-5">
              <h2 id="mobile-company-heading" className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-mist-500">Company</h2>
              <a href="/about#about" className="flex min-h-11 items-center text-xl font-medium text-mist-950 hover:underline">About DecAltra</a>
              <a href="/about#why-decaltra" className="flex min-h-11 items-center text-base text-mist-700 hover:underline">Why DecAltra</a>
              <a href="/about#team" className="flex min-h-11 items-center text-base text-mist-700 hover:underline">The team</a>
            </section>
            <div className="border-t border-mist-200 pt-3">

              <a href="/contact" className="flex min-h-11 items-center text-xl font-medium text-mist-950 hover:underline">Contact us</a>
            </div>
            <DemoRequestButton size="lg">Request a demo</DemoRequestButton>
          </div>
        </>
      }
      logo={
        <NavbarLogo href="/">
          <span className="text-xl font-display font-bold tracking-tight text-mist-950 dark:text-white">
            DecAltra
          </span>
        </NavbarLogo>
      }
      actions={
        <>
          <div
            ref={aboutMenuRef}
            className="relative max-sm:hidden"
          >
            <button
              type="button"
              aria-controls="about-menu"
              aria-expanded={isAboutMenuOpen}
              className="inline-flex items-center gap-2 text-sm/7 font-medium text-mist-950 hover:text-mist-700"
              onClick={() => setIsAboutMenuOpen((isOpen) => !isOpen)}
              onKeyDown={(event) => {
                if (event.key === 'Escape') setIsAboutMenuOpen(false)
              }}
            >
              Company
              <ChevronIcon
                className={`size-3 transition-transform ${isAboutMenuOpen ? 'rotate-270' : 'rotate-90'}`}
              />
            </button>
            <div
              id="about-menu"
              hidden={!isAboutMenuOpen}
              className="absolute right-0 top-full z-20 mt-1 w-56 rounded-3xl border border-mist-200 bg-white p-2 shadow-xl"
              onPointerDown={(event) => event.stopPropagation()}
              onKeyDown={(event) => {
                if (event.key === 'Escape') setIsAboutMenuOpen(false)
              }}
            >
              <a
                href="/about#about"
                onClick={handleMenuNavigation}
                className="block rounded-2xl px-4 py-3 text-sm/6 font-medium text-mist-950 transition hover:bg-mist-100"
              >
                About DecAltra
              </a>
              <a
                href="/about#why-decaltra"
                onClick={handleMenuNavigation}
                className="block rounded-2xl px-4 py-3 text-sm/6 font-medium text-mist-950 transition hover:bg-mist-100"
              >
                Why DecAltra
              </a>
              <a
                href="/about#team"
                onClick={handleMenuNavigation}
                className="block rounded-2xl px-4 py-3 text-sm/6 font-medium text-mist-950 transition hover:bg-mist-100"
              >
                The team
              </a>
            </div>
          </div>
          <PlainButtonLink href="/contact" className="max-sm:hidden">
            Contact us
          </PlainButtonLink>
          <DemoRequestButton className="max-sm:hidden">
            Request a demo
          </DemoRequestButton>
        </>
      }
    />
  );
}
