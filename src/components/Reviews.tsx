'use client'

import { useRef, useState, useEffect } from 'react'
import { reviews, GOOGLE_URL, INSTAGRAM_URL, TIKTOK_URL } from '@/data/menu'
import SectionHeading from '@/components/ui/SectionHeading'
import RevealSection from '@/components/ui/RevealSection'
import { Star, Camera, HandMetal } from 'lucide-react'
import { GoogleIcon, TikTokIcon } from '@/components/ui/Icons'

function StarRating({ rating }: { rating: number }) {
  return (
    <div
      className="flex gap-0.5"
      role="img"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          fill={i < rating ? 'currentColor' : 'none'}
          className={i < rating ? 'text-brand-gold' : 'text-white/15'}
        />
      ))}
    </div>
  )
}

function shuffleArray<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

const ITEMS_PER_PAGE = 4

export default function Reviews() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [activePage, setActivePage] = useState(0)
  const [shuffled, setShuffled] = useState(reviews)

  useEffect(() => {
    setShuffled(shuffleArray(reviews))
  }, [])

  const pageCount = Math.ceil(reviews.length / ITEMS_PER_PAGE)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    let rafId: number
    const handleScroll = () => {
      cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(() => {
        const cardWidth = track.scrollWidth / shuffled.length
        if (cardWidth === 0) return
        const cardIdx = Math.round(track.scrollLeft / cardWidth)
        const page = Math.min(Math.floor(cardIdx / ITEMS_PER_PAGE), pageCount - 1)
        setActivePage(page)
      })
    }
    track.addEventListener('scroll', handleScroll, { passive: true })
    return () => { track.removeEventListener('scroll', handleScroll); cancelAnimationFrame(rafId) }
  }, [shuffled.length, pageCount])

  const scrollToPage = (page: number) => {
    const track = trackRef.current
    if (!track) return
    const cardWidth = track.scrollWidth / shuffled.length
    track.scrollTo({ left: page * ITEMS_PER_PAGE * cardWidth, behavior: 'smooth' })
    setActivePage(page)
  }

  return (
    <section
      id="reviews"
      className="relative bg-black py-8 md:py-10 overflow-hidden"
      aria-labelledby="reviews-heading"
    >
      {/* Background glow */}
      <div
        className="pointer-events-none absolute left-1/2 bottom-0 -translate-x-1/2 h-[500px] w-[900px] rounded-full opacity-[0.04]"
        style={{ background: 'radial-gradient(ellipse at center bottom, #E5A100 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      {/* Marquee bar */}
      <div
        className="overflow-hidden border-y border-brand-gold/10 py-3 mb-6 bg-brand-gold/[0.03]"
        aria-hidden="true"
      >
        <div className="flex animate-marquee whitespace-nowrap">
          {Array.from({ length: 10 }).map((_, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-4 px-8 font-bangers text-xl text-brand-gold/30 tracking-widest"
            >
              <HandMetal size={18} className="inline" /> ROCK REVIEWS <span className="mx-1">&#8226;</span> WHERE&apos;S THE BURGER <span className="mx-1">&#8226;</span> INDIAN FUSION
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RevealSection className="mb-6 flex flex-col items-center">
          <SectionHeading
            eyebrow="Rock Reviews"
            title="What the Crowd Says"
            subtitle="Don't take our word for it. Take theirs."
            goldTitle
            id="reviews-heading"
          />
        </RevealSection>

        {/* Review carousel */}
        <RevealSection delayMs={80}>
          <div
            ref={trackRef}
            className="flex gap-5 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-2"
          >
            {shuffled.map((review, i) => (
              <article
                key={review.id}
                className="snap-center flex-shrink-0 w-[85vw] sm:w-[60vw] md:w-[45vw] lg:w-[23%]"
              >
                <div className="rounded-[1.5rem] p-1.5 bg-white/[0.025] ring-1 ring-white/10 h-full flex flex-col">
                  <div className="rounded-[1.25rem] bg-brand-dark-800 shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)] p-5 flex flex-col gap-4 flex-1">
                    <StarRating rating={review.rating} />
                    <div className="font-bangers text-5xl leading-none text-brand-gold/20" aria-hidden="true">&ldquo;</div>
                    <blockquote className="flex-1 text-sm text-white/70 leading-relaxed -mt-4">{review.text}</blockquote>
                    <footer className="flex items-center justify-between border-t border-white/5 pt-3">
                      <div>
                        <p className="text-sm font-semibold text-white">{review.author}</p>
                        <p className="text-xs text-white/30 inline-flex items-center gap-1">
                          <GoogleIcon size={12} /> {review.source}
                        </p>
                      </div>
                    </footer>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Page dots */}
          <div className="flex items-center justify-center gap-2 mt-5">
            {Array.from({ length: pageCount }).map((_, i) => (
              <button
                key={i}
                aria-label={`Go to page ${i + 1}`}
                onClick={() => scrollToPage(i)}
                className={`rounded-full transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] ${
                  i === activePage
                    ? 'w-8 h-2 bg-brand-gold'
                    : 'w-2 h-2 bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>
        </RevealSection>

        {/* CTAs below reviews */}
        <RevealSection delayMs={280} className="mt-10 flex flex-col items-center gap-4">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={GOOGLE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 text-sm text-white/60 transition-all duration-300 hover:border-brand-gold/40 hover:text-brand-gold"
            >
              <GoogleIcon size={16} /> See all reviews
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 text-sm text-white/60 transition-all duration-300 hover:border-pink-500/40 hover:text-pink-400"
            >
              <Camera size={16} /> @wherestheburger
            </a>
            <a
              href={TIKTOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 text-sm text-white/60 transition-all duration-300 hover:border-white/30 hover:text-white"
            >
              <TikTokIcon size={16} /> @wheres.the.burger
            </a>
          </div>
        </RevealSection>
      </div>
    </section>
  )
}
