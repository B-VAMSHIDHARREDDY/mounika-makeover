import { motion } from 'framer-motion'

export default function IntroSplash() {
  return (
    <motion.div
      className="intro-splash"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.45, ease: 'easeOut' } }}
    >
      <motion.div
        className="intro-card"
        initial={{ opacity: 0, scale: 0.92, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.75, ease: 'easeOut' }}
      >
        <img src="/images/brand-service-card-clean.jpeg" alt="Mounika Makeover brand card" />
      </motion.div>
    </motion.div>
  )
}
