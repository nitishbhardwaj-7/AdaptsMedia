

import PlatformCard from "./Cards/PlatformCard";

import TalentNetwork from "./TalentNetwork";
import MeasurementAnalytics from "./MeasurementAnalysis";
import CTASection from "./CTASection";

function PageSix() {


const platforms = [
  { src: "/src/assets/tik-tok.png", name: "TIKTOK" },
  { src: "/src/assets/youtube.png", name: "YOUTUBE" },
  { src: "/src/assets/meta.png", name: "META" },
  { src: "/src/assets/twitter.png", name: "X" },
  { src: "/src/assets/linkedin.png", name: "LinkedIn" },
  { src: "/src/assets/pinterest.png", name: "Pinterest" }
];

// const measurementLogos = [
//   "logoA.png",
//   "logoB.png",
//   "logoC.png",
// ];

  return (
    <main className="pb-6 relative overflow-hidden bg-grid">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-surface/0 via-surface/50 to-surface pointer-events-none" />

      <div className="max-w-screen-2xl mx-auto px-8 relative z-10">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-32">
          <div className="lg:col-span-8">
            <span className="text-primary text-xs uppercase tracking-[0.2em] mb-6 block">
              Global Network
            </span>

            <h1 className="text-6xl md:text-8xl font-black leading-[0.9]">
              BEST IN CLASS PARTNERSHIP <br />
              <span className="opacity-40">ECOSYSTEM</span>
            </h1>
          </div>

          <div className="lg:col-span-4">
            <p className="text-xl opacity-70">
              We operate at the intersection of talent, technology, and media.
            </p>
          </div>
        </div>

       <TalentNetwork/>

        {/* SOCIAL MEDIA */}
        <section className="mb-32 grid lg:grid-cols-12 gap-16">

          <div className="lg:col-span-4">
            <h2 className="text-4xl font-black text-primary mb-6">
              SOCIAL MEDIA
            </h2>

            <p className="opacity-70 mb-8">
              Backed by strategic partnerships with leading global platforms, we craft data-driven social media ecosystems that amplify reach, accelerate engagement, and convert attention into scalable revenue. From paid acquisition to organic storytelling, every interaction is engineered for performance.
            </p>

            <div className="p-6 border-l-4 border-primary bg-gray-100 rounded-xl">
              <span className="text-xs uppercase text-primary block mb-2">
                Strategy Tip
              </span>
              <p className="text-sm italic">
                Real-time optimization across 140+ markets.
              </p>
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-6">
            {platforms.map((p, i) => (
              <PlatformCard key={i} {...p} />
            ))}
          </div>

        </section>

        {/* MEASUREMENT */}
        <MeasurementAnalytics/>
        

        {/* CTA */}
        <CTASection/>
      </div>
    </main>
  );
}

export default PageSix;