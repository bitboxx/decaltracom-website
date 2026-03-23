import { useEffect, useState } from 'react'

const sections = [
  { id: 'about', label: 'About DecAltra' },
  { id: 'team', label: 'The team' },
  { id: 'call-to-action', label: 'Want to learn more?' },
] as const

export default function AboutSectionNav() {
  const [activeSection, setActiveSection] = useState<(typeof sections)[number]['id']>('about')

  useEffect(() => {
    const elements = sections
      .map((section) => document.getElementById(section.id))
      .filter((element): element is HTMLElement => element instanceof HTMLElement)

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((entryA, entryB) => entryA.boundingClientRect.top - entryB.boundingClientRect.top)

        if (visibleEntries.length > 0) {
          setActiveSection(visibleEntries[0].target.id as (typeof sections)[number]['id'])
        }
      },
      {
        rootMargin: '-25% 0px -55% 0px',
        threshold: [0.1, 0.3, 0.6],
      },
    )

    for (const element of elements) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <div className="pointer-events-none fixed right-6 top-1/2 z-[5] hidden -translate-y-1/2 lg:block">
      <nav className="pointer-events-auto flex flex-col items-center gap-3 rounded-full border border-mist-200 bg-white/78 px-2 py-3 shadow-sm backdrop-blur">
        {sections.map((section) => {
          const isActive = activeSection === section.id

          return (
            <a
              key={section.id}
              href={`#${section.id}`}
              aria-label={section.label}
              title={section.label}
              className="group flex items-center"
            >
              <span
                className={`block rounded-full border transition ${
                  isActive
                    ? 'h-3 w-3 border-mist-950 bg-mist-950'
                    : 'h-2.5 w-2.5 border-mist-400 bg-white hover:h-3 hover:w-3 hover:border-mist-600'
                }`}
              />
            </a>
          )
        })}
      </nav>
    </div>
  )
}
