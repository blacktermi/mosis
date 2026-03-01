import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionReveal from './SectionReveal'

const businesses = [
  {
    name: 'Tribal Print',
    description: 'Impression textile & personnalisation',
    logo: '/brands/tribalprint-marque.svg',
    url: 'https://tribalprint.ci',
  },
  {
    name: 'Jericho Print',
    description: 'Impression grand format & signal\u00e9tique',
    logo: '/brands/jerichoprint-marque.png',
    url: 'https://jerichoprint.ci',
  },
  {
    name: 'Muslim Print',
    description: 'Impression sp\u00e9cialis\u00e9e islamique',
    logo: '/brands/muslimprint-marque.png',
    url: 'https://muslimprint.ci',
  },
  {
    name: 'Tribal Verra',
    description: 'Verrerie & objets personnalis\u00e9s',
    logo: '/brands/tribalverra-marque.png',
    url: 'https://tribalverra.ci',
  },
  {
    name: 'Tribal Agency Africa',
    description: 'Branding, sites web & stratégie pub',
    logo: '/brands/tribalagency-marque.png',
    url: 'https://tribalagency.africa',
  },
  {
    name: 'Kaui',
    description: 'SaaS de gestion tout-en-un',
    logo: '/brands/kaui-logo.png',
    url: 'https://kaui.app',
  },
]

const techProjects = [
  {
    name: 'Tribal Ops',
    description: 'Plateforme de gestion business sur mesure. ERP, stocks, facturation, livraisons \u2014 tout en un.',
    tags: ['React', 'TypeScript', 'Node.js'],
  },
  {
    name: 'MCP x Claude AI',
    description: '11 serveurs MCP, 74 outils connect\u00e9s \u00e0 Claude. L\'IA au service du business r\u00e9el.',
    tags: ['11 Serveurs', '74 Outils', 'IA'],
  },
  {
    name: 'Tribal Studio',
    description: 'Génération d\'images par IA. Créativité automatisée.',
    tags: ['IA Générative', 'Automatisation', 'API'],
  },
  {
    name: 'WhatsApp Manager',
    description: 'Gestion centralis\u00e9e des conversations WhatsApp Business. Envoi de templates, suivi clients et notifications automatis\u00e9es.',
    tags: ['WhatsApp API', 'CRM', 'Automation'],
  },
  {
    name: 'Tribal Flow',
    description: 'Productivit\u00e9 personnelle et gestion de projets. T\u00e2ches, timer, qu\u00eates XP et suivi d\'objectifs gamifi\u00e9.',
    tags: ['Productivit\u00e9', 'Gamification', 'SaaS'],
  },
]

function BusinessCard({ biz, index }: { biz: (typeof businesses)[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.a
      ref={ref}
      href={biz.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] as const }}
      className="glass rounded-xl p-5 group hover:bg-glass-hover transition-all duration-300 block"
    >
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center overflow-hidden shrink-0 group-hover:bg-white/[0.08] transition-colors p-2">
          <img
            src={biz.logo}
            alt={biz.name}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="min-w-0">
          <h4 className="font-display font-bold text-base">{biz.name}</h4>
          <p className="text-text-dim text-sm">{biz.description}</p>
        </div>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 text-text-dim shrink-0 opacity-0 group-hover:opacity-100 transition-opacity ml-auto">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
        </svg>
      </div>
    </motion.a>
  )
}

function TechCard({ project, index }: { project: (typeof techProjects)[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] as const }}
      className="glass rounded-2xl p-8 group hover:bg-glass-hover transition-all duration-500 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      <h4 className="font-display text-xl font-bold mb-3">{project.name}</h4>
      <p className="text-text-muted leading-relaxed mb-5">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 rounded-lg bg-white/[0.04] border border-white/[0.06] text-text-dim text-xs font-medium"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Empire() {
  return (
    <section id="empire" className="relative z-10 py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionReveal>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="glow-dot" />
              <span className="text-sm uppercase tracking-[0.25em] text-accent font-semibold">
                L'Empire
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
              Ce que je <span className="gradient-text">construis</span>
            </h2>
          </div>
        </SectionReveal>

        {/* Tribal Enterprises - Parent ecosystem */}
        <SectionReveal delay={0.1}>
          <div className="glass-strong rounded-3xl p-8 sm:p-10 mb-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-8">
              <img
                src="/brands/tribal-enterprise.png"
                alt="Tribal Enterprises"
                className="h-12 sm:h-14 object-contain"
              />
              <p className="text-text-muted">
                L'&eacute;cosyst&egrave;me qui regroupe toutes les marques et plateformes.
                Fond&eacute; avec Souka &mdash; moi la tech, le design et l'IA. Lui, l'audiovisuel, la cr&eacute;ation vid&eacute;o, la production et la logistique. 50/50.
              </p>
            </div>

            {/* Businesses inside the ecosystem */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {businesses.map((biz, i) => (
                <BusinessCard key={biz.name} biz={biz} index={i} />
              ))}
            </div>
          </div>
        </SectionReveal>

        {/* Tech projects */}
        <SectionReveal delay={0.1}>
          <h3 className="font-display text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="w-8 h-[2px] bg-gradient-to-r from-white/30 to-transparent" />
            Les Produits Tech
          </h3>
        </SectionReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {techProjects.map((project, i) => (
            <TechCard key={project.name} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
