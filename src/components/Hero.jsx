import { useTranslation } from 'react-i18next'
import useIntersectionObserver from '../hooks/useIntersectionObserver'

export default function Hero() {
  const { t } = useTranslation()
  const textRef = useIntersectionObserver({ threshold: 0.1 })
  const imageRef = useIntersectionObserver({ threshold: 0.1 })

  return (
    <section
      id="hero"
      className="min-h-[90vh] flex items-center bg-gradient-to-br from-slate-50 to-indigo-100 px-4 sm:px-6"
    >
      <div className="max-w-6xl mx-auto w-full py-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">

          {/* Profile image — left on mobile (top), right on desktop */}
          <div ref={imageRef} className="fade-up flex-shrink-0 flex justify-center md:order-2">
            <div className="relative w-52 sm:w-64 md:w-72">
              {/* Subtle shadow/border frame that follows the photo shape */}
              <div className="rounded-2xl overflow-hidden shadow-xl ring-4 ring-indigo-200">
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
                {/* Fallback initials */}
                <div
                  className="w-full aspect-square bg-indigo-100 items-center justify-center hidden"
                  aria-hidden="true"
                >
                  <span className="text-5xl font-bold text-navy-800">AF</span>
                </div>
              </div>
            </div>
          </div>

          {/* Text — right on mobile (bottom), left on desktop */}
          <div ref={textRef} className="fade-up flex-1 text-center md:text-left md:order-1">
            <p className="text-indigo-400 font-semibold text-lg mb-2 tracking-wide">
              {t('hero.greeting')}
            </p>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-navy-900 mb-3 leading-tight">
              {t('hero.name')}
            </h1>
            <p className="text-xl sm:text-2xl font-semibold text-navy-700 mb-4">
              {t('hero.role')}
            </p>

            {/* Typewriter — cursor sparisce dopo la scrittura */}
            <div className="mb-6 overflow-hidden">
              <p className="typewriter text-base sm:text-lg text-indigo-400 font-medium inline-block">
                {t('hero.typewriter')}
              </p>
            </div>

            <p className="text-navy-700 text-base sm:text-lg leading-relaxed max-w-lg mx-auto md:mx-0 mb-8">
              {t('hero.bio')}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a
                href="/portfolio/antonio_fortunato_cv.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-navy-800 text-white font-semibold rounded-lg hover:bg-navy-700 transition-colors shadow-md hover:shadow-lg"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
                </svg>
                {t('hero.cta_cv')}
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-navy-800 font-semibold rounded-lg border-2 border-navy-700 hover:bg-indigo-100 transition-colors"
              >
                {t('hero.cta_projects')}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
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
