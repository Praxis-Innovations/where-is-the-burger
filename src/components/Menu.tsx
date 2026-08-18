'use client'

import { useState, useRef, useCallback } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { menuItems, menuCategories, UBER_EATS_URL } from '@/data/menu'
import { staggerContainerVariants, staggerChildVariants } from '@/lib/animations'
import SectionHeading from '@/components/ui/SectionHeading'
import RevealSection from '@/components/ui/RevealSection'
import MenuCard from '@/components/MenuCard'
import { Leaf, Drumstick, Salad, Sandwich, CupSoda, type LucideIcon } from 'lucide-react'
import type { MenuCategory } from '@/types'

const iconMap: Record<string, LucideIcon> = {
  leaf: Leaf,
  drumstick: Drumstick,
  fries: Salad,
  bread: Sandwich,
  cup: CupSoda,
}

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('veg-burgers')
  const reduceMotion = useReducedMotion()
  const tabContainerRef = useRef<HTMLDivElement>(null)

  const filtered = menuItems.filter((item) => item.category === activeCategory)

  const handleCategoryClick = useCallback((id: MenuCategory, e: React.MouseEvent<HTMLButtonElement>) => {
    setActiveCategory(id)
    const container = tabContainerRef.current
    const button = e.currentTarget
    if (container && button) {
      const containerRect = container.getBoundingClientRect()
      const buttonRect = button.getBoundingClientRect()
      const scrollLeft = container.scrollLeft + (buttonRect.left - containerRect.left) - (containerRect.width / 2) + (buttonRect.width / 2)
      container.scrollTo({ left: scrollLeft, behavior: 'smooth' })
    }
  }, [])

  return (
    <section
      id="menu"
      className="relative bg-black py-8 md:py-10"
      aria-labelledby="menu-heading"
    >
      {/* Subtle gold glow top-left */}
      <div
        className="pointer-events-none absolute -left-60 top-0 h-[500px] w-[500px] rounded-full opacity-[0.04]"
        style={{ background: 'radial-gradient(circle, #E5A100 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RevealSection className="flex flex-col items-center mb-6">
          <SectionHeading
            eyebrow="Full Menu"
            title="What We're Rocking"
            goldTitle
            id="menu-heading"
          />
        </RevealSection>

        {/* Category tabs — scrollable on mobile, centered on desktop */}
        <RevealSection delayMs={80} className="mb-6">
          <div
            ref={tabContainerRef}
            role="tablist"
            aria-label="Menu categories"
            className="flex gap-2 overflow-x-auto pb-2 no-scrollbar justify-start md:justify-center"
          >
            {menuCategories.map((cat) => {
              const isActive = activeCategory === cat.id
              const Icon = iconMap[cat.emoji]
              return (
                <button
                  key={cat.id}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`panel-${cat.id}`}
                  id={`tab-${cat.id}`}
                  onClick={(e) => handleCategoryClick(cat.id, e)}
                  className={`
                    flex-shrink-0 flex items-center gap-1.5 rounded-full px-4 sm:px-5 py-2 sm:py-2.5
                    text-sm sm:text-base font-semibold transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]
                    ${isActive ? 'menu-tab-active scale-[1.03]' : 'menu-tab-inactive hover:border-brand-gold/60 hover:text-brand-gold'}
                  `}
                >
                  {Icon && <Icon size={16} className={isActive ? 'text-black' : 'text-brand-gold/60'} />}
                  {cat.label}
                </button>
              )
            })}
          </div>
        </RevealSection>

        {/* Menu items */}
        <div
          id={`panel-${activeCategory}`}
          role="tabpanel"
          aria-labelledby={`tab-${activeCategory}`}
        >
          <motion.div
            key={activeCategory}
            variants={reduceMotion ? {} : staggerContainerVariants}
            initial="hidden"
            animate="visible"
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 no-scrollbar sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:overflow-visible sm:snap-none sm:pb-0 md:gap-5"
          >
            {filtered.map((item) => (
              <motion.div
                key={item.id}
                variants={reduceMotion ? {} : staggerChildVariants}
                className="flex snap-center flex-shrink-0 w-[75vw] max-w-[300px] sm:w-auto sm:max-w-none sm:flex-shrink-[unset]"
              >
                <MenuCard item={item} />
              </motion.div>
            ))}
          </motion.div>

          {filtered.length === 0 && (
            <div className="py-20 text-center">
              <p className="font-bangers text-3xl text-brand-gold">Coming Soon!</p>
              <p className="mt-2 text-white/50">This section is getting a remix.</p>
            </div>
          )}
        </div>

        {/* Bottom CTA */}
        <RevealSection delayMs={100} className="mt-8 flex flex-col items-center gap-3">
          <p className="text-white/40 text-sm">Ready to order? We&apos;re on Uber Eats.</p>
          <a
            href={UBER_EATS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-brand-gold px-8 py-4 text-lg font-bold text-black transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-brand-gold-light active:scale-[0.97] btn-gold-glow"
          >
            Order on Uber Eats
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black/10 text-base font-normal" aria-hidden="true">
              ↗
            </span>
          </a>
        </RevealSection>
      </div>
    </section>
  )
}
