'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { truckVariants } from '@/lib/animations'

interface FoodTruckSVGProps {
  className?: string
}

export default function FoodTruckSVG({ className }: FoodTruckSVGProps) {
  const reduceMotion = useReducedMotion()

  const motionProps = reduceMotion
    ? {}
    : {
        variants: truckVariants,
        initial: 'hidden',
        animate: 'visible',
      }

  return (
    <motion.div
      className={className}
      {...motionProps}
      style={{ willChange: 'transform' }}
    >
      <svg
        viewBox="0 0 680 260"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Where's the Burger food truck illustration"
        role="img"
        className="w-full h-auto max-w-[680px]"
      >
        {/* ── Defs ─────────────────────────────────────────────── */}
        <defs>
          <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1a1a1a" />
            <stop offset="100%" stopColor="#0a0a0a" />
          </linearGradient>
          <linearGradient id="cabGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#181818" />
            <stop offset="100%" stopColor="#0d0d0d" />
          </linearGradient>
          <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F5B83D" />
            <stop offset="50%" stopColor="#E5A100" />
            <stop offset="100%" stopColor="#B87D00" />
          </linearGradient>
          <linearGradient id="wheelGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#222" />
            <stop offset="100%" stopColor="#0a0a0a" />
          </linearGradient>
          <filter id="goldGlow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" />
          </filter>
          <clipPath id="truckBodyClip">
            <rect x="130" y="60" width="510" height="158" rx="6" />
          </clipPath>
        </defs>

        {/* ── Ground Shadow ─────────────────────────────────────── */}
        <ellipse cx="380" cy="250" rx="290" ry="10" fill="rgba(229,161,0,0.06)" />

        {/* ── Truck Undercarriage / Frame ───────────────────────── */}
        <rect x="90" y="215" width="552" height="12" rx="4" fill="#1a1a1a" />

        {/* ── Main Truck Body ───────────────────────────────────── */}
        <rect
          x="130" y="60"
          width="510" height="158"
          rx="6"
          fill="url(#bodyGrad)"
          stroke="#E5A100"
          strokeWidth="1.5"
        />

        {/* Gold roof stripe */}
        <rect x="130" y="60" width="510" height="12" rx="4" fill="url(#goldGrad)" />

        {/* Gold bottom trim */}
        <rect x="130" y="206" width="510" height="9" rx="3" fill="url(#goldGrad)" />

        {/* Inner panel highlight */}
        <rect
          x="138" y="80"
          width="494" height="118"
          rx="4"
          fill="none"
          stroke="rgba(229,161,0,0.1)"
          strokeWidth="1"
        />

        {/* ── Rock Hand Logo Area (left of serving window) ──────── */}
        {/* Logo circle */}
        <circle cx="230" cy="145" r="32" fill="rgba(229,161,0,0.06)" stroke="rgba(229,161,0,0.2)" strokeWidth="1" />
        {/* Simplified rock-hand path */}
        <text
          x="230" y="154"
          textAnchor="middle"
          fontSize="28"
          fontFamily="serif"
          fill="#E5A100"
          opacity="0.9"
        >
          🤘
        </text>

        {/* Brand text panel */}
        <text
          x="310" y="118"
          textAnchor="middle"
          fontSize="15"
          fontFamily="'Bangers', cursive, sans-serif"
          fill="rgba(229,161,0,0.55)"
          letterSpacing="3"
        >
          WHERE&apos;S THE
        </text>
        <text
          x="310" y="141"
          textAnchor="middle"
          fontSize="28"
          fontFamily="'Bangers', cursive, sans-serif"
          fill="#E5A100"
          letterSpacing="2"
        >
          BURGER?
        </text>
        <text
          x="310" y="163"
          textAnchor="middle"
          fontSize="10"
          fontFamily="sans-serif"
          fill="rgba(229,161,0,0.4)"
          letterSpacing="4"
        >
          INDIAN FUSION STREET FOOD
        </text>

        {/* ── Serving Window ────────────────────────────────────── */}
        {/* Awning */}
        <rect x="408" y="72" width="162" height="18" rx="3" fill="#E5A100" />
        {/* Awning stripe pattern */}
        {[0, 22, 44, 66, 88, 110, 132].map((x) => (
          <rect
            key={x}
            x={420 + x}
            y="72"
            width="12"
            height="18"
            fill="rgba(0,0,0,0.18)"
          />
        ))}
        {/* Awning drip */}
        {[0, 18, 36, 54, 72, 90, 108, 126, 144].map((x) => (
          <rect
            key={x}
            x={413 + x}
            y="88"
            width="8"
            height="5"
            rx="2"
            fill="#E5A100"
          />
        ))}

        {/* Window frame */}
        <rect
          x="420" y="90"
          width="140" height="106"
          rx="4"
          fill="#0d1a0d"
          stroke="#E5A100"
          strokeWidth="2"
        />

        {/* Counter ledge */}
        <rect x="416" y="185" width="148" height="12" rx="3" fill="url(#goldGrad)" />

        {/* Window interior detail */}
        <rect x="428" y="98" width="124" height="80" rx="3" fill="rgba(229,161,0,0.04)" />

        {/* Burger in window */}
        <text x="490" y="148" textAnchor="middle" fontSize="36">🍔</text>

        {/* "OPEN" sign */}
        <rect x="435" y="103" width="40" height="16" rx="3" fill="rgba(229,161,0,0.15)" stroke="rgba(229,161,0,0.4)" strokeWidth="1" />
        <text x="455" y="115" textAnchor="middle" fontSize="8" fontFamily="sans-serif" fill="#E5A100" letterSpacing="1" fontWeight="bold">OPEN</text>

        {/* ── Steam Puffs (CSS animated) ────────────────────────── */}
        <circle
          className="steam-puff"
          cx="445" cy="87"
          r="7"
          fill="rgba(200,200,200,0.5)"
        />
        <circle
          className="steam-puff"
          cx="465" cy="83"
          r="5.5"
          fill="rgba(180,180,180,0.4)"
        />
        <circle
          className="steam-puff"
          cx="485" cy="86"
          r="6.5"
          fill="rgba(190,190,190,0.45)"
        />

        {/* ── Cab / Front of Truck ──────────────────────────────── */}
        <rect
          x="25" y="90"
          width="105" height="128"
          rx="6"
          fill="url(#cabGrad)"
          stroke="#E5A100"
          strokeWidth="1.5"
        />

        {/* Cab roof connection */}
        <rect x="105" y="60" width="25" height="30" fill="#181818" />
        <rect x="105" y="60" width="25" height="12" fill="url(#goldGrad)" />

        {/* Windshield glass */}
        <rect
          x="35" y="100"
          width="72" height="88"
          rx="4"
          fill="#0a140a"
          stroke="rgba(229,161,0,0.2)"
          strokeWidth="1"
        />

        {/* Windshield reflections */}
        <rect x="38" y="104" width="20" height="55" rx="2" fill="rgba(229,161,0,0.05)" />
        <rect x="62" y="104" width="8" height="30" rx="1" fill="rgba(229,161,0,0.03)" />

        {/* Windshield divider */}
        <line x1="75" y1="100" x2="75" y2="188" stroke="rgba(229,161,0,0.15)" strokeWidth="1" />

        {/* Door handle */}
        <rect x="32" y="158" width="14" height="4" rx="2" fill="rgba(229,161,0,0.4)" />

        {/* Headlight */}
        <rect x="20" y="152" width="6" height="24" rx="3" fill="#FFD54F" />
        <rect x="20" y="152" width="6" height="24" rx="3" fill="rgba(255,213,79,0.3)" filter="url(#goldGlow)" />

        {/* Front bumper */}
        <rect x="14" y="184" width="11" height="34" rx="3" fill="#222" stroke="rgba(229,161,0,0.2)" strokeWidth="1" />

        {/* Cab gold accent stripe */}
        <rect x="25" y="204" width="105" height="4" rx="2" fill="url(#goldGrad)" />

        {/* ── Exhaust Pipe ──────────────────────────────────────── */}
        <rect x="118" y="100" width="10" height="5" rx="2" fill="#333" />
        <rect x="128" y="98" width="16" height="3" rx="1.5" fill="#2a2a2a" />

        {/* ── Wheels ────────────────────────────────────────────── */}
        {/* Front wheel */}
        <circle cx="90" cy="228" r="38" fill="url(#wheelGrad)" stroke="#333" strokeWidth="3" />
        <circle cx="90" cy="228" r="28" fill="#0a0a0a" stroke="#E5A100" strokeWidth="2" />
        {/* Hub spokes */}
        {[0, 60, 120, 180, 240, 300].map((angle) => (
          <line
            key={angle}
            x1="90"
            y1="228"
            x2={90 + 24 * Math.cos((angle * Math.PI) / 180)}
            y2={228 + 24 * Math.sin((angle * Math.PI) / 180)}
            stroke="#E5A100"
            strokeWidth="1.5"
            opacity="0.5"
          />
        ))}
        <circle cx="90" cy="228" r="10" fill="url(#goldGrad)" />
        <circle cx="90" cy="228" r="4" fill="#0a0a0a" />

        {/* Rear wheel */}
        <circle cx="558" cy="228" r="38" fill="url(#wheelGrad)" stroke="#333" strokeWidth="3" />
        <circle cx="558" cy="228" r="28" fill="#0a0a0a" stroke="#E5A100" strokeWidth="2" />
        {[0, 60, 120, 180, 240, 300].map((angle) => (
          <line
            key={angle}
            x1="558"
            y1="228"
            x2={558 + 24 * Math.cos((angle * Math.PI) / 180)}
            y2={228 + 24 * Math.sin((angle * Math.PI) / 180)}
            stroke="#E5A100"
            strokeWidth="1.5"
            opacity="0.5"
          />
        ))}
        <circle cx="558" cy="228" r="10" fill="url(#goldGrad)" />
        <circle cx="558" cy="228" r="4" fill="#0a0a0a" />

        {/* ── Decorative Gold Line Detail ───────────────────────── */}
        <line x1="148" y1="95" x2="148" y2="200" stroke="rgba(229,161,0,0.15)" strokeWidth="1" strokeDasharray="4 4" />
      </svg>
    </motion.div>
  )
}
