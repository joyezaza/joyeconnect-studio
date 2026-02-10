import { useEffect, useRef, useState } from 'react'
import { Award, BadgeCheck, Smartphone, GraduationCap, ArrowRight, Star, Medal, Trophy } from 'lucide-react'

const Certifications = () => {
  const [isVisible, setIsVisible] = useState(false)
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

  const certifications = [
    {
      icon: Award,
      title: 'Certificats de Cours',
      desc: 'Attestations officielles pour chaque cours complété',
      color: 'from-yellow-500 to-amber-500',
    },
    {
      icon: Trophy,
      title: 'Diplômes AI School',
      desc: 'Diplômes reconnus pour les parcours complets',
      color: 'from-blue-500 to-cyan-400',
    },
    {
      icon: Medal,
      title: 'Badges de Compétences',
      desc: 'Micro-certifications pour des compétences spécifiques',
      color: 'from-purple-500 to-pink-500',
    },
  ]

  const techFeatures = [
    {
      icon: Smartphone,
      title: 'Application Mobile',
      desc: 'Apprenez partout avec notre app iOS et Android',
    },
    {
      icon: GraduationCap,
      title: 'Portail Élève',
      desc: 'Espace personnel avec progression et statistiques',
    },
    {
      icon: Star,
      title: 'Professeur IA Interactif',
      desc: 'Tuteur virtuel disponible 24/7 pour répondre à vos questions',
    },
  ]

  return (
    <section
      id="certifications"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-black overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-indigo-950/10 to-black" />
        <img
          src="/app-tech.jpg"
          alt="Certifications & Tech"
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      <div className="section-padding relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/10 rounded-full border border-indigo-500/20 mb-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
            }`}
          >
            <BadgeCheck className="w-5 h-5 text-indigo-400" />
            <span className="font-body text-sm text-indigo-400 tracking-wider uppercase">
              Certifications & Technologie
            </span>
          </div>
          
          <h2
            className={`font-display text-5xl sm:text-6xl lg:text-7xl text-white mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            Validez Vos <span className="text-indigo-400">Compétences</span>
          </h2>
          
          <p
            className={`font-body text-lg text-white/60 max-w-2xl mx-auto transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            Obtenez des certifications reconnues et accédez à notre technologie 
            de pointe pour une expérience d'apprentissage optimale.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`group p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-indigo-400/50 transition-all duration-500 hover:scale-105 text-center ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div className={`w-20 h-20 mx-auto bg-gradient-to-br ${cert.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <cert.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-display text-2xl text-white mb-2">{cert.title}</h3>
              <p className="font-body text-white/60">{cert.desc}</p>
            </div>
          ))}
        </div>

        {/* Tech Features */}
        <div className="bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 p-8 lg:p-12">
          <h3
            className={`font-display text-3xl text-white text-center mb-8 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            Notre <span className="text-indigo-400">Technologie</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {techFeatures.map((feature, index) => (
              <div
                key={index}
                className={`flex flex-col items-center text-center transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${700 + index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-indigo-500/20 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-8 h-8 text-indigo-400" />
                </div>
                <h4 className="font-display text-xl text-white mb-2">{feature.title}</h4>
                <p className="font-body text-sm text-white/60">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div
          className={`text-center mt-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '1000ms' }}
        >
          <button className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-body font-semibold rounded-lg transition-all duration-300 hover:shadow-glow hover:scale-105">
            Télécharger l'Application
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Certifications
