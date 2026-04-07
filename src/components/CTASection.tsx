const CTASection = () => {
  return (
    <main className="flex flex-col py-10 sm:py-12 md:py-14 lg:py-16 rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] relative overflow-hidden group mb-12 sm:mb-14 md:mb-16">
      
      {/* High-Impact CTA Section */}
      <section className="relative flex-grow flex items-center justify-center overflow-hidden py-2 sm:py-3 md:py-4 px-2">
        
        {/* Background Elements */}
        <div className="absolute inset-0 grid-overlay opacity-60"></div>
        <div className="absolute inset-0 radial-glow"></div>

        <div className="relative z-10 max-w-screen-2xl w-full flex flex-col md:flex-row items-center justify-between gap-10 sm:gap-16 md:gap-32 lg:gap-64">
          
          {/* Left Content */}
          <div className="flex-1 text-center md:text-left flex flex-col items-center md:items-start">
            
            <span className="label-md font-label text-[10px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] text-primary mb-4 sm:mb-6 block font-bold">
              Digital Acceleration
            </span>

            <h1 className="font-headline text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-extrabold tracking-tight md:tracking-tighter text-on-surface mb-6 sm:mb-8 md:mb-12 leading-[1] md:leading-[0.95]">
              READY TO<br />PLUG IN?
            </h1>

            <div className="relative group">
              <div className="absolute -inset-2 sm:-inset-3 md:-inset-4 blur-xl sm:blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <button className="relative bg-[#0066FF] text-white px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 md:py-5 rounded-full font-headline font-black text-sm sm:text-base md:text-lg lg:text-xl tracking-tight transition-all duration-300 hover:scale-[1.02]">
                REQUEST ACCESS
              </button>
            </div>

            <p className="mt-6 sm:mt-8 md:mt-12 text-on-surface-variant max-w-xs sm:max-w-sm md:max-w-md font-body text-xs sm:text-sm md:text-base leading-relaxed opacity-70">
              Join an exclusive network of high-growth brands leveraging editorial excellence for digital dominance.
            </p>

          </div>

          {/* Right Visual */}
          <div className="flex-1 relative flex justify-center items-center">

            <div className="relative w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-96 lg:h-96">
              
              {/* Orbit Rings */}
              <div className="absolute inset-0 border border-primary/10 rounded-full animate-[spin_20s_linear_infinite]"></div>
              <div className="absolute inset-8 sm:inset-10 md:inset-12 border border-primary/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>

              {/* Center Hub */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-surface-container-lowest rounded-xl sm:rounded-2xl shadow-[0px_24px_48px_rgba(0,80,203,0.1)] flex items-center justify-center rotate-12">
                  <span className="material-symbols-outlined text-primary text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                    hub
                  </span>
                </div>
              </div>

              {/* Floating Nodes */}
              <div className="absolute top-0 right-1/4 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-primary rounded-full flex items-center justify-center shadow-lg -translate-y-2 sm:-translate-y-3 md:-translate-y-4">
                <span className="material-symbols-outlined text-white text-xs sm:text-sm md:text-lg lg:text-xl">
                  bolt
                </span>
              </div>

              <div className="absolute bottom-1/4 left-0 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-surface-container-highest rounded-full flex items-center justify-center shadow-sm">
                <span className="material-symbols-outlined text-primary text-sm sm:text-lg md:text-xl lg:text-2xl">
                  insights
                </span>
              </div>

              <div className="absolute top-1/2 right-0 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-on-surface rounded-lg sm:rounded-xl flex items-center justify-center shadow-xl translate-x-2 sm:translate-x-3 md:translate-x-4">
                <span className="material-symbols-outlined text-surface text-sm sm:text-lg md:text-xl lg:text-2xl">
                  grid_view
                </span>
              </div>

            </div>

            {/* Glow Background */}
            <div className="absolute inset-0 -z-10 opacity-30 sm:opacity-40 blur-2xl sm:blur-3xl">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/20 via-transparent to-primary/5"></div>
            </div>

          </div>

        </div>

      </section>
    </main>
  );
};

export default CTASection;