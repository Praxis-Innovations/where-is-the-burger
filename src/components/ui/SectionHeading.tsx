import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  className?: string
  titleClassName?: string
  goldTitle?: boolean
  id?: string
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className,
  titleClassName,
  goldTitle = false,
  id,
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start'

  return (
    <div className={cn('flex flex-col gap-4', alignClass, className)}>
      {eyebrow && (
        <span className="inline-flex items-center gap-2 rounded-full border border-brand-gold/30 px-3 py-1 text-[11px] uppercase tracking-[0.2em] font-semibold text-brand-gold/70">
          {eyebrow}
        </span>
      )}
      <h2
        id={id}
        className={cn(
          'font-bangers leading-none tracking-wide',
          goldTitle ? 'text-gold-gradient' : 'text-white',
          'text-4xl sm:text-5xl md:text-6xl',
          titleClassName,
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-xl text-white/60 leading-relaxed text-base md:text-lg">{subtitle}</p>
      )}
      {align === 'left' && (
        <div className="gold-divider mt-1" aria-hidden="true" />
      )}
    </div>
  )
}
