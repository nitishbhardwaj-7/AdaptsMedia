const PageFour = () => {
  return (
  <main className="relative pt-20 sm:pt-28 md:pt-32 lg:pt-40 pb-0 sm:pb-24 md:pb-28 lg:pb-32">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 -z-10 pointer-events-none"></div>

      <div className="px-8 sm:px-6 md:px-8 lg:px-10 max-w-screen-2xl mx-auto">
        
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 md:gap-12 mb-16 sm:mb-24 md:mb-28 lg:mb-32 items-end">
          <div className="lg:col-span-8">
            <span className="font-label text-[10px] sm:text-xs font-bold tracking-[0.3em] sm:tracking-[0.4em] text-[#0066FF] uppercase mb-4 sm:mb-6 block">
              Experience & Impact 2024
            </span>

            <h1 className="font-headline text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-extrabold tracking-tighter leading-[1] sm:leading-[0.95] md:leading-[0.9] text-on-surface">
              Quantifying the <br />
              <span className="text-primary italic">Kinetic</span> Advantage
            </h1>
          </div>

          <div className="lg:col-span-4 lg:pb-4">
            <p className="font-body text-on-surface-variant text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed border-l-2 border-[#0066FF]/20 pl-4 sm:pl-6 md:pl-8">
              Driving exponential growth through Data-Driven Scale and Global Market Reach. Our results are not just measured, they are engineered for impact.
            </p>
          </div>
        </div>

        {/* Dashboard */}
        <div className="relative">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-px overflow-hidden">
            
            {/* ROI */}
            <div className="lg:col-span-7 bg-surface/40 pt-10 sm:pt-12 md:pt-14 lg:pt-16 p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-between group hover:bg-surface/60 transition-colors">
              <div>
                <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-10 md:mb-12">
                  <span className="material-symbols-outlined text-[#0066FF] text-2xl sm:text-3xl md:text-4xl">
                    trending_up
                  </span>
                  <span className="font-label text-[10px] sm:text-[11px] md:text-[12px] font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[#0066FF]/60">
                    Benchmark Performance
                  </span>
                </div>

                <h3 className="font-headline text-[60px] sm:text-[90px] md:text-[140px] lg:text-[220px] font-extrabold leading-[0.85] md:leading-[0.8] tracking-tighter text-[#0066FF] mb-4 sm:mb-6">
                  3<span className="text-on-surface">x</span>
                </h3>

                <p className="font-headline text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-on-surface tracking-tight">
                  Average Portfolio ROI
                </p>
              </div>

              <div className="mt-8 sm:mt-12 md:mt-16 max-w-md">
                <p className="font-body text-on-surface-variant text-sm sm:text-base md:text-lg leading-relaxed">
                  Across our portfolio, we consistently outperform market averages by leveraging kinetic strategies that accelerate brand velocity and market capitalization.
                </p>
              </div>
            </div>

            {/* Right Stats */}
            <div className="lg:col-span-5 grid grid-rows-3 gap-px">

              {/* Projects */}
              <div className="bg-surface/40 p-6 sm:p-8 md:p-10 lg:p-12 flex justify-between hover:bg-surface/60 transition-colors">
                <div className='flex flex-col gap-1 sm:gap-2'>
                  <h4 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold">1,500+</h4>
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg uppercase text-gray-500">Global Projects Executed</p>
                </div>
                <span className="material-symbols-outlined text-[#0066FF] text-xl sm:text-2xl md:text-3xl">
                  rocket_launch
                </span>
              </div>

              {/* Markets */}
              <div className="bg-surface/40 p-6 sm:p-8 md:p-10 lg:p-12 flex justify-between hover:bg-surface/60 transition-colors">
                <div className='flex flex-col gap-1 sm:gap-2'>
                  <h4 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold">25+</h4>
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg uppercase text-gray-500">Tier-1 Markets Reached</p>
                </div>
                <span className="material-symbols-outlined text-[#0066FF] text-xl sm:text-2xl md:text-3xl">
                  public
                </span>
              </div>

              {/* Clients */}
              <div className="bg-surface/40 p-6 sm:p-8 md:p-10 lg:p-12 hover:bg-surface/60 transition-colors">
                <h4 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-2">70+</h4>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg uppercase mb-4 sm:mb-6 text-gray-500">Strategic Client Partnerships</p>

                <div className="flex -space-x-2 sm:-space-x-3">
                  <img className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full" src="https://randomuser.me/api/portraits/men/32.jpg" />
                  <img className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full" src="https://randomuser.me/api/portraits/men/45.jpg" />
                  <img className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full" src="https://randomuser.me/api/portraits/men/12.jpg" />
                  <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-[#0066FF] text-white flex items-center justify-center text-[10px] sm:text-xs">
                    +67
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 sm:mt-24 md:mt-28 lg:mt-32 grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 md:gap-12 items-center">

          <div className="lg:col-span-8 rounded-2xl sm:rounded-3xl overflow-hidden h-[250px] sm:h-[350px] md:h-[400px] lg:h-[500px] relative">
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
              alt="Market"
            />
          </div>

          <div className="lg:col-span-4">
            <h4 className="text-2xl sm:text-3xl md:p-0 lg:p-0 md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Global Scale <span className='text-primary italic'>Ready</span>
            </h4>
            <p className="font-body md:p-0 lg:pl-1 text-on-surface-variant text-sm sm:text-base md:text-lg leading-relaxed">
  Built to operate without borders, our platform empowers you to expand seamlessly into new markets while adapting to regional regulations, user behaviors, and evolving business environments without friction or delay.
</p>
          </div>

        </div>
      </div>
    </main>
  )
}

export default PageFour;