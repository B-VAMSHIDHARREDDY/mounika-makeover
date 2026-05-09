import { motion } from 'framer-motion'
import { Clapperboard, Play } from 'lucide-react'
import { reels } from '../data.js'

export default function VideoShowcase() {
  return (
    <section id="videos" className="py-24">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="section-kicker">Cinematic Reels</p>
            <h2 className="section-title">Luxury bridal reels with warm golden motion.</h2>
            <p className="section-copy mt-5">
              Soft cinematic clips created for makeup reveals, saree details, jewelry closeups, and bridal portraits.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {reels.map((reel, index) => (
              <motion.article
                key={reel.title}
                className={`glass group overflow-hidden rounded-3xl p-3 ${index === 0 ? 'sm:col-span-2' : ''}`}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="photo-wrap aspect-[4/5] rounded-2xl">
                  <video
                    className="photo"
                    src={reel.video}
                    poster={reel.image}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    aria-label={reel.title}
                    style={{ '--image-position': reel.position }}
                  />
                  <div className="absolute inset-0 bg-black/28" />
                  <span className="film-sheen" />
                  <div className="absolute bottom-4 right-4">
                    <span className="grid h-12 w-12 place-items-center rounded-full bg-black/45 text-[var(--gold)] backdrop-blur">
                      <Play fill="currentColor" size={18} />
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4">
                  <Clapperboard className="text-[var(--gold)]" size={20} />
                  <h3 className="font-display text-2xl font-bold">{reel.title}</h3>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
