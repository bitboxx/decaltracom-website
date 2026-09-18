import { useEffect, useState } from 'react';

const sections = [
  { id: 'hero', label: 'Credit Decisioning' },
  { id: 'benefits', label: 'Cross-module benefits' },
  { id: 'connected', label: 'Connected workflow' },
  { id: 'product-architecture', label: 'Modules and Foundation' },
  { id: 'call-to-action', label: 'Interested?' },
] as const;

export default function CreditDecisioningSectionNav() {
  const [activeSection, setActiveSection] =
    useState<(typeof sections)[number]['id']>('hero');

  useEffect(() => {
    const updateActiveSection = () => {
      const scrollPadding =
        Number.parseFloat(
          getComputedStyle(document.documentElement).scrollPaddingTop
        ) || 0;
      let currentSection: (typeof sections)[number]['id'] = sections[0].id;

      // Match each anchor's landing position so short sections keep their own dot.
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (!element) continue;
        const scrollMargin =
          Number.parseFloat(getComputedStyle(element).scrollMarginTop) || 0;
        if (
          element.getBoundingClientRect().top <=
          scrollPadding + scrollMargin + 2
        ) {
          currentSection = section.id;
        }
      }

      if (
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 2
      ) {
        currentSection = sections[sections.length - 1].id;
      }
      setActiveSection(currentSection);
    };

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection);

    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed right-6 top-1/2 z-[5] hidden -translate-y-1/2 lg:block">
      <nav
        aria-label="Credit Decisioning sections"
        className="pointer-events-auto flex flex-col items-center gap-3 rounded-full border border-mist-200 bg-white/78 px-2 py-3 shadow-sm backdrop-blur"
      >
        {sections.map(section => {
          const isActive = activeSection === section.id;

          return (
            <a
              key={section.id}
              href={`#${section.id}`}
              aria-label={section.label}
              aria-current={isActive ? 'location' : undefined}
              title={section.label}
              className="group flex items-center"
              onClick={event => {
                event.preventDefault();
                setActiveSection(section.id);
                document.getElementById(section.id)?.scrollIntoView({
                  behavior: window.matchMedia(
                    '(prefers-reduced-motion: reduce)'
                  ).matches
                    ? 'auto'
                    : 'smooth',
                  block: 'start',
                });
                window.history.replaceState(null, '', `#${section.id}`);
              }}
            >
              <span
                className={`block rounded-full border transition ${
                  isActive
                    ? 'h-3 w-3 border-mist-950 bg-mist-950'
                    : 'h-2.5 w-2.5 border-mist-400 bg-white hover:h-3 hover:w-3 hover:border-mist-600'
                }`}
              />
            </a>
          );
        })}
      </nav>
    </div>
  );
}
