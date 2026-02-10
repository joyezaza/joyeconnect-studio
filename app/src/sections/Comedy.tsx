import { useEffect, useRef, useState } from 'react'
import { Laugh, Theater, Users, Zap, ArrowRight, Play } from 'lucide-react'

const Comedy = () => {
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

  const comedyContent = [
    {
      icon: Video,
      title: 'Vidéos Courtes Comédie',
      desc: 'Sketchs rapides et hilarants générés par IA pour un rire instantané',
      examples: ['Gags', 'Parodies', 'Sitcoms'],
    },
    {
      icon: Theater,
      title: 'Sketchs Humoristiques IA',
      desc: 'Scénarios comiques originaux avec personnages récurrents',
      examples: ['Stand-up IA', 'Improvisations', 'Comédies de situation'],
    },
    {
      icon: Users,
      title: 'Personnages Comiques',
      desc: 'Avatars drôles et attachants qui reviennent dans chaque vidéo',
      examples: ['Le Robot Maladroit', 'Professeur Absent', 'L\'IA Sarcastique'],
    },
    {
      icon: Zap,
      title: 'Memes & Contenu Viral',
      desc: 'Contenu optimisé pour devenir viral sur les réseaux sociaux',
      examples: ['Memes', 'Challenges', 'Trends'],
    },
  ]

  return (
    <section
      id="comedy"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-black overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-pink-950/10 to-black" />
        <img
          src="/comedy-content.jpg"
          alt="Comedy Content"
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      <div className="section-padding relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 bg-pink-500/10 rounded-full border border-pink-500/20 mb-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
            }`}
          >
            <Laugh className="w-5 h-5 text-pink-400" />
            <span className="font-body text-sm text-pink-400 tracking-wider uppercase">
              Divertissement
            </span>
          </div>
          
          <h2
            className={`font-display text-5xl sm:text-6xl lg:text-7xl text-white mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            Comédie <span className="text-pink-400">IA</span>
          </h2>
          
          <p
            className={`font-body text-lg text-white/60 max-w-2xl mx-auto transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            Des sketchs hilarants, des personnages comiques et du contenu viral 
            entièrement créés par intelligence artificielle pour vous faire rire.
          </p>
        </div>

        {/* Comedy Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {comedyContent.map((content, index) => (
            <div
              key={index}
              className={`group p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-pink-400/50 transition-all duration-500 hover:scale-[1.02] ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <content.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-2xl text-white mb-2">{content.title}</h3>
                  <p className="font-body text-white/60 mb-4">{content.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {content.examples.map((example, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-pink-500/10 rounded-full font-body text-xs text-pink-400"
                      >
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
          style={{ transitionDelay: '700ms' }}
        >
          {[
            { value: '1M+', label: 'Vues' },
            { value: '50K+', label: 'Abonnés' },
            { value: '100+', label: 'Vidéos' },
            { value: '10+', label: 'Personnages' },
          ].map((stat, index) => (
            <div key={index} className="text-center p-4 bg-white/5 rounded-xl">
              <div className="font-display text-3xl text-pink-400">{stat.value}</div>
              <div className="font-body text-sm text-white/50">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`text-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '800ms' }}
        >
          <button className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-body font-semibold rounded-lg transition-all duration-300 hover:shadow-glow hover:scale-105">
            <Play className="w-5 h-5" fill="white" />
            Voir les Vidéos Comédie
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  )
}

// Add Video icon since it wasn't imported
import { Video } from 'lucide-react'

export default Comedy
