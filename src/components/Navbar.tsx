'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { navLinkVariants, overlayVariants } from '@/lib/animations'
import { UBER_EATS_URL, PHONE } from '@/data/menu'

const NAV_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'Menu', href: '#menu' },
  { label: 'About', href: '#about' },
  { label: 'Find Us', href: '#find-us' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const reduceMotion = useReducedMotion()
  const lastScrollY = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setIsScrolled(y > 40)

      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(docHeight > 0 ? (y / docHeight) * 100 : 0)
      lastScrollY.current = y
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleNavClick = (href: string) => {
    setMenuOpen(false)
    const target = document.querySelector(href)
    if (target) {
      setTimeout(() => {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 50)
    }
  }

  return (
    <>
      {/* Scroll progress bar */}
      <div
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Page scroll progress"
      />

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${
          isScrolled
            ? 'bg-black/95 backdrop-blur-md border-b border-white/5'
            : 'bg-transparent'
        }`}
        role="banner"
      >
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-3 md:py-4"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); handleNavClick('#hero') }}
            className="relative z-[60] flex-shrink-0"
            aria-label="Where's the Burger — Home"
          >
            <div className="relative h-10 w-36 sm:h-12 sm:w-44">
              <Image
                src="/images/logo/logo-full.png"
                alt="Where's the Burger logo"
                fill
                className="object-contain object-left"
                sizes="176px"
                priority
              />
            </div>
          </a>

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-6 lg:gap-8" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                  className="text-sm font-medium text-white/75 transition-colors duration-200 hover:text-brand-gold relative after:absolute after:bottom-[-3px] after:left-0 after:h-[2px] after:w-0 after:bg-brand-gold after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={UBER_EATS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-brand-gold px-5 py-2.5 text-sm font-bold text-black transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-brand-gold-light active:scale-[0.97] btn-gold-glow"
            >
              Order Now
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-black/10 text-xs" aria-hidden="true">
                ↗
              </span>
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="relative z-[60] flex md:hidden h-10 w-10 flex-col items-center justify-center gap-0 focus-visible:outline-2 focus-visible:outline-brand-gold rounded-lg"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <span
              className={`block h-0.5 w-6 bg-brand-gold transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] ${
                menuOpen ? 'translate-y-[5px] rotate-45' : 'translate-y-[-4px]'
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-brand-gold transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] ${
                menuOpen ? 'opacity-0 scale-x-0' : 'opacity-100'
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-brand-gold transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] ${
                menuOpen ? '-translate-y-[5px] -rotate-45' : 'translate-y-[4px]'
              }`}
            />
          </button>
        </nav>
      </header>

      {/* Mobile full-screen overlay menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            className="fixed inset-0 z-40 flex flex-col bg-black/95 backdrop-blur-3xl md:hidden"
            variants={reduceMotion ? {} : overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Logo top-left */}
            <div className="flex items-center justify-between px-4 py-3">
              <div className="relative h-10 w-36">
                <Image
                  src="/images/logo/logo-full.png"
                  alt="Where's the Burger logo"
                  fill
                  className="object-contain object-left"
                  sizes="144px"
                />
              </div>
            </div>

            {/* Nav links */}
            <nav className="flex flex-1 flex-col items-center justify-center gap-6" aria-label="Mobile navigation">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  custom={i}
                  variants={reduceMotion ? {} : navLinkVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                    className="block font-bangers text-5xl tracking-wider text-white/80 transition-colors duration-200 hover:text-brand-gold"
                  >
                    {link.label}
                  </a>
                </motion.div>
              ))}

              <motion.div
                custom={NAV_LINKS.length}
                variants={reduceMotion ? {} : navLinkVariants}
                initial="hidden"
                animate="visible"
                className="mt-4"
              >
                <a
                  href={UBER_EATS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex items-center gap-2 rounded-full bg-brand-gold px-8 py-4 text-xl font-bold text-black transition-all duration-300 hover:bg-brand-gold-light active:scale-[0.97]"
                >
                  Order on Uber Eats ↗
                </a>
              </motion.div>
            </nav>

            {/* Footer note */}
            <div className="pb-8 text-center text-xs text-white/30">
              {PHONE}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
