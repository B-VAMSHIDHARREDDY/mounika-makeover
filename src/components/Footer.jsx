import { Instagram, MessageCircle } from 'lucide-react'
import { instagramUrl, whatsappNumber } from '../data.js'

export default function Footer() {
  return (
    <footer className="border-t border-[var(--line)] py-10">
      <div className="section-shell flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
        <div>
          <p className="font-display text-3xl font-bold">Mounika Makeover</p>
          <p className="mt-1 text-sm text-[var(--muted)]">Luxury Bridal Makeup Studio • Proddatur</p>
        </div>
        <div className="flex gap-2">
          <a className="icon-button" href={instagramUrl} target="_blank" rel="noreferrer" aria-label="Instagram">
            <Instagram size={19} />
          </a>
          <a className="icon-button" href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer" aria-label="WhatsApp">
            <MessageCircle size={19} />
          </a>
        </div>
      </div>
    </footer>
  )
}
