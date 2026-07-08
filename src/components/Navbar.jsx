import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import LanguageToggle from './LanguageToggle'

const NAV_LINKS = ['about', 'experience', 'education', 'skills', 'projects', 'certifications', 'contact']

export default function Navbar() {
  const { t } = useTranslation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => { if (window.innerWidth >= 768) setMenuOpen(false) }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  function handleNavClick() {
    setMenuOpen(false)
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white transition-shadow duration-300 ${
        scrolled ? 'shadow-md' : 'shadow-sm'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          className="text-navy-900 font-bold text-lg tracking-tight hover:text-navy-600 transition-colors"
        >
          Antonio<span className="text-indigo-400"> Fortunato</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((key) => (
            <a
              key={key}
              href={`#${key}`}
              className="text-sm font-medium text-navy-700 hover:text-indigo-400 transition-colors"
            >
              {t(`nav.${key}`)}
            </a>
          ))}
        </div>

        {/* Desktop: language toggle */}
        <div className="hidden md:flex items-center gap-3">
          <LanguageToggle />
        </div>

        {/* Mobile: language toggle + hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <LanguageToggle />
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Chiudi menu' : 'Apri menu'}
            aria-expanded={menuOpen}
            className="p-2 rounded-md text-navy-700 hover:bg-indigo-100 transition-colors"
          >
            {menuOpen ? (
              // X icon
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger icon
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-3 flex flex-col gap-3 shadow-md">
          {NAV_LINKS.map((key) => (
            <a
              key={key}
              href={`#${key}`}
              onClick={handleNavClick}
              className="text-sm font-medium text-navy-700 hover:text-indigo-400 py-1.5 transition-colors"
            >
              {t(`nav.${key}`)}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
