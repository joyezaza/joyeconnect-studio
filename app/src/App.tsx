import { useEffect, useState } from 'react'
import './App.css'
import Navigation from './sections/Navigation'
import Hero from './sections/Hero'
import AISchool from './sections/AISchool'
import Ebooks from './sections/Ebooks'
import AIMedia from './sections/AIMedia'
import Series from './sections/Series'
import Comedy from './sections/Comedy'
import B2B from './sections/B2B'
import Certifications from './sections/Certifications'
import CTA from './sections/CTA'
import Footer from './sections/Footer'

function App() {
  const [scrollY, setScrollY] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={`min-h-screen bg-black text-white transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Navigation scrollY={scrollY} />
      <main>
        <Hero />
        <AISchool />
        <Ebooks />
        <AIMedia />
        <Series />
        <Comedy />
        <B2B />
        <Certifications />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
