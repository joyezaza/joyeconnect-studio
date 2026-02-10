import { useEffect, useRef, useState } from 'react'
import { Video, Smartphone, Users, Share2, ArrowRight, Play } from 'lucide-react'

const AIMedia = () => {
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

  const mediaTypes = [
    {
      icon: Video,
      title: 'Vidéos Éducatives Automatisées',
      desc: 'Cours complets générés par IA avec voix off naturelle et animations',
      platforms: ['YouTube', 'Vimeo', 'Site Web'],
    },
    {
      icon: Smartphone,
      title: 'Shorts Éducatifs',
      desc: 'Contenu court et impactant pour TikTok, Reels et YouTube Shorts',
      platforms: ['TikTok', 'Instagram', 'YouTube'],
    },
    {
      icon: Users,
      title: 'Personnages IA',
      desc: 'Prof Nexus, Sage Élohim et autres avatars éducatifs engageants',
      platforms: ['Interactifs', 'Animés', '3D'],
    },
    {
      icon: Share2,
      title: 'Social Media Éducatif',
      desc: 'Posts, carrousels et stories optimisés pour l\'engagement',
      platforms: ['Instagram', 'Facebook', 'Twitter'],
    },
  ]

  return (
    <section
      id="ai-media"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-black overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-cyan-950/10 to-black" />
        <img
          src="/ai-media.jpg"
          alt="AI Media"
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      <div className="section-padding relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 rounded-full border border-cyan-500/20 mb-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
            }`}
          >
            <Video className="w-5 h-5 text-cyan-400" />
            <span className="font-body text-sm text-cyan-400 tracking-wider uppercase">
              Média IA Éducatif
            </span>
          </div>
          
          <h2
            className={`font-display text-5xl sm:text-6xl lg:text-7xl text-white mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            Contenu <span className="text-cyan-400">IA</span> Engageant
          </h2>
          
          <p
            className={`font-body text-lg text-white/60 max-w-2xl mx-auto transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            Des vidéos éducatives automatisées et des personnages IA captivants 
            pour apprendre tout en s'amusant sur tous les réseaux sociaux.
          </p>
        </div>

        {/* Media Types Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {mediaTypes.map((media, index) => (
            <div
              key={index}
              className={`group p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-cyan-400/50 transition-all duration-500 hover:scale-[1.02] ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <media.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-2xl text-white mb-2">{media.title}</h3>
                  <p className="font-body text-white/60 mb-4">{media.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {media.platforms.map((platform, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-cyan-500/10 rounded-full font-body text-xs text-cyan-400"
                      >
                        {platform}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Video Preview */}
        <div
          className={`relative rounded-2xl overflow-hidden transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
          style={{ transitionDelay: '700ms' }}
        >
          <div className="aspect-video bg-gradient-to-br from-cyan-950 to-blue-950 flex items-center justify-center">
            <button className="group flex flex-col items-center gap-4">
              <div className="w-20 h-20 bg-cyan-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-glow">
                <Play className="w-8 h-8 text-black ml-1" fill="black" />
              </div>
              <span className="font-body text-white/70">Voir une démo</span>
            </button>
          </div>
        </div>

        {/* CTA */}
        <div
          className={`text-center mt-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '800ms' }}
        >
          <button className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-body font-semibold rounded-lg transition-all duration-300 hover:shadow-glow hover:scale-105">
            Découvrir Nos Chaînes
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default AIMedia
