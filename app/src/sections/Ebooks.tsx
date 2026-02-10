import { useEffect, useRef, useState } from 'react'
import { BookOpen, Database, Brain, Briefcase, Church, ArrowRight, Download } from 'lucide-react'

const Ebooks = () => {
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

  const ebooks = [
    {
      icon: Database,
      title: 'Data Science',
      items: ['Introduction au Big Data', 'Machine Learning Basics', 'Python pour Data Science', 'Visualisation de Données'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Brain,
      title: 'Intelligence Artificielle',
      items: ['IA Générative', 'Deep Learning', 'NLP & Chatbots', 'Éthique de l\'IA'],
      color: 'from-blue-500 to-cyan-400',
    },
    {
      icon: Briefcase,
      title: 'Gestion de Projet',
      items: ['Agile & Scrum', 'Gestion d\'Équipe', 'Product Management', 'Leadership'],
      color: 'from-green-500 to-emerald-400',
    },
    {
      icon: BookOpen,
      title: 'Business & Entrepreneuriat',
      items: ['Start-up Guide', 'Marketing Digital', 'Finance Personnelle', 'Négociation'],
      color: 'from-orange-500 to-yellow-500',
    },
    {
      icon: Church,
      title: 'Spiritualité & Prières',
      items: ['Méditation Guidée', 'Prière du Matin', 'Textes Sacrés', 'Développement Spirituel'],
      color: 'from-amber-500 to-orange-400',
    },
  ]

  return (
    <section
      id="ebooks"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-black overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black" />
        <img
          src="/ebooks-products.jpg"
          alt="eBooks"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      <div className="section-padding relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 rounded-full border border-purple-500/20 mb-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
            }`}
          >
            <BookOpen className="w-5 h-5 text-purple-400" />
            <span className="font-body text-sm text-purple-400 tracking-wider uppercase">
              Produits Éducatifs Numériques
            </span>
          </div>
          
          <h2
            className={`font-display text-5xl sm:text-6xl lg:text-7xl text-white mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            Nos <span className="text-purple-400">eBooks</span>
          </h2>
          
          <p
            className={`font-body text-lg text-white/60 max-w-2xl mx-auto transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            Une bibliothèque numérique complète pour apprendre le Data Science, 
            l'IA, la gestion de projet et plus encore.
          </p>
        </div>

        {/* eBooks Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ebooks.map((book, index) => (
            <div
              key={index}
              className={`group relative p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-purple-400/50 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              {/* Icon */}
              <div className={`w-14 h-14 bg-gradient-to-br ${book.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <book.icon className="w-7 h-7 text-white" />
              </div>

              {/* Title */}
              <h3 className="font-display text-2xl text-white mb-4">{book.title}</h3>

              {/* Items */}
              <ul className="space-y-2 mb-6">
                {book.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 font-body text-sm text-white/60">
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Download Button */}
              <button className="flex items-center gap-2 font-body text-sm text-purple-400 hover:text-purple-300 transition-colors duration-300">
                <Download className="w-4 h-4" />
                Voir les eBooks
              </button>

              {/* Gradient Border Effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${book.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10`} />
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
          <button className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-body font-semibold rounded-lg transition-all duration-300 hover:shadow-glow hover:scale-105">
            Accéder à la Bibliothèque
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Ebooks
