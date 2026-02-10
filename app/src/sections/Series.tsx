import { useEffect, useRef, useState } from 'react'
import { Film, Tv, Clapperboard, Video, ArrowRight, Play, Star } from 'lucide-react'

const Series = () => {
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

  const featuredSeries = {
    title: 'Les Jumeaux du Destin',
    subtitle: 'Série Animée Fantastique',
    description: 'Deux âmes liées par le destin, séparées par les mondes. Une épopée magique où le bien et le mal s\'affrontent à travers des dimensions parallèles.',
    tags: ['Animation IA', 'Fantasy', 'Drame', 'Tous Publics'],
  }

  const otherContent = [
    {
      icon: Tv,
      title: 'Séries Narratives IA',
      desc: 'Histoires originales créées par IA générative',
      examples: ['Science-Fiction', 'Romance', 'Thriller'],
    },
    {
      icon: Clapperboard,
      title: 'Documentaires',
      desc: 'Documentaires éducatifs automatisés',
      examples: ['Histoire', 'Nature', 'Technologie'],
    },
    {
      icon: Video,
      title: 'Courts-Métrages',
      desc: 'Films courts générés par IA',
      examples: ['Animation', 'Live Action', 'Expérimental'],
    },
  ]

  return (
    <section
      id="series"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-black overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-amber-950/10 to-black" />
        <img
          src="/series-jumeaux.jpg"
          alt="Les Jumeaux du Destin"
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      <div className="section-padding relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 rounded-full border border-amber-500/20 mb-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
            }`}
          >
            <Film className="w-5 h-5 text-amber-400" />
            <span className="font-body text-sm text-amber-400 tracking-wider uppercase">
              Séries & Contenu Narratif
            </span>
          </div>
          
          <h2
            className={`font-display text-5xl sm:text-6xl lg:text-7xl text-white mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            Nos <span className="text-amber-400">Productions</span>
          </h2>
          
          <p
            className={`font-body text-lg text-white/60 max-w-2xl mx-auto transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            Des séries animées, des documentaires et des courts-métrages entièrement 
            créés avec l'IA générative pour une expérience cinématographique unique.
          </p>
        </div>

        {/* Featured Series */}
        <div
          className={`relative mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
          style={{ transitionDelay: '300ms' }}
        >
          <div className="relative rounded-3xl overflow-hidden border border-amber-500/30">
            <div className="aspect-[21/9] relative">
              <img
                src="/series-jumeaux.jpg"
                alt={featuredSeries.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              
              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
                <div className="flex items-center gap-2 mb-4">
                  <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                  <span className="font-body text-sm text-amber-400">Série Phare</span>
                </div>
                <h3 className="font-display text-4xl lg:text-6xl text-white mb-2">{featuredSeries.title}</h3>
                <p className="font-body text-amber-400 mb-4">{featuredSeries.subtitle}</p>
                <p className="font-body text-white/70 max-w-xl mb-6">{featuredSeries.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredSeries.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-white/10 rounded-full font-body text-xs text-white/70">
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="group flex items-center gap-3 px-6 py-3 bg-amber-400 text-black font-body font-semibold rounded-lg transition-all duration-300 hover:bg-amber-300">
                  <Play className="w-5 h-5" fill="black" />
                  Regarder le Trailer
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Other Content Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {otherContent.map((content, index) => (
            <div
              key={index}
              className={`group p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-amber-400/50 transition-all duration-500 hover:scale-105 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${500 + index * 100}ms` }}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <content.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-display text-2xl text-white mb-2">{content.title}</h3>
              <p className="font-body text-white/60 mb-4">{content.desc}</p>
              <div className="flex flex-wrap gap-2">
                {content.examples.map((example, i) => (
                  <span key={i} className="px-2 py-1 bg-amber-500/10 rounded font-body text-xs text-amber-400">
                    {example}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`text-center mt-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '800ms' }}
        >
          <button className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-body font-semibold rounded-lg transition-all duration-300 hover:shadow-glow hover:scale-105">
            Voir Toutes les Productions
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Series
