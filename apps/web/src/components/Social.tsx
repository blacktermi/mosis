import SectionReveal from './SectionReveal'

const socials = [
  {
    name: 'YouTube',
    handle: '@theomosis',
    description: 'Le Vibe Coder — vibe coding, LLC US, build in public',
    url: 'https://youtube.com/@theomosis',
    hoverBg: 'hover:bg-red-500/10',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    handle: '@theomosis',
    description: 'Réseau pro, prospects Tribal Studio',
    url: 'https://www.linkedin.com/in/theomosis/',
    hoverBg: 'hover:bg-sky-500/10',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.063 2.063 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    handle: '@theo_mosis',
    description: 'Behind the scenes & lifestyle',
    url: 'https://www.instagram.com/theo_mosis/',
    hoverBg: 'hover:bg-fuchsia-500/10',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
  {
    name: 'X / Twitter',
    handle: '@theo_mosis',
    description: 'Threads tech, builds en live',
    url: 'https://x.com/theo_mosis',
    hoverBg: 'hover:bg-glass-hover',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: 'Threads',
    handle: '@theo_mosis',
    description: 'Conversations build in public',
    url: 'https://www.threads.net/@theo_mosis',
    hoverBg: 'hover:bg-glass-hover',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M17.609 11.13c-.084-.04-.169-.079-.255-.116-.149-2.756-1.654-4.334-4.182-4.35h-.034c-1.512 0-2.769.645-3.543 1.82l1.391.954c.578-.876 1.485-1.063 2.152-1.063h.023c.831.005 1.458.247 1.86.717.293.343.49.817.587 1.42a10.61 10.61 0 0 0-2.36-.114c-2.376.137-3.904 1.524-3.801 3.45.052.978.539 1.819 1.371 2.367.703.464 1.609.689 2.553.638 1.246-.068 2.225-.544 2.91-1.413.519-.66.847-1.514.992-2.598.595.36 1.036.832 1.28 1.4.413.965.437 2.55-.857 3.844-1.135 1.135-2.498 1.625-4.555 1.64-2.282-.017-4.007-.748-5.124-2.171-1.046-1.333-1.587-3.26-1.607-5.726.02-2.466.561-4.393 1.607-5.725 1.117-1.424 2.842-2.155 5.124-2.172 2.298.017 4.053.751 5.218 2.183.572.703 1.003 1.587 1.286 2.616l1.768-.472c-.343-1.266-.882-2.355-1.612-3.252C18.706 1.555 16.514.604 13.687.585h-.012c-2.819.019-4.987.974-6.443 2.838C5.835 3.094 5.143 5.27 5.117 8.024v.012c.026 2.755.718 4.93 2.115 6.602 1.456 1.864 3.624 2.819 6.443 2.838h.012c2.504-.017 4.27-.671 5.724-2.124 1.901-1.899 1.844-4.279 1.218-5.74-.45-1.049-1.31-1.901-2.49-2.482zm-4.391 4.85c-1.045.058-2.13-.41-2.184-1.42-.04-.751.535-1.589 2.246-1.687.197-.012.39-.017.577-.017.622 0 1.205.061 1.737.177-.197 2.481-1.361 2.886-2.376 2.947z"/>
      </svg>
    ),
  },
  {
    name: 'TikTok',
    handle: '@theomosis',
    description: 'Short-form tech & beats',
    url: 'https://tiktok.com/@theomosis',
    hoverBg: 'hover:bg-glass-hover',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
      </svg>
    ),
  },
  {
    name: 'GitHub',
    handle: '@blacktermi',
    description: 'Code source & open source',
    url: 'https://github.com/blacktermi',
    hoverBg: 'hover:bg-glass-hover',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
  {
    name: 'Facebook',
    handle: 'Theomosis',
    description: 'Communauté & actualités',
    url: 'https://facebook.com/theomosis',
    hoverBg: 'hover:bg-blue-500/10',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
]

export default function Social() {
  const featured = socials[0]
  const rest = socials.slice(1)

  return (
    <section id="social" className="relative z-10 py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionReveal>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="glow-dot" />
              <span className="text-sm uppercase tracking-[0.25em] text-accent font-semibold">
                Rejoins le mouvement
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
              Suis mon <span className="gradient-text">parcours</span>
            </h2>
            <p className="text-text-muted text-lg max-w-2xl mx-auto">
              Build in public. Je documente le code, les contrats, les outils écartés, les erreurs.
              Si je peux pas le dire en public, je le fais pas.
            </p>
          </div>
        </SectionReveal>

        {/* YouTube featured */}
        <SectionReveal delay={0.1}>
          <a
            href={featured.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block glass-strong rounded-3xl p-8 sm:p-12 mb-8 group relative overflow-hidden transition-all duration-500 hover:border-glass-border"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10 flex flex-col sm:flex-row items-center gap-8">
              <div className="w-20 h-20 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500">
                <svg viewBox="0 0 24 24" fill="#ef4444" className="w-10 h-10">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <div className="text-center sm:text-left flex-1">
                <h3 className="font-display text-3xl sm:text-4xl font-bold mb-2">YouTube</h3>
                <p className="text-text-muted text-lg mb-3">
                  Le Vibe Coder — vibe coding, LLC US, build in public
                </p>
                <span className="inline-flex items-center gap-2 text-text-muted font-semibold group-hover:text-text group-hover:gap-3 transition-all">
                  S'abonner à la chaîne
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </div>
            </div>
          </a>
        </SectionReveal>

        {/* Other socials grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {rest.map((social, i) => (
            <SectionReveal key={social.name} delay={0.15 + i * 0.06}>
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`block glass rounded-2xl p-6 group transition-all duration-300 ${social.hoverBg}`}
              >
                <div className="w-12 h-12 rounded-xl bg-glass border border-glass-border flex items-center justify-center text-text-muted group-hover:text-text group-hover:bg-glass-hover transition-all mb-4">
                  {social.icon}
                </div>
                <h4 className="font-display font-bold text-lg mb-1">{social.name}</h4>
                <p className="text-text-dim text-sm mb-3">{social.description}</p>
                <span className="text-xs text-text-muted font-medium uppercase tracking-wider group-hover:text-text transition-colors">
                  {social.handle} →
                </span>
              </a>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
