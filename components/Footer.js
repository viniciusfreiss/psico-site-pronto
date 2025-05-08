// components/Footer.js
import Link from 'next/link'
import Image from 'next/image'
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaArrowUp } from 'react-icons/fa'

export default function Footer() {
  const navItems = [
    { label: 'Início', href: '#hero' },
    { label: 'Desafios', href: '#problem' },
    { label: 'Soluções', href: '#solution' },
    { label: 'Depoimentos', href: '#testimonials' },
    { label: 'Sobre', href: '#about' },
    { label: 'Contato', href: '#contact' },
  ]

  const contactItems = [
    { label: 'Telefone', href: 'tel:+5511970758548', icon: '📞' },
    { label: 'E-mail', href: 'mailto:psicodayaneandrade@gmail.com', icon: '✉️' },
    { label: 'WhatsApp', href: 'https://wa.me/5511970758548', icon: '💬' },
  ]

  const socialItems = [
    { icon: <FaInstagram />, url: 'https://instagram.com' },
    { icon: <FaFacebookF />, url: 'https://facebook.com' },
    { icon: <FaLinkedinIn />, url: 'https://linkedin.com' },
  ]

  return (
    <footer className="relative bg-secondary text-white pt-16 pb-8 overflow-hidden">
      {/* Wave SVG no topo */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg viewBox="0 0 1200 100" preserveAspectRatio="none" className="w-full h-16">
          <path d="M0,0 C400,100 800,0 1200,100 L1200,0 L0,0 Z" fill="#333333" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-12 relative z-10">
        {/* Caixa do logo centralizada e maior */}
        <div className="flex flex-col items-center -mt-12 bg-neutral/10 backdrop-blur-sm p-6 rounded-xl shadow-lg md:col-span-3 lg:col-span-1">
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-40 mb-1">
            <Image
              src="/images/logo.png"
              alt="Logo Dayane Andrade"
              fill
              className="object-contain"
              priority
            />
          </div>
          <p className="text-center text-sm text-support max-w-xs">
            Psicanálise online para fortalecer sua saúde emocional e descobrir leveza no dia a dia.
          </p>
        </div>

        {/* Navegação */}
        <div className="space-y-2 text-center md:text-left text-sm">
          <h4 className="font-semibold text-primary mb-2">Menu</h4>
          <ul className="space-y-1">
            {navItems.map(({ label, href }) => (
              <li key={href}>
                <Link href={href} className="hover:text-accent transition">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contato & redes */}
        <div className="space-y-4 text-center md:text-left text-sm">
          <h4 className="font-semibold text-primary mb-2">Contato</h4>
          {contactItems.map(({ label, href, icon }) => (
            <p key={label} className="flex items-center justify-center md:justify-start space-x-2">
              <span>{icon}</span>
              <a href={href} className="hover:text-accent transition">
                {label}
              </a>
            </p>
          ))}
          <div className="flex justify-center md:justify-start space-x-4 pt-1 text-2xl">
            {socialItems.map(({ icon, url }, i) => (
              <a
                key={i}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-accent hover:bg-primary text-secondary rounded-full transition transform hover:scale-110"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Botão voltar ao topo */}
      <div className="absolute right-6 bottom-6">
        <a
          href="#hero"
          className="bg-primary text-secondary p-3 rounded-full shadow-lg hover:bg-accent transition transform hover:-translate-y-1"
          aria-label="Voltar ao topo"
        >
          <FaArrowUp className="w-5 h-5" />
        </a>
      </div>

      {/* Copyright */}
      <div className="mt-12 text-center text-xs text-support">
        © {new Date().getFullYear()} Dayane de Souza Andrade. Todos os direitos reservados.
      </div>
    </footer>
  )
}
