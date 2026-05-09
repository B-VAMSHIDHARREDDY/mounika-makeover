import { motion } from 'framer-motion'
import { CalendarHeart, Images } from 'lucide-react'
import { whatsappNumber } from '../data.js'

export default function Hero() {
  const bookingUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hi Mounika, I want to book my bridal look.')}`

  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-28">
      <motion.div
        className="hero-bg absolute inset-0"
        animate={{ scale: [1, 1.06, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_42%,rgba(196,154,73,0.18),transparent_24rem),linear-gradient(105deg,rgba(12,7,5,0.92)_0%,rgba(28,14,9,0.78)_47%,rgba(58,31,22,0.4)_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--bg)]" />
      <div className="pointer-events-none absolute inset-0">
        {[...Array(18)].map((_, index) => (
          <motion.span
            key={index}
            className="absolute h-1.5 w-1.5 rounded-full bg-[#efd089]/75"
            style={{ left: `${8 + index * 5}%`, top: `${16 + (index % 7) * 10}%` }}
            animate={{ y: [-8, 18, -8], opacity: [0.35, 0.9, 0.35] }}
            transition={{ duration: 4 + (index % 4), repeat: Infinity, delay: index * 0.18 }}
          />
        ))}
      </div>

      <div className="hero-main section-shell relative z-10 grid min-h-[calc(100vh-7rem)] items-center gap-10 py-14 text-white lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-copy max-w-3xl"
        >
          <p className="section-kicker">Proddatur Bridal Artist</p>
          <h1 className="font-display mt-5 text-6xl font-bold leading-none sm:text-7xl lg:text-8xl">
            Mounika Makeover
          </h1>
          <p className="mt-5 max-w-2xl text-2xl font-semibold sm:text-3xl">
            Transforming Brides Into Timeless Beauties
          </p>
          <p className="mt-5 max-w-xl text-base leading-8 sm:text-lg">
            Luxury bridal makeup, HD styling, saree draping, and graceful Telugu wedding looks for your most memorable moments.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a className="btn-primary" href={bookingUrl} target="_blank" rel="noreferrer">
              <CalendarHeart size={19} />
              Book Your Bridal Look
            </a>
            <a className="btn-secondary text-white" href="#portfolio">
              <Images size={19} />
              View Portfolio
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-brand-card relative mx-auto w-full max-w-[430px] overflow-hidden rounded-[2rem] border border-[#efd089]/30 bg-black shadow-[0_28px_90px_rgba(0,0,0,0.42)]"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.25, duration: 0.8 }}
        >
          <div className="brand-card-frame photo-wrap">
            <img className="brand-card-image" src="/images/brand-service-card-clean.jpeg" alt="Mounika Makeover services brand card" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
