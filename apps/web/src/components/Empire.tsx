import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionReveal from './SectionReveal'

const studioBrands = [
  {
    name: 'Tribal Studio LLC',
    description: 'Studio dev/SaaS international',
    logo: '/brands/tribalstudio-marque.svg',
    url: 'https://tribalstudio.dev',
  },
]

const storeBrands = [
  {
    name: 'Tribal Print',
    description: 'Tableaux photo, décoration & impression personnalisée',
    logo: '/brands/tribalprint-marque.svg',
    url: 'https://tribalprint.ci',
  },
  {
    name: 'Jericho Print',
    description: 'Niche chrétienne : versets, tableaux & cadeaux',
    logo: '/brands/jerichoprint-marque.png',
    url: 'https://jerichoprint.ci',
  },
  {
    name: 'Muslim Print',
    description: 'Niche musulmane : tableaux & décoration spirituelle',
    logo: '/brands/muslimprint-marque.png',
    url: 'https://muslimprint.ci',
  },
]

const techProjects = [
  {
    name: 'Tribal Ops',
    description: 'Le système de gestion de Tribal : commandes, fichiers clients, production, paiements et livraison. Des outils construits à partir des besoins de l’atelier.',
    tags: ['Opérations', 'E-commerce', 'Production'],
  },
  {
    name: 'Tribal Studio Ops',
    description: 'SaaS interne pour piloter une LLC US non-resident depuis l’Afrique : compta Form 5472/1120, transactions Wise, automatisations CPA.',
    tags: ['SaaS', 'Compta US', 'NestJS'],
  },
  {
    name: 'Tribal Flow',
    description: 'Productivité personnelle gamifiée. Tâches, timer, quêtes XP, planification de contenu YouTube.',
    tags: ['Productivité', 'Gamification', 'SaaS'],
  },
  {
    name: 'IA & automatisation',
    description: 'Des assistants IA et des outils MCP pour connecter les applications, automatiser les tâches et accélérer le développement au quotidien.',
    tags: ['MCP', 'Codex', 'Agents IA'],
  },
  {
    name: 'WhatsApp Manager',
    description: 'Multi-comptes WhatsApp Business : templates, suivi clients, notifications automatisées.',
    tags: ['WhatsApp API', 'CRM', 'Automation'],
  },
  {
    name: 'Tribal AutoCut',
    description: 'Plugin Premiere Pro IA. Coupes automatiques, sous-titres, export shorts — pipeline vidéo Theo Mosis.',
    tags: ['Premiere Pro', 'IA', 'Vidéo'],
  },
  {
    name: 'Capture Plus',
    description: 'Enregistreur d\'écran et caméra natif macOS. iPhone en webcam 4K, overlay PiP, capture Retina.',
    tags: ['Swift', 'macOS', 'ScreenCaptureKit'],
  },
]

function BrandCard({ biz, index }: { biz: { name: string; description: string; logo: string; url: string }; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })
  const isExternal = biz.url !== '#'

  const Inner = (
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-xl bg-glass border border-glass-border flex items-center justify-center overflow-hidden shrink-0 group-hover:bg-glass-hover transition-colors p-2">
        <img src={biz.logo} alt={biz.name} className="w-full h-full object-contain" />
      </div>
      <div className="min-w-0 flex-1">
        <h4 className="font-display font-bold text-base">{biz.name}</h4>
        <p className="text-text-dim text-sm">{biz.description}</p>
      </div>
      {isExternal && (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 text-text-dim shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
        </svg>
      )}
    </div>
  )

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] as const }}
    >
      {isExternal ? (
        <a
          href={biz.url}
          target="_blank"
          rel="noopener noreferrer"
          className="glass rounded-xl p-5 group hover:bg-glass-hover transition-all duration-300 block"
        >
          {Inner}
        </a>
      ) : (
        <div className="glass rounded-xl p-5 group">{Inner}</div>
      )}
    </motion.div>
  )
}

function PillarHeader({ tag, title, subtitle }: { tag: string; title: string; subtitle: string }) {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-3 mb-2">
        <span className="text-xs uppercase tracking-[0.25em] text-accent font-semibold">{tag}</span>
        <span className="h-px flex-1 bg-glass-border" />
      </div>
      <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight mb-2">{title}</h3>
      <p className="text-text-muted">{subtitle}</p>
    </div>
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
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent to-transparent opacity-0 group-hover:opacity-20 transition-opacity" />

      <h4 className="font-display text-xl font-bold mb-3">{project.name}</h4>
      <p className="text-text-muted leading-relaxed mb-5">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 rounded-lg bg-glass border border-glass-border text-text-dim text-xs font-medium"
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
                L'Écosystème
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
              Trois piliers, <span className="gradient-text">un même builder</span>
            </h2>
            <p className="text-text-muted text-lg max-w-2xl mx-auto">
              Je construis des marques, les outils qui les font tourner et le contenu qui raconte ce parcours. Du digital aux produits fabriqués à Abidjan.
            </p>
          </div>
        </SectionReveal>

        {/* Pillar 1 — Theo Mosis */}
        <SectionReveal delay={0.05}>
          <div className="glass-strong rounded-3xl p-8 sm:p-10 mb-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
            <PillarHeader
              tag="Pilier 01 — Personal Brand"
              title="Theo Mosis"
              subtitle="Chaîne YouTube, contenu et réseaux. Le Vibe Coder qui documente en transparence."
            />
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { value: '95', label: 'Abonnés YouTube' },
                { value: '55', label: 'Vidéos' },
                { value: '20 nov 2024', label: 'Chaîne lancée' },
              ].map((s) => (
                <div key={s.label} className="glass rounded-xl p-4 text-center">
                  <div className="font-display text-2xl font-bold text-text">{s.value}</div>
                  <div className="text-xs text-text-dim uppercase tracking-wider mt-1">{s.label}</div>
                </div>
              ))}
            </div>
            <a
              href="https://youtube.com/@theomosis"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 text-text-muted hover:text-text transition-colors text-sm font-semibold"
            >
              Suivre la chaîne
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </SectionReveal>

        {/* Pillar 2 — Tribal Studio LLC */}
        <SectionReveal delay={0.1}>
          <div className="glass-strong rounded-3xl p-8 sm:p-10 mb-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
            <PillarHeader
              tag="Pilier 02 — B2B International"
              title="Tribal Studio LLC"
              subtitle="LLC US (New Mexico, créée le 24 avril 2026). Dev sur mesure, SaaS, IA pour clients USD/CAD/EUR."
            />
            <div className="grid sm:grid-cols-2 gap-4">
              {studioBrands.map((biz, i) => (
                <BrandCard key={biz.name} biz={biz} index={i} />
              ))}
            </div>
          </div>
        </SectionReveal>

        {/* Pillar 3 — Tribal Store */}
        <SectionReveal delay={0.15}>
          <div className="glass-strong rounded-3xl p-8 sm:p-10 mb-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-warm/30 to-transparent" />
            <PillarHeader
              tag="Pilier 03 — Marques & production locale"
              title="Tribal · Impression & création"
              subtitle="Tribal Print est au cœur de l’activité d’impression et de personnalisation. Jericho Print et Muslim Print en déclinent l’offre pour des communautés spécifiques."
            />
            <div className="grid sm:grid-cols-3 gap-4">
              {storeBrands.map((biz, i) => (
                <BrandCard key={biz.name} biz={biz} index={i} />
              ))}
            </div>
            <div className="mt-8 pt-8 border-t border-glass-border">
              <h4 className="font-display text-xl font-bold mb-3">My Neon Studio · Création lumineuse</h4>
              <p className="text-text-muted leading-relaxed mb-5">
                À Abidjan, des néons LED personnalisés et des enseignes lumineuses pour les entreprises,
                les événements et les intérieurs. Textes, logos et enseignes sur mesure,
                avec accompagnement, livraison et installation.
              </p>
              <BrandCard biz={{ name: 'My Neon Studio', description: 'Néons LED & enseignes sur mesure', logo: '/brands/myneonstudio-logo.svg', url: 'https://myneonstudio.ci' }} index={0} />
            </div>
          </div>
        </SectionReveal>

        {/* Tech projects */}
        <SectionReveal delay={0.1}>
          <h3 className="font-display text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="w-8 h-[2px] bg-gradient-to-r from-accent/30 to-transparent" />
            Les produits tech
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
