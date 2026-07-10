import { useTranslation } from 'react-i18next'
import useIntersectionObserver from '../hooks/useIntersectionObserver'
import { SectionTitle } from './About'

function CertCard({ cert, delay }) {
  const { t } = useTranslation()
  const ref = useIntersectionObserver({ threshold: 0.1 })

  return (
    <a
      href={cert.url}
      target="_blank"
      rel="noopener noreferrer"
      ref={ref}
      className="fade-up relative rounded-lg overflow-hidden group cursor-pointer aspect-[4/3]"
      style={{ transitionDelay: `${delay}ms` }}
      aria-label={cert.name}
    >
      {/* Background image */}
      {cert.image && (
        <img
          src={cert.image}
          alt={cert.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
          loading="lazy"
        />
      )}

      {/* Fallback dark bg if no image */}
      {!cert.image && (
        <div className="absolute inset-0 bg-dark-800" />
      )}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-all duration-500 group-hover:from-black/95 group-hover:via-black/50" />

      {/* Content at bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 z-10">
        <h3 className="text-white font-bold text-sm leading-snug mb-1 group-hover:text-gold-400 transition-colors">
          {cert.name}
        </h3>
        <p className="text-gold-400/80 text-[10px] font-semibold uppercase tracking-wider mb-1.5">
          {cert.issuer}
        </p>
        <p className="text-white/60 text-xs leading-relaxed line-clamp-2">
          {cert.description}
        </p>
        {/* Verify link icon */}
        <div className="flex items-center gap-1.5 mt-2.5 text-xs text-white/50 group-hover:text-gold-400 transition-colors">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
          </svg>
          <span>{t('certifications.verify')}</span>
        </div>
      </div>
    </a>
  )
}

export default function Certifications() {
  const { t } = useTranslation()
  const titleRef = useIntersectionObserver()
  const items = t('certifications.items', { returnObjects: true })

  return (
    <section id="certifications" className="relative py-16 sm:py-20 px-4 sm:px-8 bg-dark-950">
      <div className="absolute top-0 left-0 right-0 h-px bg-dark-600" aria-hidden="true" />
      <div className="max-w-5xl mx-auto">
        <div ref={titleRef} className="fade-up">
          <SectionTitle title={t('certifications.title')} />
        </div>
        <div className="mt-10 grid grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((cert, idx) => (
            <CertCard key={cert.name} cert={cert} delay={idx * 100} />
          ))}
        </div>
      </div>
    </section>
  )
}
