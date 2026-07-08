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
      className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-semibold border border-navy-700 text-navy-700 hover:bg-navy-700 hover:text-white transition-colors duration-200 ${className}`}
    >
      <span className={current === 'it' ? 'opacity-100' : 'opacity-40'}>IT</span>
      <span className="text-navy-400">/</span>
      <span className={current === 'en' ? 'opacity-100' : 'opacity-40'}>EN</span>
    </button>
  )
}
