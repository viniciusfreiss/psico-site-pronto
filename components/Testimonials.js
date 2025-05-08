// components/Testimonials.js
import Image from 'next/image'
import { StarIcon } from '@heroicons/react/24/solid'

const reviews = [ {
  name: 'Mariana S.',
  role: 'Analista de Marketing',
  quote: 'Sentia-me sobrecarregada e sem direção. Em poucas sessões com a Dayane, recuperei meu foco e minha autoestima!',
  img: '/images/cartão frente-1.png',
  rating: 5
},
{
  name: 'João P.',
  role: 'Engenheiro de Software',
  quote: 'A terapia online tornou-se meu maior suporte. Hoje gerencio minha ansiedade com muito mais segurança.',
  img: '/images/cartão frente-1.png',
  rating: 5
},
{
  name: 'Carla M.',
  role: 'Empreendedora',
  quote: 'Aprendi a estabelecer limites saudáveis no trabalho e na vida pessoal. Recomendo demais!',
  img: '/images/cartão frente-1.png',
  rating: 5
} ]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-12 px-4 bg-white overflow-hidden">
      {/* Cabeçalho criativo */}
      <div className="max-w-3xl mx-auto text-center mb-12 relative">
        {/* Bloco de cor atrás do texto */}
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          <div className="w-2/3 h-12 bg-primary/20 transform rotate-1"></div>
        </div>
        <h2 className="relative inline-block text-3xl md:text-4xl font-extrabold text-secondary px-4">
          O que dizem quem já passou por aqui
        </h2>
        {/* Subtítulo com leve animação de fade-in */}
        <p className="mt-4 text-base text-support max-w-lg mx-auto opacity-0 animate-fade-in">
          Histórias reais de transformação que vão inspirar a sua jornada.
        </p>
      </div>

      {/* Grid responsivo */}
      <div className="max-w-5xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {reviews.map(({ name, role, quote, img, rating }, idx) => (
          <div
            key={idx}
            className="
              relative flex flex-col items-center text-center p-6 
              bg-neutral rounded-2xl shadow-lg hover:shadow-2xl 
              transform hover:-translate-y-1 transition
            "
          >
            {/* Marca de citação */}
            <span className="absolute top-3 left-3 text-7xl text-accent/10">“</span>

            {/* Foto */}
            <div className="w-24 h-24 mb-4 relative rounded-full overflow-hidden ring-2 ring-primary">
              <Image src={img} alt={name} fill className="object-cover" priority />
            </div>

            {/* Quote */}
            <p className="text-secondary italic mb-4 px-2">{quote}</p>

            {/* Nome e cargo */}
            <p className="font-semibold text-secondary">{name}</p>
            <p className="text-sm text-support mb-4">{role}</p>

            {/* Avaliação */}
            <div className="flex space-x-1 mb-2">
              {Array.from({ length: rating }).map((_, i) => (
                <StarIcon key={i} className="h-5 w-5 text-primary" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
