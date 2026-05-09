import { Instagram } from 'lucide-react'
import { instagramPosts, instagramUrl } from '../data.js'

export default function InstagramFeed() {
  return (
    <section className="py-24">
      <div className="section-shell">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="section-kicker">Instagram</p>
            <h2 className="section-title">Latest makeup moments.</h2>
          </div>
          <a className="btn-secondary" href={instagramUrl} target="_blank" rel="noreferrer">
            <Instagram size={19} />
            Follow on Instagram
          </a>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
          {instagramPosts.map((image, index) => (
            <a
              key={image}
              className="group overflow-hidden rounded-3xl border border-[var(--line)]"
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open Instagram post placeholder ${index + 1}`}
            >
              <div className="photo-wrap aspect-square">
                <img className="photo group-hover:scale-105" src={image} alt="" loading="lazy" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
