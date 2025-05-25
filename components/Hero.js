// components/Hero.js
import Image from 'next/image'
import { FaWhatsapp } from 'react-icons/fa'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { motion } from 'framer-motion'

export default function Hero() {
  const [text] = useTypewriter({
    words: [
      'leveza na sua rotina.',
      'equilíbrio emocional.',
      'propósito em cada dia.'
    ],
    loop: true,
    delaySpeed: 2000
  })

  return (
    <section
      id="hero"
      className="relative overflow-hidden flex flex-col md:flex-row items-start justify-center min-h-[80vh] bg-neutral"
    >
      {/* Fundo animado */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary bg-200 animate-gradient-x" />
      <div className="absolute inset-0 bg-neutral/80" />

      {/* Conteúdo em duas colunas independentes */}
      <div className="relative z-10 flex flex-col md:flex-row max-w-5xl mx-auto w-full pt-[25vh] pb-12 px-4 gap-8">
        {/* Coluna de texto */}
        <div className="flex-1 space-y-4">
          <p className="text-sm uppercase text-support tracking-wider">
            Psicóloga Dayane de Souza Andrade
          </p>

          {/* Headline */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-secondary leading-tight">
            Você <strong>merece</strong>{' '}
            <span
              className="inline-block text-primary whitespace-nowrap overflow-hidden"
              style={{ width: '20ch' }} /* reserva espaço para até 24 caracteres */
            >
              {text}
              <Cursor cursorColor="#6CC3B0" />
            </span>
          </h1>

          {/* Subheadline com negritos estratégicos */}
          <p className="text-base md:text-lg text-support max-w-md">
            Eu estou aqui, <strong>online</strong>, pronta para te <strong>acolher</strong> e ajudar a <strong>dar voz</strong> ao que sente.  
            A terapia é esse espaço de <strong>clareza</strong> que você merece.  
            Vamos <strong>iniciar essa conversa pelo WhatsApp</strong>?
          </p>

          {/* CTA */}
          <div className="flex justify-center md:justify-start">
            <motion.a
              href="https://wa.me/5511970758548?text=Ol%C3%A1%20Dayane%21%20Encontrei%20seu%20site%20e%20gostaria%20de%20agendar%20uma%20sess%C3%A3o%20online.%20Poderia%20me%20dar%20mais%20informa%C3%A7%C3%B5es%3F%20Obrigado%2Fa%21"
              target="_blank"
              className="inline-flex items-center bg-primary hover:bg-accent text-white font-semibold py-2.5 px-6 rounded-full text-base transition shadow-md hover:shadow-lg active:scale-95"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.4 }}
            >
              <FaWhatsapp className="w-5 h-5 mr-2" />
              Agendar Sessão Online
            </motion.a>
          </div>
        </div>

        {/* Coluna fixa de imagem */}
        <motion.div
          className="flex-shrink-0 w-64 md:w-72 lg:w-80 flex justify-end"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
     <div className="relative w-full h-0 pb-[100%] rounded-full overflow-hidden ring-4 ring-primary/30 shadow-lg animate-float-slow">
    <Image
      src="/images/foto-semcadeira.jpg"
      alt="Dayane sorrindo"
      fill
      className="object-cover object-center"
      style={{ objectPosition: '70% 30%' }}  // aumente o primeiro valor para mover o foco à direita
      priority
    />
  </div>

        </motion.div>
      </div>

      {/* SVG wave para transição */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none -mb-1">
        <svg viewBox="0 0 1200 100" preserveAspectRatio="none" className="w-full h-12">
          <path
            d="M0,0 C400,100 800,0 1200,100 L1200,0 L0,0 Z"
            fill="#F8F7F4"
          />
        </svg>
      </div>
    </section>
  )
}
