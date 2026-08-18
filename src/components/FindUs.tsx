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
      className="relative bg-brand-dark py-8 md:py-10 overflow-hidden"
      aria-labelledby="findus-heading"
    >
      {/* Background glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[800px] w-[800px] rounded-full opacity-[0.03]"
        style={{ background: 'radial-gradient(circle, #E5A100 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RevealSection className="mb-6 flex flex-col items-center">
          <SectionHeading
            eyebrow="Visit Us"
            title="Where to Find Us"
            subtitle="Same spot, every day. Come hungry."
            id="findus-heading"
          />
        </RevealSection>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-5 lg:gap-8 lg:items-stretch">

          {/* Map + address card — left col spans 3 */}
          <RevealSection className="lg:col-span-3 flex flex-col">
            <div className="rounded-[2rem] p-2 bg-white/[0.025] ring-1 ring-white/10 flex flex-col flex-1">
              <div className="rounded-[1.625rem] overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.07)] flex flex-col flex-1">
                {/* Google Maps embed */}
                <div className="relative h-60 sm:h-72 lg:h-auto lg:flex-1 min-h-[240px] bg-brand-dark-800 overflow-hidden">
                  <iframe
                    src={GOOGLE_MAPS_EMBED_URL}
                    className="absolute inset-0 w-full h-full border-0"
                    style={{ filter: 'brightness(0.75) contrast(1.1)' }}
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
          <div className="lg:col-span-2 flex flex-col gap-4">
            {/* Hours */}
            <RevealSection delayMs={60}>
              <div className="rounded-[1.5rem] p-1.5 bg-white/[0.025] ring-1 ring-white/10">
                <div className="rounded-[1.25rem] bg-brand-dark-800 shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)] p-4">
                  <h3 className="font-bangers text-xl text-brand-gold tracking-wide mb-3">Hours</h3>
                  <dl className="flex flex-col gap-1.5">
                    {hours.map(({ day, time }) => (
                      <div key={day} className="flex items-center justify-between gap-2 border-b border-white/5 pb-1.5 last:border-b-0 last:pb-0">
                        <dt className="text-xs text-white/60">{day}</dt>
                        <dd className={`text-xs font-semibold text-right ${time === 'Closed' ? 'text-white/30' : 'text-white'}`}>{time}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </RevealSection>

            {/* Social CTAs + Phone */}
            <RevealSection delayMs={120}>
              <div className="rounded-[1.5rem] p-1.5 bg-white/[0.025] ring-1 ring-white/10">
                <div className="rounded-[1.25rem] bg-brand-dark-800 shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)] p-4">
                  <p className="font-semibold text-white text-sm mb-3">Follow &amp; reach us</p>
                  <div className="flex flex-col gap-2">
                    <a
                      href={INSTAGRAM_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 px-4 py-2.5 text-sm font-bold text-white transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] hover:opacity-90 active:scale-[0.97]"
                    >
                      <Camera size={15} />
                      Follow on Instagram
                    </a>
                    <a
                      href={TIKTOK_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white/10 px-4 py-2.5 text-sm font-bold text-white transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-white/15 active:scale-[0.97]"
                    >
                      <TikTokIcon size={15} />
                      Follow on TikTok
                    </a>
                    <a
                      href={PHONE_HREF}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/10 px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] hover:border-brand-gold/40 hover:bg-brand-gold/5"
                    >
                      <Phone size={15} className="text-brand-gold" />
                      {PHONE}
                    </a>
                  </div>
                </div>
              </div>
            </RevealSection>
          </div>
        </div>
      </div>
    </section>
  )
}
