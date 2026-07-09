import { useTranslation } from 'react-i18next'
import useIntersectionObserver from '../hooks/useIntersectionObserver'

export default function About() {
  const { t } = useTranslation()
  const ref = useIntersectionObserver()

  return (
    <section id="about" className="relative py-16 sm:py-20 px-4 sm:px-8 bg-white">
      {/* Barra dorata in cima — separatore fra hero e profilo */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gold-500" aria-hidden="true" />

      <div className="max-w-4xl mx-auto">
        <div ref={ref} className="fade-up">
          <SectionTitle title={t('about.title')} light />
          <div className="mt-8 space-y-5 text-dark-700 text-base sm:text-lg leading-relaxed text-justify">
            <p>{t('about.p1')}</p>
            <p>{t('about.p2')}</p>
            <p>{t('about.p3')}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export function SectionTitle({ title, className = '', light = false }) {
  return (
    <div className={`text-center ${className}`}>
      <h2 className={`text-2xl sm:text-3xl font-extrabold ${light ? 'text-dark-900' : 'text-white'}`}>
        {title}
      </h2>
      <div className="flex items-center justify-center gap-2 mt-3">
        <div className={`w-12 h-px ${light ? 'bg-gray-300' : 'bg-dark-600'}`} />
        <div className="w-2 h-2 rounded-full bg-gold-500 flex-shrink-0" />
        <div className={`w-12 h-px ${light ? 'bg-gray-300' : 'bg-dark-600'}`} />
      </div>
    </div>
  )
}
