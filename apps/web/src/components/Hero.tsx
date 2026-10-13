import { motion } from 'framer-motion'

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

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-32 sm:pt-20 sm:pb-28">
      {/* Subtle radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-radial from-accent-dim to-transparent rounded-full blur-3xl pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
      >
        {/* Profile Photo - clean, no glow ring */}
        <motion.div variants={itemVariants} className="flex justify-center mb-10">
          <div className="relative">
            {/* Soft shadow behind photo */}
            <div className="absolute inset-4 rounded-full bg-accent-dim blur-2xl" />
            <img
              src="/pp-nobg.png"
              alt="Theo Mosis"
              className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full object-cover object-top border border-glass-border"
            />
          </div>
        </motion.div>

        {/* Status badge */}
        <motion.div variants={itemVariants} className="flex justify-center mb-8">
          <div className="glass rounded-full px-5 py-2 flex items-center gap-3 text-sm pulse-glow">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
            </span>
            <span className="text-text-muted">
              Fondateur de <span className="text-text font-semibold">Tribal Studio LLC</span>
            </span>
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="font-display font-bold tracking-tighter leading-[0.9]"
        >
          <span className="block text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] text-text">
            THEO
          </span>
          <span className="block text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] gradient-text">
            MOSIS
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="mt-6 text-xl sm:text-2xl md:text-3xl font-display font-medium text-text-muted tracking-wide"
        >
          Le <span className="text-text">Vibe Coder</span>
        </motion.p>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="mt-6 text-base sm:text-lg text-text-dim max-w-2xl mx-auto leading-relaxed"
        >
          Je construis des marques, des produits et les outils qui les font grandir.
          <br className="hidden sm:block" />
          Tribal Print, My Neon Studio et Tribal Studio. Depuis Abidjan, avec l’IA.
        </motion.p>

        {/* Tagline secondary */}
        <motion.p
          variants={itemVariants}
          className="mt-4 text-sm sm:text-base font-display font-semibold tracking-widest uppercase"
        >
          <span className="text-text-muted">Build in Africa</span>
          <span className="text-text-dim mx-3">·</span>
          <span className="gradient-text">Ship Worldwide</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#about"
            className="group relative px-8 py-4 rounded-xl font-semibold text-void bg-text overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <span className="relative z-10">Découvrir mon histoire</span>
            <div className="absolute inset-0 bg-accent-dim translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>
          <a
            href="https://tribalstudio.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-xl font-semibold glass text-text-muted hover:text-text hover:bg-glass-hover transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            Travailler avec moi →
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          variants={itemVariants}
          className="mt-16 flex flex-wrap justify-center gap-8 sm:gap-12"
        >
          {[
            { value: '3', label: 'Piliers' },
            { value: 'LLC 🇺🇸', label: 'New Mexico' },
            { value: '7+', label: 'Apps en prod' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-text whitespace-nowrap">{stat.value}</div>
              <div className="text-xs sm:text-sm text-text-dim mt-1 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-2 scroll-indicator pointer-events-none"
      >
        <span className="text-xs text-text-dim uppercase tracking-[0.2em]">Scroll</span>
        <svg width="20" height="28" viewBox="0 0 20 28" fill="none" className="text-text-dim">
          <rect x="1" y="1" width="18" height="26" rx="9" stroke="currentColor" strokeWidth="1.5" />
          <motion.circle
            cx="10"
            cy="9"
            r="2.5"
            fill="currentColor"
            animate={{ cy: [9, 18, 9] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </svg>
      </motion.div>
    </section>
  )
}
