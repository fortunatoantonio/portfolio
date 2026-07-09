import { useTranslation } from 'react-i18next'
import useIntersectionObserver from '../hooks/useIntersectionObserver'
import { SectionTitle } from './About'

/* ── Professional SVG Graphics as background images ── */

function GraphicSyrias() {
  return (
    <svg viewBox="0 0 600 300" className="absolute inset-0 w-full h-full object-cover" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="syrias-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1e293b" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>
      </defs>
      <rect width="600" height="300" fill="url(#syrias-bg)" />
      <rect x="80" y="40" width="440" height="220" rx="12" fill="#1a1a2e" stroke="#334155" strokeWidth="1" />
      <circle cx="110" cy="60" r="6" fill="#ef4444" />
      <circle cx="130" cy="60" r="6" fill="#eab308" />
      <circle cx="150" cy="60" r="6" fill="#22c55e" />
      <rect x="90" y="78" width="420" height="1" fill="#334155" />
      <rect x="110" y="100" width="100" height="10" rx="3" fill="#818cf8" opacity="0.7" />
      <rect x="220" y="100" width="70" height="10" rx="3" fill="#67e8f9" opacity="0.5" />
      <rect x="110" y="125" width="140" height="10" rx="3" fill="#a78bfa" opacity="0.6" />
      <rect x="260" y="125" width="80" height="10" rx="3" fill="#fbbf24" opacity="0.5" />
      <rect x="110" y="150" width="80" height="10" rx="3" fill="#34d399" opacity="0.6" />
      <rect x="200" y="150" width="120" height="10" rx="3" fill="#818cf8" opacity="0.4" />
      <rect x="110" y="175" width="160" height="10" rx="3" fill="#67e8f9" opacity="0.5" />
      <rect x="110" y="200" width="90" height="10" rx="3" fill="#fbbf24" opacity="0.4" />
      <rect x="210" y="200" width="60" height="10" rx="3" fill="#a78bfa" opacity="0.5" />
      <text x="300" y="240" textAnchor="middle" fontFamily="monospace" fontSize="24" fontWeight="bold" fill="#e8c547" letterSpacing="4" opacity="0.8">SYRIAS</text>
      <circle cx="520" cy="240" r="20" fill="#e8c547" opacity="0.06" />
      <circle cx="80" cy="270" r="14" fill="#818cf8" opacity="0.08" />
    </svg>
  )
}

function GraphicTimeSeries() {
  return (
    <svg viewBox="0 0 600 300" className="absolute inset-0 w-full h-full object-cover" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="ftse-bg2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0c1222" />
          <stop offset="100%" stopColor="#1a1a2e" />
        </linearGradient>
      </defs>
      <rect width="600" height="300" fill="url(#ftse-bg2)" />
      <line x1="50" y1="250" x2="560" y2="250" stroke="#1e3a5f" strokeWidth="0.8" />
      <line x1="50" y1="200" x2="560" y2="200" stroke="#1e3a5f" strokeWidth="0.4" strokeDasharray="5" />
      <line x1="50" y1="150" x2="560" y2="150" stroke="#1e3a5f" strokeWidth="0.4" strokeDasharray="5" />
      <line x1="50" y1="100" x2="560" y2="100" stroke="#1e3a5f" strokeWidth="0.4" strokeDasharray="5" />
      <line x1="50" y1="50" x2="560" y2="50" stroke="#1e3a5f" strokeWidth="0.4" strokeDasharray="5" />
      <path d="M50,220 100,190 150,200 200,140 250,160 300,100 350,130 400,80 450,95 500,60 550,75" fill="none" stroke="#3b82f6" strokeWidth="3" strokeLinejoin="round" />
      <path d="M50,220 100,190 150,200 200,140 250,160 300,100 350,130 400,80 450,95 500,60 550,75 560,75 560,260 50,260 Z" fill="#3b82f6" opacity="0.08" />
      <circle cx="300" cy="100" r="6" fill="#3b82f6" /><circle cx="300" cy="100" r="12" fill="#3b82f6" opacity="0.15" />
      <circle cx="450" cy="95" r="6" fill="#3b82f6" /><circle cx="450" cy="95" r="12" fill="#3b82f6" opacity="0.15" />
      <circle cx="550" cy="75" r="6" fill="#60a5fa" /><circle cx="550" cy="75" r="12" fill="#60a5fa" opacity="0.15" />
      <text x="300" y="45" textAnchor="middle" fontFamily="monospace" fontSize="14" fill="#60a5fa" opacity="0.6">FTSE MIB</text>
    </svg>
  )
}

function GraphicFlask() {
  return (
    <svg viewBox="0 0 600 300" className="absolute inset-0 w-full h-full object-cover" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="flask-bg2" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1a1a2e" />
          <stop offset="100%" stopColor="#16213e" />
        </linearGradient>
      </defs>
      <rect width="600" height="300" fill="url(#flask-bg2)" />
      <path d="M260 50 L260 120 L200 240 Q190 270 220 270 L380 270 Q410 270 400 240 L340 120 L340 50" fill="none" stroke="#f97316" strokeWidth="2.5" />
      <rect x="250" y="40" width="100" height="15" rx="5" fill="#f97316" opacity="0.3" />
      <path d="M215 225 Q220 210 260 200 Q300 190 340 200 Q380 210 385 225 L400 240 Q410 270 380 270 L220 270 Q190 270 200 240 Z" fill="#f97316" opacity="0.15" />
      <circle cx="270" cy="230" r="7" fill="#fb923c" opacity="0.4" />
      <circle cx="320" cy="215" r="5" fill="#fdba74" opacity="0.5" />
      <circle cx="295" cy="245" r="9" fill="#f97316" opacity="0.25" />
      <circle cx="340" cy="235" r="4" fill="#fb923c" opacity="0.3" />
      <path d="M450 80 Q460 70 470 80 Q480 90 470 100 Q460 110 470 120 Q480 130 490 120" fill="none" stroke="#fbbf24" strokeWidth="3" strokeLinecap="round" />
      <circle cx="450" cy="80" r="4" fill="#fbbf24" />
      <text x="300" y="45" textAnchor="middle" fontFamily="monospace" fontSize="18" fill="#94a3b8" opacity="0.4">HTML</text>
    </svg>
  )
}

function GraphicRegression() {
  return (
    <svg viewBox="0 0 600 300" className="absolute inset-0 w-full h-full object-cover" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="reg-bg2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0a1628" />
          <stop offset="100%" stopColor="#1a1a2e" />
        </linearGradient>
      </defs>
      <rect width="600" height="300" fill="url(#reg-bg2)" />
      <line x1="60" y1="260" x2="560" y2="260" stroke="#334155" strokeWidth="1" />
      <line x1="60" y1="30" x2="60" y2="260" stroke="#334155" strokeWidth="1" />
      <path d="M70,250 120,230 170,220 220,195 270,180 320,155 370,140 420,115 470,95 520,70 550,55 550,20 520,35 470,55 420,75 370,100 320,115 270,140 220,160 170,180 120,200 70,220 Z" fill="#10b981" opacity="0.05" />
      <circle cx="90" cy="238" r="6" fill="#14b8a6" opacity="0.7" />
      <circle cx="140" cy="220" r="6" fill="#14b8a6" opacity="0.7" />
      <circle cx="190" cy="210" r="6" fill="#14b8a6" opacity="0.7" />
      <circle cx="235" cy="190" r="6" fill="#14b8a6" opacity="0.7" />
      <circle cx="285" cy="170" r="6" fill="#14b8a6" opacity="0.7" />
      <circle cx="330" cy="150" r="6" fill="#14b8a6" opacity="0.7" />
      <circle cx="380" cy="135" r="6" fill="#14b8a6" opacity="0.7" />
      <circle cx="430" cy="110" r="6" fill="#14b8a6" opacity="0.7" />
      <circle cx="480" cy="90" r="6" fill="#14b8a6" opacity="0.7" />
      <circle cx="530" cy="65" r="6" fill="#14b8a6" opacity="0.7" />
      <line x1="70" y1="248" x2="555" y2="45" stroke="#10b981" strokeWidth="3" strokeDasharray="8 4" />
      <text x="510" y="260" fontFamily="monospace" fontSize="13" fill="#10b981" opacity="0.7">R²=0.94</text>
    </svg>
  )
}

function GraphicGold() {
  return (
    <svg viewBox="0 0 600 300" className="absolute inset-0 w-full h-full object-cover" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="gold-bg2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1a1508" />
          <stop offset="100%" stopColor="#0f0d08" />
        </linearGradient>
      </defs>
      <rect width="600" height="300" fill="url(#gold-bg2)" />
      <line x1="60" y1="260" x2="560" y2="260" stroke="#3d2f0a" strokeWidth="0.8" />
      <line x1="60" y1="200" x2="560" y2="200" stroke="#3d2f0a" strokeWidth="0.4" strokeDasharray="4" />
      <line x1="60" y1="140" x2="560" y2="140" stroke="#3d2f0a" strokeWidth="0.4" strokeDasharray="4" />
      <line x1="60" y1="80" x2="560" y2="80" stroke="#3d2f0a" strokeWidth="0.4" strokeDasharray="4" />
      <rect x="90" y="150" width="14" height="80" fill="#eab308" opacity="0.8" /><line x1="97" y1="130" x2="97" y2="250" stroke="#eab308" strokeWidth="1.5" />
      <rect x="140" y="170" width="14" height="60" fill="#dc2626" opacity="0.6" /><line x1="147" y1="150" x2="147" y2="245" stroke="#dc2626" strokeWidth="1.5" />
      <rect x="190" y="110" width="14" height="100" fill="#eab308" opacity="0.8" /><line x1="197" y1="85" x2="197" y2="230" stroke="#eab308" strokeWidth="1.5" />
      <rect x="240" y="80" width="14" height="110" fill="#eab308" opacity="0.8" /><line x1="247" y1="60" x2="247" y2="210" stroke="#eab308" strokeWidth="1.5" />
      <rect x="290" y="100" width="14" height="80" fill="#dc2626" opacity="0.6" /><line x1="297" y1="75" x2="297" y2="200" stroke="#dc2626" strokeWidth="1.5" />
      <rect x="340" y="60" width="14" height="120" fill="#eab308" opacity="0.8" /><line x1="347" y1="40" x2="347" y2="200" stroke="#eab308" strokeWidth="1.5" />
      <rect x="390" y="50" width="14" height="100" fill="#eab308" opacity="0.8" /><line x1="397" y1="30" x2="397" y2="170" stroke="#eab308" strokeWidth="1.5" />
      <rect x="440" y="70" width="14" height="80" fill="#dc2626" opacity="0.6" /><line x1="447" y1="50" x2="447" y2="170" stroke="#dc2626" strokeWidth="1.5" />
      <rect x="490" y="40" width="14" height="110" fill="#eab308" opacity="0.8" /><line x1="497" y1="25" x2="497" y2="170" stroke="#eab308" strokeWidth="1.5" />
      <polyline points="97,150 147,170 197,110 247,80 297,100 347,60 397,50 447,70 497,40" fill="none" stroke="#fbbf24" strokeWidth="2" opacity="0.5" />
      <text x="530" y="55" fontFamily="monospace" fontSize="14" fill="#eab308" opacity="0.5">GOLD</text>
    </svg>
  )
}

function GraphicTree() {
  return (
    <svg viewBox="0 0 600 300" className="absolute inset-0 w-full h-full object-cover" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="tree-bg2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0a1628" />
          <stop offset="100%" stopColor="#0f1f14" />
        </linearGradient>
      </defs>
      <rect width="600" height="300" fill="url(#tree-bg2)" />
      <line x1="300" y1="35" x2="170" y2="100" stroke="#22c55e" strokeWidth="2" opacity="0.6" />
      <line x1="300" y1="35" x2="430" y2="100" stroke="#22c55e" strokeWidth="2" opacity="0.6" />
      <line x1="170" y1="100" x2="100" y2="175" stroke="#22c55e" strokeWidth="2" opacity="0.5" />
      <line x1="170" y1="100" x2="240" y2="175" stroke="#22c55e" strokeWidth="2" opacity="0.5" />
      <line x1="430" y1="100" x2="360" y2="175" stroke="#22c55e" strokeWidth="2" opacity="0.5" />
      <line x1="430" y1="100" x2="500" y2="175" stroke="#22c55e" strokeWidth="2" opacity="0.5" />
      <line x1="100" y1="175" x2="65" y2="245" stroke="#22c55e" strokeWidth="1.5" opacity="0.4" />
      <line x1="100" y1="175" x2="135" y2="245" stroke="#22c55e" strokeWidth="1.5" opacity="0.4" />
      <line x1="500" y1="175" x2="465" y2="245" stroke="#22c55e" strokeWidth="1.5" opacity="0.4" />
      <line x1="500" y1="175" x2="535" y2="245" stroke="#22c55e" strokeWidth="1.5" opacity="0.4" />
      <circle cx="300" cy="35" r="18" fill="#166534" stroke="#22c55e" strokeWidth="2.5" />
      <text x="300" y="41" textAnchor="middle" fontSize="12" fill="#86efac" fontWeight="bold">X1</text>
      <circle cx="170" cy="100" r="14" fill="#14532d" stroke="#16a34a" strokeWidth="2" />
      <text x="170" y="105" textAnchor="middle" fontSize="10" fill="#4ade80">X2</text>
      <circle cx="430" cy="100" r="14" fill="#14532d" stroke="#16a34a" strokeWidth="2" />
      <text x="430" y="105" textAnchor="middle" fontSize="10" fill="#4ade80">X3</text>
      <circle cx="100" cy="175" r="11" fill="#1a2e1a" stroke="#15803d" strokeWidth="1.5" />
      <circle cx="240" cy="175" r="11" fill="#1a2e1a" stroke="#15803d" strokeWidth="1.5" />
      <circle cx="360" cy="175" r="11" fill="#1a2e1a" stroke="#15803d" strokeWidth="1.5" />
      <circle cx="500" cy="175" r="11" fill="#1a2e1a" stroke="#15803d" strokeWidth="1.5" />
      <rect x="48" y="238" width="34" height="18" rx="5" fill="#22c55e" opacity="0.8" />
      <rect x="118" y="238" width="34" height="18" rx="5" fill="#ef4444" opacity="0.7" />
      <rect x="448" y="238" width="34" height="18" rx="5" fill="#22c55e" opacity="0.8" />
      <rect x="518" y="238" width="34" height="18" rx="5" fill="#ef4444" opacity="0.7" />
      <text x="65" y="251" textAnchor="middle" fontSize="9" fill="white">A</text>
      <text x="135" y="251" textAnchor="middle" fontSize="9" fill="white">B</text>
      <text x="465" y="251" textAnchor="middle" fontSize="9" fill="white">A</text>
      <text x="535" y="251" textAnchor="middle" fontSize="9" fill="white">B</text>
    </svg>
  )
}

function GraphicMining() {
  return (
    <svg viewBox="0 0 600 300" className="absolute inset-0 w-full h-full object-cover" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="mine-bg2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1a1508" />
          <stop offset="100%" stopColor="#1a1a1a" />
        </linearGradient>
      </defs>
      <rect width="600" height="300" fill="url(#mine-bg2)" />
      <line x1="60" y1="260" x2="560" y2="260" stroke="#4a3810" strokeWidth="1" />
      <line x1="60" y1="30" x2="60" y2="260" stroke="#4a3810" strokeWidth="1" />
      <path d="M70,50 C150,55 230,80 300,120 C370,160 440,210 500,240 C530,250 550,255 560,258" fill="none" stroke="#eab308" strokeWidth="3" strokeLinecap="round" />
      <path d="M70,255 C150,250 230,235 300,200 C370,165 440,115 500,70 C530,50 550,40 560,35" fill="none" stroke="#dc2626" strokeWidth="2" strokeDasharray="6 4" opacity="0.7" />
      <circle cx="350" cy="160" r="10" fill="none" stroke="#fbbf24" strokeWidth="2.5" />
      <circle cx="350" cy="160" r="4" fill="#fbbf24" />
      <text x="300" y="280" textAnchor="middle" fontFamily="monospace" fontSize="11" fill="#a16207" opacity="0.7">Time (t)</text>
      <text x="35" y="150" textAnchor="middle" fontFamily="monospace" fontSize="11" fill="#a16207" opacity="0.7" transform="rotate(-90 35 150)">q(t)</text>
      <rect x="240" y="30" width="18" height="5" rx="2" fill="#eab308" />
      <text x="264" y="36" fontFamily="monospace" fontSize="9" fill="#d4a574">Extraction</text>
      <rect x="330" y="30" width="18" height="5" rx="2" fill="#dc2626" opacity="0.7" />
      <text x="354" y="36" fontFamily="monospace" fontSize="9" fill="#d4a574">Reserve</text>
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
      className="fade-up relative rounded-lg overflow-hidden group cursor-pointer aspect-[4/3]"
      style={{ transitionDelay: `${delay}ms` }}
      aria-label={project.name}
    >
      {/* Background graphic */}
      <Graphic />

      {/* Gradient overlay from bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-all duration-500 group-hover:from-black/95 group-hover:via-black/50" />

      {/* Hover lift effect */}
      <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-[1.04]">
        <Graphic />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-all duration-500 group-hover:from-black/95 group-hover:via-black/50" />

      {/* Content overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 z-10">
        <h3 className="text-white font-bold text-base sm:text-lg mb-1 group-hover:text-gold-400 transition-colors">
          {project.name}
        </h3>
        <p className="text-white/70 text-xs sm:text-sm leading-relaxed mb-3 line-clamp-2">
          {project.description}
        </p>
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-semibold text-gold-400 bg-white/10 backdrop-blur-sm border border-white/10 px-2.5 py-1 rounded-full">
            {project.lang}
          </span>
          <svg className="w-4 h-4 text-white/50 group-hover:text-gold-400 transition-colors ml-auto" fill="currentColor" viewBox="0 0 24 24">
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
        <div className="mt-10 grid grid-cols-1 min-[480px]:grid-cols-2 gap-5">
          {items.map((project, idx) => (
            <ProjectCard key={project.name} project={project} index={idx} delay={idx * 80} />
          ))}
        </div>
      </div>
    </section>
  )
}
