import { useTranslation } from 'react-i18next'
import useIntersectionObserver from '../hooks/useIntersectionObserver'

export default function Hero() {
  const { t } = useTranslation()
  const textRef = useIntersectionObserver({ threshold: 0.1 })
  const imageRef = useIntersectionObserver({ threshold: 0.1 })

  return (
    <section
      id="hero"
      className="flex items-center bg-gradient-to-br from-slate-50 to-indigo-100 px-4 sm:px-6 py-14 sm:py-16 md:py-20"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-14">

          {/* Foto — sopra su mobile, destra su desktop */}
          <div ref={imageRef} className="fade-up flex-shrink-0 flex justify-center w-full md:w-auto md:order-2">
            <div className="w-44 sm:w-56 md:w-64 lg:w-72 rounded-2xl overflow-hidden shadow-xl ring-4 ring-indigo-200">
              <img
                src="/portfolio/profile.webp"
                alt="Antonio Fortunato"
                width="288"
                height="288"
                className="w-full h-auto object-cover block"
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.nextSibling.style.display = 'flex'
                }}
              />
              <div
                className="w-full aspect-square bg-indigo-100 items-center justify-center hidden"
                aria-hidden="true"
              >
                <span className="text-5xl font-bold text-navy-800">AF</span>
              </div>
            </div>
          </div>

          {/* Testo — sotto su mobile, sinistra su desktop */}
          <div ref={textRef} className="fade-up flex-1 text-center md:text-left md:order-1">
            <p className="text-indigo-400 font-semibold text-base sm:text-lg mb-1 tracking-wide">
              {t('hero.greeting')}
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy-900 mb-2 leading-tight">
              {t('hero.name')}
            </h1>
            <p className="text-lg sm:text-xl font-semibold text-navy-700 mb-3">
              {t('hero.role')}
            </p>

            {/* Typewriter — wrappa su mobile, cursor sparisce dopo la scrittura */}
            <div className="mb-5">
              <p className="typewriter text-sm sm:text-base text-indigo-400 font-medium inline-block max-w-full">
                {t('hero.typewriter')}
              </p>
            </div>

            <p className="text-navy-700 text-sm sm:text-base leading-relaxed max-w-lg mx-auto md:mx-0 mb-7">
              {t('hero.bio')}
            </p>

            {/* CTA */}
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <a
                href="/portfolio/antonio_fortunato_cv.pdf"
                download
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-navy-800 text-white text-sm font-semibold rounded-lg hover:bg-navy-700 transition-colors shadow-md hover:shadow-lg"
              >
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
                </svg>
                {t('hero.cta_cv')}
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-navy-800 text-sm font-semibold rounded-lg border-2 border-navy-700 hover:bg-indigo-100 transition-colors"
              >
                {t('hero.cta_projects')}
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
