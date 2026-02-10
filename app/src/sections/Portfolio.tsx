import { useEffect, useRef, useState } from 'react'
import { Play, ExternalLink, Filter } from 'lucide-react'

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeFilter, setActiveFilter] = useState('All')
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)
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

  const filters = ['All', 'Feature Films', 'Shorts', 'Training', 'Comedy']

  const portfolioItems = [
    {
      id: 1,
      title: 'Neural Dreams',
      category: 'Feature Films',
      year: '2024',
      description: 'An AI-generated sci-fi epic exploring consciousness',
      image: '/portfolio-featured.jpg',
      featured: true,
    },
    {
      id: 2,
      title: 'The Algorithm',
      category: 'Shorts',
      year: '2024',
      description: 'When code becomes sentient',
      image: '/portfolio-algorithm.jpg',
      featured: false,
    },
    {
      id: 3,
      title: 'AI Masterclass',
      category: 'Training',
      year: '2024',
      description: 'Comprehensive AI filmmaking course',
      image: '/portfolio-training.jpg',
      featured: false,
    },
    {
      id: 4,
      title: 'Laugh Track',
      category: 'Comedy',
      year: '2023',
      description: 'AI-assisted comedy series',
      image: '/portfolio-comedy.jpg',
      featured: false,
    },
    {
      id: 5,
      title: 'Synthetic Reality',
      category: 'Feature Films',
      year: '2023',
      description: 'Blurring the lines of reality',
      image: '/portfolio-synthetic.jpg',
      featured: false,
    },
  ]

  const filteredItems = activeFilter === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeFilter)

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-black overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-orange/5 rounded-full blur-3xl" />
      </div>

      <div className="section-padding relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
          <div>
            <div
              className={`inline-flex items-center gap-2 mb-4 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
              }`}
            >
              <span className="w-8 h-px bg-orange" />
              <span className="font-body text-sm text-orange tracking-wider uppercase">
                Our Work
              </span>
            </div>
            
            <h2
              className={`font-display text-5xl sm:text-6xl lg:text-7xl text-white transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '100ms' }}
            >
              Featured <span className="text-orange">Productions</span>
            </h2>
          </div>

          {/* Filter Tabs */}
          <div
            className={`flex flex-wrap gap-2 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <Filter className="w-5 h-5 text-orange mr-2 lg:hidden" />
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 font-body text-sm rounded-lg transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-orange text-black'
                    : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className={`group relative transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              } ${item.featured ? 'md:col-span-2 md:row-span-2' : ''}`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div
                className={`relative overflow-hidden rounded-2xl bg-dark-secondary border border-white/5 transition-all duration-500 ${
                  hoveredItem === item.id ? 'border-orange/30 shadow-glow scale-[1.02]' : ''
                }`}
              >
                {/* Image */}
                <div className={`relative overflow-hidden ${item.featured ? 'aspect-[16/10]' : 'aspect-[4/3]'}`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                  
                  {/* Play Button */}
                  <div
                    className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
                      hoveredItem === item.id ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <button className="w-16 h-16 bg-orange rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110 shadow-glow-lg">
                      <Play className="w-6 h-6 text-black ml-1" fill="black" />
                    </button>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-black/60 backdrop-blur-sm rounded-full font-body text-xs text-white/80">
                      {item.category}
                    </span>
                  </div>

                  {/* Year Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-orange/90 rounded-full font-body text-xs text-black font-semibold">
                      {item.year}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display text-2xl text-white mb-2 group-hover:text-orange transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="font-body text-sm text-white/60 mb-4">
                    {item.description}
                  </p>
                  
                  <button className="flex items-center gap-2 font-body text-sm text-orange opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <span>View Project</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>

                {/* Featured Glow */}
                {item.featured && (
                  <div className="absolute -inset-px bg-gradient-to-r from-orange/20 via-transparent to-orange/20 rounded-2xl pointer-events-none" />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div
          className={`text-center mt-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '800ms' }}
        >
          <button className="px-8 py-4 bg-white/5 border border-white/10 text-white font-body font-semibold rounded-lg transition-all duration-300 hover:bg-orange hover:text-black hover:border-orange hover:shadow-glow">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
