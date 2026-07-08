import useIntersectionObserver from '../hooks/useIntersectionObserver'

/**
 * Reusable vertical timeline.
 * @param {{ items: Array<{ role?:string, degree?:string, company?:string, institution?:string, location?:string, period:string, grade?:string, note?:string, description?:string }>, variant: 'experience'|'education' }} props
 */
export default function Timeline({ items, variant = 'experience' }) {
  return (
    <div className="relative mt-10 pl-10">
      {/* Vertical line */}
      <div className="timeline-line" aria-hidden="true" />

      <div className="space-y-10">
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
    <div
      ref={ref}
      className="fade-up relative"
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Dot */}
      <div
        className="absolute -left-10 top-1.5 w-5 h-5 rounded-full bg-indigo-400 border-2 border-white shadow-md flex items-center justify-center"
        aria-hidden="true"
      >
        <div className="w-2 h-2 rounded-full bg-navy-800" />
      </div>

      <div className="bg-slate-50 border border-indigo-100 rounded-xl p-5 hover:shadow-md transition-shadow">
        {variant === 'experience' ? (
          <>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
              <h3 className="font-bold text-navy-900 text-lg">{item.role}</h3>
              <span className="text-xs font-semibold text-indigo-400 bg-indigo-50 px-2.5 py-1 rounded-full whitespace-nowrap">
                {item.period}
              </span>
            </div>
            <p className="text-navy-600 font-semibold text-sm mb-1">
              {item.company}
              {item.location && <span className="font-normal text-navy-500"> · {item.location}</span>}
            </p>
            {item.description && (
              <p className="text-navy-700 text-sm leading-relaxed mt-2">{item.description}</p>
            )}
          </>
        ) : (
          <>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
              <h3 className="font-bold text-navy-900 text-base sm:text-lg">{item.degree}</h3>
              <span className="text-xs font-semibold text-indigo-400 bg-indigo-50 px-2.5 py-1 rounded-full whitespace-nowrap">
                {item.period}
              </span>
            </div>
            <p className="text-navy-600 font-semibold text-sm mb-1">{item.institution}</p>
            {item.note && <p className="text-navy-500 text-xs mb-2">{item.note}</p>}
            {item.grade && (
              <span className="inline-block mt-1 text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full">
                Voto: {item.grade}
              </span>
            )}
          </>
        )}
      </div>
    </div>
  )
}
