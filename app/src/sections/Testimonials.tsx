import { useEffect, useRef, useState } from 'react'
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react'

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const sectionRef = useRef<HTMLElement>(null)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

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

  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length)
      }, 5000)
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isAutoPlaying])

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Film Director',
      avatar: 'SC',
      quote: 'This platform revolutionized how I approach filmmaking. The AI tools are incredibly intuitive and have cut our production time in half while maintaining the highest quality standards.',
      rating: 5,
    },
    {
      name: 'Marcus Johnson',
      role: 'Content Creator',
      quote: 'The training programs transformed my workflow. I am creating better content in half the time. The AI assistance feels like having a full production team at my fingertips.',
      rating: 5,
    },
    {
      name: 'Elena Rodriguez',
      role: 'Producer',
      quote: 'Working with their AI production team opened possibilities I never imagined. We have been able to visualize concepts that would have been impossible with traditional methods.',
      rating: 5,
    },
    {
      name: 'David Kim',
      role: 'Educator',
      quote: 'Their approach to AI filmmaking education is ahead of anything else in the industry. My students are learning skills that will define the future of cinema.',
      rating: 5,
    },
  ]

  const goToPrev = () => {
    setIsAutoPlaying(false)
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-black overflow-hidden"
    >
      {/* Background Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute w-96 h-96 bg-orange/10 rounded-full blur-3xl"
          style={{
            top: '20%',
            left: '10%',
            animation: 'float 15s ease-in-out infinite',
          }}
        />
        <div
          className="absolute w-64 h-64 bg-orange/5 rounded-full blur-3xl"
          style={{
            bottom: '20%',
            right: '10%',
            animation: 'float 20s ease-in-out infinite reverse',
          }}
        />
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
              Testimonials
            </span>
            <span className="w-8 h-px bg-orange" />
          </div>
          
          <h2
            className={`font-display text-5xl sm:text-6xl lg:text-7xl text-white transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            What <span className="text-orange">Creators</span> Say
          </h2>
        </div>

        {/* Testimonials Carousel */}
        <div
          className={`max-w-4xl mx-auto transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          <div className="relative perspective-1000">
            {/* Main Card */}
            <div className="relative bg-dark-secondary rounded-3xl border border-white/5 p-8 lg:p-12 overflow-hidden">
              {/* Quote Icon */}
              <div className="absolute top-8 right-8 opacity-10">
                <Quote className="w-24 h-24 text-orange" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-orange fill-orange" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="font-body text-xl lg:text-2xl text-white/90 leading-relaxed mb-8 min-h-[120px]">
                  "{testimonials[activeIndex].quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange to-orange-light rounded-full flex items-center justify-center">
                    <span className="font-display text-xl text-black">
                      {testimonials[activeIndex].avatar}
                    </span>
                  </div>
                  <div>
                    <div className="font-display text-xl text-white">
                      {testimonials[activeIndex].name}
                    </div>
                    <div className="font-body text-sm text-white/50">
                      {testimonials[activeIndex].role}
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Gradient */}
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-orange/10 rounded-full blur-3xl" />
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setIsAutoPlaying(false)
                      setActiveIndex(index)
                    }}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === activeIndex
                        ? 'bg-orange w-8'
                        : 'bg-white/20 hover:bg-white/40'
                    }`}
                  />
                ))}
              </div>

              {/* Arrows */}
              <div className="flex gap-3">
                <button
                  onClick={goToPrev}
                  className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white transition-all duration-300 hover:bg-orange hover:text-black hover:border-orange"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={goToNext}
                  className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white transition-all duration-300 hover:bg-orange hover:text-black hover:border-orange"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Client Logos */}
        <div
          className={`mt-20 pt-12 border-t border-white/5 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '400ms' }}
        >
          <p className="text-center font-body text-sm text-white/40 mb-8">
            Trusted by leading studios and creators worldwide
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16 opacity-40">
            {['Netflix', 'Disney', 'Warner Bros', 'Universal', 'Paramount'].map((studio, index) => (
              <div
                key={index}
                className="font-display text-2xl text-white/60 hover:text-orange transition-colors duration-300 cursor-default"
              >
                {studio}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
