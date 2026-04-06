import React from 'react'
import StatCard from './Cards/StatCard'
import Avatar from './Avatar'

const PageFour = () => {
  return (
  <main className="relative pt-40 pb-32">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 -z-10 pointer-events-none"></div>

      <div className="px-10 max-w-screen-2xl mx-auto">
        
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32 items-end">
          <div className="lg:col-span-8">
            <span className="font-label text-xs font-bold tracking-[0.4em] text-[#0066FF] uppercase mb-6 block">
              Experience & Impact 2024
            </span>

            <h1 className="font-headline text-6xl md:text-8xl font-extrabold tracking-tighter leading-[0.9] text-on-surface">
              Quantifying the <br />
              <span className="text-primary italic">Kinetic</span> Advantage
            </h1>
          </div>

          <div className="lg:col-span-4 lg:pb-4">
            <p className="font-body text-on-surface-variant text-xl leading-relaxed border-l-2 border-[#0066FF]/20 pl-8">
              Driving exponential growth through Data-Driven Scale and Global Market Reach. Our results are not just measured, they are engineered for impact.
            </p>
          </div>
        </div>

        {/* Dashboard */}
        <div className="relative">
          
          {/* SVG Background */}
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-px overflow-hidden">
            
            {/* ROI */}
            <div className="lg:col-span-7 bg-surface/40 pt-16 md:p-12 flex flex-col justify-between group hover:bg-surface/60 transition-colors">
              <div>
                <div className="flex items-center gap-3 mb-12">
                  <span className="material-symbols-outlined text-[#0066FF] text-4xl">
                    trending_up
                  </span>
                  <span className="font-label text-[12px] font-black uppercase tracking-[0.3em] text-[#0066FF]/60">
                    Benchmark Performance
                  </span>
                </div>

                <h3 className="font-headline text-[140px] md:text-[220px] font-extrabold leading-[0.8] tracking-tighter text-[#0066FF] mb-6">
                  3<span className="text-on-surface">x</span>
                </h3>

                <p className="font-headline text-4xl font-bold text-on-surface tracking-tight">
                  Average Portfolio ROI
                </p>
              </div>

              <div className="mt-16 max-w-md">
                <p className="font-body text-on-surface-variant text-lg leading-relaxed">
                  Across our portfolio, we consistently outperform market averages by leveraging kinetic strategies that accelerate brand velocity and market capitalization.
                </p>
              </div>
            </div>

            {/* Right Stats */}
            <div className="lg:col-span-5 grid grid-rows-3 gap-px">

              {/* Projects */}
              <div className="bg-surface/40 p-12 flex justify-between hover:bg-surface/60 transition-colors">
                <div className='flex flex-col gap-2'>
                  <h4 className="text-6xl font-extrabold">1,500+</h4>
                  <p className="text-lg uppercase">Global Projects Executed</p>
                </div>
                <span className="material-symbols-outlined text-[#0066FF] text-3xl">
                  rocket_launch
                </span>
              </div>

              {/* Markets */}
              <div className="bg-surface/40 p-12 flex justify-between hover:bg-surface/60 transition-colors">
                <div className='flex flex-col gap-2'>
                  <h4 className="text-6xl font-extrabold">25+</h4>
                  <p className="text-lg uppercase">Tier-1 Markets Reached</p>
                </div>
                <span className="material-symbols-outlined text-[#0066FF] text-3xl">
                  public
                </span>
              </div>

              {/* Clients */}
              <div className="bg-surface/40 p-12 hover:bg-surface/60 transition-colors">
                <h4 className="text-6xl font-extrabold mb-2">70+</h4>
                <p className="text-lg uppercase mb-6">Strategic Client Partnerships</p>

                <div className="flex -space-x-3">
                  <img className="w-10 h-10 rounded-full" src="https://randomuser.me/api/portraits/men/32.jpg" />
                  <img className="w-10 h-10 rounded-full" src="https://randomuser.me/api/portraits/men/45.jpg" />
                  <img className="w-10 h-10 rounded-full" src="https://randomuser.me/api/portraits/men/12.jpg" />
                  <div className="w-10 h-10 rounded-full bg-[#0066FF] text-white flex items-center justify-center text-xs">
                    +67
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-32 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          <div className="lg:col-span-8 rounded-3xl overflow-hidden h-[500px] relative">
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
              alt="Market"
            />
          </div>

          <div className="lg:col-span-4">
            <h4 className="text-5xl font-bold mb-6">Global Scale <span className='text-primary italic'>Ready</span></h4>
            <p className="mb-8 text-lg">
              Our infrastructure is designed for rapid deployment across diverse regulatory landscapes and cultural paradigms.
            </p>

            <div className="space-y-4">
              <div>01 Market Entry Strategy</div>
              <div>02 Data Velocity Optimization</div>
              <div>03 Operational Excellence</div>
            </div>
          </div>

        </div>
      </div>
    </main>
  )
}

export default PageFour