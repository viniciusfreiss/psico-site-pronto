// components/Solution.js
import Image from 'next/image'
import { FaWhatsapp } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function Solution() {
  const steps = [
    {
      title: 'Escute os sinais do inconsciente',
      desc: 'Atenção ao que você resiste e persiste.'
    },
    {
      title: 'Reconheça a sombra',
      desc: 'O que te incomoda em si e nos outros.'
    },
    {
      title: 'Desenvolva o processo de Individuação',
      desc: 'É a jornada do “ser inteiro” e autêntico e não “perfeito”.'
    },
    {
      title: 'Trabalhe com símbolos e arquétipos',
      desc: 'Dar forma ao que é invisível.'
    },
    {
      title: 'Busque o Self, não o ego',
      desc: 'O ego quer conforto; o Self quer crescimento.'
    },
    {
      title: 'Aprofunde-se em terapia',
      desc: 'Onde terá apoio e aprofundamento.'
    }
  ];

  return (
    <section id="solution" className="bg-white pt-12 pb-16 px-6">
      {/* Cabeçalho com destaque estratégico */}
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-secondary mb-4 leading-tight">
          Você deu o primeiro passo,{' '}
          <span className="text-primary font-extrabold bg-primary/10 px-2 py-1 rounded-lg underline decoration-primary decoration-2 underline-offset-4">
            deixa eu te ajudar nos próximos
          </span>
        </h2>
        <p className="text-support text-lg mt-3">
          Ter domínio de si é a principal ferramenta para a sua saúde mental
        </p>
      </div>

      {/* Linhas de conexão + Conteúdo em duas colunas */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Passos com linha guia */}
        <div className="relative pl-8">
          <div className="absolute left-3 top-0 bottom-0 w-1 bg-primary/30 rounded" />
          <ul className="space-y-8">
            {steps.map(({ title, desc }, idx) => (
              <li key={idx} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-semibold">
                  {idx + 1}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-secondary mb-1">{title}</h3>
                  <p className="text-support text-sm">{desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Ilustração destacada */}
        <motion.div
          className="flex justify-center md:justify-end"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative w-full max-w-sm aspect-[4/5] rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="/images/corret.png"
              alt="Ilustração de transformação emocional"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>

      {/* CTA final */}
      <div className="text-center mt-12">
        <a
          href="https://wa.me/5511970758548?text=Ol%C3%A1%20Dayane%21%20Encontrei%20seu%20site%20e%20gostaria%20de%20agendar%20uma%20sess%C3%A3o%20online.%20Poderia%20me%20dar%20mais%20informa%C3%A7%C3%B5es%3F%20Obrigado%2Fa%21"
          target="_blank"
          className="inline-flex items-center bg-primary hover:bg-accent/90 text-white font-semibold py-3 px-10 rounded-full text-lg transition-shadow shadow-md hover:shadow-lg"
        >
          <FaWhatsapp className="w-5 h-5 mr-2" />
          Quero começar o meu processo
        </a>
      </div>

      {/* Gradiente de transição para depoimentos */}
      <div className="mt-16 h-12 bg-gradient-to-b from-white to-neutral"></div>
    </section>
  )
}
