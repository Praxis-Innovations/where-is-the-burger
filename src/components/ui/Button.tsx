import { cn } from '@/lib/utils'
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonBaseProps {
  variant?: 'primary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  showArrow?: boolean
  children: ReactNode
  className?: string
  glow?: boolean
}

type ButtonProps = ButtonBaseProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined }
type AnchorProps = ButtonBaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }

type Props = ButtonProps | AnchorProps

export default function Button({
  variant = 'primary',
  size = 'md',
  showArrow = false,
  children,
  className,
  glow = false,
  ...rest
}: Props) {
  const base =
    'inline-flex items-center justify-center gap-3 rounded-full font-bold transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-brand-gold focus-visible:outline-offset-3 group'

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const variants = {
    primary: cn(
      'bg-brand-gold text-black hover:bg-brand-gold-light',
      glow && 'btn-gold-glow',
    ),
    outline:
      'border-2 border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-black',
    ghost: 'text-brand-gold hover:text-brand-gold-light',
  }

  const classes = cn(base, sizes[size], variants[variant], className)

  const arrowIcon = showArrow ? (
    <span
      className="flex h-7 w-7 items-center justify-center rounded-full bg-black/10 transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-0.5 group-hover:-translate-y-px group-hover:scale-110"
      aria-hidden="true"
    >
      ↗
    </span>
  ) : null

  if ('href' in rest && rest.href !== undefined) {
    const { href, ...anchorRest } = rest as AnchorProps
    return (
      <a href={href} className={classes} {...(anchorRest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
        {arrowIcon}
      </a>
    )
  }

  const { ...buttonRest } = rest as ButtonProps
  return (
    <button className={classes} {...buttonRest}>
      {children}
      {arrowIcon}
    </button>
  )
}
