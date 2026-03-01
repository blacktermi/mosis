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
                  <div className="absolute -inset-1 rounded-xl bg-white/[0.04] blur-md" />
                  <img
                    src="/pp.png"
                    alt="Joseph Kakou - Theo Mosis"
                    className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-xl object-cover border border-white/[0.08]"
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
                  Autodidacte pur. Pas d'&eacute;cole de code,
                  pas de bootcamp, pas de mentor. Juste moi, mon &eacute;cran, et une d&eacute;termination
                  qui ne s'arr&ecirc;te jamais.
                </p>
                <p>
                  Depuis Abidjan, j'ai trac&eacute; mon chemin. J'ai appris &agrave; coder
                  en construisant des projets r&eacute;els, pas en suivant des tutoriels.
                  Mais je ne suis pas que d&eacute;veloppeur &mdash; je suis un <span className="text-text font-semibold">cerveau cr&eacute;atif 360</span>.
                  Code, design, branding, marketing, strat&eacute;gie &mdash; je pense et ex&eacute;cute sur tous les fronts.
                </p>
                <p>
                  Aujourd'hui, je dirige <span className="text-text font-semibold">Tribal Enterprises SARL</span> &mdash;
                  un empire de marques que j'ai b&acirc;ti de z&eacute;ro avec mon associ&eacute; Souka.
                  Moi je g&egrave;re la tech, le design et l'IA. Lui, l'audiovisuel, la cr&eacute;ation vid&eacute;o, la production et la logistique.
                  50/50. L'&eacute;quilibre parfait.
                </p>
              </div>
            </div>
          </SectionReveal>

          {/* Side cards */}
          <div className="md:col-span-5 flex flex-col gap-6">
            <SectionReveal delay={0.2}>
              <div className="glass rounded-2xl p-6">
                <div className="text-sm uppercase tracking-[0.2em] text-text-dim mb-3">Localisation</div>
                <div className="flex items-center gap-3">
                  <span className="text-3xl">🇨🇮</span>
                  <div>
                    <div className="font-display font-bold text-xl">Abidjan</div>
                    <div className="text-text-dim text-sm">C&ocirc;te d'Ivoire</div>
                  </div>
                </div>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.3}>
              <div className="glass rounded-2xl p-6">
                <div className="text-sm uppercase tracking-[0.2em] text-text-dim mb-3">Comp&eacute;tences 360</div>
                <div className="flex flex-wrap gap-2">
                  {[
                    'React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Claude AI', 'MCP',
                    'UI/UX Design', 'Branding', 'Graphisme', 'Logo Design',
                    'Marketing Digital', 'Strat&eacute;gie Pub', 'Meta Ads', 'SEO',
                    'Gestion de Projet', 'ERP', 'Automatisation',
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.06] text-text-muted text-sm font-medium"
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
                  &laquo; Je ne paie pas pour des outils.
                  <br />
                  <span className="gradient-text">Je les construis.</span> &raquo;
                </blockquote>
              </div>
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
