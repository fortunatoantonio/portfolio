import { useTranslation } from 'react-i18next'
import useIntersectionObserver from '../hooks/useIntersectionObserver'

const FEATURES = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    titleKey: 'hero.feat1_title',
    descKey: 'hero.feat1_desc',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    titleKey: 'hero.feat2_title',
    descKey: 'hero.feat2_desc',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
    titleKey: 'hero.feat3_title',
    descKey: 'hero.feat3_desc',
  },
]

export default function Hero() {
  const { t } = useTranslation()
  const leftRef = useIntersectionObserver({ threshold: 0.05 })
  const rightRef = useIntersectionObserver({ threshold: 0.05 })

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-end lg:items-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/portfolio/fotosfo.webp')" }}
        aria-hidden="true"
      />

      {/* ── Clean layout overlay: gradiente dal basso (sotto 1024px) ── */}
      <div
        className="absolute inset-0 lg:hidden"
        style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.2) 35%, rgba(0,0,0,0.8) 70%, rgba(0,0,0,0.95) 100%)' }}
        aria-hidden="true"
      />

      {/* ── Desktop overlay: gradiente laterale (1024px+) ── */}
      <div
        className="absolute inset-0 hidden lg:block"
        style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.92) 35%, rgba(0,0,0,0.6) 60%, rgba(0,0,0,0.25) 100%)' }}
        aria-hidden="true"
      />

      {/* ═══════════════════════════════════════════════════════════
          CLEAN LAYOUT (< 1024px): foto + nome + ruoli + tagline
          La foto è protagonista — niente confusione
      ═══════════════════════════════════════════════════════════ */}
      <div className="relative z-10 w-full px-5 pb-20 pt-32 lg:hidden">
        {/* Nome grande elegante */}
        <h1 className="text-[3rem] sm:text-[3.5rem] leading-[0.9] font-black mb-4">
          <span className="text-white block">Antonio</span>
          <span className="text-gold-400 block italic text-[3.5rem] sm:text-[4rem]">Fortunato</span>
        </h1>

        {/* Ruoli — compatti, centrati su mobile */}
        <div className="flex items-center justify-center text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.14em] text-muted-200 border border-white/20 rounded-sm px-3 py-1.5 w-fit mx-auto sm:mx-0 mb-5 text-center">
          <span>{t('hero.role1')}</span>
          <span className="text-white/30 mx-1.5">|</span>
          <span>{t('hero.role2')}</span>
          <span className="text-white/30 mx-1.5">|</span>
          <span>{t('hero.role3')}</span>
        </div>

        {/* Tagline breve */}
        <p className="text-muted-300 text-sm leading-relaxed max-w-sm">
          {t('hero.mobile_tagline')}
        </p>

        {/* CTA — Scarica CV + Contattami su mobile */}
        <div className="mt-6 flex justify-end gap-3">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-white text-xs font-bold rounded-sm border border-white/30 hover:border-gold-400 hover:text-gold-400 transition-colors"
          >
            {t('hero.cta_contact')}
          </a>
          <a
            href="/portfolio/antonio_fortunato_cv.pdf"
            download
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gold-500 text-dark-900 text-xs font-bold rounded-sm hover:bg-gold-400 transition-colors"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
            </svg>
            {t('hero.cta_cv')}
          </a>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          FULL DESKTOP LAYOUT (1024px+): bio, CTA, feature cards
      ═══════════════════════════════════════════════════════════ */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 w-full pt-20 pb-16 hidden lg:block">
        <div className="flex flex-row items-center justify-between gap-16">

          {/* ── Colonna sinistra: nome, bio, CTA ── */}
          <div ref={leftRef} className="fade-up max-w-md flex-shrink-0">

            {/* Nome */}
            <h1 className="text-7xl xl:text-8xl font-black leading-[0.9] mb-5">
              <span className="text-white block">Antonio</span>
              <span className="text-gold-400 block italic">Fortunato</span>
            </h1>

            {/* Ruoli badge */}
            <div className="flex items-center text-xs font-bold uppercase tracking-[0.15em] text-muted-200 border border-white/20 rounded-sm px-4 py-2 w-fit mb-7 whitespace-nowrap">
              <span>{t('hero.role1')}</span>
              <span className="text-white/30 mx-2">|</span>
              <span>{t('hero.role2')}</span>
              <span className="text-white/30 mx-2">|</span>
              <span>{t('hero.role3')}</span>
            </div>

            {/* Bio — tagline pulita */}
            <p className="text-muted-300 text-base leading-relaxed mb-10">
              {t('hero.mobile_tagline')}
            </p>

            {/* CTA */}
            <div className="flex flex-wrap gap-4">
              <a
                href="/portfolio/antonio_fortunato_cv.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-gold-500 text-dark-900 text-sm font-bold rounded-sm hover:bg-gold-400 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
                </svg>
                {t('hero.cta_cv')}
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 text-white text-sm font-bold rounded-sm border border-white/30 hover:border-gold-400 hover:text-gold-400 transition-colors"
              >
                {t('hero.cta_contact')}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

          </div>

          {/* ── Colonna destra: 3 feature cards verticali ── */}
          <div ref={rightRef} className="fade-up flex flex-col justify-center gap-4 w-72 self-center">
            {FEATURES.map((f, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-4 rounded-sm border border-dark-600 bg-dark-900/70 backdrop-blur-sm"
              >
                <div className="w-10 h-10 rounded-sm border border-gold-500/50 bg-dark-800 flex items-center justify-center text-gold-400 flex-shrink-0">
                  {f.icon}
                </div>
                <div className="min-w-0">
                  <h3 className="text-white font-bold text-sm">{t(f.titleKey)}</h3>
                  <p className="text-muted-400 text-xs leading-relaxed">{t(f.descKey)}</p>
                </div>
              </div>
            ))}
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
