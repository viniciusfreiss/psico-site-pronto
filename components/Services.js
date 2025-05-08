import Image from 'next/image'

const services = [
  {
    title: 'Psicanálise Profunda',
    description:
      'Entenda a origem dos seus padrões emocionais e transforme sua relação consigo mesmo.',
    img: '/images/service-1.jpg'
  },
  {
    title: 'Fortalecimento da Autoestima',
    description:
      'Exercícios práticos e acompanhamento dedicado para você reconquistar sua confiança.',
    img: '/images/service-2.jpg'
  }
]

export default function Services() {
  return (
    <section className="py-16 px-6 bg-neutral">
      {/* Desejo */}
      <h2 className="text-4xl font-bold text-secondary text-center mb-8">
        Nossos Serviços
      </h2>
      <div className="max-w-4xl mx-auto grid gap-8 sm:grid-cols-2">
        {services.map((s) => (
          <div key={s.title} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-48 w-full">
              <Image src={s.img} alt={s.title} fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">{s.title}</h3>
              <p className="text-support mb-4">{s.description}</p>
              <a
                href="https://wa.me/5511970758548"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary hover:bg-accent text-white py-2 px-4 rounded-lg transition"
              >
                Quero Saber Mais
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
