import { useEffect, useRef, useState } from 'react'
import { Search, Sparkles, Settings, Rocket } from 'lucide-react'

const Process = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeStep, setActiveStep] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const steps = [
    {
      number: '01',
      icon: Search,
      title: 'Discover',
      description: 'We explore your vision and identify AI-enhanced opportunities for your project. Our team analyzes your goals, target audience, and creative requirements to develop a tailored approach.',
      details: ['Concept Development', 'AI Feasibility Analysis', 'Strategy Planning'],
    },
    {
      number: '02',
      icon: Sparkles,
      title: 'Create',
      description: 'Our team leverages generative AI tools to produce stunning visual content. From scriptwriting to visual effects, we harness the power of neural networks to bring your ideas to life.',
      details: ['AI-Assisted Production', 'Generative Visuals', 'Neural Rendering'],
    },
    {
      number: '03',
      icon: Settings,
      title: 'Refine',
      description: 'Iterative refinement using AI feedback loops and human creative direction. We continuously improve the output until it meets our high standards and your expectations.',
      details: ['Quality Assurance', 'AI Feedback Integration', 'Human Oversight'],
    },
    {
      number: '04',
      icon: Rocket,
      title: 'Deliver',
      description: 'Final production with optimized delivery for all platforms and formats. We ensure your content is ready for distribution across cinema, streaming, and social media.',
      details: ['Multi-Platform Optimization', 'Format Conversion', 'Distribution Ready'],
    },
  ]

  return (
    <section
      id="process"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-black overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-orange/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-orange/5 rounded-full blur-3xl" />
      </div>

      <div className="section-padding relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div
            className={`inline-flex items-center gap-2 mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
            }`}
          >
            <span className="w-8 h-px bg-orange" />
            <span className="font-body text-sm text-orange tracking-wider uppercase">
              Our Process
            </span>
            <span className="w-8 h-px bg-orange" />
          </div>
          
          <h2
            className={`font-display text-5xl sm:text-6xl lg:text-7xl text-white transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            From <span className="text-orange">Concept</span> to Cinema
          </h2>
          
          <p
            className={`font-body text-lg text-white/60 max-w-2xl mx-auto mt-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            Our proven four-step process combines AI innovation with human creativity 
            to deliver exceptional cinematic experiences.
          </p>
        </div>

        {/* Process Steps */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-orange via-orange/50 to-transparent transform -translate-x-1/2" />
            
            {/* Progress Indicator */}
            <div
              className="hidden lg:block absolute left-1/2 top-0 w-1 bg-orange transform -translate-x-1/2 transition-all duration-1000"
              style={{ height: `${((activeStep + 1) / steps.length) * 100}%` }}
            />

            {/* Steps */}
            <div className="space-y-12 lg:space-y-0">
              {steps.map((step, index) => {
                const isEven = index % 2 === 0
                const isActive = activeStep >= index

                return (
                  <div
                    key={index}
                    className={`relative lg:grid lg:grid-cols-2 lg:gap-16 transition-all duration-700 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                    }`}
                    style={{ transitionDelay: `${300 + index * 150}ms` }}
                    onMouseEnter={() => setActiveStep(index)}
                  >
                    {/* Content */}
                    <div
                      className={`${isEven ? 'lg:pr-16 lg:text-right' : 'lg:col-start-2 lg:pl-16'} mb-8 lg:mb-0`}
                    >
                      <div
                        className={`relative p-8 bg-dark-secondary rounded-2xl border transition-all duration-500 ${
                          isActive ? 'border-orange/30 shadow-glow' : 'border-white/5'
                        }`}
                      >
                        {/* Step Number */}
                        <div
                          className={`absolute -top-4 ${isEven ? 'lg:-right-4 right-4' : 'lg:-left-4 left-4'} w-12 h-12 bg-orange rounded-xl flex items-center justify-center transition-all duration-500 ${
                            isActive ? 'scale-110 shadow-glow' : ''
                          }`}
                        >
                          <span className="font-display text-xl text-black">{step.number}</span>
                        </div>

                        {/* Icon */}
                        <div
                          className={`w-14 h-14 rounded-xl bg-gradient-to-br from-orange to-orange-light flex items-center justify-center mb-4 ${
                            isEven ? 'lg:ml-auto' : ''
                          }`}
                        >
                          <step.icon className="w-7 h-7 text-black" />
                        </div>

                        {/* Title */}
                        <h3 className="font-display text-3xl text-white mb-3">
                          {step.title}
                        </h3>

                        {/* Description */}
                        <p className="font-body text-white/60 leading-relaxed mb-4">
                          {step.description}
                        </p>

                        {/* Details */}
                        <div className={`flex flex-wrap gap-2 ${isEven ? 'lg:justify-end' : ''}`}>
                          {step.details.map((detail, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-white/5 rounded-full font-body text-xs text-white/70"
                            >
                              {detail}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Timeline Node */}
                    <div className="hidden lg:flex absolute left-1/2 top-8 transform -translate-x-1/2">
                      <div
                        className={`w-4 h-4 rounded-full border-2 transition-all duration-500 ${
                          isActive
                            ? 'bg-orange border-orange scale-125 shadow-glow'
                            : 'bg-black border-white/30'
                        }`}
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-16 pt-16 border-t border-white/5 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '900ms' }}
        >
          {[
            { value: '2x', label: 'Faster Production' },
            { value: '40%', label: 'Cost Reduction' },
            { value: '99%', label: 'Client Satisfaction' },
            { value: '24/7', label: 'AI Assistance' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-display text-4xl text-orange mb-1">{stat.value}</div>
              <div className="font-body text-sm text-white/50">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
