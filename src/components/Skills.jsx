import { useTranslation } from 'react-i18next'
import useIntersectionObserver from '../hooks/useIntersectionObserver'
import { SectionTitle } from './About'

const BADGE_STYLES = {
  soft: 'bg-teal-50 text-teal-800 border border-teal-200',
  business: 'bg-indigo-50 text-indigo-800 border border-indigo-200',
  tools: 'bg-slate-100 text-slate-700 border border-slate-200',
}

function BadgeGroup({ title, items, style }) {
  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-widest text-navy-600 mb-3">
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className={`px-3 py-1.5 rounded-full text-sm font-medium ${style}`}
          >
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

  const soft = t('skills.soft', { returnObjects: true })
  const business = t('skills.business', { returnObjects: true })
  const tools = t('skills.tools', { returnObjects: true })

  return (
    <section id="skills" className="py-12 sm:py-16 px-4 sm:px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div ref={ref} className="fade-up">
          <SectionTitle title={t('skills.title')} />
          <div className="mt-10 space-y-8">
            <BadgeGroup
              title={t('skills.soft_title')}
              items={soft}
              style={BADGE_STYLES.soft}
            />
            <BadgeGroup
              title={t('skills.business_title')}
              items={business}
              style={BADGE_STYLES.business}
            />
            <BadgeGroup
              title={t('skills.tools_title')}
              items={tools}
              style={BADGE_STYLES.tools}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
