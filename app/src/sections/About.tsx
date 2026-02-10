import { useEffect, useRef, useState } from 'react'
import { ArrowRight, Award, Users, Film } from 'lucide-react'

const About = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [counters, setCounters] = useState({ models: 0, films: 0, students: 0 })
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Animate counters
          const duration = 2000
          const steps = 60
          const interval = duration / steps
          
          let step = 0
          const timer = setInterval(() => {
            step++
            const progress = step / steps
            const easeOut = 1 - Math.pow(1 - progress, 3)
            
            setCounters({
              models: Math.floor(50 * easeOut),
              films: Math.floor(100 * easeOut),
              students: Math.floor(10 * easeOut),
            })
            
            if (step >= steps) clearInterval(timer)
          }, interval)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const stats = [
    { icon: Award, value: counters.models, suffix: '+', label: 'AI Models Trained' },
    { icon: Film, value: counters.films, suffix: '+', label: 'Films Produced' },
    { icon: Users, value: counters.students, suffix: 'K+', label: 'Students Trained' },
  ]

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-black overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-orange/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-orange/5 rounded-full blur-3xl" />
      </div>

      <div className="section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Section Label */}
            <div
              className={`inline-flex items-center gap-2 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
            >
              <span className="w-8 h-px bg-orange" />
              <span className="font-body text-sm text-orange tracking-wider uppercase">
                About Us
              </span>
            </div>

            {/* Heading */}
            <h2
              className={`font-display text-5xl sm:text-6xl lg:text-7xl text-white leading-tight transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '100ms' }}
            >
              Pioneering the{' '}
              <span className="text-orange">AI Film</span> Revolution
            </h2>

            {/* Body Text */}
            <div
              className={`space-y-4 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              <p className="font-body text-lg text-white/70 leading-relaxed">
                We are a next-generation film studio harnessing the power of generative 
                AI and agentic systems to create, produce, and distribute cinematic content. 
                Our platform combines cutting-edge technology with artistic vision.
              </p>
              <p className="font-body text-lg text-white/70 leading-relaxed">
                From AI-powered training programs to full-scale film productions, we are 
                reshaping the landscape of storytelling. Our team of experts leverages 
                neural networks, machine learning, and creative algorithms to push the 
                boundaries of what is possible in cinema.
              </p>
            </div>

            {/* Stats */}
            <div
              className={`grid grid-cols-3 gap-6 pt-8 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-4 bg-white/5 rounded-xl border border-white/5 hover:border-orange/30 transition-all duration-300 hover:scale-105"
                >
                  <stat.icon className="w-6 h-6 text-orange mx-auto mb-2" />
                  <div className="font-display text-3xl text-white">
                    {stat.value}
                    {stat.suffix}
                  </div>
                  <div className="font-body text-xs text-white/50 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '500ms' }}
            >
              <button className="group flex items-center gap-3 font-body text-orange hover:text-orange-light transition-colors duration-300">
                <span className="relative">
                  Learn Our Story
                  <span className="absolute -bottom-1 left-0 w-full h-px bg-orange transform origin-left transition-transform duration-300 group-hover:scale-x-110" />
                </span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
              </button>
            </div>
          </div>

          {/* Right Content - Images */}
          <div className="relative">
            {/* Primary Image */}
            <div
              className={`relative z-10 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              <div className="relative overflow-hidden rounded-2xl image-hover-zoom">
                <img
                  src="/about-primary.jpg"
                  alt="Film Director on Set"
                  className="w-full aspect-[4/5] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Floating Badge */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="glass rounded-xl p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-orange rounded-lg flex items-center justify-center">
                        <Film className="w-6 h-6 text-black" />
                      </div>
                      <div>
                        <div className="font-display text-xl text-white">Since 2020</div>
                        <div className="font-body text-sm text-white/50">Creating AI Films</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Secondary Image */}
            <div
              className={`absolute -bottom-12 -left-12 w-2/3 z-20 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              <div className="relative overflow-hidden rounded-xl border-4 border-black shadow-2xl image-hover-zoom">
                <img
                  src="/about-secondary.jpg"
                  alt="Film Crew Working"
                  className="w-full aspect-[3/4] object-cover"
                />
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 border border-orange/30 rounded-full" />
            <div className="absolute top-1/2 -right-12 w-4 h-4 bg-orange rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
