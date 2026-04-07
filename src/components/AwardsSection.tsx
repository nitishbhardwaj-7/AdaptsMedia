import AwardCard from "./Cards/AwardCard";
import Stat from "./Stat";
import AwardCardAlt from "./Cards/AwardCardAlt";

function AwardsSection() {
  return (
    <main className="pt-2 min-h-screen">

      {/* HERO */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-10 max-w-screen-2xl mx-auto mb-16 sm:mb-20 md:mb-24 mt-16 sm:mt-20 md:mt-24">
  
        <div className="relative overflow-hidden rounded-lg sm:rounded-xl p-6 sm:p-10 md:p-16 lg:p-20 text-on-primary shadow-xl sm:shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-10 md:gap-12">
          
          <div className="relative z-10 max-w-2xl">

            <span className="inline-flex items-center gap-2 py-1 px-2 sm:px-3 bg-white/20 rounded-full text-[10px] sm:text-xs font-bold tracking-[0.15em] sm:tracking-widest uppercase mb-4 sm:mb-6 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-white"></span>
              Latest Achievement
            </span>

            <h1 className="font-headline text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-extrabold tracking-tight md:tracking-tighter leading-[1] md:leading-[0.9] mb-4 sm:mb-6 md:mb-8">
              ADAPTS MEDIA: 2025 AWARD-WINNING COMPANY.
            </h1>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl opacity-90 font-medium max-w-lg mb-6 sm:mb-8 md:mb-10 leading-relaxed">
              Recognized globally for setting the standard in kinetic digital experiences and performance-driven design.
            </p>

            <div className="flex gap-3 sm:gap-4">
              <button className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 bg-white text-primary rounded-full font-headline font-bold text-sm sm:text-base transition-transform hover:scale-105">
                View Press Release
              </button>
            </div>
        
          </div>

          <div className="relative z-10 w-full md:w-1/3 aspect-square flex items-center justify-center">

            <div className="w-full h-full bg-white/10 rounded-full border border-white/20 backdrop-blur-sm flex items-center justify-center relative animate-pulse">
              <span
                className="material-symbols-outlined text-5xl sm:text-7xl md:text-8xl lg:text-9xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                stars
              </span>
            </div>

            {/* Decorative floating elements */}
            <div className="absolute -top-2 sm:-top-3 md:-top-4 -right-2 sm:-right-3 md:-right-4 w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 bg-white/30 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 sm:-bottom-6 md:-bottom-8 left-6 sm:left-8 md:left-10 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 bg-primary-container/40 rounded-full blur-3xl"></div>

          </div>

        </div>

      </div>

      {/* GRID */}
      <section className="px-10 sm:px-6 md:px-8 lg:px-10 max-w-screen-2xl mx-auto pb-12 sm:pb-14 md:pb-16">

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 sm:mb-16 md:mb-20 gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold mb-2 sm:mb-3 md:mb-4">
              Industry Recognition
            </h2>
            <p className="font-body text-on-surface-variant md:text-lg lg:text-xl leading-relaxed opacity-70 max-w-xl text-sm sm:text-base">
              Recognized by leading platforms globally.
            </p>
          </div>

          <div className="main__action">
            <a className="main__scroll" href="#">
              <div className="main__scroll-box">
                <svg viewBox="0 0 24 24">
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M11.9997 13.1716L7.04996 8.22186L5.63574 9.63607L11.9997 16L18.3637 9.63607L16.9495 8.22186L11.9997 13.1716Z"></path>
                </svg>
              </div>
              <span className="main__scroll-text text-xs hidden md:block sm:text-sm">Scroll</span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">

          <AwardCard
            img="https://lh3.googleusercontent.com/aida-public/AB6AXuDlsZT1lW70txEZEZ8utW1OplE2iqRhgiR93tjS50co710mY1MyldzQFQoJ8r0b7mMc_UGqStTqXkXk8KzNCTR5OoOrRNzaqpq5xw3uZr6vSlqUX119qfrXtwgFPcIqfe6r2Jyb_CYSNMKULKIewUGlbgKTsZXORNMxp6GyZVTM7ru5XyuD5eZAX5xnv4anXKqy9afj3O8Y-0VJ3433Wjcb6ZvKJV743tHzkEZ0Y5lwHEudfy0C7rqGTJ5er0QdHW1rUVLbOgwkEh4"
            title="Top Digital Agency 2024"
            tag="Clutch Elite"
          />

          <AwardCardAlt
            img="https://lh3.googleusercontent.com/aida-public/AB6AXuAq0RE3QwnJVv5Hsz6enMKlcVHpmemacCFx2HMPM7ECJoHuzpH0hqLLDQn3zZHrBJqmpNrOk-QCstY9wzgb68VaJDoOtjPqQnIIfp_KHhZdxfX9Pz0UglAzuRsf93dco4iBSwY3da5_RG1FDO1JtzM0oLLL0TWCKS6xjVoXaOO2UliEMjPodvK2WcjEopegI9RJwuaos73Ia-IDTyveIzlbrfG6dT6P2EsNoIt6hVl__yjXc5C349Om3MzIs9yjehOflRkIA4Bh1Hw"
            title="Most Creative Performance"
            tag="Sortlist Verified"
            badge="Verified Partner"
            desc=""
            offset=""
          />

          <AwardCardAlt
            img="https://lh3.googleusercontent.com/aida-public/AB6AXuCrevF5J9EVbcRXNKFTfyuOh7XrhGfneY4ga5Eyoc6h2tFvgAlpTfznjcgvAoQ4z0Tih9er5LXjt-hthlggUy7k9scr1XqTZ2YMN2hgIY0kXNIdlLyYwuVaMMq3w2gwgYguVafdNvRnoPmyroez4vLwbCNzaBXRfhR3b69ighgiCAdsK0D_r9yitmW2k8NZKU4JWjesa_7OyIctx_p3P-3G8TpiTL1dqkQBDf9lEmFpBCNw5wseenYM-HRp1tF3gfk7vsLQfMTO3Gc"
            title="Local Excellence Winner"
            tag="UpCity"
            desc='Excellence In Starategic Execution'
            offset=""
            badge=""
          />

          <AwardCardAlt
            img="https://lh3.googleusercontent.com/aida-public/AB6AXuDNWtPiUmRB3C69eLGNJiIlEok1hYlvbnF1ZFvbhL9ZJwJ9zq_5BV6XQaULMfzRpcX53SSJU1tzNPdlVbu4U3js5XWVTrITezXnWTDgJ2dT7xDEvl2IzYHS4gLbIhZV7DrMl7aNqh6gh05pzVQc7OrdzSk1GMQMcSUvZ9ub-l-_o0tgiliq0VkvzpLSgOUdzbTsYeC-6SGJXnNye18b-ZZloXsSGCVc-ZveWuGJHLHkppiQHMVmRGwe64ADlhhcnKjf-GGz53uB4yE"
            title="Best Marketing Strategies"
            tag="DesignRush"
            offset=""
            desc='Global Top 10 Agency'
            badge=""
          />

          {/* BIG CARDS unchanged layout */}
          <div className="lg:col-span-2 glass-card p-6 sm:p-8 md:p-10 flex flex-col md:flex-row gap-6 sm:gap-8 border">
            <img src="..." className="w-24 sm:w-32 md:w-40" />
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">
                SOTD Honorable Mention
              </h3>
              <p className="font-body text-on-surface-variant leading-relaxed opacity-70 mb-4 text-sm sm:text-base">
                Awarded for digital craftsmanship.
              </p>
              <a className="text-primary font-bold text-sm sm:text-base">View Project →</a>
            </div>
          </div>

          <div className="lg:col-span-2 glass-card p-6 sm:p-8 md:p-10 flex flex-col md:flex-row gap-6 sm:gap-8 border">
            <img src="..." className="w-24 sm:w-32 md:w-40" />
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">
                SOTD Honorable Mention
              </h3>
              <p className="font-body text-on-surface-variant leading-relaxed opacity-70 mb-4 text-sm sm:text-base">
                Awarded for digital craftsmanship.
              </p>
              <a className="text-primary font-bold text-sm sm:text-base">View Project →</a>
            </div>
          </div>

        </div>
      </section>

      {/* STATS */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-10 max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 py-10 sm:py-12 md:py-16 border-b">

          <Stat number="15+" label="Global Awards" />
          <Stat number="4.9/5" label="Clutch Rating" />
          <Stat number="120+" label="Clients" />
          <Stat number="24/7" label="Presence" />

        </div>
      </div>

    </main>
  );
}

export default AwardsSection;