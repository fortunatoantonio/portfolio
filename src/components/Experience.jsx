import { useTranslation } from 'react-i18next'
import Timeline from './Timeline'
import { SectionTitle } from './About'
import useIntersectionObserver from '../hooks/useIntersectionObserver'

export default function Experience() {
  const { t } = useTranslation()
  const titleRef = useIntersectionObserver()
  const items = t('experience.items', { returnObjects: true })

  return (
    <section id="experience" className="py-12 sm:py-16 px-4 sm:px-6 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <div ref={titleRef} className="fade-up">
          <SectionTitle title={t('experience.title')} />
        </div>
        <Timeline items={items} variant="experience" />
      </div>
    </section>
  )
}
