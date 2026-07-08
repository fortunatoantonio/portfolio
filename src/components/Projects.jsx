import { useTranslation } from 'react-i18next'
import useIntersectionObserver from '../hooks/useIntersectionObserver'
import { SectionTitle } from './About'

function ProjectCard({ project, delay }) {
  const { t } = useTranslation()
  const ref = useIntersectionObserver({ threshold: 0.1 })

  return (
    <article
      ref={ref}
      className="fade-up bg-dark-800 border border-dark-600 rounded-sm p-6 flex flex-col gap-4 hover:border-gold-500/50 hover:-translate-y-1 transition-all duration-300"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-bold text-white text-base leading-snug">{project.name}</h3>
        <span className="text-xs font-semibold text-gold-400 bg-dark-700 border border-dark-600 px-2.5 py-1 rounded-sm whitespace-nowrap flex-shrink-0">
          {project.lang}
        </span>
      </div>

      <p className="text-muted-400 text-sm leading-relaxed flex-1">{project.description}</p>

      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm font-semibold text-gold-400 hover:text-gold-300 transition-colors mt-auto"
        aria-label={`${t('projects.view_github')}: ${project.name}`}
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
        {t('projects.view_github')}
      </a>
    </article>
  )
}

export default function Projects() {
  const { t } = useTranslation()
  const titleRef = useIntersectionObserver()
  const items = t('projects.items', { returnObjects: true })

  return (
    <section id="projects" className="relative py-16 sm:py-20 px-4 sm:px-8 bg-dark-950">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gold-500" aria-hidden="true" />
      <div className="max-w-6xl mx-auto">
        <div ref={titleRef} className="fade-up">
          <SectionTitle title={t('projects.title')} />
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((project, idx) => (
            <ProjectCard key={project.name} project={project} delay={idx * 80} />
          ))}
        </div>
      </div>
    </section>
  )
}
