// components/About.js
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  UserGroupIcon,
  AcademicCapIcon,
  ClockIcon,
  PuzzlePieceIcon
} from '@heroicons/react/24/outline'

const features = [
  { title: 'Atendimento individual e em casal', Icon: UserGroupIcon },
  { title: 'Horários Flexíveis', Icon: ClockIcon },
  { title: 'Pós-graduanda em Psicanálise e Psicologia de Grupos', Icon: AcademicCapIcon },
  { title: 'Palestrante em Saúde Mental', Icon: PuzzlePieceIcon }
]

export default function About() {
  return (
    <section id="about" className="relative pt-16 pb-12 px-6 bg-neutral overflow-hidden">
      {/* Animated decor */}
      <motion.div
        className="absolute -top-12 -right-15 w-72 h-72 bg-accent/20 rounded-full pointer-events-none"
        animate={{ scale: [1, 1.05, 1], rotate: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <div className="max-w-5xl mx-auto grid md:grid-cols-[auto,1fr] gap-8 items-center">
        {/* Photo */}
        <motion.div
          className="flex justify-center md:justify-end"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative w-64 h-64 rounded-full overflow-hidden shadow-xl">
            <Image
              src="/images/foto-dayane.jpg"
              alt="Dayane de Souza Andrade"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          className="flex flex-col justify-center space-y-6"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-4xl md:text-4xl font-extrabold text-secondary leading-tight">
            Prazer, sua <br />
            <span className="text-primary">Psicóloga</span>
          </h2>

          <div className="space-y-4 text-base text-secondary leading-relaxed text-justify">
            <p>Olá, me chamo Dayane e estou aqui para te oferecer um espaço acolhedor, seguro e livre de julgamentos.</p>
            <p>
              Acredito que não existe uma abordagem única que funcione para todas as pessoas. Por isso, adequo o processo terapêutico às necessidades e objetivos de cada indivíduo,
              caminhando juntos na revisão da sua história e das suas experiências.
            </p>
            <p>
              Tenho uma escuta genuína voltada às dores e desafios que muitas vezes têm origem em rupturas de apego ou traumas não resolvidos — fatores que podem desregular o sistema nervoso
              e impactar diretamente a vida cotidiana. Atendo pessoas com diferentes demandas, como traumas, transtornos de ansiedade, depressão, fobias, dependência emocional,
              conflitos familiares e relacionamentos, entre outras questões.
            </p>
            <p>
              Se você sente que é hora de cuidar de si, entre em contato. Vamos juntos iniciar seu processo terapêutico.
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {features.map(({ Icon, title }, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition"
              >
                <Icon className="h-6 w-6 text-primary mb-2" />
                <h4 className="text-xs font-semibold text-secondary text-center">{title}</h4>
              </div>
            ))}
          </div>

          {/* Signature */}
          <div className="mt-6">
            <p className="font-semibold text-secondary">Dayane de Souza Andrade</p>
            <p className="text-support">Psicóloga Clínica – CRP 06/174136</p>
            <div className="mt-1 w-16 h-1 bg-primary"></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
