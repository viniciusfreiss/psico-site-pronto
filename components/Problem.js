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
    <section id="problem" className="relative py-10 px-6 bg-white">
      {/* Cabeçalho com gradiente e sublinhado */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-gradient inline-block underline-grow">
          O que tem travado seu caminho?
        </h2>
        <p className="text-lg text-support mt-4 animate-fade-in">
          Identificar suas dores é o primeiro passo para retomar o controle da sua vida.
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


      {/* Transição */}
      <div className="mt-16 h-12 bg-gradient-to-b from-white to-neutral pointer-events-none"></div>
    </section>
  )
}
