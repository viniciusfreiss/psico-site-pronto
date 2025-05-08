// components/WhatsAppWidget.js
import { useEffect, useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'

export default function WhatsAppWidget() {
  const [showPopup, setShowPopup] = useState(false)
  const [triggered, setTriggered] = useState({ exit: false, scroll: false })

  useEffect(() => {
    function handleMouseOut(e) {
      if (e.clientY < 10 && !triggered.exit) {
        setShowPopup(true)
        setTriggered(t => ({ ...t, exit: true }))
      }
    }
    function handleScroll() {
      const scrolled = window.scrollY + window.innerHeight
      const total = document.documentElement.scrollHeight
      if (scrolled / total >= 0.5 && !triggered.scroll) {
        setShowPopup(true)
        setTriggered(t => ({ ...t, scroll: true }))
      }
    }
    document.addEventListener('mouseout', handleMouseOut)
    window.addEventListener('scroll', handleScroll)
    return () => {
      document.removeEventListener('mouseout', handleMouseOut)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [triggered])

  return (
    <>
      {/* Botão flutuante com ícone maior */}
      <a
        href="https://wa.me/5511970758548"
        target="_blank"
        className="
          fixed bottom-6 right-6 z-50 bg-primary hover:bg-accent 
          text-white p-4 rounded-full shadow-lg transition
        "
        aria-label="WhatsApp"
      >
        <FaWhatsapp className="w-8 h-8" />
      </a>

      {/* Pop-up mais largo */}
      {showPopup && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/50 px-4">
          <div className="bg-white rounded-xl max-w-lg w-full p-6 grid grid-cols-1 md:grid-cols-2 gap-6 relative">
            {/* Fechar */}
            <button
              className="absolute top-3 right-3 text-support hover:text-secondary"
              onClick={() => setShowPopup(false)}
              aria-label="Fechar"
            >
              ✕
            </button>

            {/* Imagem à esquerda */}
            <div className="hidden md:block">
              <img
                src="/images/logo.png"
                alt="Dayane sorrindo"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Copy + CTA */}
            <div className="flex flex-col justify-center space-y-4">
              <h3 className="text-2xl font-bold text-secondary">
                Espere! Antes de ir embora…
              </h3>
              <p className="text-support">
                Que tal agendar agora mesmo sua primeira sessão online com a Dayane e já começar a transformar sua vida?
              </p>
              <a
                href="https://wa.me/5511970758548"
                target="_blank"
                className="
                  inline-flex items-center justify-center bg-primary hover:bg-accent 
                  text-white font-semibold py-3 px-6 rounded-full text-lg transition
                "
              >
                <FaWhatsapp className="w-5 h-5 mr-2" />
                Agendar Sessão
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
