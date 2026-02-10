import { useEffect, useRef, useState } from 'react'
import { ChevronDown, Play, ArrowRight, BookOpen, Users, Award } from 'lucide-react'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const stats = [
    { icon: BookOpen, value: '44+', label: 'Produits & Services' },
    { icon: Users, value: '10K+', label: 'Élèves Formés' },
    { icon: Award, value: '100%', label: 'IA Générative' },
  ]

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen w-full overflow-hidden bg-black"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50 z-10" />
        <img
          src="/hero-joyeconnect.jpg"
          alt="JoyeConnect Studio"
          className="w-full h-full object-cover opacity-70"
        />
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 z-5 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 5}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 min-h-screen flex items-center">
        <div className="section-padding w-full">
          <div className="max-w-4xl">
            {/* Label */}
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
              <span className="font-body text-sm text-white/70 tracking-wide">
                Éducation & Divertissement Propulsés par l'IA
              </span>
            </div>

            {/* Main Heading */}
            <div className="mt-8 space-y-2">
              <h1
                className={`font-display text-6xl sm:text-7xl lg:text-8xl text-white leading-none transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: '300ms' }}
              >
                JOYE<span className="text-blue-400">CONNECT</span>
              </h1>
              <h2
                className={`font-display text-4xl sm:text-5xl lg:text-6xl text-white/80 leading-none transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: '500ms' }}
              >
                STUDIO
              </h2>
            </div>

            {/* Subheading */}
            <p
              className={`mt-8 font-body text-lg sm:text-xl text-white/70 max-w-2xl leading-relaxed transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-8 blur-sm'
              }`}
              style={{ transitionDelay: '700ms' }}
            >
              La première plateforme éducative et de divertissement entièrement 
              propulsée par l'IA Générative et l'IA Agentique. 44 produits et services 
              pour apprendre, créer et s'amuser.
            </p>

            {/* CTAs */}
            <div
              className={`mt-10 flex flex-wrap gap-4 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '900ms' }}
            >
              <button
                onClick={() => scrollToSection('#ai-school')}
                className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-body font-semibold rounded-lg transition-all duration-300 hover:shadow-glow-lg hover:scale-105"
              >
                Découvrir AI School
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => scrollToSection('#series')}
                className="group flex items-center gap-3 px-8 py-4 bg-transparent text-white font-body font-semibold rounded-lg border border-white/20 transition-all duration-300 hover:border-blue-400 hover:text-blue-400"
              >
                <Play className="w-5 h-5" />
                Voir Nos Séries
              </button>
            </div>

            {/* Stats */}
            <div
              className={`mt-16 flex flex-wrap gap-12 pt-8 border-t border-white/10 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '1100ms' }}
            >
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <div className="font-display text-3xl text-white">{stat.value}</div>
                    <div className="font-body text-sm text-white/50">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
        style={{ transitionDelay: '1300ms' }}
      >
        <span className="font-body text-xs text-white/50 tracking-wider">DÉFILER POUR EXPLORER</span>
        <ChevronDown className="w-6 h-6 text-blue-400 animate-bounce-subtle" />
      </div>
    </section>
  )
}

export default Hero
