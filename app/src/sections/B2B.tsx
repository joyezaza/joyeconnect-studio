import { useEffect, useRef, useState } from 'react'
import { Building2, HeartHandshake, Landmark, BarChart3, ArrowRight, Check } from 'lucide-react'

const B2B = () => {
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

  const b2bServices = [
    {
      icon: Building2,
      title: 'Licences Écoles',
      desc: 'Solutions complètes pour les établissements scolaires',
      features: [
        'Accès illimité pour tous les élèves',
        'Tableaux de bord enseignants',
        'Suivi de progression collectif',
        'Support technique dédié',
        'Formation des équipes',
      ],
    },
    {
      icon: HeartHandshake,
      title: 'Plateforme pour ONG',
      desc: 'Éducation accessible pour les associations humanitaires',
      features: [
        'Tarifs préférentiels',
        'Contenu multilingue',
        'Hors connexion disponible',
        'Rapports d\'impact',
        'Accompagnement sur mesure',
      ],
    },
    {
      icon: Landmark,
      title: 'Solutions Gouvernements',
      desc: 'Partenariats avec les institutions publiques',
      features: [
        'Déploiement à grande échelle',
        'Conformité réglementaire',
        'Sécurité des données',
        'Intégration existante',
        'Formation continue',
      ],
    },
    {
      icon: BarChart3,
      title: 'Tableaux de Suivi',
      desc: 'Analytics avancés pour les institutions',
      features: [
        'Métriques en temps réel',
        'Rapports personnalisables',
        'Export de données',
        'Alertes automatiques',
        'API disponible',
      ],
    },
  ]

  return (
    <section
      id="b2b"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-black overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-emerald-950/10 to-black" />
        <img
          src="/b2b-institutions.jpg"
          alt="B2B Solutions"
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      <div className="section-padding relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 rounded-full border border-emerald-500/20 mb-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
            }`}
          >
            <Building2 className="w-5 h-5 text-emerald-400" />
            <span className="font-body text-sm text-emerald-400 tracking-wider uppercase">
              Solutions B2B & Institutions
            </span>
          </div>
          
          <h2
            className={`font-display text-5xl sm:text-6xl lg:text-7xl text-white mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            Pour les <span className="text-emerald-400">Institutions</span>
          </h2>
          
          <p
            className={`font-body text-lg text-white/60 max-w-2xl mx-auto transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            Des solutions sur mesure pour les écoles, les ONG et les gouvernements 
            qui souhaitent déployer l'éducation IA à grande échelle.
          </p>
        </div>

        {/* B2B Services Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {b2bServices.map((service, index) => (
            <div
              key={index}
              className={`group p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-emerald-400/50 transition-all duration-500 hover:scale-[1.02] ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-2xl text-white mb-2">{service.title}</h3>
                  <p className="font-body text-white/60 mb-4">{service.desc}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 font-body text-sm text-white/50">
                        <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`text-center mt-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '700ms' }}
        >
          <button className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-body font-semibold rounded-lg transition-all duration-300 hover:shadow-glow hover:scale-105">
            Demander un Devis
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default B2B
