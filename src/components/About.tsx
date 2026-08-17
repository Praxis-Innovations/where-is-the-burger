'use client'

import Image from 'next/image'
import SectionHeading from '@/components/ui/SectionHeading'
import RevealSection from '@/components/ui/RevealSection'
import { LeafIcon, FlameIcon, BreadIcon, UtensilsIcon } from '@/components/ui/Icons'

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-black py-16 md:py-20 overflow-hidden"
      aria-labelledby="about-heading"
    >
      {/* Background gold glow */}
      <div
        className="pointer-events-none absolute -right-40 top-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full opacity-[0.04]"
        style={{ background: 'radial-gradient(circle, #E5A100 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16 items-center">

          {/* Left — text */}
          <RevealSection className="flex flex-col gap-5">
            <SectionHeading
              eyebrow="Our Story"
              title="Not Your Average Burger Joint"
              align="left"
              titleClassName="text-4xl sm:text-5xl md:text-6xl"
              id="about-heading"
            />

            <p className="text-white/60 leading-relaxed text-base md:text-lg">
              We took the bold, vibrant flavours of Indian street food — the
              fiery spices, the creamy tandoori sauces, the fresh cilantro
              explosion — and said: <span className="text-brand-gold font-semibold">what if we put all of that between a
              golden brioche bun?</span>
            </p>

            <p className="text-white/60 leading-relaxed text-base md:text-lg">
              Every burger is handcrafted to order. Our signature{' '}
              <span className="text-white font-medium">Tami Rami sauce</span> and{' '}
              <span className="text-white font-medium">Creamy Tandoori</span> are
              made in-house and they&apos;re the reason people find us wherever we park.
            </p>

            <p className="text-white/60 leading-relaxed text-base md:text-lg">
              From the crispy paneer pioneer to the golden chicken crunch —
              every bite is a little bit India, a little bit Canada, and a
              whole lot of delicious. Rock on.
            </p>

            {/* Feature badges */}
            <div className="flex flex-wrap gap-3 pt-2">
              {[
                { icon: LeafIcon, label: 'Veg & Non-Veg Options' },
                { icon: BreadIcon, label: 'Toasted Brioche Buns' },
                { icon: UtensilsIcon, label: 'House-Made Sauces' },
                { icon: FlameIcon, label: 'Made Fresh to Order' },
              ].map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 rounded-full border border-brand-gold/20 px-4 py-1.5 text-sm text-white/70"
                >
                  <Icon size={14} className="text-brand-gold/60" />
                  {label}
                </span>
              ))}
            </div>
          </RevealSection>

          {/* Right — owner image collage */}
          <RevealSection delayMs={150} className="relative">
            {/* Double-bezel outer shell */}
            <div className="rounded-[2rem] p-2 bg-white/[0.02] ring-1 ring-white/10">
              {/* Inner core */}
              <div className="rounded-[1.625rem] overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.07)]">
                {/* Main image — owner with burger */}
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/images/owner/766074874_18162072016453569_3928546251123518087_n.jpg"
                    alt="Owner of Where's the Burger holding one of the signature burgers"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  {/* Dark overlay gradient */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 50%)',
                    }}
                    aria-hidden="true"
                  />
                  {/* Caption overlay */}
                  <div className="absolute bottom-4 left-4">
                    <p className="font-bangers text-2xl text-white tracking-wide">The Man Behind the Bun</p>
                    <p className="text-sm text-white/60">Rock-n-roll street food, one burger at a time</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating small image card — epic chainsaw action shot */}
            <div className="absolute -bottom-6 -right-4 sm:-right-8 w-36 sm:w-44">
              <div className="rounded-[1.25rem] p-1.5 bg-white/[0.03] ring-1 ring-white/10">
                <div className="rounded-[0.875rem] overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.07)]">
                  <div className="relative aspect-square">
                    <Image
                      src="/images/owner/772632295_18162781051453569_6560050217998160816_n.jpg"
                      alt="Owner in an epic action shot cutting a giant burger"
                      fill
                      className="object-cover"
                      sizes="176px"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-2 pl-2">
                <p className="font-bangers text-sm text-brand-gold">Going All In</p>
              </div>
            </div>

            {/* Gold accent decoration */}
            <div
              className="absolute -top-4 -left-4 h-24 w-24 rounded-full border border-brand-gold/15 opacity-60"
              aria-hidden="true"
            />
            <div
              className="absolute -top-2 -left-2 h-12 w-12 rounded-full border border-brand-gold/25"
              aria-hidden="true"
            />
          </RevealSection>
        </div>
      </div>
    </section>
  )
}
