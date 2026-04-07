
import LandingPageCarousel from './Cards/LandingPageCarousel'

const LandingPage = () => {
  return (
    <div>
      <div className="page-1">

        {/* Header */}
       <header className="px-8 sm:px-6 md:px-8 lg:px-10 max-w-screen-2xl mx-auto mt-28 sm:mt-28 md:mt-32 lg:mt-40">
  <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 sm:gap-10 md:gap-12">
    
    <div className="max-w-3xl">
      <span className="font-label uppercase tracking-[0.15em] sm:tracking-[0.2em] text-primary font-bold text-[10px] sm:text-xs md:text-sm mb-4 sm:mb-6 block">
        Our Expertise
      </span>

      <h1 className="font-headline text-4xl sm:text-4xl md:text-6xl lg:text-8xl font-extrabold tracking-tight md:tracking-tighter leading-[1] md:leading-none text-on-surface">
        HIGH-VELOCITY <br />
        GROWTH{" "}
        <span className="text-primary-container">CURATED.</span>
      </h1>
    </div>

    <div className="md:text-right max-w-xs sm:max-w-sm pb-2 sm:pb-4">
      <p className="text-on-surface-variant font-light text-sm sm:text-base md:text-lg leading-relaxed">
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
              { 
  icon: "hub", 
  title: "Social Hub", 
  desc: "Step into a powerful ecosystem where conversations spark ideas, connections turn into collaborations, and communities thrive together in real time." 
},
{ 
  icon: "groups", 
  title: "Talent Net", 
  desc: "Unlock access to a dynamic network of creators, innovators, and professionals—designed to help you discover talent, build relationships, and create opportunities that matter.", 
  highlight: true 
},
{ 
  icon: "query_stats", 
  title: "Precision", 
  desc: "Harness advanced analytics and intelligent insights to drive decisions with unmatched accuracy, clarity, and confidence." 
},
{ 
  icon: "rocket_launch", 
  title: "Growth Engine", 
  desc: "Fuel your journey with a system engineered for rapid scaling, smarter workflows, and unstoppable momentum toward your goals." 
},
{ 
  icon: "bolt", 
  title: "Kinetic Speed", 
  desc: "Experience blazing-fast performance and seamless responsiveness that keeps you ahead, efficient, and always in motion.", 
  highlight: true 
},
{ 
  icon: "query_stats", 
  title: "Precision", 
  desc: "Operate with razor-sharp accuracy powered by real-time data, ensuring every move you make is optimized and effective." 
}
            ]}
          />
        </section>

      </div>
    </div>
  )
}

export default LandingPage