// components/Header.js
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaWhatsapp } from 'react-icons/fa'

export default function Header() {
  const [open, setOpen] = useState(false)
  const items = [
    ['Início', '#hero'],
    ['Desafios', '#problem'],
    ['Soluções', '#solution'],
    ['Depoimentos', '#testimonials'],
    ['Sobre', '#about'],
    ['Contato', '#contact'],
  ]

  return (
    <header className="fixed top-0 w-full bg-white shadow-lg z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-6 px-6">
        {/* Logo */}
        <Link href="#hero" className="relative w-48 h-16 md:w-64 md:h-20">
          <Image
            src="/images/logo.png"
            alt="Logo Dayane Andrade"
            fill
            className="object-contain"
            priority
          />
        </Link>

        {/* Nav desktop */}
        <nav className="hidden md:flex items-center space-x-8">
          {items.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="text-secondary hover:text-primary font-medium transition"
            >
              {label}
            </Link>
          ))}
          <Link
            href="https://wa.me/5511970758548"
            className="flex items-center bg-primary hover:bg-accent text-white font-semibold py-2.5 px-6 rounded-full transition"
          >
            <FaWhatsapp className="w-5 h-5 mr-2" />
            Agendar sessão online
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 8h16M4 16h16'}
            />
          </svg>
        </button>
      </div>

      {/* Nav mobile */}
      {open && (
        <nav className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col p-4 space-y-3">
            {items.map(([label, href]) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  className="block text-secondary hover:text-primary py-2 font-medium"
                >
                  {label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="https://wa.me/5511970758548"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center bg-primary hover:bg-accent text-white font-semibold py-2 px-4 rounded-full transition"
              >
                <FaWhatsapp className="w-5 h-5 mr-2" />
                Agendar sessão online
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
