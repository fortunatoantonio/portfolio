import { useTranslation } from 'react-i18next'
import useIntersectionObserver from '../hooks/useIntersectionObserver'
import { SectionTitle } from './About'

const FLAGS = {
  Italiano: '🇮🇹',
  Italian: '🇮🇹',
  Inglese: '🇬🇧',
  English: '🇬🇧',
  Francese: '🇫🇷',
  French: '🇫🇷',
}

function LanguageCard({ lang }) {
  const flag = FLAGS[lang.name] || '🌐'

  return (
    <div className="bg-gray-50 border border-gray-200 rounded-sm p-5 flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <span className="text-2xl" aria-hidden="true">{flag}</span>
        <div>
          <h3 className="text-dark-900 font-bold text-base">{lang.name}</h3>
          <p className="text-gold-500 text-xs font-semibold">{lang.level}</p>
        </div>
      </div>
      {/* Progress bar */}
      <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-gold-500 rounded-full transition-all duration-700"
          style={{ width: `${lang.percent}%` }}
        />
      </div>
    </div>
  )
}

export default function Languages() {
  const { t } = useTranslation()
  const ref = useIntersectionObserver()
  const items = t('languages.items', { returnObjects: true })

  return (
    <section id="languages" className="relative py-16 sm:py-20 px-4 sm:px-8 bg-white">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gold-500" aria-hidden="true" />
      <div className="max-w-4xl mx-auto">
        <div ref={ref} className="fade-up">
          <SectionTitle title={t('languages.title')} light />

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-5">
            {items.map((lang) => (
              <LanguageCard key={lang.name} lang={lang} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
