'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { formatPrice } from '@/lib/utils'
import { UBER_EATS_URL } from '@/data/menu'
import { Leaf, Drumstick, Flame, CupSoda, Sandwich, Salad, Cookie } from 'lucide-react'
import type { MenuItem, MenuCategory } from '@/types'

interface MenuCardProps {
  item: MenuItem
}

const categoryIcons: Record<MenuCategory, typeof Sandwich> = {
  'veg-burgers': Sandwich,
  'nonveg-burgers': Sandwich,
  'sides': Salad,
  'desserts': Cookie,
  'drinks': CupSoda,
}

function AnimatedPlaceholder({ category }: { category: MenuCategory }) {
  const Icon = categoryIcons[category] ?? Sandwich
  return (
    <div className="relative aspect-[4/3] flex-shrink-0 bg-black flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{ background: 'radial-gradient(circle, #E5A100 0%, transparent 70%)' }} />
      <div className="animate-pulse">
        <Icon size={140} className="text-brand-gold/40" strokeWidth={0.75} />
      </div>
    </div>
  )
}

function VegBadge({ isVegetarian, size = 12 }: { isVegetarian: MenuItem['isVegetarian']; size?: number }) {
  if (isVegetarian === 'both') {
    return (
      <>
        <span className="inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[11px] font-semibold tracking-wide bg-green-500/10 text-green-400 border border-green-500/20">
          <Leaf size={size} /> Veg
        </span>
        <span className="inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[11px] font-semibold tracking-wide bg-orange-500/10 text-orange-400 border border-orange-500/20">
          <Drumstick size={size} /> Non-Veg
        </span>
      </>
    )
  }
  if (isVegetarian) {
    return (
      <span className="inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[11px] font-semibold tracking-wide bg-green-500/10 text-green-400 border border-green-500/20">
        <Leaf size={size} /> Veg
      </span>
    )
  }
  return (
    <span className="inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[11px] font-semibold tracking-wide bg-orange-500/10 text-orange-400 border border-orange-500/20">
      <Drumstick size={size} /> Non-Veg
    </span>
  )
}

function SpiceIndicator({ level }: { level: MenuItem['spiceLevel'] }) {
  if (!level || level === 'mild') return null
  const counts = { mild: 0, medium: 1, hot: 2 }
  const count = counts[level] ?? 0
  const labels = { mild: 'Mild', medium: 'Medium Heat', hot: 'Hot' }
  return (
    <div
      className="flex items-center gap-0.5"
      aria-label={`Spice level: ${labels[level]}`}
    >
      {Array.from({ length: 2 }).map((_, i) => (
        <Flame
          key={i}
          size={13}
          className={`${i < count ? 'text-orange-400 opacity-100' : 'text-white/20 opacity-40'}`}
        />
      ))}
    </div>
  )
}

export default function MenuCard({ item }: MenuCardProps) {
  const [expanded, setExpanded] = useState(false)
  const [isOverflowing, setIsOverflowing] = useState(false)
  const descRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const el = descRef.current
    if (!el) return
    setIsOverflowing(el.scrollHeight > el.clientHeight)
  }, [])

  return (
    <article
      className="menu-card flex flex-col h-full w-full cursor-default"
      aria-label={`${item.name}, ${formatPrice(item.price)}`}
    >
      <div className="rounded-[1.5rem] p-1.5 bg-white/[0.025] ring-1 ring-white/10 h-full flex flex-col">
        <div className="menu-card-inner rounded-[1.25rem] bg-black shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)] overflow-hidden flex flex-col flex-1 relative">

          {/* Food photo or animated placeholder */}
          {item.image ? (
            <div className="card-image relative aspect-[4/3] overflow-hidden flex-shrink-0 bg-black">
              {/* Blurred background — subtle ambient tint in letterbox areas */}
              <Image
                src={item.image}
                alt=""
                fill
                aria-hidden
                className="object-cover scale-[1.3] blur-[60px] brightness-[0.2] saturate-[1.2] pointer-events-none select-none"
                sizes="10vw"
              />
              <Image
                src={item.image}
                alt={`${item.name} — ${item.description.slice(0, 80)}...`}
                fill
                className="object-contain object-top transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]"
                sizes="(max-width: 640px) 75vw, (max-width: 1024px) 50vw, 33vw"
                loading="lazy"
              />
              <div
                className="absolute inset-x-0 top-0 bottom-[-2px]"
                style={{
                  background: 'linear-gradient(to top, #000 0%, rgba(0,0,0,0.8) 12%, transparent 30%)',
                }}
                aria-hidden="true"
              />
            </div>
          ) : (
            <AnimatedPlaceholder category={item.category} />
          )}

          {/* Expanded description overlay */}
          {expanded && (
            <div
              className="absolute inset-0 z-10 flex flex-col bg-brand-dark-800/95 backdrop-blur-sm p-4"
              onClick={() => setExpanded(false)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Escape' || e.key === 'Enter') setExpanded(false) }}
            >
              <div className="flex items-center gap-2 mb-3">
                <VegBadge isVegetarian={item.isVegetarian} size={12} />
                {item.spiceLevel && item.spiceLevel !== 'mild' && (
                  <SpiceIndicator level={item.spiceLevel} />
                )}
              </div>
              <h3 className="font-bangers text-xl text-white leading-tight tracking-wide mb-2">
                {item.name}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed flex-1">
                {item.description}
              </p>
              <div className="flex items-center justify-between pt-3 border-t border-white/5 mt-3">
                <span className="font-bangers text-2xl text-brand-gold tracking-wide">
                  {formatPrice(item.price)}
                </span>
                <span className="text-[11px] text-white/30 uppercase tracking-widest">
                  Tap to close
                </span>
              </div>
            </div>
          )}

          {/* Card content */}
          <div className="flex flex-col flex-1 gap-2 p-3 sm:p-4">
            {/* Badges row */}
            <div className="flex items-center gap-2 flex-wrap">
              <VegBadge isVegetarian={item.isVegetarian} size={12} />
              {item.spiceLevel && item.spiceLevel !== 'mild' && (
                <SpiceIndicator level={item.spiceLevel} />
              )}
            </div>

            {/* Name */}
            <h3 className="font-bangers text-xl sm:text-2xl text-white leading-tight tracking-wide line-clamp-2">
              {item.name}
            </h3>

            {/* Description with inline See more */}
            <div className="flex-1 relative">
              <p ref={descRef} className="text-white/50 text-sm leading-relaxed line-clamp-2">
                {item.description}
              </p>
              {isOverflowing && (
                <button
                  onClick={() => setExpanded(true)}
                  className="absolute bottom-0 right-0 text-brand-gold text-sm font-semibold leading-relaxed bg-gradient-to-l from-brand-dark-800 from-60% to-transparent pl-8 hover:text-brand-gold-light transition-colors"
                >
                  See more
                </button>
              )}
            </div>

            {/* Price */}
            <div className="flex items-center justify-between pt-2 border-t border-white/5 mt-auto">
              <span className="font-bangers text-2xl text-brand-gold tracking-wide">
                {formatPrice(item.price)}
              </span>
              <a
                href={UBER_EATS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-semibold text-white/30 uppercase tracking-widest hover:text-brand-gold transition-colors duration-200"
                aria-label={`Order ${item.name} on Uber Eats`}
              >
                Order ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
