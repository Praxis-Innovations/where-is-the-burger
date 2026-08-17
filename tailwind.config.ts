import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-gold': '#E5A100',
        'brand-gold-dim': '#B87D00',
        'brand-gold-light': '#F5B83D',
        'brand-black': '#000000',
        'brand-dark': '#0A0A0A',
        'brand-dark-800': '#111111',
        'brand-dark-700': '#181818',
      },
      fontFamily: {
        bangers: ['var(--font-bangers)', 'cursive'],
        sans: ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float-1': 'float1 8s ease-in-out infinite',
        'float-2': 'float2 10s ease-in-out infinite 1.5s',
        'float-3': 'float3 7s ease-in-out infinite 3s',
        'float-4': 'float4 9s ease-in-out infinite 0.8s',
        'float-5': 'float5 11s ease-in-out infinite 2.2s',
        'pulse-gold': 'pulseGold 2.5s ease-in-out infinite',
        'steam-1': 'steam 2s ease-out 2.2s infinite',
        'steam-2': 'steam 2s ease-out 2.8s infinite',
        'steam-3': 'steam 2s ease-out 3.4s infinite',
        'spin-once': 'spinOnce 0.5s cubic-bezier(0.23,1,0.32,1)',
        'scroll-down': 'scrollDown 2s ease-in-out infinite',
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        float1: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '40%': { transform: 'translateY(-18px) rotate(6deg)' },
          '70%': { transform: 'translateY(-10px) rotate(-4deg)' },
        },
        float2: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '35%': { transform: 'translateY(-22px) rotate(-8deg)' },
          '65%': { transform: 'translateY(-12px) rotate(5deg)' },
        },
        float3: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-15px) rotate(10deg)' },
        },
        float4: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '30%': { transform: 'translateY(-20px) rotate(-6deg)' },
          '60%': { transform: 'translateY(-8px) rotate(4deg)' },
        },
        float5: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '45%': { transform: 'translateY(-25px) rotate(7deg)' },
          '75%': { transform: 'translateY(-14px) rotate(-5deg)' },
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(229,161,0,0)' },
          '50%': { boxShadow: '0 0 0 12px rgba(229,161,0,0), 0 0 30px rgba(229,161,0,0.4)' },
        },
        steam: {
          '0%': { opacity: '0.7', transform: 'translateY(0px) scale(1)' },
          '100%': { opacity: '0', transform: 'translateY(-35px) scale(2.2)' },
        },
        spinOnce: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        scrollDown: {
          '0%, 100%': { transform: 'translateY(0)', opacity: '0.6' },
          '50%': { transform: 'translateY(8px)', opacity: '1' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      transitionTimingFunction: {
        'ease-out-strong': 'cubic-bezier(0.23, 1, 0.32, 1)',
        'ease-in-out-strong': 'cubic-bezier(0.77, 0, 0.175, 1)',
        'ease-drawer': 'cubic-bezier(0.32, 0.72, 0, 1)',
      },
      backgroundImage: {
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}

export default config
