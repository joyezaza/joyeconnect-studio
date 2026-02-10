import { useEffect, useRef, useState } from 'react'
import { GraduationCap, Clapperboard, Radio, Drama, ArrowRight, Sparkles } from 'lucide-react'

const Services = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const services = [
    {
      icon: GraduationCap,
      title: 'AI Film Training',
      description: 'Master the art of AI-powered filmmaking with our comprehensive training programs. Learn from industry experts and harness the power of generative AI.',
      cta: 'Start Learning',
      color: 'from-orange to-orange-light',
      rotation: -2,
    },
    {
      icon: Clapperboard,
      title: 'Generative Production',
      description: 'From concept to final cut, we produce films using cutting-edge generative AI tools. Transform your vision into cinematic reality.',
      cta: 'See Our Work',
      color: 'from-purple-500 to-pink-500',
      rotation: 1,
    },
    {
      icon: Radio,
      title: 'Movie Actualities',
      description: 'Stay updated with the latest in AI cinema and industry breakthroughs. Your source for news, trends, and insights.',
      cta: 'Read More',
      color: 'from-blue-500 to-cyan-500',
      rotation: -1,
    },
    {
      icon: Drama,
      title: 'Short Comedy Series',
      description: 'Laugh out loud with our AI-assisted comedy shorts and series. Where humor meets artificial intelligence.',
      cta: 'Watch Now',
      color: 'from-green-500 to-emerald-500',
      rotation: 2,
    },
  ]

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-black overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,107,53,0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="section-padding relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div
            className={`inline-flex items-center gap-2 mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
            }`}
          >
            <Sparkles className="w-5 h-5 text-orange" />
            <span className="font-body text-sm text-orange tracking-wider uppercase">
              What We Do
            </span>
            <Sparkles className="w-5 h-5 text-orange" />
          </div>
          
          <h2
            className={`font-display text-5xl sm:text-6xl lg:text-7xl text-white transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            Services <span className="text-orange">Powered by AI</span>
          </h2>
          
          <p
            className={`font-body text-lg text-white/60 max-w-2xl mx-auto mt-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            Discover our comprehensive suite of AI-driven filmmaking services 
            designed to transform your creative vision into reality.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{
                transitionDelay: `${300 + index * 100}ms`,
                transform: isVisible
                  ? hoveredCard === index
                    ? 'rotate(0deg) translateY(-15px)'
                    : `rotate(${service.rotation}deg)`
                  : `rotate(${service.rotation}deg) translateY(50px)`,
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div
                className={`relative p-8 bg-dark-secondary rounded-2xl border border-white/5 overflow-hidden transition-all duration-500 ${
                  hoveredCard === index ? 'border-orange/30 shadow-glow' : ''
                }`}
              >
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />

                {/* Icon */}
                <div className="relative mb-6">
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Particle Effect on Hover */}
                  {hoveredCard === index && (
                    <div className="absolute inset-0 pointer-events-none">
                      {[...Array(6)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-2 h-2 bg-orange rounded-full"
                          style={{
                            left: '50%',
                            top: '50%',
                            animation: `particleBurst 0.6s ease-out forwards`,
                            animationDelay: `${i * 50}ms`,
                            '--angle': `${i * 60}deg`,
                          } as React.CSSProperties}
                        />
                      ))}
                    </div>
                  )}
                </div>

                {/* Content */}
                <h3 className="font-display text-3xl text-white mb-3 group-hover:text-orange transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="font-body text-white/60 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* CTA */}
                <button className="flex items-center gap-2 font-body text-sm text-orange group-hover:text-orange-light transition-colors duration-300">
                  <span>{service.cta}</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
                </button>

                {/* Corner Decoration */}
                <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
                  <div
                    className={`absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br ${service.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500 rotate-45`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={`text-center mt-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '700ms' }}
        >
          <p className="font-body text-white/50 mb-4">
            Need a custom solution for your project?
          </p>
          <button className="px-8 py-4 bg-transparent border border-orange text-orange font-body font-semibold rounded-lg transition-all duration-300 hover:bg-orange hover:text-black hover:shadow-glow">
            Contact Our Team
          </button>
        </div>
      </div>

      {/* Particle Burst Animation */}
      <style>{`
        @keyframes particleBurst {
          0% {
            transform: translate(-50%, -50%) rotate(var(--angle)) translateX(0);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%) rotate(var(--angle)) translateX(60px);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  )
}

export default Services
