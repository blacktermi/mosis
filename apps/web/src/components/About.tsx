import SectionReveal from './SectionReveal'

export default function About() {
  return (
    <section id="about" className="relative z-10 py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionReveal>
          <div className="flex items-center gap-4 mb-4">
            <div className="glow-dot" />
            <span className="text-sm uppercase tracking-[0.25em] text-accent font-semibold">Mon Histoire</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Qui est <span className="gradient-text">Theo Mosis</span> ?
          </h2>
        </SectionReveal>

        <div className="grid md:grid-cols-12 gap-8 mt-12">
          {/* Main story */}
          <SectionReveal className="md:col-span-7" delay={0.1}>
            <div className="glass rounded-2xl p-8 sm:p-10 h-full">
              <div className="flex items-start gap-5 mb-6">
                <div className="relative shrink-0">
                  <div className="absolute -inset-1 rounded-xl bg-accent-dim blur-md" />
                  <img
                    src="/pp.png"
                    alt="Joseph Kakou - Theo Mosis"
                    className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-xl object-cover border border-glass-border"
                  />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold">Joseph Kakou</h3>
                  <p className="text-text-muted text-sm font-medium">alias Theo Mosis</p>
                  <p className="text-text-dim text-sm mt-1">28 ans &middot; N&eacute; le 13 janvier 1998</p>
                </div>
              </div>

              <div className="space-y-5 text-text-muted leading-relaxed text-lg">
                <p>
                  Autodidacte pur. Pas d'&eacute;cole de code, pas de bootcamp, pas de mentor.
                  J'ai appris en construisant des projets r&eacute;els, pas en suivant des tutos.
                </p>
                <p>
                  Je ne suis pas qu'un d&eacute;veloppeur &mdash; je suis un{' '}
                  <span className="text-text font-semibold">cerveau cr&eacute;atif 360</span>.
                  Code, design, branding, marketing, strat&eacute;gie. Je pense et j'ex&eacute;cute sur tous les fronts.
                </p>
                <p>
                  En avril 2026, j'ai cr&eacute;&eacute; <span className="text-text font-semibold">Tribal Studio LLC</span> au Nouveau-Mexique
                  pour servir des clients internationaux depuis Abidjan. Apps, SaaS, branding,
                  syst&egrave;mes IA sur mesure &mdash; je con&ccedil;ois, je code, je livre.
                </p>
                <p>
                  Avec <span className="text-text font-semibold">Tribal Print</span>, je développe
                  l’impression personnalisée et les tableaux photo. Jericho Print et Muslim Print
                  adaptent cette offre aux communautés chrétienne et musulmane.
                  Avec <span className="text-text font-semibold">My Neon Studio</span>, je travaille
                  aussi la création lumineuse : néons LED, logos et enseignes sur mesure à Abidjan.
                </p>
                <p>
                  Ces activités nourrissent mon travail de développeur. Je construis les outils
                  pour gérer les commandes, préparer la production et suivre les livraisons.
                  Le code, le design et le marketing se rejoignent dans des besoins concrets.
                </p>
                <p>
                  Ma th&egrave;se : un fondateur africain bien outill&eacute; peut livrer plus vite et mieux qu'une agence
                  traditionnelle, depuis chez lui, en facturant en devises fortes.{' '}
                  <span className="text-text font-semibold">L'IA n'a pas remplac&eacute; les devs &mdash; elle a remplac&eacute; les agences lentes.</span>
                </p>
              </div>
            </div>
          </SectionReveal>

          {/* Side cards */}
          <div className="md:col-span-5 flex flex-col gap-6">
            <SectionReveal delay={0.2}>
              <div className="glass rounded-2xl p-6">
                <div className="text-sm uppercase tracking-[0.2em] text-text-dim mb-3">Studio</div>
                <div className="flex items-center gap-3">
                  <span className="text-3xl">🦁</span>
                  <div>
                    <div className="font-display font-bold text-xl">Tribal Studio LLC</div>
                    <div className="text-text-dim text-sm">Dev, Design &amp; IA</div>
                  </div>
                </div>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.3}>
              <div className="glass rounded-2xl p-6">
                <div className="text-sm uppercase tracking-[0.2em] text-text-dim mb-3">Stack 360</div>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Claude Code', 'Cursor', 'Codex', 'MCP',
                    'React', 'Next.js', 'TypeScript', 'Tailwind',
                    'NestJS', 'Node.js', 'Prisma', 'PostgreSQL',
                    'React Native TV', 'Electron', 'HLS Streaming',
                    'UI/UX', 'Branding', 'Marketing Digital',
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg bg-glass border border-glass-border text-text-muted text-sm font-medium"
                      dangerouslySetInnerHTML={{ __html: skill }}
                    />
                  ))}
                </div>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.4}>
              <div className="glass rounded-2xl p-6">
                <div className="text-sm uppercase tracking-[0.2em] text-text-dim mb-3">Philosophie</div>
                <blockquote className="font-display text-xl font-semibold italic leading-snug">
                  &laquo; Je suis pas un coach.
                  <br />
                  <span className="gradient-text">Je suis un dev qui code lui-m&ecirc;me.</span> &raquo;
                </blockquote>
              </div>
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
