import { useTranslation } from 'react-i18next'
import Timeline from './Timeline'
import { SectionTitle } from './About'
import useIntersectionObserver from '../hooks/useIntersectionObserver'

export default function Education() {
  const { t } = useTranslation()
  const titleRef = useIntersectionObserver()
  const items = t('education.items', { returnObjects: true })

  return (
    <section id="education" className="py-16 sm:py-20 px-4 sm:px-8 bg-dark-900">
      <div className="max-w-4xl mx-auto">
        <div ref={titleRef} className="fade-up">
          <SectionTitle title={t('education.title')} />
        </div>
        <Timeline items={items} variant="education" />
      </div>
    </section>
  )
}
