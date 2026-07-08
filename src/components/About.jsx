import { useTranslation } from 'react-i18next'
import useIntersectionObserver from '../hooks/useIntersectionObserver'

export default function About() {
  const { t } = useTranslation()
  const ref = useIntersectionObserver()

  return (
    <section id="about" className="py-16 sm:py-20 px-4 sm:px-8 bg-dark-900">
      <div className="max-w-4xl mx-auto">
        <div ref={ref} className="fade-up">
          <SectionTitle title={t('about.title')} />
          <div className="mt-8 space-y-5 text-muted-300 text-base sm:text-lg leading-relaxed">
            <p>{t('about.p1')}</p>
            <p>{t('about.p2')}</p>
            <p>{t('about.p3')}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export function SectionTitle({ title, className = '' }) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <h2 className="text-2xl sm:text-3xl font-extrabold text-white whitespace-nowrap">{title}</h2>
      <div className="flex-1 h-px bg-dark-600" />
      <div className="w-2 h-2 rounded-full bg-gold-500 flex-shrink-0" />
    </div>
  )
}
