import { useTranslation } from 'react-i18next'
import Timeline from './Timeline'
import { SectionTitle } from './About'
import useIntersectionObserver from '../hooks/useIntersectionObserver'

export default function Education() {
  const { t } = useTranslation()
  const titleRef = useIntersectionObserver()
  const items = t('education.items', { returnObjects: true })

  return (
    <section id="education" className="py-12 sm:py-16 px-4 sm:px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div ref={titleRef} className="fade-up">
          <SectionTitle title={t('education.title')} />
        </div>
        <Timeline items={items} variant="education" />
      </div>
    </section>
  )
}
