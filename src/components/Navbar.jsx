import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import LanguageToggle from './LanguageToggle'

const NAV_LINKS = ['about', 'experience', 'education', 'skills', 'projects', 'certifications', 'contact']

export default function Navbar() {
  const { t } = useTranslation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleResize = () => { if (window.innerWidth >= 768) setMenuOpen(false) }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? 'bg-dark-900 shadow-lg shadow-black/40'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-8 h-16 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#hero"
          className="font-bold text-lg tracking-tight text-white hover:text-gold-400 transition-colors"
        >
          Antonio <span className="text-gold-400">Fortunato</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((key) => (
            <a
              key={key}
              href={`#${key}`}
              className="text-sm font-medium text-muted-300 hover:text-gold-400 transition-colors tracking-wide uppercase"
            >
              {t(`nav.${key}`)}
            </a>
          ))}
        </div>

        {/* Language toggle */}
        <div className="hidden md:flex items-center">
          <LanguageToggle />
        </div>

        {/* Mobile */}
        <div className="flex md:hidden items-center gap-2">
          <LanguageToggle />
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Chiudi menu' : 'Apri menu'}
            aria-expanded={menuOpen}
            className="p-2 rounded-md text-white hover:text-gold-400 transition-colors"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-dark-900 border-t border-dark-700 px-4 py-4 flex flex-col gap-3">
          {NAV_LINKS.map((key) => (
            <a
              key={key}
              href={`#${key}`}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-muted-300 hover:text-gold-400 py-1.5 uppercase tracking-wide transition-colors"
            >
              {t(`nav.${key}`)}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
