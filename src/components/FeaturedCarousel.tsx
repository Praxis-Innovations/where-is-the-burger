'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import Image from 'next/image'
import { useReducedMotion } from 'framer-motion'
import { featuredItems, UBER_EATS_URL } from '@/data/menu'
import SectionHeading from '@/components/ui/SectionHeading'
import RevealSection from '@/components/ui/RevealSection'
import { Leaf, Drumstick } from 'lucide-react'

export default function FeaturedCarousel() {
  const trackRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const isPausedRef = useRef(false)
  const isVisibleRef = useRef(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const reduceMotion = useReducedMotion()

  const scrollToIndex = useCallback((i: number) => {
    const track = trackRef.current
    if (!track) return
    const cardWidth = track.scrollWidth / featuredItems.length
    track.scrollTo({ left: i * cardWidth, behavior: 'smooth' })
  }, [])

  // Track whether the carousel section is in the viewport
  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      ([entry]) => { isVisibleRef.current = entry.isIntersecting },
      { threshold: 0.2 }
    )
    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  // Sync dots with manual scroll position
  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    let rafId: number
    const handleScroll = () => {
      cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(() => {
        const cardWidth = track.scrollWidth / featuredItems.length
        if (cardWidth === 0) return
        const newIndex = Math.round(track.scrollLeft / cardWidth)
        const clamped = Math.max(0, Math.min(newIndex, featuredItems.length - 1))
        setActiveIndex(prev => (prev !== clamped ? clamped : prev))
      })
    }

    track.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      track.removeEventListener('scroll', handleScroll)
      cancelAnimationFrame(rafId)
    }
  }, [])

  // Auto-advance only when visible and not paused
  useEffect(() => {
    if (reduceMotion) return

    const id = setInterval(() => {
      if (isPausedRef.current || !isVisibleRef.current) return
      setActiveIndex(prev => {
        const next = (prev + 1) % featuredItems.length
        scrollToIndex(next)
        return next
      })
    }, 4500)

    return () => clearInterval(id)
  }, [activeIndex, reduceMotion, scrollToIndex])

  const handleDotClick = (i: number) => {
    setActiveIndex(i)
    scrollToIndex(i)
  }

  return (
    <section
      ref={sectionRef}
      className="relative bg-black py-8 md:py-10 overflow-hidden"
      aria-labelledby="featured-heading"
    >
      {/* Gold glow right */}
      <div
        className="pointer-events-none absolute -right-40 top-1/2 -translate-y-1/2 h-[700px] w-[700px] rounded-full opacity-[0.04]"
        style={{ background: 'radial-gradient(circle, #E5A100 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RevealSection className="mb-6 flex flex-col items-center">
          <SectionHeading
            eyebrow="Fan Favourites"
            title="The Greatest Hits"
            subtitle="The menu items that keep people tracking down the truck."
            id="featured-heading"
          />
        </RevealSection>

        {/* Carousel track */}
        <RevealSection delayMs={80}>
          <div
            ref={trackRef}
            className="carousel-track flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 lg:grid lg:grid-cols-4 lg:overflow-visible lg:snap-none lg:pb-0"
            onMouseEnter={() => { isPausedRef.current = true }}
            onMouseLeave={() => { isPausedRef.current = false }}
            onTouchStart={() => { isPausedRef.current = true }}
            onTouchEnd={() => {
              setTimeout(() => { isPausedRef.current = false }, 2000)
            }}
            role="region"
            aria-label="Featured menu items carousel"
          >
            {featuredItems.map((item, i) => (
              <div
                key={item.id}
                className="snap-center flex-shrink-0 w-[85vw] sm:w-[60vw] md:w-[45vw] lg:w-auto"
              >
                {/* Card — double bezel */}
                <div className="group rounded-[2rem] p-2 bg-white/[0.025] ring-1 ring-white/10 h-full">
                  <div className="rounded-[1.625rem] bg-black shadow-[inset_0_1px_1px_rgba(255,255,255,0.07)] overflow-hidden h-full flex flex-col">

                    {/* Large food photo */}
                    {item.image && (
                      <div className="relative aspect-[3/4] overflow-hidden flex-shrink-0 bg-black">
                        <Image
                          src={item.image}
                          alt={`${item.name} — ${item.featuredTagline ?? item.description.slice(0, 60)}`}
                          fill
                          className="object-contain object-top"
                          sizes="(max-width: 640px) 85vw, (max-width: 1024px) 60vw, 33vw"
                          loading={i === 0 ? 'eager' : 'lazy'}
                        />
                        {/* Gradient overlay */}
                        <div
                          className="absolute inset-0"
                          style={{
                            background:
                              'linear-gradient(to top, #000 0%, #000 20%, rgba(0,0,0,0.7) 35%, transparent 55%)',
                          }}
                          aria-hidden="true"
                        />

                        {/* Veg/Non-veg badge */}
                        <div className="absolute top-4 right-4 flex flex-col gap-1 items-end">
                          {item.isVegetarian === 'both' ? (
                            <>
                              <span className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold bg-green-900/70 text-green-400 border border-green-500/30">
                                <Leaf size={13} /> Veg
                              </span>
                              <span className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold bg-orange-900/70 text-orange-400 border border-orange-500/30">
                                <Drumstick size={13} /> Non-Veg
                              </span>
                            </>
                          ) : item.isVegetarian ? (
                            <span className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold bg-green-900/70 text-green-400 border border-green-500/30">
                              <Leaf size={13} /> Veg
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold bg-orange-900/70 text-orange-400 border border-orange-500/30">
                              <Drumstick size={13} /> Non-Veg
                            </span>
                          )}
                        </div>

                        {/* Bottom overlay content */}
                        <div className="absolute bottom-0 left-0 right-0 p-5">
                          <p className="text-xs uppercase tracking-[0.2em] text-brand-gold/70 mb-1">
                            {item.featuredTagline}
                          </p>
                          <h3 className="font-bangers text-3xl text-white leading-none tracking-wide">
                            {item.name}
                          </h3>
                        </div>
                      </div>
                    )}

                    {/* Card footer */}
                    <div className="flex items-center justify-between p-5">
                      <span className="font-bangers text-2xl text-white">
                        #{i + 1}
                      </span>
                      <a
                        href={UBER_EATS_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-brand-gold px-4 py-2 text-sm font-bold text-black transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-brand-gold-light active:scale-[0.97]"
                        aria-label={`Order ${item.name} on Uber Eats`}
                      >
                        Order
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-black/10 text-xs" aria-hidden="true">
                          ↗
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dot indicators — mobile/tablet only; hidden on desktop where all cards are visible */}
          <div
            className="lg:hidden flex items-center justify-center gap-2 mt-6"
            role="tablist"
            aria-label="Carousel position"
          >
            {featuredItems.map((item, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === activeIndex}
                aria-label={`Go to ${item.name}`}
                onClick={() => handleDotClick(i)}
                className={`rounded-full transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] ${
                  i === activeIndex
                    ? 'w-8 h-2 bg-brand-gold'
                    : 'w-2 h-2 bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>
        </RevealSection>
      </div>
    </section>
  )
}
