// components/Testimonials.js
import React, { useRef, useEffect } from 'react'
import Image from 'next/image'
import { StarIcon } from '@heroicons/react/24/solid'

const reviews = [
  { name: 'Wesley V.', quote: 'Fazer terapia com a Day mudou minha visão sobre a vida e sobre mim mesmo. Ela me fez evoluir em cada sessão, me acolheu nos momentos mais difíceis e ajudou a tomar grandes decisões, como ser pai. Recomendo muito pra quem busca uma profissional de verdade. Não tenho dúvidas: todo mundo precisa de terapia, mas só os sortudos encontram alguém como a Day!', img: 'psicologa/public/images/wesley.jpeg', rating: 5 },
  { name: 'Nauan S.', quote: 'Conheci a Day quando ela visitou minha escola falando sobre saúde mental. Fiquei impressionado com seu jeito leve e natural. Logo depois comecei meu tratamento e curti muito as sessões, desde os testes até os jogos. Ela tem uma energia incrível e sabe conversar com jovens. Foi essencial pra mim, recomendo demais!', img: 'psicologa/public/images/nauan.jpeg', rating: 5 },
  { name: 'Athieli G.', quote: 'Faço terapia há mais de cinco anos e já conheci vários profissionais, mas com a Day é diferente. Ela tem um jeito único de transformar as sessões em algo leve e acolhedor. Com ela, aprendi a me entender melhor, me redescobri e consegui expressar sentimentos que estavam escondidos. Sempre presente, nunca deixa a gente na mão.', img: 'psicologa/public/images/athieli.jpeg', rating: 5 },
  { name: 'Flavia O.', quote: 'Fazer terapia com a Day melhorou muito minha autoestima e me ajudou a cuidar melhor de mim. Com ela consegui focar melhor nos meus objetivos e ter mais clareza sobre meus sentimentos. Cada sessão trazia um alívio e novas descobertas sobre mim mesma. Foi maravilhoso e transformador, recomendo pra todo mundo!', img: 'public/images/flavia.jpeg', rating: 5 },
  { name: 'Bruno R.', quote: 'A Day foi minha primeira terapeuta, e só com ela consegui realmente me abrir. O jeito acolhedor e transparente dela me deixou muito à vontade. Ela me ajudou a enfrentar várias questões pessoais e profissionais, e hoje lido muito melhor com os desafios da vida. Obrigado por tudo, Day, você fez toda a diferença!', img: 'public/images/bruno.jpeg', rating: 5 }
]

export default function Testimonials() {
  const containerRef = useRef(null)
  const visibleCards = 3

  // Scroll by one card
  const handleScroll = (direction = 'next') => {
    if (!containerRef.current) return
    const cardWidth = containerRef.current.clientWidth / visibleCards
    const offset = direction === 'next' ? cardWidth + 16 : - (cardWidth + 16)
    containerRef.current.scrollBy({ left: offset, behavior: 'smooth' })
  }

  // Optional autoplay
  useEffect(() => {
    const interval = setInterval(() => handleScroll('next'), 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="testimonials" className="py-12 px-4 bg-white">
      <div className="max-w-3xl mx-auto text-center mb-12 relative">
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          <div className="w-2/3 h-12 bg-primary/20 transform rotate-1"></div>
        </div>
        <h2 className="relative inline-block text-3xl md:text-4xl font-extrabold text-secondary px-4">
          O Que Dizem Quem Já Viveu Essa Jornada
        </h2>
        <p className="mt-4 text-base text-support max-w-lg mx-auto animate-fade-in">
          Veja como a jornada de autoconhecimento mudou a vida de outras pessoas.
        </p>
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Prev Button */}
        <button
          onClick={() => handleScroll('prev')}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-primary text-white p-3 rounded-full shadow-lg z-10"
          aria-label="Anterior"
        >
          &#10094;
        </button>

        {/* Carousel */}
        <div
          ref={containerRef}
          className="flex space-x-4 overflow-x-auto scroll-snap-type-x mandatory hide-scrollbar px-2 py-4"
          style={{
            scrollSnapType: 'x mandatory'
          }}
        >
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="snap-center flex-shrink-0"
              style={{ width: `calc((100% - ${16 * (visibleCards - 1)}px) / ${visibleCards})` }}
            >
              <div className="relative flex flex-col items-center text-center p-6 bg-neutral rounded-2xl shadow-lg">
                <span className="absolute top-3 left-3 text-6xl text-accent/10">“</span>
                <div className="w-20 h-20 mb-4 relative rounded-full overflow-hidden ring-2 ring-primary">
                  <Image src={rev.img} alt={rev.name} fill className="object-cover" priority />
                </div>
                <p className="text-secondary italic mb-4 px-2 text-sm">{rev.quote}</p>
                <p className="font-semibold text-secondary">{rev.name}</p>
                <div className="flex space-x-1 mt-2">
                  {Array.from({ length: rev.rating }).map((_, i) => (
                    <StarIcon key={i} className="h-4 w-4 text-primary" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={() => handleScroll('next')}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-primary text-white p-3 rounded-full shadow-lg z-10"
          aria-label="Próximo"
        >
          &#10095;
        </button>
      </div>

      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  )
}
