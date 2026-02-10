import { useEffect, useRef, useState } from 'react'
import { ArrowRight, Sparkles, CreditCard, GraduationCap, ShoppingCart, TrendingUp, Check } from 'lucide-react'

const CTA = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      setTimeout(() => {
        setIsSubmitted(false)
        setEmail('')
      }, 3000)
    }
  }

  const monetization = [
    { icon: CreditCard, title: 'Abonnements Mensuels', desc: 'Accès illimité aux cours' },
    { icon: GraduationCap, title: 'Formations Premium', desc: 'Parcours certifiants' },
    { icon: ShoppingCart, title: 'Vente d\'eBooks', desc: 'Bibliothèque numérique' },
    { icon: TrendingUp, title: 'Prépas Examens', desc: 'Préparation intensive' },
  ]

  const benefits = [
    'Accès à 44+ produits et services',
    'Tuteur IA personnel 24/7',
    'Certifications reconnues',
    'Nouveau contenu chaque semaine',
  ]

  return (
    <section
      id="cta"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-black overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: `
              radial-gradient(ellipse at 20% 30%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
              radial-gradient(ellipse at 80% 70%, rgba(6, 182, 212, 0.1) 0%, transparent 50%),
              radial-gradient(ellipse at 50% 50%, rgba(99, 102, 241, 0.05) 0%, transparent 70%)
            `,
          }}
        />
      </div>

      <div className="section-padding relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main CTA Card */}
          <div
            className={`relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl border border-white/10 p-8 lg:p-16 overflow-hidden transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            {/* Glow Effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />

            {/* Content */}
            <div className="relative z-10">
              {/* Badge */}
              <div
                className={`inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/20 mb-6 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
                }`}
                style={{ transitionDelay: '100ms' }}
              >
                <Sparkles className="w-4 h-4 text-blue-400" />
                <span className="font-body text-sm text-blue-400">Rejoignez la Révolution IA</span>
              </div>

              {/* Heading */}
              <h2
                className={`font-display text-4xl sm:text-5xl lg:text-6xl text-white mb-4 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '200ms' }}
              >
                Prêt à Transformer Votre{' '}
                <span className="text-blue-400">Apprentissage</span>?
              </h2>

              {/* Subheading */}
              <p
                className={`font-body text-lg text-white/60 max-w-2xl mx-auto mb-8 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '300ms' }}
              >
                Rejoignez des milliers d'apprenants qui utilisent l'IA pour atteindre 
                leurs objectifs éducatifs et professionnels.
              </p>

              {/* Benefits */}
              <div
                className={`flex flex-wrap justify-center gap-4 mb-10 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '400ms' }}
              >
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full">
                    <Check className="w-4 h-4 text-blue-400" />
                    <span className="font-body text-sm text-white/70">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div
                className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '500ms' }}
              >
                <button className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-body font-semibold rounded-lg transition-all duration-300 hover:shadow-glow-lg hover:scale-105">
                  Commencer Gratuitement
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
                <button className="px-8 py-4 bg-transparent text-white font-body font-semibold rounded-lg border border-white/20 transition-all duration-300 hover:border-blue-400 hover:text-blue-400">
                  Voir les Tarifs
                </button>
              </div>

              {/* Monetization Options */}
              <div
                className={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '600ms' }}
              >
                {monetization.map((item, index) => (
                  <div key={index} className="text-center p-4 bg-white/5 rounded-xl">
                    <item.icon className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                    <h4 className="font-body font-semibold text-white text-sm mb-1">{item.title}</h4>
                    <p className="font-body text-xs text-white/50">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* Newsletter */}
              <div
                className={`max-w-md mx-auto transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '700ms' }}
              >
                <p className="font-body text-sm text-white/50 mb-4">
                  Inscrivez-vous pour recevoir nos actualités et offres exclusives
                </p>
                <form onSubmit={handleSubmit} className="flex gap-3">
                  <div className="flex-1 relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Votre email"
                      className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-lg font-body text-white placeholder:text-white/30 focus:outline-none focus:border-blue-400/50 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                      disabled={isSubmitted}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitted}
                    className={`px-6 py-4 rounded-lg font-body font-semibold transition-all duration-300 ${
                      isSubmitted
                        ? 'bg-green-500 text-white'
                        : 'bg-white/10 text-white hover:bg-blue-400 hover:text-black'
                    }`}
                  >
                    {isSubmitted ? 'Inscrit!' : 'S\'inscrire'}
                  </button>
                </form>
              </div>

              {/* Trust Indicators */}
              <div
                className={`mt-12 pt-8 border-t border-white/5 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '800ms' }}
              >
                <p className="font-body text-sm text-white/40">
                  Déjà <span className="text-blue-400">10,000+</span> apprenants dans le monde
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
