// components/About.js
import Image from 'next/image'
import { FaWhatsapp } from 'react-icons/fa'
import {
  UserGroupIcon,
  AcademicCapIcon,
  ClockIcon,
  PuzzlePieceIcon
} from '@heroicons/react/24/outline'

export default function About() {
  return (
    <section id="about" className="relative pt-20 pb-16 px-4 bg-neutral overflow-hidden">
      {/* Shape decorativo */}
      <div className="absolute -top-10 -right-10 w-64 h-64 bg-accent/20 rounded-full animate-pulse-slow pointer-events-none" />

      {/* Cabeçalho */}
      <div className="max-w-3xl mx-auto text-center mb-12 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-secondary inline-block pb-1 border-b-4 border-accent">
          Sobre mim
        </h2>
        <p className="text-base text-support mt-2">
          Conheça a profissional que vai te guiar na sua transformação.
        </p>
      </div>

      {/* Conteúdo principal */}
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-start relative z-10">
        {/* Imagem com leve flutuação */}
        <div className="flex justify-center md:justify-start">
          <div className="relative w-full max-w-xs aspect-[4/7] rounded-lg overflow-hidden shadow-2xl animate-float-slow">
            <Image
              src="/images/about.jpg"
              alt="Dayane de Souza Andrade"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Texto e destaques */}
        <div className="space-y-6">
          <p className="text-lg text-secondary">
            Sou <strong>Dayane de Souza Andrade</strong>, Psicóloga Clínica (CRP 06/174136) e
            pós-graduanda em Psicanálise. Minha missão é ajudar você a reencontrar
            equilíbrio emocional, fortalecer sua autoestima e viver com propósito.
          </p>

          <div className="grid gap-6 sm:grid-cols-2">
            {[ 
              {
                Icon: UserGroupIcon,
                title: 'Atendimento Personalizado',
                desc: 'Sessões online focadas exclusivamente em você.'
              },
              {
                Icon: AcademicCapIcon,
                title: 'Formação Sólida',
                desc: 'Graduação em Psicologia e especializações em Psicanálise.'
              },
              {
                Icon: ClockIcon,
                title: 'Horários Flexíveis',
                desc: 'Agende no momento que melhor se encaixa na sua rotina.'
              },
              {
                Icon: PuzzlePieceIcon,
                title: 'Abordagem Completa',
                desc: 'Combino Psicanálise, comunicação assertiva e resiliência.'
              }
            ].map(({ Icon, title, desc }, i) => (
              <div
                key={i}
                className="flex items-start space-x-3 p-4 bg-white rounded-xl shadow hover:shadow-lg transition"
              >
                <div className="flex-shrink-0 p-2 bg-primary/20 rounded-lg transition">
                  <Icon className="h-6 w-6 text-primary transition" />
                </div>
                <div>
                  <h4 className="font-semibold text-secondary">{title}</h4>
                  <p className="text-support text-sm">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <a
              href="https://wa.me/5511970758548"
              className="inline-flex items-center bg-primary hover:bg-accent text-white font-semibold py-3 px-10 rounded-full text-lg transition shadow-md hover:shadow-lg"
            >
              <FaWhatsapp className="w-5 h-5 mr-2 animate-pulse-fast" />
              Agendar Consulta Online
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
