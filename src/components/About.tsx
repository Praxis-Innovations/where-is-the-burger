'use client'

import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import SectionHeading from '@/components/ui/SectionHeading'
import RevealSection from '@/components/ui/RevealSection'

const ownerImages = [
  {
    src: '/images/owner/766074874_18162072016453569_3928546251123518087_n.jpg',
    alt: 'Owner of Where\'s the Burger holding one of the signature burgers',
    caption: 'The Man Behind the Bun',
  },
  {
    src: '/images/owner/772632295_18162781051453569_6560050217998160816_n.jpg',
    alt: 'Owner in an epic action shot cutting a giant burger',
    caption: 'Going All In',
  },
]

export default function About() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    let rafId: number
    const handleScroll = () => {
      cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(() => {
        const cardWidth = track.scrollWidth / ownerImages.length
        if (cardWidth === 0) return
        const idx = Math.round(track.scrollLeft / cardWidth)
        setActiveIndex(Math.max(0, Math.min(idx, ownerImages.length - 1)))
      })
    }
    track.addEventListener('scroll', handleScroll, { passive: true })
    return () => { track.removeEventListener('scroll', handleScroll); cancelAnimationFrame(rafId) }
  }, [])

  return (
    <section
      id="about"
      className="relative bg-black py-16 md:py-20 overflow-hidden"
      aria-labelledby="about-heading"
    >
      {/* Background gold glow */}
      <div
        className="pointer-events-none absolute -right-40 top-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full opacity-[0.04]"
        style={{ background: 'radial-gradient(circle, #E5A100 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16 items-center">

          {/* Left — text */}
          <RevealSection className="flex flex-col gap-5">
            <SectionHeading
              eyebrow="Our Story"
              title="Not Your Average Burger Joint"
              align="left"
              titleClassName="text-4xl sm:text-5xl md:text-6xl"
              id="about-heading"
            />

            <p className="text-white/60 leading-relaxed text-base md:text-lg">
              We took the bold, vibrant flavours of Indian street food — the
              fiery spices, the creamy tandoori sauces, the fresh cilantro
              explosion — and said: <span className="text-brand-gold font-semibold">what if we put all of that between a
              golden brioche bun?</span>
            </p>

            <p className="text-white/60 leading-relaxed text-base md:text-lg">
              Every burger is handcrafted to order. Our signature{' '}
              <span className="text-white font-medium">Tami Rami sauce</span> and{' '}
              <span className="text-white font-medium">Creamy Tandoori</span> are
              made in-house and they&apos;re the reason people find us wherever we park.
            </p>

            <p className="text-white/60 leading-relaxed text-base md:text-lg">
              From the crispy paneer pioneer to the golden chicken crunch —
              every bite is a little bit India, a little bit Canada, and a
              whole lot of delicious. Rock on.
            </p>
          </RevealSection>

          {/* Right — owner images carousel on mobile, collage on lg */}
          <RevealSection delayMs={150} className="relative order-first lg:order-none">
            {/* Mobile: horizontal scroll carousel */}
            <div className="lg:hidden">
              <div className="rounded-[2rem] p-2 bg-white/[0.02] ring-1 ring-white/10">
                <div className="rounded-[1.625rem] overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.07)]">
                  <div
                    ref={trackRef}
                    className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar"
                  >
                    {ownerImages.map((img, i) => (
                      <div key={i} className="snap-center flex-shrink-0 w-full">
                        <div className="relative aspect-[4/5] bg-black">
                          <Image
                            src={img.src}
                            alt={img.alt}
                            fill
                            className="object-contain"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                          />
                          <div
                            className="absolute inset-0"
                            style={{
                              background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 40%)',
                            }}
                            aria-hidden="true"
                          />
                          <div className="absolute bottom-4 left-4">
                            <p className="font-bangers text-xl text-white tracking-wide">{img.caption}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Dot indicators */}
              <div className="flex items-center justify-center gap-2 mt-3">
                {ownerImages.map((_, i) => (
                  <button
                    key={i}
                    aria-label={`Go to image ${i + 1}`}
                    onClick={() => {
                      const track = trackRef.current
                      if (!track) return
                      const cardWidth = track.scrollWidth / ownerImages.length
                      track.scrollTo({ left: i * cardWidth, behavior: 'smooth' })
                    }}
                    className={`rounded-full transition-all duration-300 ${
                      i === activeIndex
                        ? 'w-6 h-2 bg-brand-gold'
                        : 'w-2 h-2 bg-white/20'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Desktop: collage layout */}
            <div className="hidden lg:block relative">
              <div className="rounded-[2rem] p-2 bg-white/[0.02] ring-1 ring-white/10">
                <div className="rounded-[1.625rem] overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.07)]">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={ownerImages[0].src}
                      alt={ownerImages[0].alt}
                      fill
                      className="object-cover"
                      sizes="50vw"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 50%)',
                      }}
                      aria-hidden="true"
                    />
                    <div className="absolute bottom-4 left-4">
                      <p className="font-bangers text-2xl text-white tracking-wide">{ownerImages[0].caption}</p>
                      <p className="text-sm text-white/60">Rock-n-roll street food, one burger at a time</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating second image */}
              <div className="absolute -bottom-6 -right-8 w-44">
                <div className="rounded-[1.25rem] p-1.5 bg-white/[0.03] ring-1 ring-white/10">
                  <div className="rounded-[0.875rem] overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.07)]">
                    <div className="relative aspect-square">
                      <Image
                        src={ownerImages[1].src}
                        alt={ownerImages[1].alt}
                        fill
                        className="object-cover"
                        sizes="176px"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-2 pl-2">
                  <p className="font-bangers text-sm text-brand-gold">{ownerImages[1].caption}</p>
                </div>
              </div>

              {/* Gold accent decoration */}
              <div
                className="absolute -top-4 -left-4 h-24 w-24 rounded-full border border-brand-gold/15 opacity-60"
                aria-hidden="true"
              />
              <div
                className="absolute -top-2 -left-2 h-12 w-12 rounded-full border border-brand-gold/25"
                aria-hidden="true"
              />
            </div>
          </RevealSection>
        </div>
      </div>
    </section>
  )
}
