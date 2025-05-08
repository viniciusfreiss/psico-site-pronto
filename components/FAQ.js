// components/FAQ.js
import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

export default function FAQ() {
  const faqs = [
    {
      q: 'Qual a diferença entre terapia online e presencial?',
      a: 'O processo terapêutico e a relação entre você e a terapeuta se desenvolve naturalmente em ambas as modalidades, com a conveniência do online e o conforto da sua casa.'
    },
    {
      q: 'Atendimento por plano de saúde?',
      a: 'Ainda não trabalho com convênios — as sessões são no formato particular, garantindo total foco e personalização.'
    },
    {
      q: 'Qual o valor das sessões e formas de pagamento?',
      a: 'Valores individuais; entre em contato para investir em você. Pagamento via PIX, transferência ou dinheiro antes da sessão.'
    },
    {
      q: 'Qual a duração de cada sessão?',
      a: 'Em média, as sessões duram 60 minutos, tempo ideal para acolhimento e avanço real nas suas demandas.'
    },
    {
      q: 'Para quem é recomendado?',
      a: 'Para quem busca autoconhecimento, superação de desafios emocionais, fortalecimento da autoestima e desenvolvimento pessoal contínuo.'
    }
  ]

  const [openIndex, setOpenIndex] = useState(null)
  const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section id="faq" className="py-20 px-4 bg-neutral">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-secondary text-center mb-8 relative inline-block">
          Perguntas <span className="text-primary">Frequentes</span>
        </h2>
        <div className="space-y-6">
          {faqs.map((f, i) => {
            const isOpen = i === openIndex
            return (
              <div key={i} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex justify-between items-center px-6 py-4 focus:outline-none"
                >
                  <span className="font-semibold text-lg text-secondary">
                    {f.q}
                  </span>
                  <ChevronDownIcon
                    className={`h-6 w-6 text-primary transform transition-transform ${
                      isOpen ? 'rotate-180' : 'rotate-0'
                    }`}
                  />
                </button>
                <div
                  className={`px-6 overflow-hidden transition-[max-height] duration-300 ${
                    isOpen ? 'max-h-40 py-4' : 'max-h-0'
                  }`}
                >
                  <p className="text-support">
                    {f.a}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
