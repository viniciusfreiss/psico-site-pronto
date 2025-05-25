import {
  ExclamationCircleIcon,
  ExclamationTriangleIcon,
  FireIcon,
  HeartIcon,
  PuzzlePieceIcon,
  SunIcon
} from '@heroicons/react/24/outline'

const issues = [
  { title: "Angústia de dizer 'não'", desc: 'O medo intenso de desagradar pode causar sobrecarga emocional.', Icon: ExclamationCircleIcon, bg: 'bg-neutral' },
  { title: 'Ansiedade e Depressão',  desc: 'A depressão é a principal causa de incapacidade no mundo e cerca de 19 milhões de brasileiros convivem com o transtorno de ansiedade.', Icon: ExclamationTriangleIcon, bg: 'bg-neutral/50' },
  { title: 'Falta de Clareza',       desc: 'Fator de risco emocional e psicológico.', Icon: PuzzlePieceIcon, bg: 'bg-neutral' },
  { title: 'Baixa Autoestima',       desc: 'Indicador de vulnerabilidade, tendo 2,5 vezes mais chances de desenvolver depressão.', Icon: HeartIcon, bg: 'bg-neutral/50' },
  { title: 'Medo de Mudar',          desc: 'Pessoas relataram medo intenso de “não saber como será o amanhã”, afetando 301 milhões de pessoas no mundo.', Icon: FireIcon, bg: 'bg-neutral' },
  { title: 'Baixa Energia',          desc: 'Pode decorrer de uma preocupação e/ou tensão contínua.', Icon: SunIcon, bg: 'bg-neutral/50' }
]

export default function Problem() {
  return (
    <section id="problem" className="relative py-10 px-6 bg-white">
      {/* Cabeçalho */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-gradient inline-block underline-grow">
          Você conhece as suas dores?
        </h2>
        <p className="text-lg text-support mt-4 animate-fade-in">
          Se a dor física te leva ao médico por que a dor emocional não te leva a terapia?
        </p>
      </div>

      {/* Grid de cards */}
      <div className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {issues.map(({ title, desc, Icon, bg }, i) => (
          <div
            key={i}
            className={`${bg} rounded-2xl p-6 shadow-md hover:shadow-lg transition-transform transform hover:scale-105 flex flex-col items-center text-center`}
          >
            <div className="p-4 rounded-full bg-primary/20 mb-4 hover:bg-primary/40 transition">
              <Icon className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-secondary mb-2">
              <span className="text-primary">»</span> {title}
            </h3>
            <p className="text-support">{desc}</p>
          </div>
        ))}
      </div>

      {/* Estatística */}
      <div className="max-w-6xl mx-auto mt-6 text-center">
        <p className="text-lg font-medium text-primary">
          * 1 em cada 4 pessoas no mundo sofre de algum transtorno mental a cada ano.
        </p>
      </div>

      {/* Fonte */}
      <div className="max-w-6xl mx-auto mt-4 text-center">
        <p className="text-sm text-support">Dados da OMS (Organização Mundial da Saúde).</p>
      </div>

      {/* Transição */}
      <div className="mt-16 h-12 bg-gradient-to-b from-white to-neutral pointer-events-none"></div>
    </section>
  )
}
