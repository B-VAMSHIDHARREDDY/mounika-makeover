import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle.jsx'
import { whatsappNumber } from '../data.js'

const links = [
  ['Services', '#services'],
  ['Portfolio', '#portfolio'],
  ['Reviews', '#testimonials'],
  ['Contact', '#contact'],
]

export default function Navbar({ darkMode, onToggleTheme }) {
  const [open, setOpen] = useState(false)
  const bookingUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hi Mounika, I want to book a bridal makeover appointment.')}`

  return (
    <header className="fixed left-0 right-0 top-0 z-40 px-3 pt-3">
      <nav className="section-shell glass flex min-h-16 items-center justify-between rounded-full px-4">
        <a href="#home" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="logo-mark flex h-14 w-14 items-center justify-center overflow-hidden">
            <img className="h-full w-full object-contain" src="/header-logo.png" alt="Mounika Makeover logo" />
          </span>
          <span className="brand-text leading-tight">
            <span className="block font-display text-xl font-bold">Mounika</span>
            <span className="brand-subtitle block text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">Makeover</span>
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {links.map(([label, href]) => (
            <a key={href} className="text-sm font-semibold text-[var(--muted)] transition hover:text-[var(--text)]" href={href}>
              {label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle darkMode={darkMode} onToggle={onToggleTheme} />
          <a className="btn-primary hidden lg:inline-flex" href={bookingUrl} target="_blank" rel="noreferrer">
            Book
          </a>
          <button className="icon-button lg:hidden" type="button" aria-label="Toggle menu" onClick={() => setOpen((value) => !value)}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="section-shell glass mt-2 rounded-3xl p-4 lg:hidden">
          <div className="grid gap-2">
            {links.map(([label, href]) => (
              <a
                key={href}
                className="rounded-2xl px-4 py-3 font-semibold text-[var(--muted)]"
                href={href}
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            ))}
            <a className="btn-primary mt-2" href={bookingUrl} target="_blank" rel="noreferrer">
              Book Appointment
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
