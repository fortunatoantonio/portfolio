import { useTranslation } from 'react-i18next'
import useIntersectionObserver from '../hooks/useIntersectionObserver'

export default function Hero() {
  const { t } = useTranslation()
  const leftRef = useIntersectionObserver({ threshold: 0.05 })

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-end lg:items-center overflow-hidden"
    >
      {/* Background image */}
      <img
        src="/portfolio/sfondomi.webp"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: 'center 25%' }}
      />

      {/* ── Clean layout overlay: gradiente dal basso (sotto 1024px) ── */}
      <div
        className="absolute inset-0 lg:hidden"
        style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.15) 30%, rgba(0,0,0,0.7) 60%, rgba(0,0,0,0.95) 75%, rgba(0,0,0,1) 100%)' }}
        aria-hidden="true"
      />

      {/* ── Desktop overlay: gradiente laterale (1024px+) — più leggero ── */}
      <div
        className="absolute inset-0 hidden lg:block"
        style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.82) 25%, rgba(0,0,0,0.45) 50%, rgba(0,0,0,0.15) 100%)' }}
        aria-hidden="true"
      />

      {/* ═══════════════════════════════════════════════════════════
          MOBILE LAYOUT (< 1024px)
      ═══════════════════════════════════════════════════════════ */}
      <div className="relative z-10 w-full px-5 pb-20 pt-32 lg:hidden">
        {/* Nome */}
        <h1 className="text-[3rem] sm:text-[3.5rem] leading-[0.9] font-black mb-4">
          <span className="text-white block">Antonio</span>
          <span className="text-gold-400 block italic text-[3.5rem] sm:text-[4rem]">Fortunato</span>
        </h1>

        {/* Tagline */}
        <p className="text-muted-300 text-sm leading-relaxed mb-5">
          {t('hero.mobile_tagline')}
        </p>

        {/* Ruoli — griglia 3 colonne (coerente coi bottoni sotto) */}
        <div className="grid grid-cols-3 gap-2 mb-3">
          <div className="flex items-center justify-center py-2 border border-white/20 rounded-sm">
            <span className="text-[10px] sm:text-[11px] font-serif uppercase tracking-[0.08em] text-muted-200">{t('hero.role1')}</span>
          </div>
          <div className="flex items-center justify-center py-2 border border-white/20 rounded-sm">
            <span className="text-[10px] sm:text-[11px] font-serif uppercase tracking-[0.08em] text-muted-200">{t('hero.role2')}</span>
          </div>
          <div className="flex items-center justify-center py-2 border border-white/20 rounded-sm text-center">
            <span className="text-[10px] sm:text-[11px] font-serif uppercase tracking-[0.08em] text-muted-200 leading-tight">{t('hero.role3')}</span>
          </div>
        </div>

        {/* CTA — griglia 3 colonne, tutti dorati */}
        <div className="grid grid-cols-3 gap-2">
          <a
            href="/portfolio/CVV2.pdf"
            download
            className="inline-flex items-center justify-center gap-1.5 py-2.5 bg-gold-500 text-dark-900 text-[10px] sm:text-[11px] font-serif uppercase tracking-[0.08em] rounded-sm hover:bg-gold-400 transition-colors"
          >
            <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
            </svg>
            {t('hero.cta_cv')}
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center py-2.5 bg-gold-500 text-dark-900 text-[10px] sm:text-[11px] font-serif uppercase tracking-[0.08em] rounded-sm hover:bg-gold-400 transition-colors"
          >
            {t('hero.cta_contact')}
          </a>
          <a
            href="#projects"
            className="inline-flex items-center justify-center py-2.5 bg-gold-500 text-dark-900 text-[10px] sm:text-[11px] font-serif uppercase tracking-[0.08em] rounded-sm hover:bg-gold-400 transition-colors"
          >
            {t('hero.cta_projects')}
          </a>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          DESKTOP LAYOUT (1024px+)
      ═══════════════════════════════════════════════════════════ */}
      <div className="relative z-10 w-full pl-8 sm:pl-12 lg:pl-16 xl:pl-20 pr-4 pt-28 pb-16 hidden lg:block">
        <div className="max-w-lg">

          <div ref={leftRef} className="fade-up">

            {/* Nome */}
            <h1 className="text-7xl xl:text-8xl font-black leading-[0.9] mb-5">
              <span className="text-white block">Antonio</span>
              <span className="text-gold-400 block italic">Fortunato</span>
            </h1>

            {/* Ruoli badge — riga unica con separatori */}
            <div className="flex items-center text-sm font-serif uppercase tracking-[0.1em] text-muted-200 border border-white/20 rounded-sm px-4 py-2 w-fit mb-7 whitespace-nowrap">
              <span>{t('hero.role1')}</span>
              <span className="text-white/30 mx-3">|</span>
              <span>{t('hero.role2')}</span>
              <span className="text-white/30 mx-3">|</span>
              <span>{t('hero.role3')}</span>
            </div>

            {/* Bio */}
            <p className="text-muted-300 text-base leading-relaxed mb-10">
              {t('hero.mobile_tagline')}
            </p>

            {/* CTA — 3 bottoni in riga, tutti dorati */}
            <div className="flex items-center gap-3">
              <a
                href="/portfolio/CVV2.pdf"
                download
                className="inline-flex items-center gap-2 px-5 py-3 bg-gold-500 text-dark-900 text-sm font-serif uppercase tracking-[0.1em] rounded-sm hover:bg-gold-400 transition-colors whitespace-nowrap"
              >
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
                </svg>
                {t('hero.cta_cv')}
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-5 py-3 bg-gold-500 text-dark-900 text-sm font-serif uppercase tracking-[0.1em] rounded-sm hover:bg-gold-400 transition-colors whitespace-nowrap"
              >
                {t('hero.cta_contact')}
              </a>
              <a
                href="#projects"
                className="inline-flex items-center px-5 py-3 bg-gold-500 text-dark-900 text-sm font-serif uppercase tracking-[0.1em] rounded-sm hover:bg-gold-400 transition-colors whitespace-nowrap"
              >
                {t('hero.cta_projects')}
              </a>
            </div>

          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <a href="#about" className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40 hover:text-gold-400 animate-bounce transition-colors z-20" aria-label="Scorri al profilo">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </a>
    </section>
  )
}
