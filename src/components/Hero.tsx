'use client'

import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import {
  heroHeadlineVariants,
  heroSublineVariants,
  heroCtaVariants,
} from '@/lib/animations'
import { UBER_EATS_URL, PHONE, PHONE_HREF } from '@/data/menu'
import { Phone } from 'lucide-react'

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

        {/* Hero content */}
        <div className="flex flex-col items-center px-4 pb-2 pt-4 text-center">
          {/* Eyebrow tag */}
          <motion.div
            variants={reduceMotion ? {} : heroHeadlineVariants}
            initial="hidden"
            animate="visible"
            className="mb-5 flex w-full justify-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-gold/30 px-3 py-1 text-[11px] uppercase tracking-[0.2em] font-semibold text-brand-gold/70">
              GTA&apos;s Rock-n-Roll Street Food
            </span>
          </motion.div>

          {/* Logo + description side by side */}
          <div className="grid w-full max-w-7xl grid-cols-1 items-center gap-8 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
            {/* Big logo */}
            <motion.div
              variants={reduceMotion ? {} : heroHeadlineVariants}
              initial="hidden"
              animate="visible"
              className="flex justify-center"
              style={{ willChange: 'transform, opacity' }}
            >
              <h1 className="sr-only">Where&apos;s the Burger?</h1>
              <Image
                src="/images/logo/logo-full.png"
                alt="Where's the Burger"
                width={685}
                height={423}
                priority
                className="h-auto w-full max-w-sm sm:max-w-md lg:max-w-none"
              />
            </motion.div>

            {/* Subheadline + description + CTAs */}
            <div className="flex flex-col items-center text-center">
              <motion.p
                variants={reduceMotion ? {} : heroSublineVariants}
                initial="hidden"
                animate="visible"
                className="max-w-md lg:max-w-lg text-sm sm:text-base lg:text-lg text-white/60 leading-relaxed"
                style={{ willChange: 'transform, opacity' }}
              >
                Indian-Fusion Street Food That Rocks.
                <br />
                Brioche buns. House-made sauces. Zero apologies.
              </motion.p>

              <motion.div
                variants={reduceMotion ? {} : heroSublineVariants}
                initial="hidden"
                animate="visible"
                className="mt-4 max-w-md lg:max-w-lg space-y-3 text-sm sm:text-base lg:text-lg text-white/50 leading-relaxed"
                style={{ willChange: 'transform, opacity' }}
              >
                <p>
                  Welcome to Where&apos;s The Burger — where bold flavours, stacked
                  burgers, loaded Dirty Fries and dreamy desserts come together
                  under one roof.
                </p>
                <p>
                  We&apos;re here to make food that&apos;s fun, flavour-packed and
                  seriously satisfying. From our signature burgers to our Dirty
                  Fries and Dreamy Creamy Sandos, everything on the menu is made
                  to give you something worth coming back for.
                </p>
                <p>So, if you&apos;ve been wondering Where&apos;s the Burger?</p>
                <p className="text-brand-gold font-semibold">Your search ends here.</p>
              </motion.div>

              {/* CTA buttons */}
              <motion.div
                variants={reduceMotion ? {} : heroCtaVariants}
                initial="hidden"
                animate="visible"
                className="mt-10 flex flex-wrap items-center justify-center gap-4"
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
                className="mt-6 inline-flex items-center gap-1.5 text-sm text-white/40 transition-colors hover:text-brand-gold"
                style={{ willChange: 'transform, opacity' }}
              >
                <Phone size={14} />
                {PHONE}
              </motion.a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          variants={reduceMotion ? {} : heroCtaVariants}
          initial="hidden"
          animate="visible"
          className="mt-auto flex justify-center pb-6 pt-1"
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
