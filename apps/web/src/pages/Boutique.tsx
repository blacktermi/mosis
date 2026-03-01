import { motion } from 'framer-motion'
import SectionReveal from '../components/SectionReveal'

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const },
  },
}

export default function Boutique() {
  return (
    <section className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 pt-28 pb-32">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto text-center"
      >
        <motion.div variants={itemVariants} className="flex items-center justify-center gap-4 mb-4">
          <div className="glow-dot" />
          <span className="text-sm uppercase tracking-[0.25em] text-accent font-semibold">
            Boutique
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="font-display text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6"
        >
          Mes <span className="gradient-text">produits</span>
        </motion.h1>

        <motion.p variants={itemVariants} className="text-text-muted text-lg max-w-2xl mx-auto mb-16">
          Templates, ressources et outils pour les builders.
        </motion.p>
      </motion.div>

      <SectionReveal>
        <div className="glass-strong rounded-3xl p-10 sm:p-14 text-center relative overflow-hidden max-w-3xl mx-auto">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          <div className="w-20 h-20 rounded-2xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center mx-auto mb-8">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10 text-text-muted">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
            </svg>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Bient&ocirc;t disponible
          </h2>
          <p className="text-text-muted text-lg max-w-lg mx-auto mb-8">
            Je pr&eacute;pare des templates, des ressources et des outils pour t'aider &agrave; builder. Reste connect&eacute;.
          </p>

          <a
            href="https://youtube.com/@theomosis"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold glass text-text-muted hover:text-text hover:bg-white/[0.05] transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            Me suivre pour &ecirc;tre alert&eacute;
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </SectionReveal>
    </section>
  )
}
