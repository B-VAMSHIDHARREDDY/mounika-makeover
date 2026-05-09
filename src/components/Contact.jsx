import { useMemo, useState } from 'react'
import { Calendar, Instagram, MapPin, MessageCircle, Phone } from 'lucide-react'
import { instagramUrl, whatsappNumber } from '../data.js'

export default function Contact() {
  const bookingUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hi Mounika, I would like to check bridal makeup availability.')}`
  const [booking, setBooking] = useState({
    name: '',
    phone: '',
    date: '',
    service: 'Bridal Makeup',
    message: '',
  })

  const confirmUrl = useMemo(() => {
    const text = [
      'Hi Mounika, I want to confirm an appointment.',
      `Name: ${booking.name || 'Not provided'}`,
      `Phone: ${booking.phone || 'Not provided'}`,
      `Service: ${booking.service}`,
      `Date: ${booking.date || 'Not selected'}`,
      `Message: ${booking.message || 'No extra message'}`,
    ].join('\n')

    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`
  }, [booking])

  const updateBooking = (field) => (event) => {
    setBooking((current) => ({ ...current, [field]: event.target.value }))
  }

  return (
    <section id="contact" className="py-24">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="section-kicker">Bookings</p>
            <h2 className="section-title">Reserve your bridal date.</h2>
            <p className="section-copy mt-5">
              Share your event date, ceremony type, and preferred look. Mounika Makeover is based in Proddatur, Kadapa, Andhra Pradesh.
            </p>

            <div className="mt-8 grid gap-3">
              <a className="glass flex items-center gap-4 rounded-3xl p-4" href={bookingUrl} target="_blank" rel="noreferrer">
                <MessageCircle className="text-[var(--gold)]" />
                <span>
                  <span className="block font-bold">WhatsApp Booking</span>
                  <span className="text-sm text-[var(--muted)]">+91 74161 60337</span>
                </span>
              </a>
              <a className="glass flex items-center gap-4 rounded-3xl p-4" href="tel:7416160337">
                <Phone className="text-[var(--gold)]" />
                <span>
                  <span className="block font-bold">Call Studio</span>
                  <span className="text-sm text-[var(--muted)]">7416160337</span>
                </span>
              </a>
              <a className="glass flex items-center gap-4 rounded-3xl p-4" href={instagramUrl} target="_blank" rel="noreferrer">
                <Instagram className="text-[var(--gold)]" />
                <span>
                  <span className="block font-bold">@mounika_makeupartist_25</span>
                  <span className="text-sm text-[var(--muted)]">Follow reels and bridal looks</span>
                </span>
              </a>
            </div>
          </div>

          <div className="glass rounded-3xl p-4 sm:p-6">
            <form className="grid gap-4" onSubmit={(event) => event.preventDefault()}>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-bold">
                  Name
                  <input
                    className="rounded-2xl border border-[var(--line)] bg-white/40 px-4 py-3 outline-none dark:bg-black/20"
                    placeholder="Bride name"
                    value={booking.name}
                    onChange={updateBooking('name')}
                  />
                </label>
                <label className="grid gap-2 text-sm font-bold">
                  Phone
                  <input
                    className="rounded-2xl border border-[var(--line)] bg-white/40 px-4 py-3 outline-none dark:bg-black/20"
                    placeholder="Mobile number"
                    type="tel"
                    value={booking.phone}
                    onChange={updateBooking('phone')}
                  />
                </label>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-bold">
                  Date
                  <input
                    className="rounded-2xl border border-[var(--line)] bg-white/40 px-4 py-3 outline-none dark:bg-black/20"
                    type="date"
                    value={booking.date}
                    onChange={updateBooking('date')}
                  />
                </label>
                <label className="grid gap-2 text-sm font-bold">
                  Service
                  <select
                    className="rounded-2xl border border-[var(--line)] bg-white/40 px-4 py-3 outline-none dark:bg-black/20"
                    value={booking.service}
                    onChange={updateBooking('service')}
                  >
                    <option>Bridal Makeup</option>
                    <option>HD Makeup</option>
                    <option>Saree Draping</option>
                    <option>Hairstyling</option>
                    <option>Engagement Look</option>
                  </select>
                </label>
              </div>
              <label className="grid gap-2 text-sm font-bold">
                Message
                <textarea
                  className="min-h-32 rounded-2xl border border-[var(--line)] bg-white/40 px-4 py-3 outline-none dark:bg-black/20"
                  placeholder="Tell us about your event and look preference"
                  value={booking.message}
                  onChange={updateBooking('message')}
                />
              </label>
              <a className="btn-primary w-full" href={confirmUrl} target="_blank" rel="noreferrer">
                <Calendar size={19} />
                Confirm on WhatsApp
              </a>
            </form>

            <div className="mt-6 overflow-hidden rounded-3xl border border-[var(--line)]">
              <iframe
                title="Mounika Makeover location map"
                className="h-72 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=Proddatur%2C%20Kadapa%2C%20Andhra%20Pradesh&output=embed"
              />
              <div className="flex items-center gap-3 bg-[var(--card)] p-4 text-sm font-semibold text-[var(--muted)]">
                <MapPin size={18} className="text-[var(--gold)]" />
                Proddatur, Kadapa, Andhra Pradesh
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
