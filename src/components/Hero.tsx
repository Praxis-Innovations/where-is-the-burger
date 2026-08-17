'use client'

import dynamic from 'next/dynamic'
import { motion, useReducedMotion } from 'framer-motion'
import {
  heroHeadlineVariants,
  heroSublineVariants,
  heroCtaVariants,
} from '@/lib/animations'
import { UBER_EATS_URL, PHONE, PHONE_HREF } from '@/data/menu'
import { PhoneIcon } from '@/components/ui/Icons'

const FoodTruckSVG = dynamic(() => import('./FoodTruckSVG'), {
  ssr: false,
  loading: () => <div className="h-40 w-full" aria-hidden="true" />,
})

export default function Hero() {
  const reduceMotion = useReducedMotion()

  return (
    <section
      id="hero"
      className="relative flex min-h-screen min-h-[100svh] flex-col overflow-hidden bg-black"
      aria-label="Hero section"
    >
      {/* Subtle noise texture overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '200px',
        }}
        aria-hidden="true"
      />

      {/* Radial gold glow from center-bottom */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 h-[600px] w-[900px] rounded-full opacity-[0.06]"
        style={{
          background: 'radial-gradient(ellipse at center, #E5A100 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/* Main content */}
      <div className="relative z-10 flex flex-1 flex-col justify-center">
        {/* Top spacer for navbar */}
        <div className="h-16 flex-shrink-0" />

        {/* Food truck animation */}
        <div className="flex-shrink-0 px-4 pt-1 sm:pt-2 max-h-[30vh]">
          <FoodTruckSVG className="mx-auto max-h-[28vh]" />
        </div>

        {/* Hero text content */}
        <div className="flex flex-col items-center px-4 pb-2 pt-2 text-center sm:pt-4">
          {/* Eyebrow tag */}
          <motion.div
            variants={reduceMotion ? {} : heroHeadlineVariants}
            initial="hidden"
            animate="visible"
          >
            <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-brand-gold/30 px-3 py-1 text-[11px] uppercase tracking-[0.2em] font-semibold text-brand-gold/70">
              GTA&apos;s Rock-n-Roll Street Food
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            variants={reduceMotion ? {} : heroHeadlineVariants}
            initial="hidden"
            animate="visible"
            className="font-bangers text-[clamp(2.5rem,10vw,7rem)] leading-[0.95] tracking-wide"
            style={{ willChange: 'transform, opacity' }}
          >
            <span className="text-gold-gradient">Where&apos;s</span>{' '}
            <span className="text-white">the</span>{' '}
            <br className="hidden sm:block" />
            <span className="text-brand-gold">Burger?</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={reduceMotion ? {} : heroSublineVariants}
            initial="hidden"
            animate="visible"
            className="mt-3 max-w-md text-sm sm:text-base text-white/60 leading-relaxed"
            style={{ willChange: 'transform, opacity' }}
          >
            Indian-Fusion Street Food That Rocks.
            <br />
            Brioche buns. House-made sauces. Zero apologies.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            variants={reduceMotion ? {} : heroCtaVariants}
            initial="hidden"
            animate="visible"
            className="mt-4 flex flex-wrap items-center justify-center gap-3"
            style={{ willChange: 'transform, opacity' }}
          >
            <a
              href="#menu"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="inline-flex items-center gap-2 rounded-full bg-brand-gold px-6 py-3 text-sm sm:text-base font-bold text-black transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-brand-gold-light active:scale-[0.97] btn-gold-glow"
            >
              See Our Menu
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black/10 text-xs font-normal" aria-hidden="true">
                ↓
              </span>
            </a>

            <a
              href={UBER_EATS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-2 border-brand-gold px-6 py-3 text-sm sm:text-base font-bold text-brand-gold transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-brand-gold hover:text-black active:scale-[0.97]"
            >
              Order on Uber Eats
              <span className="flex h-6 w-6 items-center justify-center rounded-full border border-brand-gold/30 text-xs" aria-hidden="true">
                ↗
              </span>
            </a>
          </motion.div>

          {/* Phone CTA */}
          <motion.a
            variants={reduceMotion ? {} : heroCtaVariants}
            initial="hidden"
            animate="visible"
            href={PHONE_HREF}
            className="mt-2 inline-flex items-center gap-1.5 text-sm text-white/40 transition-colors hover:text-brand-gold"
            style={{ willChange: 'transform, opacity' }}
          >
            <PhoneIcon size={14} />
            {PHONE}
          </motion.a>
        </div>

        {/* Scroll indicator */}
        <motion.div
          variants={reduceMotion ? {} : heroCtaVariants}
          initial="hidden"
          animate="visible"
          className="flex justify-center pb-4 pt-1"
          aria-hidden="true"
        >
          <div className="flex flex-col items-center gap-1 text-white/25">
            <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
            <svg
              className="animate-scroll-down h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </motion.div>
      </div>

      {/* Bottom gradient into next section */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-24"
        style={{
          background: 'linear-gradient(to bottom, transparent, #000)',
        }}
        aria-hidden="true"
      />
    </section>
  )
}
