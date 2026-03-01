import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const sectionLinks = [
  { label: 'Accueil', href: '/#hero' },
  { label: 'Histoire', href: '/#about' },
  { label: 'Vision', href: '/#mindset' },
  { label: 'Empire', href: '/#empire' },
  { label: 'Passions', href: '/#passions' },
]

const pageLinks = [
  { label: 'Boutique', to: '/boutique' },
  { label: 'Formation', to: '/formation' },
]

function SectionLink({ label, href, onClick, className }: { label: string; href: string; onClick?: () => void; className?: string }) {
  const location = useLocation()

  const handleClick = (e: React.MouseEvent) => {
    onClick?.()
    if (location.pathname === '/') {
      e.preventDefault()
      const id = href.replace('/#', '')
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <a href={href} onClick={handleClick} className={className}>
      {label}
    </a>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2, ease: [0.22, 1, 0.36, 1] as const }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'glass-strong py-3' : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center group">
            <img
              src="/logomarque.png"
              alt="MOSIS"
              className="h-6 object-contain invert brightness-200 opacity-80 group-hover:opacity-100 transition-opacity"
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {sectionLinks.map((link) => (
              <SectionLink
                key={link.href}
                label={link.label}
                href={link.href}
                className="px-4 py-2 text-sm text-text-muted hover:text-text transition-colors rounded-lg hover:bg-white/[0.03] font-medium"
              />
            ))}
            {pageLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="px-4 py-2 text-sm text-text-muted hover:text-text transition-colors rounded-lg hover:bg-white/[0.03] font-medium"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="/#social"
              className="ml-3 px-5 py-2 text-sm font-semibold rounded-lg bg-white/[0.08] border border-white/[0.1] text-text hover:bg-white/[0.12] transition-all"
            >
              Me Suivre
            </a>
          </div>

          {/* Mobile burger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            aria-label="Menu"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block w-5 h-0.5 bg-text rounded-full"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-5 h-0.5 bg-text rounded-full"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="block w-5 h-0.5 bg-text rounded-full"
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-void/90 backdrop-blur-2xl md:hidden"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ delay: 0.1 }}
              className="flex flex-col items-center justify-center h-full gap-6"
            >
              <img
                src="/logomarque.png"
                alt="MOSIS"
                className="h-8 object-contain invert brightness-200 opacity-60 mb-4"
              />
              {sectionLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.05 }}
                >
                  <SectionLink
                    label={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-2xl font-display font-semibold text-text-muted hover:text-text transition-colors"
                  />
                </motion.div>
              ))}
              {pageLinks.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + (sectionLinks.length + i) * 0.05 }}
                >
                  <Link
                    to={link.to}
                    onClick={() => setMobileOpen(false)}
                    className="text-2xl font-display font-semibold text-text-muted hover:text-text transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.a
                href="/#social"
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                className="mt-4 px-8 py-3 rounded-xl bg-text text-void font-bold text-lg"
              >
                Me Suivre
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
