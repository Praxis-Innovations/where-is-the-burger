import type { Variants } from 'framer-motion'

// Core easing curves — from animate skill
export const EASE_OUT = [0.23, 1, 0.32, 1] as const
export const EASE_IN_OUT = [0.77, 0, 0.175, 1] as const
export const EASE_DRAWER = [0.32, 0.72, 0, 1] as const

// Truck entrance — spring that carries momentum into a natural park + settle
export const truckVariants: Variants = {
  hidden: { transform: 'translateX(-110vw)' },
  visible: {
    transform: 'translateX(0px)',
    transition: {
      type: 'spring',
      stiffness: 55,
      damping: 13,
      mass: 1.8,
    },
  },
}

// Hero content — staggered fade-up after truck settles
export const heroHeadlineVariants: Variants = {
  hidden: { transform: 'translateY(28px)', opacity: 0 },
  visible: {
    transform: 'translateY(0px)',
    opacity: 1,
    transition: { duration: 0.75, ease: EASE_OUT, delay: 1.85 },
  },
}

export const heroSublineVariants: Variants = {
  hidden: { transform: 'translateY(20px)', opacity: 0 },
  visible: {
    transform: 'translateY(0px)',
    opacity: 1,
    transition: { duration: 0.7, ease: EASE_OUT, delay: 2.15 },
  },
}

export const heroCtaVariants: Variants = {
  hidden: { transform: 'translateY(16px)', opacity: 0 },
  visible: {
    transform: 'translateY(0px)',
    opacity: 1,
    transition: { duration: 0.65, ease: EASE_OUT, delay: 2.45 },
  },
}

// Scroll-triggered section reveal
export const sectionRevealVariants: Variants = {
  hidden: { transform: 'translateY(44px)', opacity: 0 },
  visible: {
    transform: 'translateY(0px)',
    opacity: 1,
    transition: { duration: 0.85, ease: EASE_OUT },
  },
}

// Staggered children (for menu grids, review cards, etc.)
export const staggerContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.1,
    },
  },
}

export const staggerChildVariants: Variants = {
  hidden: { transform: 'translateY(30px)', opacity: 0 },
  visible: {
    transform: 'translateY(0px)',
    opacity: 1,
    transition: { duration: 0.65, ease: EASE_OUT },
  },
}

// Nav link stagger (mobile overlay)
export const navLinkVariants: Variants = {
  hidden: { transform: 'translateY(20px)', opacity: 0 },
  visible: (i: number) => ({
    transform: 'translateY(0px)',
    opacity: 1,
    transition: { duration: 0.5, ease: EASE_OUT, delay: i * 0.06 },
  }),
}

// Mobile overlay
export const overlayVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3, ease: EASE_OUT } },
  exit: { opacity: 0, transition: { duration: 0.25, ease: EASE_IN_OUT } },
}

// Viewport settings — fire once, 80px below the fold
export const viewportOnce = { once: true, margin: '-80px' } as const
