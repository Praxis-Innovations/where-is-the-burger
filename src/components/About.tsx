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
      className="relative bg-black py-8 md:py-10 overflow-hidden"
      aria-labelledby="about-heading"
    >
      {/* Background gold glow */}
      <div
        className="pointer-events-none absolute -right-40 top-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full opacity-[0.04]"
        style={{ background: 'radial-gradient(circle, #E5A100 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-10 items-stretch">

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
              We took the bold, vibrant flavours of Indian food — the
              fiery spices, the creamy tandoori sauces, the fresh cilantro
              explosion — and said: <span className="text-brand-gold font-semibold">what if we put all of that between a
              golden brioche bun?</span>
            </p>

            <p className="text-white/60 leading-relaxed text-base md:text-lg">
              Every burger is handcrafted to order. Our signature{' '}
              <span className="text-white font-medium">sauces</span> are
              made in-house and they&apos;re the reason people find us wherever we park.
            </p>

            <p className="text-white/60 leading-relaxed text-base md:text-lg">
              From the crispy Paneer Pioneer to our golden, crunchy chicken
              creations, our menu brings two worlds together — a little bit
              of India, a little bit of Canada, and a whole lot of delicious.
            </p>

            <p className="text-white font-semibold leading-relaxed text-base md:text-lg">
              Bold flavours. Big cravings. No ordinary burgers.
            </p>
          </RevealSection>

          {/* Right — owner images swipeable carousel */}
          <RevealSection delayMs={150} className="relative order-first lg:order-none flex flex-col">
            <div className="rounded-[2rem] p-2 bg-white/[0.02] ring-1 ring-white/10 flex-1 flex flex-col">
              <div className="rounded-[1.625rem] overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.07)] flex-1 flex flex-col">
                <div
                  ref={trackRef}
                  className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar flex-1"
                >
                  {ownerImages.map((img, i) => (
                    <div key={i} className="snap-center flex-shrink-0 w-full flex flex-col">
                      <div className="relative flex-1 min-h-[300px] aspect-square lg:aspect-auto bg-black">
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
                        <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                          <p className="font-bangers text-2xl lg:text-3xl text-white tracking-wide drop-shadow-lg">{img.caption}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Dot indicators */}
            {ownerImages.length > 1 && (
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
            )}
          </RevealSection>
        </div>
      </div>
    </section>
  )
}
