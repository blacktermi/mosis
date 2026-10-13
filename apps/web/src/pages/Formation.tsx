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

export default function Formation() {
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
            Formation
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="font-display text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6"
        >
          Apprends &agrave; <span className="gradient-text">builder</span>
        </motion.h1>

        <motion.p variants={itemVariants} className="text-text-muted text-lg max-w-2xl mx-auto mb-16">
          Des formations pour lancer ton business tech.
        </motion.p>
      </motion.div>

      <SectionReveal>
        <div className="glass-strong rounded-3xl p-10 sm:p-14 text-center relative overflow-hidden max-w-3xl mx-auto">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

          <div className="w-20 h-20 rounded-2xl bg-glass border border-glass-border flex items-center justify-center mx-auto mb-8">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10 text-text-muted">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a23.54 23.54 0 0 0-2.688 6.671A12.02 12.02 0 0 1 12 2.25a12.02 12.02 0 0 1 10.432 14.568 23.54 23.54 0 0 0-2.688-6.671m-15.482 0a23.54 23.54 0 0 1 7.742 3.22 23.54 23.54 0 0 1 7.74-3.22M12 2.25A2.25 2.25 0 0 0 9.75 4.5v.75a2.25 2.25 0 0 0 4.5 0v-.75A2.25 2.25 0 0 0 12 2.25Z" />
            </svg>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Bient&ocirc;t disponible
          </h2>
          <p className="text-text-muted text-lg max-w-lg mx-auto mb-8">
            Je pr&eacute;pare des formations compl&egrave;tes : code, design, branding, marketing, IA. Tout ce qu'il faut pour devenir autonome.
          </p>

          <a
            href="https://youtube.com/@theomosis"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold glass text-text-muted hover:text-text hover:bg-glass-hover transition-all hover:scale-[1.02] active:scale-[0.98]"
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
