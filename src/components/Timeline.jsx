import useIntersectionObserver from '../hooks/useIntersectionObserver'

export default function Timeline({ items, variant = 'experience' }) {
  return (
    <div className="relative mt-10 pl-10">
      <div className="timeline-line" aria-hidden="true" />
      <div className="space-y-8">
        {items.map((item, idx) => (
          <TimelineItem key={idx} item={item} variant={variant} delay={idx * 100} />
        ))}
      </div>
    </div>
  )
}

function TimelineItem({ item, variant, delay }) {
  const ref = useIntersectionObserver({ threshold: 0.1 })

  return (
    <div ref={ref} className="fade-up relative" style={{ transitionDelay: `${delay}ms` }}>
      {/* Dot giallo */}
      <div
        className="absolute -left-10 top-2 w-4 h-4 rounded-full bg-gold-500 border-2 border-dark-900 shadow-md shadow-gold-500/30"
        aria-hidden="true"
      />

      <div className="bg-dark-800 border border-dark-600 rounded-sm p-5 hover:border-gold-500/40 transition-colors">
        {variant === 'experience' ? (
          <>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
              <h3 className="font-bold text-white text-base">{item.role}</h3>
              <span className="text-xs font-semibold text-gold-400 bg-dark-700 border border-dark-600 px-2.5 py-1 rounded-sm whitespace-nowrap">
                {item.period}
              </span>
            </div>
            <p className="text-gold-300/80 font-semibold text-sm mb-1">
              {item.company}
              {item.location && <span className="font-normal text-muted-400"> · {item.location}</span>}
            </p>
            {item.description && (
              <p className="text-muted-400 text-sm leading-relaxed mt-2">{item.description}</p>
            )}
          </>
        ) : (
          <>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
              <h3 className="font-bold text-white text-base">{item.degree}</h3>
              <span className="text-xs font-semibold text-gold-400 bg-dark-700 border border-dark-600 px-2.5 py-1 rounded-sm whitespace-nowrap">
                {item.period}
              </span>
            </div>
            <p className="text-gold-300/80 font-semibold text-sm mb-1">{item.institution}</p>
            {item.note && <p className="text-muted-400 text-xs mb-2">{item.note}</p>}
            {item.grade && (
              <span className="inline-block mt-1 text-xs font-bold text-dark-900 bg-gold-500 px-2.5 py-1 rounded-sm">
                {item.grade}
              </span>
            )}
          </>
        )}
      </div>
    </div>
  )
}
