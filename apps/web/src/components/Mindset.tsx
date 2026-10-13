import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionReveal from './SectionReveal'

const principles = [
  {
    number: '01',
    title: 'Pragmatisme Radical',
    description:
      'Ce qui marche, pas ce qui sonne bien. Aucun buzzword chasing, aucune posture. Je livre des produits qui tournent en prod, je facture en USD, et je documente les chiffres r\u00e9els.',
    accent: 'from-accent/30 to-accent/5',
  },
  {
    number: '02',
    title: 'Pipeline Acc\u00e9l\u00e9r\u00e9 par IA',
    description:
      'Claude Code \u00e9crit ~80 % de mon code. Cursor, Codex, MCP compl\u00e8tent. Je livre en semaines ce qu\'une agence facture en mois \u2014 sans compromis sur la qualit\u00e9.',
    accent: 'from-silver/30 to-silver/5',
  },
  {
    number: '03',
    title: 'Build in Africa, Ship Worldwide',
    description:
      'LLC US au Nouveau-Mexique. Clients en Am\u00e9rique du Nord et en Europe. Op\u00e9r\u00e9 depuis Abidjan, bient\u00f4t depuis Kuala Lumpur. Le territoire ne d\u00e9cide pas du plafond.',
    accent: 'from-warm/30 to-warm/5',
  },
  {
    number: '04',
    title: 'Build in Public',
    description:
      'Je documente tout : les contrats sign\u00e9s, les revenus, les outils \u00e9cart\u00e9s, les erreurs. Si je peux pas le dire en public, je le fais pas. Transparence avant prestige.',
    accent: 'from-accent/20 to-silver/5',
  },
]

function PrincipleCard({
  principle,
  index,
}: {
  principle: (typeof principles)[0]
  index: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] as const }}
      className="glass rounded-2xl p-8 sm:p-10 group hover:bg-glass-hover transition-all duration-500 relative overflow-hidden"
    >
      {/* Gradient accent line */}
      <div
        className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${principle.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      />

      <div className="flex items-start gap-6">
        <div className="shrink-0">
          <span className="font-display text-5xl sm:text-6xl font-black text-white/[0.08] group-hover:text-white/[0.15] transition-colors">
            {principle.number}
          </span>
        </div>
        <div>
          <h3 className="font-display text-xl sm:text-2xl font-bold mb-3 tracking-tight">
            {principle.title}
          </h3>
          <p className="text-text-muted leading-relaxed">{principle.description}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default function Mindset() {
  return (
    <section id="mindset" className="relative z-10 py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionReveal>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="glow-dot" />
              <span className="text-sm uppercase tracking-[0.25em] text-accent font-semibold">
                Ma Vision
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
              Le <span className="gradient-text">Mindset</span>
            </h2>
            <p className="text-text-muted text-lg max-w-2xl mx-auto">
              Quatre principes qui guident chaque d&eacute;cision, chaque ligne de code,
              chaque projet que je lance.
            </p>
          </div>
        </SectionReveal>

        <div className="grid sm:grid-cols-2 gap-6">
          {principles.map((p, i) => (
            <PrincipleCard key={p.number} principle={p} index={i} />
          ))}
        </div>

        {/* Quote block */}
        <SectionReveal delay={0.3}>
          <div className="mt-16 text-center">
            <div className="glass-strong rounded-2xl p-10 sm:p-14 max-w-3xl mx-auto relative">
              <svg
                className="absolute top-6 left-8 text-white/[0.06] w-16 h-16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
              </svg>
              <p className="font-display text-2xl sm:text-3xl font-bold leading-snug relative z-10">
                L'IA n'a pas remplac&eacute; les devs.
                <br />
                <span className="gradient-text">Elle a remplac&eacute; les agences lentes.</span>
              </p>
              <div className="mt-6 text-text-dim text-sm uppercase tracking-[0.2em]">
                &mdash; Theo Mosis
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
