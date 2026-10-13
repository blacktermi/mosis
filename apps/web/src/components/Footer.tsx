import SectionReveal from './SectionReveal'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative z-10 py-16 px-6">
      <div className="section-divider mb-16" />
      <SectionReveal>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Logo & tagline */}
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg overflow-hidden bg-accent-dim p-1.5">
                <img
                  src="/logo.png"
                  alt="Mosis"
                  className="w-full h-full object-contain logo-adaptive"
                />
              </div>
              <div>
                <img
                  src="/logomarque.png"
                  alt="MOSIS"
                  className="h-5 object-contain logo-adaptive"
                />
                <div className="text-text-dim text-xs mt-0.5">Le Vibe Coder</div>
              </div>
            </div>

            {/* Quote */}
            <p className="text-text-dim text-sm text-center md:text-right italic max-w-sm">
              &laquo; Build. Ship. Repeat. &raquo;
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-glass-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-text-dim text-sm">
              &copy; {year} Theo Mosis &mdash;{' '}
              <a
                href="https://tribalstudio.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-dim hover:text-text transition-colors"
              >
                Tribal Studio LLC
              </a>
              . Tous droits r&eacute;serv&eacute;s.
            </p>
            <p className="text-text-dim/50 text-xs">
              Construit from scratch avec React &amp; TypeScript
            </p>
          </div>
        </div>
      </SectionReveal>
    </footer>
  )
}
