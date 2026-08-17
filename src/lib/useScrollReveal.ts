'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * Returns `isVisible` — true when the element has entered the viewport.
 * Falls back to immediately visible if IntersectionObserver isn't available
 * or the viewport reports as zero-sized (e.g. iframe preview environments).
 */
export function useScrollReveal(threshold = 0.05) {
  const ref = useRef<HTMLElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Immediately show if viewport dimensions are unavailable (sandboxed preview)
    if (typeof window === 'undefined' || window.innerWidth === 0 || !('IntersectionObserver' in window)) {
      setIsVisible(true)
      return
    }

    const el = ref.current
    if (!el) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold, rootMargin: '0px 0px -60px 0px' },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, isVisible }
}
