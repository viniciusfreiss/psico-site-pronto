// components/Problem.js
import {
  ExclamationCircleIcon,
  ExclamationTriangleIcon,
  FireIcon,
  HeartIcon,
  PuzzlePieceIcon,
  SunIcon
} from '@heroicons/react/24/outline'

const issues = [
  { title: 'Carga Emocional',      desc: 'Preocupações que não te largam.',          Icon: ExclamationCircleIcon, bg: 'bg-neutral' },
  { title: 'Ansiedade Constante',  desc: 'Pensamentos que aceleram demais.',        Icon: ExclamationTriangleIcon, bg: 'bg-neutral/50' },
  { title: 'Falta de Clareza',     desc: 'Sem saber pra onde olhar primeiro.',      Icon: PuzzlePieceIcon, bg: 'bg-neutral' },
  { title: 'Bloqueios Emocionais', desc: 'Dificuldade em ser vulnerável.',         Icon: HeartIcon, bg: 'bg-neutral/50' },
  { title: 'Medo de Decidir',      desc: 'Escolhas que paralisam você.',            Icon: FireIcon, bg: 'bg-neutral' },
  { title: 'Baixa Energia',        desc: 'Cansaço que atrapalha seus dias.',        Icon: SunIcon, bg: 'bg-neutral/50' }
]

export default function Problem() {
  return (
    <section id="problem" className="relative py-20 px-6 bg-white">
      {/* Cabeçalho com destaques */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-secondary">
          Está enfrentando <span className="text-primary">esses desafios</span> que te <span className="text-accent">impêdem de avançar</span>?
        </h2>
        <p className="text-lg text-support mt-4">
          Reconhecer o que te incomoda é o primeiro passo para a transformação.
        </p>
      </div>

      {/* Grid de cards */}
      <div className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {issues.map(({ title, desc, Icon, bg }, i) => (
          <div
            key={i}
            className={`
              ${bg} rounded-2xl p-6 shadow-md hover:shadow-lg transition-transform transform hover:scale-105
              flex flex-col items-center text-center
            `}
          >
            <div className="p-4 rounded-full bg-primary/20 mb-4 hover:bg-primary/40 transition">
              <Icon className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-secondary mb-2">
              <span className="text-primary">»</span> {title}
            </h3>
            <p className="text-support">
              {desc}
            </p>
          </div>
        ))}
      </div>

      {/* Conector visual para Solution */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-[-20px]">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#F2A65A" strokeWidth="2">
          <path d="M12 5v14m0 0l-6-6m6 6l6-6" />
        </svg>
      </div>

      {/* Base degradê de transição */}
      <div className="mt-16 h-12 bg-gradient-to-b from-white to-neutral pointer-events-none"></div>
    </section>
  )
}
