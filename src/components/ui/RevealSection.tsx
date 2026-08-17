'use client'

import { useScrollReveal } from '@/lib/useScrollReveal'
import { cn } from '@/lib/utils'

interface RevealSectionProps {
  children: React.ReactNode
  className?: string
  delayMs?: number
  as?: 'div' | 'section' | 'article' | 'aside'
}

export default function RevealSection({
  children,
  className,
  delayMs = 0,
  as: Tag = 'div',
}: RevealSectionProps) {
  const { ref, isVisible } = useScrollReveal()

  return (
    <Tag
      ref={ref as React.Ref<HTMLDivElement>}
      className={cn(
        'transition-[opacity,transform]',
        'duration-[850ms] ease-[cubic-bezier(0.23,1,0.32,1)]',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-11',
        className,
      )}
      style={delayMs > 0 ? { transitionDelay: `${delayMs}ms` } : undefined}
    >
      {children}
    </Tag>
  )
}
