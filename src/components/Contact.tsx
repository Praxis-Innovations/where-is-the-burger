'use client'

import SectionHeading from '@/components/ui/SectionHeading'
import RevealSection from '@/components/ui/RevealSection'
import { UBER_EATS_URL, INSTAGRAM_URL, TIKTOK_URL, PHONE, PHONE_HREF, EMAIL, EMAIL_HREF } from '@/data/menu'
import { Phone, Camera, Mail, HandMetal } from 'lucide-react'
import { TikTokIcon } from '@/components/ui/Icons'

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-brand-dark py-8 md:py-10 overflow-hidden"
      aria-labelledby="contact-heading"
    >
      {/* Glow */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[600px] rounded-full opacity-[0.05]"
        style={{ background: 'radial-gradient(circle, #E5A100 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RevealSection className="mb-6 flex flex-col items-center">
          <SectionHeading
            eyebrow="Get in Touch"
            title="Let's Talk Burgers"
            subtitle="Catering inquiries, events, collaborations, or just want to say hi — reach out anytime."
            id="contact-heading"
          />
        </RevealSection>

        <div className="mx-auto max-w-2xl flex flex-col gap-5">
          {/* Order CTA */}
          <RevealSection delayMs={80}>
            <div className="rounded-[1.5rem] p-1.5 bg-white/[0.025] ring-1 ring-white/10">
              <div className="rounded-[1.25rem] bg-brand-dark-800 shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)] p-6">
                <p className="text-xs uppercase tracking-[0.2em] text-brand-gold/60 mb-2">Order Now</p>
                <p className="font-bangers text-2xl text-white mb-1">Uber Eats</p>
                <p className="text-sm text-white/50 mb-4">Order delivery or pickup — we&apos;re live on Uber Eats right now.</p>
                <a
                  href={UBER_EATS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-gold px-5 py-3 text-sm font-bold text-black transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-brand-gold-light active:scale-[0.97] btn-gold-glow"
                >
                  Open Uber Eats
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black/10 text-xs" aria-hidden="true">
                    ↗
                  </span>
                </a>
              </div>
            </div>
          </RevealSection>

          {/* Contact links grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Phone */}
            <RevealSection delayMs={120}>
              <a
                href={PHONE_HREF}
                className="group flex items-center gap-4 rounded-[1.5rem] border border-white/10 px-5 py-4 transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] hover:border-brand-gold/40 hover:bg-brand-gold/5 h-full"
              >
                <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-brand-gold/10 transition-transform duration-300 group-hover:scale-110">
                  <Phone size={20} className="text-brand-gold" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs text-white/40 uppercase tracking-widest mb-0.5">Call / Text</p>
                  <p className="font-semibold text-lg text-white">{PHONE}</p>
                </div>
              </a>
            </RevealSection>

            {/* Email */}
            <RevealSection delayMs={140}>
              <a
                href={EMAIL_HREF}
                className="group flex items-center gap-4 rounded-[1.5rem] border border-white/10 px-5 py-4 transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] hover:border-brand-gold/40 hover:bg-brand-gold/5 h-full"
              >
                <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-brand-gold/10 transition-transform duration-300 group-hover:scale-110">
                  <Mail size={20} className="text-brand-gold" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs text-white/40 uppercase tracking-widest mb-0.5">Email</p>
                  <p className="font-semibold text-white text-sm">{EMAIL}</p>
                </div>
              </a>
            </RevealSection>
          </div>

          {/* Social links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Instagram */}
            <RevealSection delayMs={160}>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-[1.5rem] border border-white/10 px-5 py-4 transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] hover:border-pink-500/40 hover:bg-pink-500/5 h-full"
              >
                <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-orange-400/20 social-icon transition-transform duration-300 group-hover:scale-110">
                  <Camera size={20} className="text-pink-400" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs text-white/40 uppercase tracking-widest mb-0.5">Instagram</p>
                  <p className="font-semibold text-white">@wherestheburger</p>
                </div>
              </a>
            </RevealSection>

            {/* TikTok */}
            <RevealSection delayMs={180}>
              <a
                href={TIKTOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-[1.5rem] border border-white/10 px-5 py-4 transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] hover:border-white/30 hover:bg-white/5 h-full"
              >
                <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-white/10 transition-transform duration-300 group-hover:scale-110">
                  <TikTokIcon size={20} className="text-white" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs text-white/40 uppercase tracking-widest mb-0.5">TikTok</p>
                  <p className="font-semibold text-white">@wheres.the.burger</p>
                </div>
              </a>
            </RevealSection>
          </div>

          {/* Catering note */}
          <RevealSection delayMs={200}>
            <div className="rounded-[1.5rem] border border-brand-gold/10 bg-brand-gold/[0.04] p-5">
              <p className="font-bangers text-xl text-brand-gold mb-2 inline-flex items-center gap-2">
                Catering & Events <HandMetal size={18} />
              </p>
              <p className="text-sm text-white/60 leading-relaxed">
                Feeding your crew? Corporate event, wedding, birthday, festival — we bring the whole
                operation to you. Give us a call or email to get started.
              </p>
            </div>
          </RevealSection>
        </div>
      </div>
    </section>
  )
}
