import Image from 'next/image'
import { UBER_EATS_URL, INSTAGRAM_URL, TIKTOK_URL, PHONE, PHONE_HREF, ADDRESS, GOOGLE_URL, EMAIL, EMAIL_HREF } from '@/data/menu'
import { Phone, Camera, MapPin, Mail, ExternalLink } from 'lucide-react'
import { TikTokIcon } from '@/components/ui/Icons'

const NAV_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'Menu', href: '#menu' },
  { label: 'About', href: '#about' },
  { label: 'Find Us', href: '#find-us' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-white/5" role="contentinfo">
      {/* Gold top accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent" aria-hidden="true" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand col */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <a href="#hero" aria-label="Where's the Burger — Home">
              <div className="relative h-12 w-48">
                <Image
                  src="/images/logo/logo-full.png"
                  alt="Where's the Burger"
                  fill
                  className="object-contain object-left"
                  sizes="192px"
                />
              </div>
            </a>
            <p className="text-sm text-white/40 leading-relaxed max-w-sm">
              Indian-fusion street food that rocks. Handcrafted burgers, loaded sides,
              dreamy desserts, and thick shakes — served with a lot of attitude.
            </p>
            <p className="font-bangers text-xl text-brand-gold/60 tracking-wide italic">
              &ldquo;Still looking for the burger? You found it.&rdquo;
            </p>

            {/* Uber Eats badge */}
            <a
              href={UBER_EATS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-3 rounded-full border border-brand-gold/30 px-5 py-2.5 text-sm font-bold text-brand-gold transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-brand-gold/10 active:scale-[0.97]"
              aria-label="Order on Uber Eats (opens in new tab)"
            >
              Order on Uber Eats
              <span className="flex h-5 w-5 items-center justify-center rounded-full border border-brand-gold/30 text-xs" aria-hidden="true">
                ↗
              </span>
            </a>
          </div>

          {/* Nav col */}
          <nav aria-label="Footer navigation">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold/50">
              Navigation
            </p>
            <ul className="flex flex-col gap-3" role="list">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/50 transition-colors duration-200 hover:text-brand-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact col */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold/50">
              Connect
            </p>
            <ul className="flex flex-col gap-3" role="list">
              <li>
                <a
                  href={PHONE_HREF}
                  className="flex items-center gap-2 text-sm text-white/50 transition-colors duration-200 hover:text-brand-gold"
                >
                  <Phone size={14} className="text-brand-gold/40" />
                  {PHONE}
                </a>
              </li>
              <li>
                <a
                  href={EMAIL_HREF}
                  className="flex items-center gap-2 text-sm text-white/50 transition-colors duration-200 hover:text-brand-gold"
                >
                  <Mail size={14} className="text-brand-gold/40" />
                  {EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-white/50 transition-colors duration-200 hover:text-brand-gold"
                >
                  <Camera size={14} className="text-brand-gold/40" />
                  @wherestheburger
                </a>
              </li>
              <li>
                <a
                  href={TIKTOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-white/50 transition-colors duration-200 hover:text-brand-gold"
                >
                  <TikTokIcon size={14} className="text-brand-gold/40" />
                  @wheres.the.burger
                </a>
              </li>
              <li>
                <a
                  href={UBER_EATS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-white/50 transition-colors duration-200 hover:text-brand-gold"
                >
                  <ExternalLink size={14} className="text-brand-gold/40" />
                  Uber Eats
                </a>
              </li>
              <li>
                <a
                  href={GOOGLE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-white/50 transition-colors duration-200 hover:text-brand-gold"
                >
                  <MapPin size={14} className="text-brand-gold/40" />
                  {ADDRESS}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/25">
            &copy; {new Date().getFullYear()} Where&apos;s the Burger. All rights reserved.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <p className="text-xs text-white/20">
              Food Truck icon by{' '}
              <a
                href="https://thenounproject.com/browse/icons/term/food-truck/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-white/40 transition-colors duration-200"
                title="Food Truck Icons"
              >
                Rafael Farias Leão
              </a>{' '}
              (CC BY 3.0)
            </p>
            <a
              href="https://praxisinnovations.ca/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-white/20 transition-colors duration-200 hover:text-white/40"
            >
              Powered by Praxis Innovations
              <ExternalLink size={10} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
