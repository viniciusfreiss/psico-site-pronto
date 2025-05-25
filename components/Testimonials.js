// components/Testimonials.js
import React, { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import { StarIcon } from '@heroicons/react/24/solid'

const reviews = [
  {
    name: 'Flavia O.',
    quote: 'Olá Day! Fazer terapia com vc me fez melhorar minha autoestima, me cuidar melhor. Ter uma visão e foco nos meus objetivos facilita o dia a dia e ter compreensão e principalmente ter prioridade comigo. A terapia é uma construção a cada sessão e eu me sentia aliviada em conseguir compreender e entender o que eu estava sentindo. Foi maravilhoso!',
    img: '/images/flavia.jpeg',
    rating: 5
  },
  {
    name: 'Bruno R.',
    quote: 'Dayane, foi minha primeira terapeuta e depois de fazer algumas tentativas, somente com ela consegui me abrir… Acredito muito pela sua forma acolhedora e transparente de tratar e abordar os diversos assuntos que a terapia pede. Ela me ajudou com diversas questões importantes na minha vida pessoal e profissional e hoje consigo levar situações adversas da vida de forma muito mais natural e madura. Obrigado Day!!',
    img: '/images/bruno.jpeg',
    rating: 5
  },
  {
    name: 'Wesley V.',
    quote: 'Fazer terapia foi um dos momentos mais importantes pra mim, (foi pois por alguns problemas financeiros fui obrigado a parar), mas assim que me restabelecer financeiramente volto a fazer com toda a certeza. Voltarei com a mesma profissional que me fez ver a vida de outra forma, que me fez ser melhor ao término de cada consulta, que me ajudou a tomar uma das decisões mais difíceis querer ser pai. Uma profissional que indico sempre pra todas as pessoas que por algum motivo está buscando ajuda. Tive a oportunidade me consultar, e com todo o carinho do mundo soube me ouvir entender e de uma maneira única me deixar à vontade para que as consultas fossem sempre uma mais produtiva do que a outra. Só tenho a agradecer por ter cruzado com a Day em um momento conturbado da minha vida, pois foi ela que me acalentou e me fez descobrir coisas sobre mim que nem eu mesmo sabia. De uma coisa não tenho dúvidas, todos precisam de terapia mas somente os que têm sorte vão encontrar a Day.',
    img: '/images/wesley.jpeg',
    rating: 5
  },
  {
    name: 'Nauan S.',
    quote: 'Desde que a Dayane passou na minha escola com um projeto sobre a importância da saúde mental logo fiquei admirado com o profissionalismo dela e a maneira natural que ela se conecta com os jovens. Algum tempo depois comecei o tratamento, e adorei os métodos e as conversas que tinha com ela, desde os testes até os jogos nas consultas presenciais, é uma profissional excelente que sabe se comunicar com o público mais jovem e traz uma leveza e uma boa energia em seus atendimentos!',
    img: '/images/nauan.jpeg',
    rating: 5
  },
  {
    name: 'Athieli G.',
    quote: 'Faço terapia há mais de cinco anos e, entre idas e vindas com diferentes profissionais, encontrei a Dayane. Em quase dois anos de acompanhamento, posso afirmar com certeza: ela é excelente no que faz. De uma sensibilidade única, torna o processo terapêutico leve e acolhedor. Conversar com ela é natural — com o tempo, você se entende, se redescobre e, principalmente, se permite sentir. Sempre disponível, ela está presente de verdade e nunca te deixa na mão.',
    img: '/images/athieli.jpeg',
    rating: 5
  }
]

export default function Testimonials() {
  const containerRef = useRef(null)
  const autoPlayRef = useRef(null)
  const [expanded, setExpanded] = useState(Array(reviews.length).fill(false))

  const toggle = idx => {
    setExpanded(prev => prev.map((e, i) => i === idx ? !e : e))
  }

  const handleScroll = (direction = 'next') => {
    if (!containerRef.current) return
    const firstCard = containerRef.current.querySelector('.testimonial-card')
    if (!firstCard) return
    const cardWidth = firstCard.clientWidth + 16
    const offset = direction === 'next' ? cardWidth : -cardWidth
    const { scrollLeft, scrollWidth, clientWidth } = containerRef.current
    let newPos = scrollLeft + offset
    if (newPos + clientWidth >= scrollWidth) newPos = 0
    else if (newPos <= 0) newPos = scrollWidth - clientWidth
    containerRef.current.scrollTo({ left: newPos, behavior: 'smooth' })
  }

  useEffect(() => {
    autoPlayRef.current = () => handleScroll('next')
    const interval = setInterval(() => autoPlayRef.current(), 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="testimonials" className="py-12 px-4 bg-white">
      <div className="max-w-3xl mx-auto text-center mb-12 relative">
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          <div className="w-2/3 h-12 bg-primary/20 transform rotate-1"></div>
        </div>
        <h2 className="relative inline-block text-3xl md:text-4xl font-extrabold text-secondary px-4">
          O que Dizem Quem já Viveu essa Jornada
        </h2>
        <p className="mt-4 text-base text-support max-w-lg mx-auto animate-fade-in">
          Veja como o processo terapêutico pode ter impactos profundos na sua vida.
        </p>
      </div>
      <div className="relative max-w-5xl mx-auto">
        <button onClick={() => handleScroll('prev')} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-primary text-white p-3 rounded-full shadow-lg z-10" aria-label="Anterior">&#10094;</button>
        <div ref={containerRef} className="flex space-x-4 overflow-x-auto scroll-snap-x mandatory hide-scrollbar px-2 py-4" style={{ scrollSnapType: 'x mandatory' }}>
          {reviews.map((rev, idx) => (
            <div key={idx} className="testimonial-card snap-center flex-shrink-0 w-full sm:w-1/2 lg:w-1/3">
              <div className="relative flex flex-col items-center text-center p-6 bg-neutral rounded-2xl shadow-lg">
                <span className="absolute top-3 left-3 text-6xl text-accent/10">“</span>
                <div className="w-20 h-20 mb-4 relative rounded-full overflow-hidden ring-2 ring-primary">
                  <Image src={rev.img} alt={rev.name} fill className="object-cover" priority />
                </div>
                <p className="text-secondary italic mb-4 px-2 text-sm" style={{ maxHeight: expanded[idx] ? 'none' : '4.5rem', overflow: 'hidden' }}>
                  {rev.quote}
                </p>
                <button onClick={() => toggle(idx)} className="text-primary text-xs font-medium mb-2">
                  {expanded[idx] ? 'Ver menos' : 'Ler mais'}
                </button>
                <p className="font-semibold text-secondary">{rev.name}</p>
                <div className="flex space-x-1 mt-2">
                  {Array.from({ length: rev.rating }).map((_, i) => (<StarIcon key={i} className="h-4 w-4 text-primary" />))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <button onClick={() => handleScroll('next')} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-primary text-white p-3 rounded-full shadow-lg z-10" aria-label="Próximo">&#10095;</button>
      </div>
      <style jsx global>{` .hide-scrollbar::-webkit-scrollbar { display: none; } .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; } `}</style>
    </section>
  )
}
