import { useTranslation } from 'react-i18next'
import useIntersectionObserver from '../hooks/useIntersectionObserver'
import { SectionTitle } from './About'

function CertCard({ cert, delay }) {
  const { t } = useTranslation()
  const ref = useIntersectionObserver({ threshold: 0.1 })

  return (
    <div
      ref={ref}
      className="fade-up bg-white border border-indigo-100 rounded-xl p-6 hover:shadow-md transition-shadow"
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Badge icon */}
      <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center mb-4" aria-hidden="true">
        <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      </div>
      <h3 className="font-bold text-navy-900 text-base mb-1">{cert.name}</h3>
      <p className="text-xs text-indigo-500 font-semibold mb-3">
        {t('certifications.issued_by')}: {cert.issuer}
      </p>
      <p className="text-navy-600 text-sm leading-relaxed">{cert.description}</p>
    </div>
  )
}

export default function Certifications() {
  const { t } = useTranslation()
  const titleRef = useIntersectionObserver()
  const items = t('certifications.items', { returnObjects: true })

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div ref={titleRef} className="fade-up">
          <SectionTitle title={t('certifications.title')} />
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((cert, idx) => (
            <CertCard key={cert.name} cert={cert} delay={idx * 100} />
          ))}
        </div>
      </div>
    </section>
  )
}
