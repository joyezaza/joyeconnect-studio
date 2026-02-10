import { useState, useEffect } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'

interface NavigationProps {
  scrollY: number
}

const Navigation = ({ scrollY }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  const navLinks = [
    { name: 'Accueil', href: '#hero' },
    { name: 'AI School', href: '#ai-school' },
    { name: 'eBooks', href: '#ebooks' },
    { name: 'Média', href: '#ai-media' },
    { name: 'Séries', href: '#series' },
    { name: 'Comédie', href: '#comedy' },
    { name: 'B2B', href: '#b2b' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#cta' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => link.href.replace('#', ''))
      
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  const isScrolled = scrollY > 100

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-black/90 backdrop-blur-lg border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="section-padding">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection('#hero')
            }}
            className="flex items-center gap-3 group"
          >
            <div className="relative w-10 h-10 flex items-center justify-center bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg transition-transform duration-300 group-hover:scale-110">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <span className="font-display text-2xl tracking-wider text-white">
              JOYE<span className="text-blue-400">CONNECT</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(link.href)
                }}
                className={`relative font-body text-sm tracking-wide transition-colors duration-300 ${
                  activeSection === link.href.replace('#', '')
                    ? 'text-blue-400'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-blue-400 transition-all duration-300 ${
                    activeSection === link.href.replace('#', '')
                      ? 'w-full'
                      : 'w-0 group-hover:w-full'
                  }`}
                />
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <button
              onClick={() => scrollToSection('#cta')}
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-body text-sm font-semibold rounded-lg transition-all duration-300 hover:shadow-glow hover:scale-105"
            >
              Commencer
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative w-10 h-10 flex items-center justify-center text-white"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-lg border-b border-white/5 transition-all duration-500 ${
          isOpen
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="section-padding py-6 space-y-4">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault()
                scrollToSection(link.href)
              }}
              className={`block font-body text-lg transition-all duration-300 ${
                activeSection === link.href.replace('#', '')
                  ? 'text-blue-400 translate-x-2'
                  : 'text-white/70 hover:text-white hover:translate-x-2'
              }`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => scrollToSection('#cta')}
            className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-body text-sm font-semibold rounded-lg"
          >
            Commencer
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
