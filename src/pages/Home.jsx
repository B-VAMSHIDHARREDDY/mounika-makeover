import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import Contact from '../components/Contact.jsx'
import Footer from '../components/Footer.jsx'
import Hero from '../components/Hero.jsx'
import InstagramFeed from '../components/InstagramFeed.jsx'
import IntroSplash from '../components/IntroSplash.jsx'
import Navbar from '../components/Navbar.jsx'
import Portfolio from '../components/Portfolio.jsx'
import Services from '../components/Services.jsx'
import Testimonials from '../components/Testimonials.jsx'
import { whatsappNumber } from '../data.js'

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)
  const [showIntro, setShowIntro] = useState(true)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
  }, [darkMode])

  useEffect(() => {
    const timer = window.setTimeout(() => setShowIntro(false), 3000)
    return () => window.clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence>{showIntro && <IntroSplash />}</AnimatePresence>
      <Navbar darkMode={darkMode} onToggleTheme={() => setDarkMode((value) => !value)} />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Testimonials />
        <InstagramFeed />
        <Contact />
      </main>
      <Footer />
      <a
        className="mobile-cta btn-primary"
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hi Mounika, I want to book an appointment.')}`}
        target="_blank"
        rel="noreferrer"
      >
        <MessageCircle size={19} />
        Book on WhatsApp
      </a>
    </>
  )
}
