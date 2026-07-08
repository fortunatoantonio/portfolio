import { useTranslation } from 'react-i18next'

export default function LanguageToggle({ className = '' }) {
  const { i18n } = useTranslation()
  const current = i18n.language

  function toggle() {
    const next = current === 'it' ? 'en' : 'it'
    i18n.changeLanguage(next)
    localStorage.setItem('lang', next)
  }

  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${current === 'it' ? 'English' : 'Italian'}`}
      className={`flex items-center gap-1 px-3 py-1.5 rounded-sm text-xs font-bold border border-white/20 text-white/70 hover:border-gold-400 hover:text-gold-400 transition-colors duration-200 tracking-widest ${className}`}
    >
      <span className={current === 'it' ? 'opacity-100' : 'opacity-35'}>IT</span>
      <span className="text-white/30 mx-0.5">/</span>
      <span className={current === 'en' ? 'opacity-100' : 'opacity-35'}>EN</span>
    </button>
  )
}
