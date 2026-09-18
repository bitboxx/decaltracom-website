import { useEffect, useState } from 'react'

const sections = [
  { id: 'contact', label: 'Contact us' },
  { id: 'contact-navigation', label: 'Need something else?' },
] as const

export default function ContactSectionNav() {
  const [activeSection, setActiveSection] = useState<(typeof sections)[number]['id']>('contact')

  useEffect(() => {
    const updateActiveSection = () => {
      const marker = window.innerHeight * 0.35
      const closestSection = sections
        .map((section) => ({
          id: section.id,
          distance: Math.abs(
            (document.getElementById(section.id)?.getBoundingClientRect().top ?? Infinity) - marker,
          ),
        }))
        .sort((sectionA, sectionB) => sectionA.distance - sectionB.distance)[0]

      if (closestSection) setActiveSection(closestSection.id)
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
              onClick={(event) => {
                event.preventDefault()
                setActiveSection(section.id)
                document.getElementById(section.id)?.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start',
                })
                window.history.replaceState(null, '', `#${section.id}`)
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
          )
        })}
      </nav>
    </div>
  )
}
