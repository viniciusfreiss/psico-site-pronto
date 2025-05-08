// components/Contact.js
import {
  PhoneIcon,
  EnvelopeIcon,
  ChatBubbleLeftIcon,
  CalendarDaysIcon
} from '@heroicons/react/24/outline'
import { FaWhatsapp } from 'react-icons/fa'

export default function Contact() {
  const methods = [
    {
      Icon: PhoneIcon,
      title: 'Telefone',
      desc: '+55 (11) 97075-8548',
      href: 'tel:+5511970758548'
    },
    {
      Icon: EnvelopeIcon,
      title: 'E-mail',
      desc: 'psicodayaneandrade@gmail.com',
      href: 'mailto:psicodayaneandrade@gmail.com'
    },
    {
      Icon: ChatBubbleLeftIcon,
      title: 'WhatsApp',
      desc: 'Clique para iniciar o chat',
      href: 'https://wa.me/5511970758548'
    },
    {
      Icon: CalendarDaysIcon,
      title: 'Agendamento',
      desc: 'Sessões semanais de 60 minutos'
    }
  ]

  return (
    <section id="contact" className="py-20 px-4 bg-neutral">
      {/* Cabeçalho com bloco de destaque */}
      <div className="max-w-3xl mx-auto text-center mb-12 relative">
        <div className="absolute bottom-0 left-1/2 w-24 h-1 bg-primary transform -translate-x-1/2"></div>
        <h2 className="relative inline-block text-3xl md:text-4xl font-bold text-secondary pb-1">
          Vamos <span className="text-primary">Conversar?</span>
        </h2>
        <p className="text-base text-support mt-4">
          Escolha o canal que preferir e dê o primeiro passo para sua transformação.
        </p>
      </div>

      {/* Grid de métodos com hover lift e icon pulse */}
      <div className="max-w-5xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {methods.map(({ Icon, title, desc, href }, i) => (
          <a
            key={i}
            href={href || '#'}
            target={href?.startsWith('http') ? '_blank' : undefined}
            rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="
              group bg-white p-6 rounded-xl shadow-md hover:shadow-xl
              transform hover:-translate-y-1 transition
              flex flex-col items-center text-center no-underline
            "
          >
            <div className="flex items-center justify-center w-16 h-16 mb-4 bg-primary/20 rounded-full transition group-hover:bg-primary/30">
              <Icon className="w-8 h-8 text-primary group-hover:text-secondary transition" />
            </div>
            <h4 className="font-semibold text-secondary mb-1 group-hover:text-primary transition">
              {title}
            </h4>
            <p className="text-support text-sm">{desc}</p>
          </a>
        ))}
      </div>

      {/* CTA principal */}
      <div className="text-center mt-16">
        <a
          href="https://wa.me/5511970758548"
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex items-center bg-primary hover:bg-accent text-white 
            font-semibold py-3 px-8 rounded-full text-lg transition-shadow 
            shadow-md hover:shadow-lg
          "
        >
          <FaWhatsapp className="w-5 h-5 mr-2 animate-pulse-fast" />
          Iniciar pelo WhatsApp
        </a>
      </div>
    </section>
  )
}
