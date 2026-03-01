import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionReveal from './SectionReveal'

const passions = [
  {
    title: 'Code',
    subtitle: 'Mon arme',
    description:
      'React, TypeScript, Node.js \u2014 je code tout from scratch. Pas de templates, pas de CMS. Du code pur pour des solutions sur mesure.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
      </svg>
    ),
  },
  {
    title: 'Design',
    subtitle: 'Mon \u0153il',
    description:
      'Graphisme, branding, UI/UX \u2014 je cr\u00e9e des identit\u00e9s visuelles compl\u00e8tes. Du logo au site web, chaque pixel compte.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
      </svg>
    ),
  },
  {
    title: 'La Tech',
    subtitle: 'Ma passion',
    description:
      'IA, MCP, automatisation \u2014 je suis obsédé par la technologie. Je connecte 74 outils à Claude AI pour piloter mon business.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z" />
      </svg>
    ),
  },
  {
    title: 'Anime',
    subtitle: 'Mon inspiration',
    description:
      'Naruto, Bleach, Hunter x Hunter \u2014 ces histoires de pers\u00e9v\u00e9rance et de d\u00e9passement de soi nourrissent mon mindset de builder.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
      </svg>
    ),
  },
  {
    title: 'Aventure & Voyage',
    subtitle: 'Mon \u00e9vasion',
    description:
      'Passionné par la découverte. Nouvelles cultures, nouveaux horizons \u2014 l\'aventure nourrit ma créativité et ma vision du monde.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 1 0-8.862 12.872M12.75 3.031a9 9 0 0 1 6.69 14.036m0 0-.177-.529A2.25 2.25 0 0 0 17.128 15H16.5l-.324-.324a1.453 1.453 0 0 0-2.328.377l-.036.073a1.586 1.586 0 0 1-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438a2.25 2.25 0 0 1-1.228 2.41l-.237.119" />
      </svg>
    ),
  },
  {
    title: 'Musculation',
    subtitle: 'Ma discipline',
    description:
      'Le corps et l\'esprit se construisent ensemble. La discipline du fer forge la discipline du code.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
]

function PassionCard({ passion, index }: { passion: (typeof passions)[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] as const }}
      className="glass rounded-2xl p-8 group hover:bg-glass-hover transition-all duration-500 relative overflow-hidden"
    >
      {/* Icon */}
      <div className="w-14 h-14 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-text-muted group-hover:text-text group-hover:bg-white/[0.08] transition-all mb-6">
        {passion.icon}
      </div>

      <div className="text-xs uppercase tracking-[0.2em] text-text-dim mb-2">{passion.subtitle}</div>
      <h4 className="font-display text-2xl font-bold mb-3">{passion.title}</h4>
      <p className="text-text-muted leading-relaxed">{passion.description}</p>
    </motion.div>
  )
}

export default function Passions() {
  return (
    <section id="passions" className="relative z-10 py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionReveal>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="glow-dot" />
              <span className="text-sm uppercase tracking-[0.25em] text-accent font-semibold">
                Au-del&agrave; du Code
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
              Mes <span className="gradient-text">Passions</span>
            </h2>
            <p className="text-text-muted text-lg max-w-2xl mx-auto">
              Je ne suis pas qu'un d&eacute;veloppeur. Je suis un cr&eacute;ateur multidimensionnel.
            </p>
          </div>
        </SectionReveal>

        <div className="grid sm:grid-cols-2 gap-6">
          {passions.map((passion, i) => (
            <PassionCard key={passion.title} passion={passion} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
