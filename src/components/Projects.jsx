import { useTranslation } from 'react-i18next'
import useIntersectionObserver from '../hooks/useIntersectionObserver'
import { SectionTitle } from './About'

/* ── Professional SVG Graphics per progetto ── */

function GraphicSyrias() {
  return (
    <svg viewBox="0 0 400 180" className="w-full h-32 rounded-t-sm" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="syrias-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1e293b" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>
      </defs>
      <rect width="400" height="180" fill="url(#syrias-bg)" />
      {/* Terminal window */}
      <rect x="60" y="30" width="280" height="120" rx="8" fill="#1a1a2e" stroke="#334155" strokeWidth="1" />
      <circle cx="80" cy="44" r="4" fill="#ef4444" />
      <circle cx="94" cy="44" r="4" fill="#eab308" />
      <circle cx="108" cy="44" r="4" fill="#22c55e" />
      <rect x="70" y="56" width="260" height="1" fill="#334155" />
      {/* Code lines */}
      <rect x="80" y="68" width="60" height="6" rx="2" fill="#818cf8" opacity="0.7" />
      <rect x="148" y="68" width="40" height="6" rx="2" fill="#67e8f9" opacity="0.5" />
      <rect x="80" y="82" width="80" height="6" rx="2" fill="#a78bfa" opacity="0.6" />
      <rect x="168" y="82" width="50" height="6" rx="2" fill="#fbbf24" opacity="0.5" />
      <rect x="80" y="96" width="45" height="6" rx="2" fill="#34d399" opacity="0.6" />
      <rect x="133" y="96" width="70" height="6" rx="2" fill="#818cf8" opacity="0.4" />
      {/* SYRIAS text */}
      <text x="200" y="128" textAnchor="middle" fontFamily="monospace" fontSize="18" fontWeight="bold" fill="#e8c547" letterSpacing="3" opacity="0.9">SYRIAS</text>
      {/* Decorative dots */}
      <circle cx="340" cy="140" r="12" fill="#e8c547" opacity="0.08" />
      <circle cx="60" cy="160" r="8" fill="#818cf8" opacity="0.1" />
    </svg>
  )
}

function GraphicTimeSeries() {
  return (
    <svg viewBox="0 0 400 180" className="w-full h-32 rounded-t-sm" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="ftse-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0c1222" />
          <stop offset="100%" stopColor="#1a1a2e" />
        </linearGradient>
      </defs>
      <rect width="400" height="180" fill="url(#ftse-bg)" />
      {/* Grid */}
      <line x1="40" y1="150" x2="380" y2="150" stroke="#1e3a5f" strokeWidth="0.5" />
      <line x1="40" y1="120" x2="380" y2="120" stroke="#1e3a5f" strokeWidth="0.3" strokeDasharray="4" />
      <line x1="40" y1="90" x2="380" y2="90" stroke="#1e3a5f" strokeWidth="0.3" strokeDasharray="4" />
      <line x1="40" y1="60" x2="380" y2="60" stroke="#1e3a5f" strokeWidth="0.3" strokeDasharray="4" />
      <line x1="40" y1="30" x2="380" y2="30" stroke="#1e3a5f" strokeWidth="0.3" strokeDasharray="4" />
      {/* Area fill */}
      <path d="M40,130 70,110 100,120 130,80 160,95 190,60 220,75 250,45 280,55 310,35 340,50 370,40 380,40 380,150 40,150 Z" fill="#2563eb" opacity="0.1" />
      {/* Line */}
      <polyline points="40,130 70,110 100,120 130,80 160,95 190,60 220,75 250,45 280,55 310,35 340,50 370,40" fill="none" stroke="#3b82f6" strokeWidth="2.5" strokeLinejoin="round" />
      {/* Glow points */}
      <circle cx="190" cy="60" r="4" fill="#3b82f6" />
      <circle cx="190" cy="60" r="8" fill="#3b82f6" opacity="0.2" />
      <circle cx="310" cy="35" r="4" fill="#3b82f6" />
      <circle cx="310" cy="35" r="8" fill="#3b82f6" opacity="0.2" />
      <circle cx="370" cy="40" r="4" fill="#60a5fa" />
      {/* Label */}
      <text x="360" y="25" textAnchor="end" fontFamily="monospace" fontSize="9" fill="#60a5fa" opacity="0.7">FTSE MIB</text>
    </svg>
  )
}

function GraphicFlask() {
  return (
    <svg viewBox="0 0 400 180" className="w-full h-32 rounded-t-sm" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="flask-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1a1a2e" />
          <stop offset="100%" stopColor="#16213e" />
        </linearGradient>
      </defs>
      <rect width="400" height="180" fill="url(#flask-bg)" />
      {/* Flask/beaker shape */}
      <path d="M170 40 L170 80 L140 140 Q135 155 150 155 L250 155 Q265 155 260 140 L230 80 L230 40" fill="none" stroke="#f97316" strokeWidth="2" />
      <rect x="165" y="35" width="70" height="10" rx="3" fill="#f97316" opacity="0.3" />
      {/* Liquid */}
      <path d="M148 130 Q150 120 165 115 Q200 105 235 115 Q250 120 252 130 L260 140 Q265 155 250 155 L150 155 Q135 155 140 140 Z" fill="#f97316" opacity="0.2" />
      {/* Bubbles */}
      <circle cx="180" cy="130" r="4" fill="#fb923c" opacity="0.4" />
      <circle cx="210" cy="120" r="3" fill="#fdba74" opacity="0.5" />
      <circle cx="195" cy="140" r="5" fill="#f97316" opacity="0.3" />
      {/* Python logo hint */}
      <path d="M290 60 Q295 55 300 60 Q305 65 300 70 Q295 75 300 80" fill="none" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" />
      <circle cx="290" cy="60" r="2.5" fill="#fbbf24" />
      {/* HTML tags */}
      <text x="80" y="90" fontFamily="monospace" fontSize="11" fill="#94a3b8" opacity="0.4">&lt;html&gt;</text>
      <text x="310" y="130" fontFamily="monospace" fontSize="11" fill="#94a3b8" opacity="0.4">&lt;/&gt;</text>
    </svg>
  )
}

function GraphicRegression() {
  return (
    <svg viewBox="0 0 400 180" className="w-full h-32 rounded-t-sm" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="reg-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0a1628" />
          <stop offset="100%" stopColor="#1a1a2e" />
        </linearGradient>
      </defs>
      <rect width="400" height="180" fill="url(#reg-bg)" />
      {/* Axes */}
      <line x1="50" y1="155" x2="370" y2="155" stroke="#334155" strokeWidth="1" />
      <line x1="50" y1="20" x2="50" y2="155" stroke="#334155" strokeWidth="1" />
      {/* Confidence interval */}
      <path d="M55,145 80,135 120,118 160,105 200,88 240,72 280,58 320,42 360,28" fill="none" stroke="#10b981" strokeWidth="0" />
      <path d="M55,155 80,148 120,135 160,125 200,112 240,98 280,85 320,72 360,58 360,8 320,18 280,32 240,48 200,62 160,78 120,95 80,110 55,125 Z" fill="#10b981" opacity="0.06" />
      {/* Scatter points */}
      <circle cx="70" cy="138" r="5" fill="#14b8a6" opacity="0.7" />
      <circle cx="100" cy="125" r="5" fill="#14b8a6" opacity="0.7" />
      <circle cx="130" cy="118" r="5" fill="#14b8a6" opacity="0.7" />
      <circle cx="155" cy="108" r="5" fill="#14b8a6" opacity="0.7" />
      <circle cx="185" cy="95" r="5" fill="#14b8a6" opacity="0.7" />
      <circle cx="210" cy="88" r="5" fill="#14b8a6" opacity="0.7" />
      <circle cx="240" cy="78" r="5" fill="#14b8a6" opacity="0.7" />
      <circle cx="270" cy="62" r="5" fill="#14b8a6" opacity="0.7" />
      <circle cx="300" cy="52" r="5" fill="#14b8a6" opacity="0.7" />
      <circle cx="330" cy="42" r="5" fill="#14b8a6" opacity="0.7" />
      <circle cx="355" cy="30" r="5" fill="#14b8a6" opacity="0.7" />
      {/* Regression line */}
      <line x1="55" y1="145" x2="365" y2="25" stroke="#10b981" strokeWidth="2.5" strokeDasharray="6 3" />
      {/* R² label */}
      <text x="340" y="155" fontFamily="monospace" fontSize="10" fill="#10b981" opacity="0.7">R²=0.94</text>
    </svg>
  )
}

function GraphicGold() {
  return (
    <svg viewBox="0 0 400 180" className="w-full h-32 rounded-t-sm" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="gold-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1a1508" />
          <stop offset="100%" stopColor="#0f0d08" />
        </linearGradient>
        <linearGradient id="gold-bar" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fbbf24" />
          <stop offset="100%" stopColor="#b45309" />
        </linearGradient>
      </defs>
      <rect width="400" height="180" fill="url(#gold-bg)" />
      {/* Gold candlestick chart background */}
      <line x1="60" y1="160" x2="360" y2="160" stroke="#3d2f0a" strokeWidth="0.5" />
      <line x1="60" y1="130" x2="360" y2="130" stroke="#3d2f0a" strokeWidth="0.3" strokeDasharray="3" />
      <line x1="60" y1="100" x2="360" y2="100" stroke="#3d2f0a" strokeWidth="0.3" strokeDasharray="3" />
      {/* Candlesticks */}
      <rect x="80" y="100" width="8" height="40" fill="#eab308" opacity="0.8" />
      <line x1="84" y1="90" x2="84" y2="150" stroke="#eab308" strokeWidth="1" />
      <rect x="110" y="110" width="8" height="30" fill="#dc2626" opacity="0.6" />
      <line x1="114" y1="100" x2="114" y2="150" stroke="#dc2626" strokeWidth="1" />
      <rect x="140" y="80" width="8" height="50" fill="#eab308" opacity="0.8" />
      <line x1="144" y1="70" x2="144" y2="140" stroke="#eab308" strokeWidth="1" />
      <rect x="170" y="60" width="8" height="55" fill="#eab308" opacity="0.8" />
      <line x1="174" y1="50" x2="174" y2="125" stroke="#eab308" strokeWidth="1" />
      <rect x="200" y="70" width="8" height="40" fill="#dc2626" opacity="0.6" />
      <line x1="204" y1="55" x2="204" y2="120" stroke="#dc2626" strokeWidth="1" />
      <rect x="230" y="50" width="8" height="60" fill="#eab308" opacity="0.8" />
      <line x1="234" y1="40" x2="234" y2="120" stroke="#eab308" strokeWidth="1" />
      <rect x="260" y="40" width="8" height="50" fill="#eab308" opacity="0.8" />
      <line x1="264" y1="30" x2="264" y2="100" stroke="#eab308" strokeWidth="1" />
      {/* Gold price trend line */}
      <polyline points="84,100 114,110 144,80 174,60 204,70 234,50 264,40 300,35 340,30" fill="none" stroke="#fbbf24" strokeWidth="1.5" opacity="0.5" />
      {/* Label */}
      <text x="320" y="50" fontFamily="monospace" fontSize="10" fill="#eab308" opacity="0.6">GOLD</text>
    </svg>
  )
}

function GraphicTree() {
  return (
    <svg viewBox="0 0 400 180" className="w-full h-32 rounded-t-sm" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="tree-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0a1628" />
          <stop offset="100%" stopColor="#0f1f14" />
        </linearGradient>
      </defs>
      <rect width="400" height="180" fill="url(#tree-bg)" />
      {/* Tree edges */}
      <line x1="200" y1="25" x2="120" y2="65" stroke="#22c55e" strokeWidth="1.5" opacity="0.6" />
      <line x1="200" y1="25" x2="280" y2="65" stroke="#22c55e" strokeWidth="1.5" opacity="0.6" />
      <line x1="120" y1="65" x2="75" y2="110" stroke="#22c55e" strokeWidth="1.5" opacity="0.6" />
      <line x1="120" y1="65" x2="165" y2="110" stroke="#22c55e" strokeWidth="1.5" opacity="0.6" />
      <line x1="280" y1="65" x2="235" y2="110" stroke="#22c55e" strokeWidth="1.5" opacity="0.6" />
      <line x1="280" y1="65" x2="325" y2="110" stroke="#22c55e" strokeWidth="1.5" opacity="0.6" />
      <line x1="75" y1="110" x2="50" y2="150" stroke="#22c55e" strokeWidth="1" opacity="0.4" />
      <line x1="75" y1="110" x2="100" y2="150" stroke="#22c55e" strokeWidth="1" opacity="0.4" />
      <line x1="325" y1="110" x2="300" y2="150" stroke="#22c55e" strokeWidth="1" opacity="0.4" />
      <line x1="325" y1="110" x2="350" y2="150" stroke="#22c55e" strokeWidth="1" opacity="0.4" />
      {/* Root */}
      <circle cx="200" cy="25" r="14" fill="#166534" stroke="#22c55e" strokeWidth="2" />
      <text x="200" y="30" textAnchor="middle" fontSize="9" fill="#86efac" fontWeight="bold">X1</text>
      {/* Internal */}
      <circle cx="120" cy="65" r="11" fill="#14532d" stroke="#16a34a" strokeWidth="1.5" />
      <text x="120" y="69" textAnchor="middle" fontSize="8" fill="#4ade80">X2</text>
      <circle cx="280" cy="65" r="11" fill="#14532d" stroke="#16a34a" strokeWidth="1.5" />
      <text x="280" y="69" textAnchor="middle" fontSize="8" fill="#4ade80">X3</text>
      {/* Decision nodes */}
      <circle cx="75" cy="110" r="9" fill="#1a2e1a" stroke="#15803d" strokeWidth="1" />
      <circle cx="165" cy="110" r="9" fill="#1a2e1a" stroke="#15803d" strokeWidth="1" />
      <circle cx="235" cy="110" r="9" fill="#1a2e1a" stroke="#15803d" strokeWidth="1" />
      <circle cx="325" cy="110" r="9" fill="#1a2e1a" stroke="#15803d" strokeWidth="1" />
      {/* Leaves */}
      <rect x="38" y="144" width="24" height="14" rx="4" fill="#22c55e" opacity="0.8" />
      <rect x="88" y="144" width="24" height="14" rx="4" fill="#ef4444" opacity="0.7" />
      <rect x="288" y="144" width="24" height="14" rx="4" fill="#22c55e" opacity="0.8" />
      <rect x="338" y="144" width="24" height="14" rx="4" fill="#ef4444" opacity="0.7" />
      {/* Labels */}
      <text x="50" y="155" textAnchor="middle" fontSize="7" fill="white">A</text>
      <text x="100" y="155" textAnchor="middle" fontSize="7" fill="white">B</text>
      <text x="300" y="155" textAnchor="middle" fontSize="7" fill="white">A</text>
      <text x="350" y="155" textAnchor="middle" fontSize="7" fill="white">B</text>
    </svg>
  )
}

function GraphicMining() {
  return (
    <svg viewBox="0 0 400 180" className="w-full h-32 rounded-t-sm" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="mine-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1a1508" />
          <stop offset="100%" stopColor="#1a1a1a" />
        </linearGradient>
      </defs>
      <rect width="400" height="180" fill="url(#mine-bg)" />
      {/* Optimization curve */}
      <line x1="50" y1="155" x2="370" y2="155" stroke="#4a3810" strokeWidth="1" />
      <line x1="50" y1="20" x2="50" y2="155" stroke="#4a3810" strokeWidth="1" />
      {/* Extraction curve (Hotelling) */}
      <path d="M60,40 C100,42 140,50 180,70 C220,90 260,118 310,140 C340,150 360,153 370,154" fill="none" stroke="#eab308" strokeWidth="2.5" strokeLinecap="round" />
      {/* Reserve depletion curve */}
      <path d="M60,150 C100,148 140,140 180,120 C220,100 260,70 310,45 C340,35 360,32 370,30" fill="none" stroke="#dc2626" strokeWidth="1.5" strokeDasharray="5 3" opacity="0.7" />
      {/* Intersection point */}
      <circle cx="220" cy="95" r="6" fill="none" stroke="#fbbf24" strokeWidth="2" />
      <circle cx="220" cy="95" r="2.5" fill="#fbbf24" />
      {/* Axis labels */}
      <text x="210" y="170" textAnchor="middle" fontFamily="monospace" fontSize="8" fill="#a16207" opacity="0.7">Time (t)</text>
      <text x="35" y="90" textAnchor="middle" fontFamily="monospace" fontSize="8" fill="#a16207" opacity="0.7" transform="rotate(-90 35 90)">q(t)</text>
      {/* Legend */}
      <rect x="280" y="20" width="12" height="3" rx="1" fill="#eab308" />
      <text x="298" y="24" fontFamily="monospace" fontSize="7" fill="#d4a574">Extraction</text>
      <rect x="280" y="32" width="12" height="3" rx="1" fill="#dc2626" opacity="0.7" />
      <text x="298" y="36" fontFamily="monospace" fontSize="7" fill="#d4a574">Reserve</text>
    </svg>
  )
}

const GRAPHICS = [
  GraphicSyrias,
  GraphicTimeSeries,
  GraphicFlask,
  GraphicRegression,
  GraphicGold,
  GraphicTree,
  GraphicMining,
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
      <Graphic />
      <div className="p-5 flex flex-col gap-3 flex-1">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-bold text-white text-sm leading-snug group-hover:text-gold-400 transition-colors">{project.name}</h3>
          <span className="text-[10px] font-semibold text-gold-400 bg-dark-700 border border-dark-600 px-2 py-0.5 rounded-sm whitespace-nowrap flex-shrink-0">
            {project.lang}
          </span>
        </div>
        <p className="text-muted-400 text-xs leading-relaxed flex-1">{project.description}</p>
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
      <div className="max-w-5xl mx-auto">
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
