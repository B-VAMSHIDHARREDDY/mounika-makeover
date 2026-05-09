import { useState } from 'react'
import { motion } from 'framer-motion'
import { Brush, Flower2, Sparkles, X } from 'lucide-react'
import { services } from '../data.js'

const icons = [Sparkles, Brush, Flower2]

export default function Services() {
  const [activeService, setActiveService] = useState(null)

  return (
    <section id="services" className="py-24">
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="section-kicker">Signature Services</p>
          <h2 className="section-title">Every ritual, styled with quiet luxury.</h2>
          <p className="section-copy mt-5">
            Complete bridal and event styling with makeup, draping, hair, and presentation details handled with care.
          </p>
        </div>

        <motion.div
          className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        >
          {services.map((service, index) => {
            const Icon = icons[index % icons.length]
            return (
              <motion.article
                key={service.title}
                className="service-card glass group overflow-hidden rounded-3xl p-3 transition hover:border-[var(--gold)]"
                variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
                whileHover={{ y: -8, rotateX: 2, rotateY: index % 2 === 0 ? -2 : 2 }}
                whileTap={{ scale: 0.98 }}
              >
                <button
                  className="service-image-button photo-wrap aspect-[4/3] rounded-2xl"
                  type="button"
                  aria-label={`View ${service.title} image full screen`}
                  onClick={() => setActiveService(service)}
                >
                  <img
                    className="photo group-hover:scale-[1.04]"
                    src={service.image}
                    alt={`${service.title} by Mounika Makeover`}
                    loading="lazy"
                    style={{ '--image-position': service.position }}
                  />
                  <span className="service-image-hint">Tap to view</span>
                </button>
                <div className="p-4">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-[var(--gold)]/15 text-[var(--gold)]">
                    <Icon size={21} />
                  </div>
                  <h3 className="font-display text-3xl font-bold">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{service.description}</p>
                </div>
              </motion.article>
            )
          })}
        </motion.div>
      </div>

      {activeService && (
        <div className="service-modal fixed inset-0 z-50 grid place-items-center bg-black/84 p-4" role="dialog" aria-modal="true">
          <motion.div
            className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-[var(--gold)]/40 bg-black p-3 shadow-[0_30px_90px_rgba(0,0,0,0.62)]"
            initial={{ opacity: 0, scale: 0.94, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.22 }}
          >
            <button className="icon-button absolute right-5 top-5 z-10 bg-black/62 text-[var(--gold)]" type="button" aria-label="Close service image" onClick={() => setActiveService(null)}>
              <X size={20} />
            </button>
            <div className="service-modal-image">
              <img src={activeService.image} alt={`${activeService.title} full preview`} style={{ objectPosition: activeService.position }} />
            </div>
            <div className="px-2 pb-2 pt-4">
              <p className="section-kicker">{activeService.title}</p>
              <p className="mt-2 text-sm leading-7 text-[var(--muted)]">{activeService.description}</p>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  )
}
