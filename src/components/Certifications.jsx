import { useTranslation } from 'react-i18next'
import useIntersectionObserver from '../hooks/useIntersectionObserver'
import { SectionTitle } from './About'

function CertCard({ cert, delay }) {
  const { t } = useTranslation()
  const ref = useIntersectionObserver({ threshold: 0.1 })

  return (
    <div
      ref={ref}
      className="fade-up bg-dark-800 border border-dark-600 rounded-sm overflow-hidden hover:border-gold-500/40 transition-colors flex flex-col"
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Banner image */}
      {cert.image && (
        <div className="w-full h-28 overflow-hidden bg-dark-700">
          <img
            src={cert.image}
            alt={cert.name}
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />
        </div>
      )}

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-bold text-white text-sm mb-1">{cert.name}</h3>
        <p className="text-xs text-gold-400 font-semibold mb-2 uppercase tracking-wider">
          {cert.issuer}
        </p>
        <p className="text-muted-400 text-xs leading-relaxed flex-1">{cert.description}</p>

        {/* Link verifica */}
        {cert.url && (
          <a
            href={cert.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold-400 hover:text-gold-300 transition-colors mt-3"
          >
            {t('certifications.verify')}
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        )}
      </div>
    </div>
  )
}

export default function Certifications() {
  const { t } = useTranslation()
  const titleRef = useIntersectionObserver()
  const items = t('certifications.items', { returnObjects: true })

  return (
    <section id="certifications" className="relative py-16 sm:py-20 px-4 sm:px-8 bg-dark-950">
      <div className="absolute top-0 left-0 right-0 h-px bg-dark-600" aria-hidden="true" />
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
