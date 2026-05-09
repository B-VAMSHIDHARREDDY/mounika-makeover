import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { portfolio } from '../data.js'

export default function Portfolio() {
  const [active, setActive] = useState(null)
  const [current, setCurrent] = useState(0)
  const items = portfolio
  const goTo = (direction) => {
    if (items.length <= 1) return
    setCurrent((value) => (value + direction + items.length) % items.length)
  }

  const getOffset = (index) => {
    const raw = index - current
    const half = items.length / 2
    if (raw > half) return raw - items.length
    if (raw < -half) return raw + items.length
    return raw
  }

  return (
    <section id="portfolio" className="py-24">
      <div className="section-shell">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="section-kicker">Portfolio</p>
            <h2 className="section-title">Portraits with glow, grace, and detail.</h2>
          </div>
        </div>

        <div className="gallery-stage mt-12">
          <motion.div
            className="gallery-perspective"
            drag={items.length > 1 ? 'x' : false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.18}
            onDragEnd={(_, info) => {
              if (info.offset.x < -45) goTo(1)
              if (info.offset.x > 45) goTo(-1)
            }}
          >
            <AnimatePresence initial={false}>
              {items.map((item, index) => {
                const offset = getOffset(index)
                const visible = Math.abs(offset) <= 2
                return (
                  <motion.button
                    key={item.title}
                    type="button"
                    className="gallery-card"
                    aria-label={`Open ${item.title}`}
                    onClick={() => (offset === 0 ? setActive(item) : setCurrent(index))}
                    animate={{
                      x: `${offset * 34}%`,
                      z: -Math.abs(offset) * 130,
                      rotateY: offset * -18,
                      rotateZ: offset * -2,
                      scale: offset === 0 ? 1 : 0.82,
                      opacity: visible ? (offset === 0 ? 1 : 0.52) : 0,
                    }}
                    transition={{ type: 'spring', stiffness: 150, damping: 24 }}
                    style={{
                      zIndex: 20 - Math.abs(offset),
                      pointerEvents: visible ? 'auto' : 'none',
                    }}
                  >
                    <GalleryImage item={item} priority={offset === 0} />
                  </motion.button>
                )
              })}
            </AnimatePresence>
          </motion.div>

          <button className="gallery-nav gallery-nav-left" type="button" aria-label="Previous image" onClick={() => goTo(-1)}>
            <ChevronLeft size={22} />
          </button>
          <button className="gallery-nav gallery-nav-right" type="button" aria-label="Next image" onClick={() => goTo(1)}>
            <ChevronRight size={22} />
          </button>
        </div>

        {items.length > 1 && (
          <div className="mt-7 text-center">
            <div className="mt-4 flex justify-center gap-2">
              {items.map((item, index) => (
                <button
                  key={item.title}
                  className={`h-2.5 rounded-full transition-all ${index === current ? 'w-9 bg-[var(--gold)]' : 'w-2.5 bg-[var(--line)]'}`}
                  type="button"
                  aria-label={`Show ${item.title}`}
                  onClick={() => setCurrent(index)}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {active && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/72 p-4" role="dialog" aria-modal="true">
          <div className="glass relative w-full max-w-3xl overflow-hidden rounded-3xl p-4">
            <button className="icon-button absolute right-5 top-5 z-10 bg-black/40 text-white" type="button" aria-label="Close preview" onClick={() => setActive(null)}>
              <X size={20} />
            </button>
            {active.category === 'Transformation' ? (
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <img className="photo absolute inset-0" src={active.beforeImage} alt="" style={{ '--image-position': active.position }} />
                <div className="absolute inset-y-0 left-0 w-1/2 overflow-hidden">
                  <img className="photo h-full" src={active.afterImage} alt="" style={{ '--image-position': active.position, width: '200%', maxWidth: 'none' }} />
                </div>
                <div className="absolute inset-y-0 left-1/2 w-1 bg-white" />
              </div>
            ) : (
              <div className="photo-wrap aspect-[4/3] rounded-2xl">
                <img className="photo" src={active.image} alt={`${active.title} preview`} style={{ '--image-position': active.position }} />
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  )
}

function GalleryImage({ item, priority }) {
  if (item.category === 'Transformation') {
    return (
      <div className="photo-wrap gallery-photo">
        <img className="photo absolute inset-0" src={item.beforeImage} alt="" loading={priority ? 'eager' : 'lazy'} style={{ '--image-position': item.position }} />
        <div className="absolute inset-y-0 left-0 w-[55%] overflow-hidden">
          <img className="photo h-full w-[182%] max-w-none" src={item.afterImage} alt="" loading={priority ? 'eager' : 'lazy'} style={{ '--image-position': item.position }} />
        </div>
        <div className="absolute inset-y-0 left-[55%] w-1 bg-white shadow-[0_0_18px_rgba(255,255,255,0.75)]" />
        <span className="absolute bottom-4 left-4 rounded-full bg-black/48 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-white backdrop-blur">
          Before / After
        </span>
      </div>
    )
  }

  return (
    <div className="photo-wrap gallery-photo">
      <img className="photo" src={item.image} alt={`${item.title} portfolio look`} loading={priority ? 'eager' : 'lazy'} style={{ '--image-position': item.position }} />
    </div>
  )
}
