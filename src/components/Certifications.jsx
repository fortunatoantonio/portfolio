import { useTranslation } from 'react-i18next'
import useIntersectionObserver from '../hooks/useIntersectionObserver'
import { SectionTitle } from './About'

function CertCard({ cert, delay }) {
  const { t } = useTranslation()
  const ref = useIntersectionObserver({ threshold: 0.1 })

  return (
    <div
      ref={ref}
      className="fade-up bg-dark-800 border border-dark-600 rounded-sm p-6 hover:border-gold-500/40 transition-colors"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="w-10 h-10 rounded-sm bg-dark-700 border border-dark-600 flex items-center justify-center mb-4" aria-hidden="true">
        <svg className="w-5 h-5 text-gold-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      </div>
      <h3 className="font-bold text-white text-base mb-1">{cert.name}</h3>
      <p className="text-xs text-gold-400 font-semibold mb-3 uppercase tracking-wider">
        {t('certifications.issued_by')}: {cert.issuer}
      </p>
      <p className="text-muted-400 text-sm leading-relaxed">{cert.description}</p>
    </div>
  )
}

export default function Certifications() {
  const { t } = useTranslation()
  const titleRef = useIntersectionObserver()
  const items = t('certifications.items', { returnObjects: true })

  return (
    <section id="certifications" className="py-16 sm:py-20 px-4 sm:px-8 bg-dark-900">
      <div className="max-w-4xl mx-auto">
        <div ref={titleRef} className="fade-up">
          <SectionTitle title={t('certifications.title')} />
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((cert, idx) => (
            <CertCard key={cert.name} cert={cert} delay={idx * 100} />
          ))}
        </div>
      </div>
    </section>
  )
}
