
import LandingPageCarousel from './Cards/LandingPageCarousel'

const LandingPage = () => {
  return (
    <div>
      <div className="page-1">

        {/* Header */}
        <header className="px-10 max-w-screen-2xl mx-auto mt-40">
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

        {/* Carousel */}
        <section className="px-8 max-w-screen-2xl mx-auto mt-10">
          <LandingPageCarousel
            cards={[
              { icon: "hub", title: "Social Hub", desc: "Your description here" },
              { icon: "groups", title: "Talent Net", desc: "Your description here", highlight: true },
              { icon: "query_stats", title: "Precision", desc: "Your description here" },
              { icon: "query_stats", title: "Precision", desc: "Your description here" }
            ]}
          />
        </section>

      </div>
    </div>
  )
}

export default LandingPage