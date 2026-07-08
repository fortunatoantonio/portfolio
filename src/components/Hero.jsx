import { useTranslation } from 'react-i18next'
import useIntersectionObserver from '../hooks/useIntersectionObserver'

export default function Hero() {
  const { t } = useTranslation()
  const textRef = useIntersectionObserver({ threshold: 0.05 })

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Sfondo immagine */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/portfolio/fotosfondo.webp')" }}
        aria-hidden="true"
      />

      {/* Overlay scuro con gradiente — come il riferimento */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to right, rgba(0,0,0,0.85) 45%, rgba(0,0,0,0.45) 75%, rgba(0,0,0,0.2) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Contenuto */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 w-full pt-24 pb-20">
        <div ref={textRef} className="fade-up max-w-2xl">

          {/* Badge piccolo come il riferimento */}
          <div className="inline-flex items-center gap-2 border border-gold-500/50 text-gold-400 text-xs font-semibold uppercase tracking-[0.2em] px-4 py-1.5 rounded-sm mb-8">
            <span>✦</span>
            {t('hero.badge')}
          </div>

          {/* Nome grande — prima riga bianca, seconda gialla */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-none mb-6">
            <span className="text-white block">{t('hero.firstname')}</span>
            <span className="text-gold-400 block italic">{t('hero.lastname')}</span>
          </h1>

          {/* Ruolo */}
          <p className="text-lg sm:text-xl font-semibold text-muted-300 mb-4 uppercase tracking-widest">
            {t('hero.role')}
          </p>

          {/* Typewriter */}
          <div className="mb-6">
            <p className="typewriter text-sm sm:text-base text-gold-300 font-medium inline-block">
              {t('hero.typewriter')}
            </p>
          </div>

          {/* Bio */}
          <p className="text-muted-300 text-sm sm:text-base leading-relaxed max-w-lg mb-10">
            {t('hero.bio')}
          </p>

          {/* CTA */}
          <div className="flex flex-wrap gap-4">
            <a
              href="/portfolio/antonio_fortunato_cv.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-gold-500 text-dark-900 text-sm font-bold rounded-sm hover:bg-gold-400 transition-colors"
            >
              <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
              </svg>
              {t('hero.cta_cv')}
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-transparent text-white text-sm font-bold rounded-sm border border-white/40 hover:border-gold-400 hover:text-gold-400 transition-colors"
            >
              {t('hero.cta_projects')}
              <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

        </div>
      </div>

      {/* Freccia scroll in basso */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
