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
              <div className="w-10 h-10 rounded-lg overflow-hidden bg-gradient-to-br from-cyan/10 to-purple/10 p-1.5">
                <img
                  src="/logo.png"
                  alt="Mosis"
                  className="w-full h-full object-contain invert brightness-200 opacity-80"
                />
              </div>
              <div>
                <img
                  src="/logomarque.png"
                  alt="MOSIS"
                  className="h-5 object-contain invert brightness-200 opacity-80"
                />
                <div className="text-text-dim text-xs mt-0.5">Le Vibe Coder Africain</div>
              </div>
            </div>

            {/* Quote */}
            <p className="text-text-dim text-sm text-center md:text-right italic max-w-sm">
              &laquo; Build. Ship. Repeat. Depuis Abidjan pour le monde. &raquo;
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-text-dim text-sm">
              &copy; {year} Theo Mosis &mdash;{' '}
              <a
                href="https://tribal.enterprises/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-dim hover:text-white transition-colors"
              >
                Tribal Enterprise SARL
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
