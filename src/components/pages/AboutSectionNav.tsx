import { useEffect, useState } from 'react'

const sections = [
  { id: 'about', label: 'About DecAltra' },
  { id: 'our-story', label: 'Our story' },
  { id: 'why-decaltra', label: 'Why DecAltra' },
  { id: 'team', label: 'The team' },
  { id: 'call-to-action', label: 'Interested?' },
] as const

export default function AboutSectionNav() {
  const [activeSection, setActiveSection] = useState<(typeof sections)[number]['id']>('about')

  useEffect(() => {
    const updateActiveSection = () => {
      const scrollPadding = Number.parseFloat(
        window.getComputedStyle(document.documentElement).scrollPaddingTop,
      ) || 0
      let currentSection: (typeof sections)[number]['id'] = sections[0].id

      // Use the same offset as anchor navigation, not the nearest section midpoint.
      for (const section of sections) {
        const element = document.getElementById(section.id)
        if (!element) continue
        const scrollMargin = Number.parseFloat(window.getComputedStyle(element).scrollMarginTop) || 0
        if (element.getBoundingClientRect().top <= scrollPadding + scrollMargin + 2) {
          currentSection = section.id
        }
      }

      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) {
        currentSection = sections[sections.length - 1].id
      }
      setActiveSection(currentSection)
    }

    updateActiveSection()
    window.addEventListener('scroll', updateActiveSection, { passive: true })
    window.addEventListener('resize', updateActiveSection)

    return () => {
      window.removeEventListener('scroll', updateActiveSection)
      window.removeEventListener('resize', updateActiveSection)
    }
  }, [])

  return (
    <div className="pointer-events-none fixed right-3 top-1/2 z-5 hidden -translate-y-1/2 lg:block">
      <nav aria-label="About page sections" className="pointer-events-auto flex flex-col items-center gap-1 rounded-full border border-mist-200 bg-white/90 p-1.5 shadow-sm backdrop-blur">
        {sections.map((section) => {
          const isActive = activeSection === section.id

          return (
            <a
              key={section.id}
              href={`#${section.id}`}
              aria-label={section.label}
              aria-current={isActive ? 'location' : undefined}
              title={section.label}
              className="group flex size-6 items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mist-700"
              onClick={(event) => {
                event.preventDefault()
                setActiveSection(section.id)
                document.getElementById(section.id)?.scrollIntoView({
                  behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
                  block: 'start',
                })
                window.history.replaceState(null, '', `#${section.id}`)
              }}
            >
              <span
                className={`block rounded-full border transition ${isActive
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
