import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { testimonials } from '../data.js'

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const goTo = (direction) => {
    setCurrent((value) => (value + direction + testimonials.length) % testimonials.length)
  }

  const getOffset = (index) => {
    const raw = index - current
    const half = testimonials.length / 2
    if (raw > half) return raw - testimonials.length
    if (raw < -half) return raw + testimonials.length
    return raw
  }

  return (
    <section id="testimonials" className="overflow-hidden py-24">
      <div className="section-shell">
        <p className="section-kicker">Client Love</p>
        <h2 className="section-title">Calm mornings. Confident brides.</h2>

        <div className="review-stage mt-12">
          <motion.div
            className="review-perspective"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.18}
            onDragEnd={(_, info) => {
              if (info.offset.x < -45) goTo(1)
              if (info.offset.x > 45) goTo(-1)
            }}
          >
            {testimonials.map((item, index) => {
              const offset = getOffset(index)
              const visible = Math.abs(offset) <= 2

              return (
                <motion.article
                  key={item.name}
                  className="review-card glass"
                  animate={{
                    x: `${offset * 38}%`,
                    z: -Math.abs(offset) * 120,
                    rotateY: offset * -16,
                    rotateZ: offset * -1.5,
                    scale: offset === 0 ? 1 : 0.84,
                    opacity: visible ? (offset === 0 ? 1 : 0.5) : 0,
                  }}
                  transition={{ type: 'spring', stiffness: 150, damping: 24 }}
                  style={{
                    zIndex: 20 - Math.abs(offset),
                    pointerEvents: visible ? 'auto' : 'none',
                  }}
                  onClick={() => setCurrent(index)}
                >
                  <p className="review-label">Bride Review</p>
                  <h3 className="font-display text-4xl font-bold">{item.name}</h3>
                  <div className="mt-4 flex justify-center text-[var(--gold)]">
                    {[...Array(5)].map((_, starIndex) => (
                      <Star key={starIndex} size={18} fill="currentColor" />
                    ))}
                  </div>
                  <p className="mt-6 text-center leading-8 text-[var(--muted)]">"{item.review}"</p>
                </motion.article>
              )
            })}
          </motion.div>

          <button className="review-nav review-nav-left" type="button" aria-label="Previous review" onClick={() => goTo(-1)}>
            <ChevronLeft size={22} />
          </button>
          <button className="review-nav review-nav-right" type="button" aria-label="Next review" onClick={() => goTo(1)}>
            <ChevronRight size={22} />
          </button>
        </div>

        <div className="mt-4 flex justify-center gap-2">
          {testimonials.map((item, index) => (
            <button
              key={item.name}
              className={`h-2.5 rounded-full transition-all ${index === current ? 'w-9 bg-[var(--gold)]' : 'w-2.5 bg-[var(--line)]'}`}
              type="button"
              aria-label={`Show review from ${item.name}`}
              onClick={() => setCurrent(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
