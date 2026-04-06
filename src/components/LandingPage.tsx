import React from 'react'
import LandingPageCard from './Cards/LandingPageCard'

const LandingPage = () => {
  return (
    <div><div className="page-1">
      {/* Header */}
      <header className="px-6 max-w-screen-2xl mx-auto mt-40">
        <div className="flex flex-col md:flex-row items-end justify-between gap-12">
          
          <div className="max-w-3xl">
            <span className="font-label uppercase tracking-[0.2em] text-primary font-bold text-sm mb-6 block">
              Our Expertise
            </span>

            <h1 className="font-headline text-6xl md:text-8xl font-extrabold tracking-tighter leading-none text-on-surface">
              HIGH-VELOCITY <br />
              GROWTH{" "}
              <span className="text-primary-container">CURATED.</span>
            </h1>
          </div>

          <div className="md:text-right max-w-sm pb-4">
            <p className="text-on-surface-variant font-light text-lg leading-relaxed">
              Precision engineering for digital landscapes. We combine
              data-driven architecture with kinetic creativity to dominate
              markets.
            </p>
          </div>

        </div>
      </header>

      {/* Capabilities Grid */}
      <section className="px-8 max-w-screen-2xl mx-auto mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <LandingPageCard
            icon="search"
            title={
              <>
                Search Engine <br /> Optimization
              </>
            }
            desc="Engineered organic growth through algorithmic precision. We move beyond keywords to semantic dominance and authority building."
          />

          {/* Card 2 */}
          <LandingPageCard
            icon="ads_click"
            title={
              <>
                Paid Media <br /> & Ads
              </>
            }
            desc="Aggressive ROI optimization through predictive modeling. We deploy capital where it yields maximum velocity."
            highlight
          />

          {/* Card 3 */}
          <LandingPageCard
            icon="share"
            title={
              <>
                Social Content <br /> Strategy
              </>
            }
            desc="Creating viral resonance through cultural curation. We design content that moves people and shifts paradigms."
          />

        </div>
      </section>
    </div></div>
  )
}

export default LandingPage