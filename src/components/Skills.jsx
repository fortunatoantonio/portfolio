import { useTranslation } from 'react-i18next'
import useIntersectionObserver from '../hooks/useIntersectionObserver'
import { SectionTitle } from './About'

const BADGE_STYLES = {
  soft:     'bg-gold-100 text-dark-800 border border-gold-200',
  business: 'bg-gray-100 text-dark-800 border border-gray-200',
  tools:    'bg-dark-900 text-white border border-dark-700',
}

function BadgeGroup({ title, items, style }) {
  return (
    <div>
      <h3 className="text-xs font-bold uppercase tracking-widest text-gold-500 mb-3">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span key={item} className={`px-3 py-1.5 rounded-sm text-sm font-medium transition-colors ${style}`}>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  const { t } = useTranslation()
  const ref = useIntersectionObserver()

  return (
    <section id="skills" className="relative py-16 sm:py-20 px-4 sm:px-8 bg-white">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gold-500" aria-hidden="true" />
      <div className="max-w-4xl mx-auto">
        <div ref={ref} className="fade-up">
          <SectionTitle title={t('skills.title')} light />
          <div className="mt-10 space-y-8">
            <BadgeGroup title={t('skills.soft_title')}     items={t('skills.soft',     { returnObjects: true })} style={BADGE_STYLES.soft} />
            <BadgeGroup title={t('skills.business_title')} items={t('skills.business', { returnObjects: true })} style={BADGE_STYLES.business} />
            <BadgeGroup title={t('skills.tools_title')}    items={t('skills.tools',    { returnObjects: true })} style={BADGE_STYLES.tools} />
          </div>
        </div>
      </div>
    </section>
  )
}
