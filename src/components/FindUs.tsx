'use client'

import SectionHeading from '@/components/ui/SectionHeading'
import RevealSection from '@/components/ui/RevealSection'
import {
  INSTAGRAM_URL,
  TIKTOK_URL,
  ADDRESS,
  PHONE,
  PHONE_HREF,
  GOOGLE_MAPS_EMBED_URL,
  GOOGLE_MAPS_DIRECTIONS_URL,
  hours,
} from '@/data/menu'
import { MapPin, Phone, Camera, ExternalLink } from 'lucide-react'
import { TikTokIcon } from '@/components/ui/Icons'

export default function FindUs() {
  return (
    <section
      id="find-us"
      className="relative bg-brand-dark py-12 md:py-16 overflow-hidden"
      aria-labelledby="findus-heading"
    >
      {/* Background glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[800px] w-[800px] rounded-full opacity-[0.03]"
        style={{ background: 'radial-gradient(circle, #E5A100 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RevealSection className="mb-10 flex flex-col items-center">
          <SectionHeading
            eyebrow="Visit Us"
            title="Where to Find Us"
            subtitle="Same spot, every day. Come hungry."
            id="findus-heading"
          />
        </RevealSection>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-10">

          {/* Map + address card — left col spans 3 */}
          <RevealSection className="lg:col-span-3">
            <div className="rounded-[2rem] p-2 bg-white/[0.025] ring-1 ring-white/10">
              <div className="rounded-[1.625rem] overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.07)]">
                {/* Google Maps embed */}
                <div className="relative h-60 sm:h-72 lg:h-80 bg-brand-dark-800">
                  <iframe
                    src={GOOGLE_MAPS_EMBED_URL}
                    className="absolute inset-0 w-full h-full border-0"
                    style={{ filter: 'brightness(0.55) contrast(1.2) invert(1) hue-rotate(180deg)' }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Where's the Burger location on Google Maps"
                    allowFullScreen
                  />
                </div>

                {/* Address bar with Get Directions */}
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between p-4 bg-brand-dark-800">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-brand-gold/10">
                      <MapPin size={16} className="text-brand-gold" />
                    </span>
                    <p className="text-sm text-white/70 leading-snug">{ADDRESS}</p>
                  </div>
                  <a
                    href={GOOGLE_MAPS_DIRECTIONS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 rounded-full bg-brand-gold px-4 py-2 text-sm font-bold text-black transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-brand-gold-light active:scale-[0.97] flex-shrink-0"
                  >
                    Get Directions
                    <ExternalLink size={13} />
                  </a>
                </div>
              </div>
            </div>
          </RevealSection>

          {/* Info — right col spans 2 */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {/* Hours */}
            <RevealSection delayMs={60}>
              <div className="rounded-[1.5rem] p-1.5 bg-white/[0.025] ring-1 ring-white/10">
                <div className="rounded-[1.25rem] bg-brand-dark-800 shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)] p-5">
                  <h3 className="font-bangers text-2xl text-brand-gold tracking-wide mb-4">Hours</h3>
                  <dl className="flex flex-col gap-2.5">
                    {hours.map(({ day, time }) => (
                      <div key={day} className="flex items-start justify-between gap-2 border-b border-white/5 pb-2.5 last:border-b-0 last:pb-0">
                        <dt className="text-sm text-white/60">{day}</dt>
                        <dd className={`text-sm font-semibold text-right ${time === 'Closed' ? 'text-white/30' : 'text-white'}`}>{time}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </RevealSection>

            {/* Social CTAs — Instagram + TikTok */}
            <RevealSection delayMs={120}>
              <div className="rounded-[1.5rem] p-1.5 bg-white/[0.025] ring-1 ring-white/10">
                <div className="rounded-[1.25rem] bg-brand-dark-800 shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)] p-5">
                  <p className="font-semibold text-white text-sm mb-1">Follow for updates</p>
                  <p className="text-xs text-white/40 mb-4">Specials, new items, and the daily vibe.</p>
                  <div className="flex flex-col gap-2.5">
                    <a
                      href={INSTAGRAM_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 px-5 py-3 text-sm font-bold text-white transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] hover:opacity-90 active:scale-[0.97]"
                    >
                      <Camera size={16} />
                      Follow on Instagram
                    </a>
                    <a
                      href={TIKTOK_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white/10 px-5 py-3 text-sm font-bold text-white transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-white/15 active:scale-[0.97]"
                    >
                      <TikTokIcon size={16} />
                      Follow on TikTok
                    </a>
                  </div>
                </div>
              </div>
            </RevealSection>

            {/* Phone */}
            <RevealSection delayMs={180}>
              <a
                href={PHONE_HREF}
                className="group flex items-center gap-3 rounded-[1.5rem] border border-white/10 px-5 py-4 transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] hover:border-brand-gold/40 hover:bg-brand-gold/5"
              >
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand-gold/10 transition-transform duration-300 group-hover:scale-110">
                  <Phone size={18} className="text-brand-gold" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs text-white/40 uppercase tracking-widest mb-0.5">Call us</p>
                  <p className="font-semibold text-white">{PHONE}</p>
                </div>
              </a>
            </RevealSection>
          </div>
        </div>
      </div>
    </section>
  )
}
