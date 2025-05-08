// components/Benefits.js
import {
    UserGroupIcon,
    LightBulbIcon,
    ShieldCheckIcon,
    HeartIcon,
    ArrowPathIcon
  } from '@heroicons/react/24/outline'
  
  export default function Benefits() {
    const benefits = [
      {
        Icon: UserGroupIcon,
        title: 'Suporte Contínuo',
        desc: 'Acompanhamento próximo para você nunca se sentir sozinho.'
      },
      {
        Icon: LightBulbIcon,
        title: 'Mais Claridade',
        desc: 'Entenda seus padrões e veja o mundo com novos olhos.'
      },
      {
        Icon: ShieldCheckIcon,
        title: 'Segurança Emocional',
        desc: 'Desenvolva resiliência e estabilidade interna.'
      },
      {
        Icon: HeartIcon,
        title: 'Autoestima Renovada',
        desc: 'Recupere a confiança e o amor-próprio.'
      },
      {
        Icon: ArrowPathIcon,
        title: 'Crescimento Duradouro',
        desc: 'Ferramentas que você leva para a vida toda.'
      }
    ]
  
    return (
      <section id="benefits" className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h2 className="text-3xl font-bold text-secondary">Benefícios da Terapia</h2>
          <p className="text-base text-support mt-2">
            Descubra o que você ganha quando investe em si mesmo.
          </p>
        </div>
  
        <div className="max-w-4xl mx-auto grid gap-6 sm:grid-cols-2">
          {benefits.map(({ Icon, title, desc }, idx) => (
            <div
              key={idx}
              className="flex items-start space-x-4 bg-primary/5 p-4 rounded-lg hover:bg-primary/10 transition"
            >
              <Icon className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-secondary">{title}</h3>
                <p className="text-sm text-support">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    )
  }
  