'use client'

import SectionHeading from '@/components/ui/SectionHeading'
import RevealSection from '@/components/ui/RevealSection'
import { INSTAGRAM_URL, GOOGLE_URL, ADDRESS, PHONE, PHONE_HREF, hours } from '@/data/menu'
import { MapPinIcon, PhoneIcon, CameraIcon, ExternalLinkIcon } from '@/components/ui/Icons'

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

          {/* Map / location card — left col spans 3 */}
          <RevealSection className="lg:col-span-3">
            <div className="rounded-[2rem] p-2 bg-white/[0.025] ring-1 ring-white/10">
              <div className="rounded-[1.625rem] overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.07)]">
                <div
                  className="relative h-60 sm:h-72 lg:h-80 bg-brand-dark"
                  style={{
                    backgroundImage: `
                      linear-gradient(rgba(229,161,0,0.07) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(229,161,0,0.07) 1px, transparent 1px)
                    `,
                    backgroundSize: '44px 44px',
                  }}
                  aria-label="Location map showing Where's the Burger at 1300 Steeles Ave E, Brampton"
                >
                  {/* Grid lines */}
                  <div className="absolute inset-0">
                    <div className="absolute left-1/3 top-0 bottom-0 w-px bg-brand-gold/15" />
                    <div className="absolute left-2/3 top-0 bottom-0 w-px bg-brand-gold/10" />
                    <div className="absolute top-1/3 left-0 right-0 h-px bg-brand-gold/15" />
                    <div className="absolute top-2/3 left-0 right-0 h-px bg-brand-gold/10" />
                    <svg className="absolute inset-0 w-full h-full" aria-hidden="true">
                      <line x1="0" y1="100%" x2="100%" y2="0" stroke="rgba(229,161,0,0.05)" strokeWidth="1" />
                    </svg>
                  </div>

                  {/* Location ping */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                    <div className="relative">
                      <span
                        className="absolute inline-flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-gold opacity-60 animate-ping"
                        style={{ top: '50%', left: '50%' }}
                        aria-hidden="true"
                      />
                      <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-brand-gold shadow-[0_0_24px_rgba(229,161,0,0.6)]">
                        <MapPinIcon size={20} className="text-black" />
                      </div>
                    </div>
                    <div className="mt-3 text-center">
                      <p className="font-bangers text-xl text-brand-gold tracking-wide">Brampton, ON</p>
                    </div>
                  </div>

                  {/* Overlay message */}
                  <div className="absolute bottom-0 left-0 right-0 p-5"
                    style={{ background: 'linear-gradient(to top, rgba(10,10,10,0.95) 0%, transparent 100%)' }}>
                    <p className="font-bangers text-2xl text-white tracking-wide">Come Find Us</p>
                    <p className="mt-1 text-sm text-white/50">
                      {ADDRESS}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </RevealSection>

          {/* Info — right col spans 2 */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {/* Address card */}
            <RevealSection delayMs={60}>
              <a
                href={GOOGLE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3 rounded-[1.5rem] border border-white/10 px-5 py-4 transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] hover:border-brand-gold/40 hover:bg-brand-gold/5"
              >
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand-gold/10 transition-transform duration-300 group-hover:scale-110">
                  <MapPinIcon size={18} className="text-brand-gold" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs text-white/40 uppercase tracking-widest mb-0.5">Address</p>
                  <p className="font-semibold text-white text-sm leading-snug">{ADDRESS}</p>
                  <p className="text-xs text-white/30 mt-1 inline-flex items-center gap-1">
                    View on Google Maps <ExternalLinkIcon size={10} />
                  </p>
                </div>
              </a>
            </RevealSection>

            {/* Hours */}
            <RevealSection delayMs={120}>
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

            {/* Instagram CTA */}
            <RevealSection delayMs={180}>
              <div className="rounded-[1.5rem] p-1.5 bg-white/[0.025] ring-1 ring-white/10">
                <div className="rounded-[1.25rem] bg-brand-dark-800 shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)] p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 text-white">
                      <CameraIcon size={18} />
                    </div>
                    <div>
                      <p className="font-semibold text-white text-sm">Follow for updates</p>
                      <p className="text-xs text-white/40">@wherestheburger</p>
                    </div>
                  </div>
                  <p className="text-sm text-white/50 mb-4">
                    Specials, new items, and the daily vibe — it&apos;s all on Instagram.
                  </p>
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 px-5 py-3 text-sm font-bold text-white transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] hover:opacity-90 active:scale-[0.97]"
                  >
                    Follow on Instagram
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-xs" aria-hidden="true">
                      ↗
                    </span>
                  </a>
                </div>
              </div>
            </RevealSection>

            {/* Phone */}
            <RevealSection delayMs={240}>
              <a
                href={PHONE_HREF}
                className="group flex items-center gap-3 rounded-[1.5rem] border border-white/10 px-5 py-4 transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] hover:border-brand-gold/40 hover:bg-brand-gold/5"
              >
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand-gold/10 transition-transform duration-300 group-hover:scale-110">
                  <PhoneIcon size={18} className="text-brand-gold" />
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
