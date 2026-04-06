import React from "react";
import AwardCard from "./Cards/AwardCard";
import StatCard from "./Cards/StatCard";
import Stat from "./Stat";
import AwardCardAlt from "./Cards/AwardCardAlt";

function AwardsSection() {
  return (
    <main className="pt-2 min-h-screen">

      {/* HERO */}
      <div className="max-w-[1440px] px-2 mx-auto mb-24 mt-24">
  
  <div className="relative overflow-hidden rounded-xl p-12 md:p-20 text-on-primary shadow-2xl flex flex-col md:flex-row items-center justify-between gap-12">
    
    <div className="relative z-10 max-w-2xl">

      <span className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 rounded-full text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-md">
        <span className="w-2 h-2 rounded-full bg-white"></span>
        Latest Achievement
      </span>

      <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter leading-[0.9] mb-8">
        ADAPTS MEDIA: 2025 AWARD-WINNING COMPANY.
      </h1>

      <p className="text-xl opacity-90 font-medium max-w-lg mb-10 leading-relaxed">
        Recognized globally for setting the standard in kinetic digital experiences and performance-driven design.
      </p>

      <div className="flex gap-4">
        <button className="px-8 py-4 bg-white text-primary rounded-full font-headline font-bold transition-transform hover:scale-105">
          View Press Release
        </button>
      </div>

    </div>

    <div className="relative z-10 w-full md:w-1/3 aspect-square flex items-center justify-center">

      <div className="w-full h-full bg-white/10 rounded-full border border-white/20 backdrop-blur-sm flex items-center justify-center relative animate-pulse">
        <span
          className="material-symbols-outlined text-9xl"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          stars
        </span>
      </div>

      {/* Decorative floating elements */}
      <div className="absolute -top-4 -right-4 w-12 h-12 bg-white/30 rounded-full blur-xl"></div>
      <div className="absolute -bottom-8 left-10 w-24 h-24 bg-primary-container/40 rounded-full blur-3xl"></div>

    </div>

  </div>

</div>

      {/* GRID */}
      <section className="max-w-[1440px] mx-auto px-8 pb-32">

        <div className="flex justify-between items-end mb-20">
          <div>
            <h2 className="text-4xl md:text-6xl font-extrabold mb-4">
              Industry Recognition
            </h2>
            <p className="opacity-70 max-w-xl">
              Recognized by leading platforms globally.
            </p>
          </div>
          <span className="text-primary">↓ Scroll</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">

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
          />

          <AwardCardAlt
            img="https://lh3.googleusercontent.com/aida-public/AB6AXuCrevF5J9EVbcRXNKFTfyuOh7XrhGfneY4ga5Eyoc6h2tFvgAlpTfznjcgvAoQ4z0Tih9er5LXjt-hthlggUy7k9scr1XqTZ2YMN2hgIY0kXNIdlLyYwuVaMMq3w2gwgYguVafdNvRnoPmyroez4vLwbCNzaBXRfhR3b69ighgiCAdsK0D_r9yitmW2k8NZKU4JWjesa_7OyIctx_p3P-3G8TpiTL1dqkQBDf9lEmFpBCNw5wseenYM-HRp1tF3gfk7vsLQfMTO3Gc"
            title="Local Excellence Winner"
            tag="UpCity"
            desc='Excellence In Starategic Execution'
            
          />

          <AwardCardAlt
            img="https://lh3.googleusercontent.com/aida-public/AB6AXuDNWtPiUmRB3C69eLGNJiIlEok1hYlvbnF1ZFvbhL9ZJwJ9zq_5BV6XQaULMfzRpcX53SSJU1tzNPdlVbu4U3js5XWVTrITezXnWTDgJ2dT7xDEvl2IzYHS4gLbIhZV7DrMl7aNqh6gh05pzVQc7OrdzSk1GMQMcSUvZ9ub-l-_o0tgiliq0VkvzpLSgOUdzbTsYeC-6SGJXnNye18b-ZZloXsSGCVc-ZveWuGJHLHkppiQHMVmRGwe64ADlhhcnKjf-GGz53uB4yE"
            title="Best Marketing Strategies"
            tag="DesignRush"
            desc='Global Top 10 Agency'
          />

          {/* BIG CARD */}
          <div className="lg:col-span-2 glass-card p-10 flex flex-col md:flex-row gap-8 border">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVV0M2hVeFyc4go8fcR9nrsQw4wdIEUAa761ka7XGG5hr31EXZDrhZDS9x-_Tq98OCIG6dGXvFGvNzU3G2Ds597f9Bogxbu7HJ01uK9MOqs26H4kTNwy_yH68HxEGDTZni_dyAMWCLZiOlO5aLeRuScddWA_0WDIz8bLwCh2s7mWsoY5L92jGiSlklf4TA6_cscwmfq_ksFQDpY0v6C7sDQ5riJE0FquHZ7MpLCdRVUpALb6wwzI1oMPJrf8T1I1wfRkOhoflT6CE"
              className="w-40"
            />
            <div>
              <h3 className="text-2xl font-bold mb-2">
                SOTD Honorable Mention
              </h3>
              <p className="opacity-70 mb-4">
                Awarded for digital craftsmanship.
              </p>
              <a className="text-primary font-bold">View Project →</a>
            </div>
          </div>

          <div className="lg:col-span-2 glass-card p-10 flex flex-col md:flex-row gap-8 border">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVV0M2hVeFyc4go8fcR9nrsQw4wdIEUAa761ka7XGG5hr31EXZDrhZDS9x-_Tq98OCIG6dGXvFGvNzU3G2Ds597f9Bogxbu7HJ01uK9MOqs26H4kTNwy_yH68HxEGDTZni_dyAMWCLZiOlO5aLeRuScddWA_0WDIz8bLwCh2s7mWsoY5L92jGiSlklf4TA6_cscwmfq_ksFQDpY0v6C7sDQ5riJE0FquHZ7MpLCdRVUpALb6wwzI1oMPJrf8T1I1wfRkOhoflT6CE"
              className="w-40"
            />
            <div>
              <h3 className="text-2xl font-bold mb-2">
                SOTD Honorable Mention
              </h3>
              <p className="opacity-70 mb-4">
                Awarded for digital craftsmanship.
              </p>
              <a className="text-primary font-bold">View Project →</a>
            </div>
          </div>

        </div>
      </section>

      {/* STATS */}
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16 border-y">

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