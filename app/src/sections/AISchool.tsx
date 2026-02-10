import { useEffect, useRef, useState } from 'react'
import { Calculator, Atom, BookText, Languages, Video, FileText, HelpCircle, GraduationCap, UserCircle, TrendingUp, ArrowRight } from 'lucide-react'

const AISchool = () => {
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

  const courses = [
    { icon: Calculator, title: 'Maths IA', level: '3e → Terminale', desc: 'Algèbre, géométrie, analyse avec tutorat IA' },
    { icon: Atom, title: 'Physique IA', level: 'Tous niveaux', desc: 'Mécanique, électricité, thermodynamique' },
    { icon: BookText, title: 'Français IA', level: 'Collège → Lycée', desc: 'Grammaire, littérature, expression écrite' },
    { icon: Languages, title: 'Anglais IA', level: 'Débutant → Avancé', desc: 'Conversation, grammaire, vocabulaire' },
  ]

  const features = [
    { icon: Video, title: 'Vidéos Pédagogiques IA', desc: 'Cours animés et interactifs' },
    { icon: FileText, title: 'Fiches PDF & eBooks', desc: 'Ressources téléchargeables' },
    { icon: HelpCircle, title: 'Quiz & Exercices', desc: 'Corrigés automatiques' },
    { icon: GraduationCap, title: 'Préparation Examens', desc: 'Brevet, Bac, concours' },
    { icon: UserCircle, title: 'Tuteur IA Personnel', desc: 'Accompagnement 24/7' },
    { icon: TrendingUp, title: 'Suivi Progression', desc: 'Tableau de bord élève' },
  ]

  return (
    <section
      id="ai-school"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-black overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/10 to-black" />
        <img
          src="/ai-school.jpg"
          alt="AI School"
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      <div className="section-padding relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/20 mb-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
            }`}
          >
            <GraduationCap className="w-5 h-5 text-blue-400" />
            <span className="font-body text-sm text-blue-400 tracking-wider uppercase">
              Éducation Scolaire
            </span>
          </div>
          
          <h2
            className={`font-display text-5xl sm:text-6xl lg:text-7xl text-white mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            AI <span className="text-blue-400">SCHOOL</span>
          </h2>
          
          <p
            className={`font-body text-lg text-white/60 max-w-2xl mx-auto transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            Cours scolaires personnalisés propulsés par l'IA. 
            De la 3ème à la Terminale, progressez à votre rythme avec un tuteur virtuel.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {courses.map((course, index) => (
            <div
              key={index}
              className={`group p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-blue-400/50 transition-all duration-500 hover:scale-105 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <course.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-display text-2xl text-white mb-1">{course.title}</h3>
              <span className="font-body text-xs text-blue-400">{course.level}</span>
              <p className="font-body text-sm text-white/60 mt-3">{course.desc}</p>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex items-start gap-4 p-5 bg-white/5 rounded-xl border border-white/5 hover:border-white/10 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${700 + index * 100}ms` }}
            >
              <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <feature.icon className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <h4 className="font-body font-semibold text-white mb-1">{feature.title}</h4>
                <p className="font-body text-sm text-white/50">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`text-center mt-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '1300ms' }}
        >
          <button className="group inline-flex items-center gap-3 px-8 py-4 bg-transparent border border-blue-400 text-blue-400 font-body font-semibold rounded-lg transition-all duration-300 hover:bg-blue-400 hover:text-black">
            Explorer AI School
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default AISchool
