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
      a: 'Não trabalho com convênio diretamente, porém posso emitir nota fiscal para que avalie a possibilidade de reembolso.'
    },
    {
      q: 'Qual o valor das sessões e formas de pagamento?',
      a: 'Valores individuais ou em pacotes, entre em contato para investir em você. Pagamento via pix ou transferência antes da sessão.'
    },
    {
      q: 'Para quem é recomendado?',
      a:  <>
          Para quem busca entender melhor a si mesmo (autoconhecimento), lidar com as emoções, superar dificuldades e desenvolver saúde mental e emocional.{' '}
          <strong>A terapia não é apenas para quem está em sofrimento.</strong>
        </>
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
                  className="w-full flex justify-between items-start px-6 py-4 focus:outline-none"
                >
                  <span className="font-semibold text-lg text-secondary text-left w-full">
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
