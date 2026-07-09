import { useTranslation } from 'react-i18next'
import useIntersectionObserver from '../hooks/useIntersectionObserver'
import { SectionTitle } from './About'

/* ── SVG Graphics per progetto (by index) ── */

// 1. SYRIAS — scritta "SYRIAS" su sfondo light
function GraphicSyrias() {
  return (
    <svg viewBox="0 0 300 100" className="w-full h-36 rounded-t-sm" preserveAspectRatio="none">
      <rect width="300" height="100" fill="#f0f4ff" />
      <rect x="20" y="20" width="260" height="60" rx="6" fill="#e8eeff" stroke="#3b82f6" strokeWidth="0.5" />
      <text x="150" y="58" textAnchor="middle" fontFamily="monospace" fontSize="28" fontWeight="bold" fill="#1e3a8a" letterSpacing="4">SYRIAS</text>
      <circle cx="50" cy="80" r="3" fill="#3b82f6" opacity="0.3" />
      <circle cx="250" cy="25" r="4" fill="#60a5fa" opacity="0.3" />
    </svg>
  )
}

// 2. forecast-ftse — serie temporale a zig-zag
function GraphicTimeSeries() {
  return (
    <svg viewBox="0 0 300 100" className="w-full h-36 rounded-t-sm" preserveAspectRatio="none">
      <rect width="300" height="100" fill="#f0f9ff" />
      {/* Grid lines */}
      <line x1="30" y1="85" x2="280" y2="85" stroke="#cbd5e1" strokeWidth="0.5" />
      <line x1="30" y1="65" x2="280" y2="65" stroke="#e2e8f0" strokeWidth="0.3" strokeDasharray="4" />
      <line x1="30" y1="45" x2="280" y2="45" stroke="#e2e8f0" strokeWidth="0.3" strokeDasharray="4" />
      <line x1="30" y1="25" x2="280" y2="25" stroke="#e2e8f0" strokeWidth="0.3" strokeDasharray="4" />
      {/* Zig-zag time series */}
      <polyline points="30,70 55,55 80,62 105,38 130,50 155,30 180,45 205,25 230,40 255,20 280,35" fill="none" stroke="#2563eb" strokeWidth="2.5" strokeLinejoin="round" />
      {/* Points */}
      <circle cx="105" cy="38" r="3" fill="#2563eb" />
      <circle cx="155" cy="30" r="3" fill="#2563eb" />
      <circle cx="205" cy="25" r="3" fill="#2563eb" />
      <circle cx="255" cy="20" r="3" fill="#2563eb" />
    </svg>
  )
}

// 3. presentazione-flask — pacchetto Python (scatola con logo serpente)
function GraphicFlask() {
  return (
    <svg viewBox="0 0 300 100" className="w-full h-36 rounded-t-sm" preserveAspectRatio="none">
      <rect width="300" height="100" fill="#fff7ed" />
      {/* Package box */}
      <rect x="110" y="15" width="80" height="70" rx="8" fill="#fed7aa" stroke="#f97316" strokeWidth="1.5" />
      <line x1="150" y1="15" x2="150" y2="85" stroke="#f97316" strokeWidth="0.8" opacity="0.5" />
      <line x1="110" y1="50" x2="190" y2="50" stroke="#f97316" strokeWidth="0.8" opacity="0.5" />
      {/* Python-like snake */}
      <path d="M140 35 Q145 30 150 35 Q155 40 150 45 Q145 50 150 55 Q155 60 160 55" fill="none" stroke="#ea580c" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="140" cy="35" r="2" fill="#ea580c" />
      {/* Py text */}
      <text x="150" y="78" textAnchor="middle" fontFamily="monospace" fontSize="10" fill="#9a3412" fontWeight="bold">Py</text>
    </svg>
  )
}

// 4. statistical_reg — linea di regressione con osservazioni
function GraphicRegression() {
  return (
    <svg viewBox="0 0 300 100" className="w-full h-36 rounded-t-sm" preserveAspectRatio="none">
      <rect width="300" height="100" fill="#f0fdf4" />
      {/* Axes */}
      <line x1="40" y1="85" x2="275" y2="85" stroke="#86efac" strokeWidth="1" />
      <line x1="40" y1="15" x2="40" y2="85" stroke="#86efac" strokeWidth="1" />
      {/* Scatter points */}
      <circle cx="60" cy="72" r="4" fill="#14b8a6" opacity="0.6" />
      <circle cx="85" cy="65" r="4" fill="#14b8a6" opacity="0.6" />
      <circle cx="105" cy="58" r="4" fill="#14b8a6" opacity="0.6" />
      <circle cx="130" cy="60" r="4" fill="#14b8a6" opacity="0.6" />
      <circle cx="150" cy="48" r="4" fill="#14b8a6" opacity="0.6" />
      <circle cx="175" cy="42" r="4" fill="#14b8a6" opacity="0.6" />
      <circle cx="195" cy="45" r="4" fill="#14b8a6" opacity="0.6" />
      <circle cx="220" cy="35" r="4" fill="#14b8a6" opacity="0.6" />
      <circle cx="245" cy="28" r="4" fill="#14b8a6" opacity="0.6" />
      <circle cx="265" cy="22" r="4" fill="#14b8a6" opacity="0.6" />
      {/* Regression line */}
      <line x1="45" y1="78" x2="275" y2="18" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  )
}

// 5. TIME-SERIES (gold) — lingotto d'oro
function GraphicGold() {
  return (
    <svg viewBox="0 0 300 100" className="w-full h-36 rounded-t-sm" preserveAspectRatio="none">
      <rect width="300" height="100" fill="#fefce8" />
      {/* Gold bar 3D effect */}
      <polygon points="110,70 130,40 200,40 220,70" fill="#eab308" />
      <polygon points="130,40 145,28 215,28 200,40" fill="#facc15" />
      <polygon points="200,40 215,28 235,58 220,70" fill="#ca8a04" />
      {/* Shine */}
      <rect x="140" y="44" width="30" height="4" rx="2" fill="#fef08a" opacity="0.7" />
      {/* Sparkles */}
      <text x="90" y="30" fontSize="12" fill="#eab308" opacity="0.6">✦</text>
      <text x="240" y="45" fontSize="10" fill="#eab308" opacity="0.5">✦</text>
      <text x="160" y="22" fontSize="8" fill="#fbbf24" opacity="0.4">✦</text>
    </svg>
  )
}

// 6. tree — albero di classificazione
function GraphicTree() {
  return (
    <svg viewBox="0 0 300 100" className="w-full h-36 rounded-t-sm" preserveAspectRatio="none">
      <rect width="300" height="100" fill="#f0fdf4" />
      {/* Tree edges */}
      <line x1="150" y1="20" x2="90" y2="50" stroke="#16a34a" strokeWidth="1.5" />
      <line x1="150" y1="20" x2="210" y2="50" stroke="#16a34a" strokeWidth="1.5" />
      <line x1="90" y1="50" x2="60" y2="78" stroke="#16a34a" strokeWidth="1.5" />
      <line x1="90" y1="50" x2="120" y2="78" stroke="#16a34a" strokeWidth="1.5" />
      <line x1="210" y1="50" x2="180" y2="78" stroke="#16a34a" strokeWidth="1.5" />
      <line x1="210" y1="50" x2="240" y2="78" stroke="#16a34a" strokeWidth="1.5" />
      {/* Root node */}
      <circle cx="150" cy="20" r="10" fill="#bbf7d0" stroke="#16a34a" strokeWidth="1.5" />
      {/* Internal nodes */}
      <circle cx="90" cy="50" r="8" fill="#dcfce7" stroke="#22c55e" strokeWidth="1.5" />
      <circle cx="210" cy="50" r="8" fill="#dcfce7" stroke="#22c55e" strokeWidth="1.5" />
      {/* Leaf nodes */}
      <rect x="50" y="72" width="20" height="12" rx="3" fill="#4ade80" />
      <rect x="110" y="72" width="20" height="12" rx="3" fill="#f87171" />
      <rect x="170" y="72" width="20" height="12" rx="3" fill="#4ade80" />
      <rect x="230" y="72" width="20" height="12" rx="3" fill="#f87171" />
    </svg>
  )
}

// 7. SOLVER-OPTIMIZATION — estrazione mineraria
function GraphicMining() {
  return (
    <svg viewBox="0 0 300 100" className="w-full h-36 rounded-t-sm" preserveAspectRatio="none">
      <rect width="300" height="100" fill="#f5f0e8" />
      {/* Mountain / mine */}
      <polygon points="80,85 150,25 220,85" fill="#d4a574" opacity="0.5" />
      <polygon points="120,85 165,40 210,85" fill="#92400e" opacity="0.4" />
      {/* Mine entrance */}
      <rect x="140" y="60" width="30" height="25" rx="2" fill="#451a03" />
      <path d="M140 60 Q155 50 170 60" fill="#78350f" />
      {/* Pickaxe */}
      <line x1="220" y1="75" x2="250" y2="45" stroke="#78350f" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M248 42 L260 38 L254 50 Z" fill="#6b7280" />
      {/* Cart rail */}
      <line x1="100" y1="87" x2="200" y2="87" stroke="#78350f" strokeWidth="1.5" />
      {/* Cart */}
      <rect x="105" y="78" width="20" height="10" rx="2" fill="#a16207" />
      <circle cx="110" cy="90" r="3" fill="#374151" />
      <circle cx="120" cy="90" r="3" fill="#374151" />
    </svg>
  )
}

// Map project index to graphic
const GRAPHICS = [
  GraphicSyrias,       // 0: SYRIAS
  GraphicTimeSeries,   // 1: forecast-ftse
  GraphicFlask,        // 2: presentazione-flask
  GraphicRegression,   // 3: statistical_reg
  GraphicGold,         // 4: TIME-SERIES (gold)
  GraphicTree,         // 5: tree
  GraphicMining,       // 6: SOLVER-OPTIMIZATION
]

function ProjectCard({ project, index, delay }) {
  const ref = useIntersectionObserver({ threshold: 0.1 })
  const Graphic = GRAPHICS[index] || GRAPHICS[0]

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      ref={ref}
      className="fade-up bg-dark-800 border border-dark-600 rounded-sm overflow-hidden flex flex-col hover:border-gold-500/50 hover:scale-[1.03] transition-all duration-300 group cursor-pointer"
      style={{ transitionDelay: `${delay}ms` }}
      aria-label={project.name}
    >
      {/* Custom graphic */}
      <Graphic />

      <div className="p-5 flex flex-col gap-3 flex-1">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-bold text-white text-sm leading-snug group-hover:text-gold-400 transition-colors">{project.name}</h3>
          <span className="text-[10px] font-semibold text-gold-400 bg-dark-700 border border-dark-600 px-2 py-0.5 rounded-sm whitespace-nowrap flex-shrink-0">
            {project.lang}
          </span>
        </div>

        <p className="text-muted-400 text-xs leading-relaxed flex-1">{project.description}</p>

        {/* GitHub icon only */}
        <div className="flex items-center mt-auto">
          <svg className="w-5 h-5 text-muted-400 group-hover:text-gold-400 transition-colors" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
    </a>
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
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {items.map((project, idx) => (
            <ProjectCard key={project.name} project={project} index={idx} delay={idx * 80} />
          ))}
        </div>
      </div>
    </section>
  )
}
