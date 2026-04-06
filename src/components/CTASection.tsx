import React from "react";

const CTASection = () => {
  return (
    <main className="flex flex-col py-16 rounded-[3rem] relative overflow-hidden group mb-16">
      
      {/* High-Impact CTA Section */}
      <section className="relative flex-grow flex items-center justify-center overflow-hidden py-4 px-2">
        
        {/* Background Elements */}
        <div className="absolute inset-0 grid-overlay opacity-60"></div>
        <div className="absolute inset-0 radial-glow"></div>

        <div className="relative z-10 max-w-screen-2xl w-full flex flex-col md:flex-row items-center justify-between gap-64">
          
          {/* Left Content */}
          <div className="flex-1 text-center md:text-left flex flex-col items-center md:items-start">
            
            <span className="label-md font-label uppercase tracking-[0.2em] text-primary mb-6 block font-bold">
              Digital Acceleration
            </span>

            <h1 className="font-headline text-5xl md:text-8xl font-extrabold tracking-tighter text-on-surface mb-12 leading-[0.95]">
              READY TO<br />PLUG IN?
            </h1>

            <div className="relative group">
              <div className="absolute -inset-4 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <button className="relative bg-[#0066FF] text-white px-12 py-5 rounded-full font-headline font-black text-xl tracking-tight transition-all duration-300 hover:scale-[1.02]">
                REQUEST ACCESS
              </button>
            </div>

            <p className="mt-12 text-on-surface-variant max-w-md font-body leading-relaxed opacity-70">
              Join an exclusive network of high-growth brands leveraging editorial excellence for digital dominance.
            </p>

          </div>

          {/* Right Visual */}
          <div className="flex-1 relative flex justify-center items-center">

            <div className="relative w-72 h-72 md:w-96 md:h-96">
              
              {/* Orbit Rings */}
              <div className="absolute inset-0 border border-primary/10 rounded-full animate-[spin_20s_linear_infinite]"></div>
              <div className="absolute inset-12 border border-primary/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>

              {/* Center Hub */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 bg-surface-container-lowest rounded-2xl shadow-[0px_24px_48px_rgba(0,80,203,0.1)] flex items-center justify-center rotate-12">
                  <span className="material-symbols-outlined text-primary text-5xl">
                    hub
                  </span>
                </div>
              </div>

              {/* Floating Nodes */}
              <div className="absolute top-0 right-1/4 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg -translate-y-4">
                <span className="material-symbols-outlined text-white text-xl">
                  bolt
                </span>
              </div>

              <div className="absolute bottom-1/4 left-0 w-16 h-16 bg-surface-container-highest rounded-full flex items-center justify-center shadow-sm">
                <span className="material-symbols-outlined text-primary text-2xl">
                  insights
                </span>
              </div>

              <div className="absolute top-1/2 right-0 w-14 h-14 bg-on-surface rounded-xl flex items-center justify-center shadow-xl translate-x-4">
                <span className="material-symbols-outlined text-surface text-2xl">
                  grid_view
                </span>
              </div>

            </div>

            {/* Glow Background */}
            <div className="absolute inset-0 -z-10 opacity-40 blur-3xl">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/20 via-transparent to-primary/5"></div>
            </div>

          </div>

        </div>

        {/* Bottom Accents */}

      </section>
    </main>
  );
};

export default CTASection;