import { useState } from 'react'
import { Sparkles, Twitter, Instagram, Youtube, Linkedin, ArrowRight, Mail, MapPin, Phone } from 'lucide-react'

const Footer = () => {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setTimeout(() => {
        setIsSubscribed(false)
        setEmail('')
      }, 3000)
    }
  }

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const quickLinks = [
    { name: 'Accueil', href: '#hero' },
    { name: 'AI School', href: '#ai-school' },
    { name: 'eBooks', href: '#ebooks' },
    { name: 'Séries', href: '#series' },
    { name: 'Contact', href: '#cta' },
  ]

  const services = [
    { name: 'Cours IA', href: '#ai-school' },
    { name: 'eBooks', href: '#ebooks' },
    { name: 'Média IA', href: '#ai-media' },
    { name: 'Certifications', href: '#certifications' },
  ]

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ]

  return (
    <footer className="relative bg-black border-t border-white/5">
      {/* Animated Border */}
      <div className="absolute top-0 left-0 right-0 h-px overflow-hidden">
        <div
          className="h-full w-[200%] animate-gradient-shift"
          style={{
            background: 'linear-gradient(90deg, transparent, #3b82f6, transparent, #06b6d4, transparent)',
            backgroundSize: '50% 100%',
          }}
        />
      </div>

      <div className="section-padding py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('#hero')
              }}
              className="flex items-center gap-3 group mb-6"
            >
              <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg transition-transform duration-300 group-hover:scale-110">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="font-display text-xl tracking-wider text-white">
                JOYE<span className="text-blue-400">CONNECT</span>
              </span>
            </a>
            
            <p className="font-body text-white/50 leading-relaxed mb-6">
              La première plateforme éducative et de divertissement entièrement 
              propulsée par l'IA Générative et l'IA Agentique.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-white/50">
                <Mail className="w-4 h-4 text-blue-400" />
                <span className="font-body text-sm">contact@joyeconnect.studio</span>
              </div>
              <div className="flex items-center gap-3 text-white/50">
                <Phone className="w-4 h-4 text-blue-400" />
                <span className="font-body text-sm">+33 1 23 45 67 89</span>
              </div>
              <div className="flex items-center gap-3 text-white/50">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span className="font-body text-sm">Paris, France</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg text-white mb-6">Liens Rapides</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection(link.href)
                    }}
                    className="group flex items-center gap-2 font-body text-white/50 hover:text-blue-400 transition-colors duration-300"
                  >
                    <span className="relative">
                      {link.name}
                      <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-blue-400 transition-all duration-300 group-hover:w-full" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-lg text-white mb-6">Nos Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection(service.href)
                    }}
                    className="group flex items-center gap-2 font-body text-white/50 hover:text-blue-400 transition-colors duration-300"
                  >
                    <span className="relative">
                      {service.name}
                      <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-blue-400 transition-all duration-300 group-hover:w-full" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-display text-lg text-white mb-6">Newsletter</h4>
            <p className="font-body text-sm text-white/50 mb-4">
              Recevez nos actualités et nouveautés.
            </p>
            
            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Votre email"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg font-body text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-blue-400/50 transition-all duration-300"
                  disabled={isSubscribed}
                />
              </div>
              <button
                type="submit"
                disabled={isSubscribed}
                className={`w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-body text-sm font-semibold transition-all duration-300 ${
                  isSubscribed
                    ? 'bg-green-500 text-white'
                    : 'bg-gradient-to-r from-blue-500 to-cyan-400 text-white hover:opacity-90'
                }`}
              >
                {isSubscribed ? (
                  'Inscrit!'
                ) : (
                  <>
                    S'inscrire
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 flex items-center justify-center bg-white/5 rounded-lg text-white/50 transition-all duration-300 hover:bg-blue-400 hover:text-black hover:scale-110"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-sm text-white/40">
            © {new Date().getFullYear()} JoyeConnect Studio. Tous droits réservés.
          </p>
          
          <div className="flex gap-6">
            <a href="#" className="font-body text-sm text-white/40 hover:text-blue-400 transition-colors duration-300">
              Politique de Confidentialité
            </a>
            <a href="#" className="font-body text-sm text-white/40 hover:text-blue-400 transition-colors duration-300">
              Conditions d'Utilisation
            </a>
            <a href="#" className="font-body text-sm text-white/40 hover:text-blue-400 transition-colors duration-300">
              Cookies
            </a>
          </div>
        </div>
      </div>

      {/* Gradient Shift Animation */}
      <style>{`
        @keyframes gradient-shift {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        .animate-gradient-shift {
          animation: gradient-shift 5s linear infinite;
        }
      `}</style>
    </footer>
  )
}

export default Footer
