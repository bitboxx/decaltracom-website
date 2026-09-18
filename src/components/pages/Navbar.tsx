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
          <div className="flex flex-col gap-6 lg:hidden">
            <NavbarLink href="/credit-decisioning">
              Credit Decisioning - Overview
            </NavbarLink>
            <div className="text-xs font-semibold uppercase tracking-[0.16em] text-mist-500">
              Modules
            </div>
            <NavbarLink href="/credit-decisioning/financial-spreading">
              Financial spreading
            </NavbarLink>
            <NavbarLink href="/credit-decisioning/analytics">
              Analytics
            </NavbarLink>
            <NavbarLink href="/credit-decisioning/memo">Memo</NavbarLink>
            <NavbarLink href="/about#about">About DecAltra</NavbarLink>
            <NavbarLink href="/about#why-decaltra">Why DecAltra</NavbarLink>
            <NavbarLink href="/about#team">The team</NavbarLink>
            <NavbarLink href="/contact">Contact us</NavbarLink>
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
              About us
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
