'use client'

import { useState } from 'react'
import Image from 'next/image'
import { formatPrice } from '@/lib/utils'
import { UBER_EATS_URL } from '@/data/menu'
import { Leaf, Drumstick, Flame, Droplets, CupSoda } from 'lucide-react'
import type { MenuItem } from '@/types'

interface MenuCardProps {
  item: MenuItem
}

const placeholderIcons: Record<string, typeof Droplets> = {
  water: Droplets,
  pop: CupSoda,
}

function AnimatedPlaceholder({ itemId }: { itemId: string }) {
  const Icon = placeholderIcons[itemId] ?? CupSoda
  return (
    <div className="relative aspect-[4/3] flex-shrink-0 bg-gradient-to-br from-brand-dark-800 to-brand-dark flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{ background: 'radial-gradient(circle, #E5A100 0%, transparent 70%)' }} />
      <div className="animate-pulse">
        <Icon size={64} className="text-brand-gold/30" strokeWidth={1.5} />
      </div>
    </div>
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

  return (
    <article
      className="menu-card flex flex-col h-full cursor-default"
      aria-label={`${item.name}, ${formatPrice(item.price)}`}
    >
      <div className="rounded-[1.5rem] p-1.5 bg-white/[0.025] ring-1 ring-white/10 h-full flex flex-col">
        <div className="menu-card-inner rounded-[1.25rem] bg-brand-dark-800 shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)] overflow-hidden flex flex-col flex-1 transition-shadow duration-300 relative">

          {/* Food photo or animated placeholder */}
          {item.image ? (
            <div className="card-image relative aspect-[4/3] overflow-hidden flex-shrink-0 bg-brand-dark-800">
              <Image
                src={item.image}
                alt={`${item.name} — ${item.description.slice(0, 80)}...`}
                fill
                className="object-contain transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]"
                sizes="(max-width: 640px) 75vw, (max-width: 1024px) 50vw, 33vw"
                loading="lazy"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(to top, rgba(17,17,17,0.6) 0%, transparent 40%)',
                }}
                aria-hidden="true"
              />
            </div>
          ) : (
            <AnimatedPlaceholder itemId={item.id} />
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
                <span
                  className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[11px] font-semibold tracking-wide ${
                    item.isVegetarian
                      ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                      : 'bg-orange-500/10 text-orange-400 border border-orange-500/20'
                  }`}
                >
                  {item.isVegetarian ? (
                    <><Leaf size={12} /> Veg</>
                  ) : (
                    <><Drumstick size={12} /> Chicken</>
                  )}
                </span>
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
              <span
                className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[11px] font-semibold tracking-wide ${
                  item.isVegetarian
                    ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                    : 'bg-orange-500/10 text-orange-400 border border-orange-500/20'
                }`}
              >
                {item.isVegetarian ? (
                  <><Leaf size={12} /> Veg</>
                ) : (
                  <><Drumstick size={12} /> Chicken</>
                )}
              </span>
              {item.spiceLevel && item.spiceLevel !== 'mild' && (
                <SpiceIndicator level={item.spiceLevel} />
              )}
            </div>

            {/* Name */}
            <h3 className="font-bangers text-xl sm:text-2xl text-white leading-tight tracking-wide">
              {item.name}
            </h3>

            {/* Description with See more below */}
            <div className="flex-1">
              <p className="text-white/50 text-sm leading-relaxed line-clamp-2">
                {item.description}
              </p>
              <button
                onClick={() => setExpanded(true)}
                className="text-brand-gold text-xs font-semibold mt-1 hover:text-brand-gold-light transition-colors"
              >
                See more
              </button>
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
