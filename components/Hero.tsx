"use client"
import Button from '@/components/Button'
import Reveal from '@/components/Reveal'

export default function Hero() {
  return (
    <section className="relative pt-10 sm:pt-16 pb-10 sm:pb-16 min-h-[78vh] flex items-center">
      <div className="w-full px-5 sm:px-6 lg:px-8">
        <div className="text-center mx-auto max-w-7xl">
          <Reveal>
            <h1
              className="text-[3.25rem] sm:text-[3.875rem] lg:text-7xl font-semibold tracking-[-0.01em] leading-[1.05] text-glow"
              style={{ textWrap: 'balance' }}
            >
              Positioning Industry Leaders And Helping Them Grow Revenue With X, LinkedIn, And{'\u00A0'}PR
            </h1>
            <div className="mt-10 flex items-center justify-center">
              <Button
                className="px-12 sm:px-14 py-5 text-xl sm:text-2xl shadow-[0_0_34px_rgba(245,197,66,0.16),0_0_70px_rgba(245,197,66,0.12)] hover:shadow-[0_0_50px_rgba(245,197,66,0.22),0_0_90px_rgba(245,197,66,0.16)]"
                onClick={() => (window.location.href = '/book')}
              >
                Book A Call Now
              </Button>
            </div>
          </Reveal>
        </div>
        
      </div>
    </section>
  )
}
