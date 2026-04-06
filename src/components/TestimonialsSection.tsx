import React from "react";
import FAQItem from "./FaqItem";
import Stat from "./Stat";
import TestimonialCard from "./Cards/TestimonialCard";

function TestimonialsSection() {
  return (
    <div>

      {/* HERO */}
      <header className="max-w-[1440px] mx-auto px-8 mb-24 mt-32">
        <span className="text-xs uppercase text-primary">Digital Proof</span>

        <h1 className="text-5xl md:text-7xl font-extrabold mt-6">
          Success Stories from <br /> Our Partners
        </h1>

        <p className="mt-6 max-w-xl opacity-70">
          We build sustainable digital ecosystems through design & strategy.
        </p>
      </header>

      {/* TESTIMONIAL GRID */}
      <section className="max-w-[1440px] mx-auto px-8 grid md:grid-cols-12 gap-8">

        {/* Testimonial Card 1 */}
<div className="md:col-span-7 group">
  <div className="glass-card p-10 md:p-14 rounded-3xl h-full flex flex-col justify-between hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500">
    
    <div>
      <div className="flex justify-between items-start mb-12">
        <img
          alt="Marriott Logo"
          className="h-8 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxLSUjrQavGQtpni8LcVIiaGv87OYmAF3xMtO6ZpJ_ben-T4ciXPNQvyKQfYEX7Cwu7d2XabehSQ-MQZXBU00tegxtGQm1yQmh0VwmK_PNpEyDft_8tQCiDJ-Z5Cled5bXZQdaYtx4V-mASkuq_MpJQRcT10EGCIhDAj65Yo0o3ZdMDBgHZy-m978rQEFGip3PtydIWSUnadGbj6lzn-NIwwSzRW8_AokZ5y9Bacxky1uqfoe9mbi6Tlekip-urM5r3AuKXj1nIFM"
        />

        <span className="material-symbols-outlined text-primary text-4xl">
          format_quote
        </span>
      </div>

      <blockquote className="font-headline text-2xl md:text-3xl font-semibold text-on-surface leading-tight mb-12">
        "Electric Ethos transformed our digital footprint in the{" "}
        <span className="text-primary italic">luxury sector</span>. Their kinetic
        approach to SEO and content strategy led to a 40% increase in direct
        bookings within six months."
      </blockquote>
    </div>

    <div className="flex items-end justify-between gap-6 border-t border-outline-variant/20 pt-10">
      
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full overflow-hidden bg-surface-container-highest">
          <img
            alt="Sarah Jenkins"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAS_bs43gWm282prB8pxX7v-LcUrqOS5RhSzx2MGteFG6IOOOh85YeflVsHArTz_Z_WFSOrymzyt84U_ZDBS02v-_x8FztPU6_9PbLl-IEM9kcDjAj8CCv3ULKBrk7WJnQHjt3MuuDjgNSOe9dkSM3ITkPR9Y8_guPCIzPfObFKLZh2ZvGUq5_LzcBl88VSQK4dDmRPePLWFqZQwfli7yy5cQvBv7_aiFSYiWt4EOzuIOtId3b7uzQXsQYddraHaxd0LLu4DPl6XTA"
          />
        </div>

        <div>
          <p className="font-bold text-on-surface">Sarah Jenkins</p>
          <p className="text-sm text-on-surface-variant font-medium">
            CMO, Marriott
          </p>
        </div>
      </div>

      <div className="text-right">
        <p className="text-4xl md:text-5xl font-black font-headline text-primary tracking-tighter">
          40%
        </p>
        <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mt-1">
          Growth Index
        </p>
      </div>

    </div>
  </div>
</div>

        {/* Testimonial Card 2 */}
<div className="md:col-span-5 group">
  <div className="glass-card p-10 md:p-12 rounded-3xl h-full flex flex-col justify-between bg-white/40 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500">
    
    <div>
      <div className="flex justify-between items-start mb-12">
        <img
          alt="Samsung Logo"
          className="h-6 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuB95c8an0ODWGW65SIKhxPBti7fSa8cTyJIXzwOunwiHSs5S9teb3wSm6p0NUk7yDfv58q2s6Ie9YsGK4WkUgPIFgrnzPhp-FHMLenME0dAcajgW5f8kOxPeOViU_7Cyguj7SorccV39fgkzgVDUqHTBiCNML8sJLtzYuS5H06yQg7emjekilifmckr-KpyaqnMjjvJYaHi-Ww_NBK29AGoKnxM3ak5stZCGEfFfukI4gc3jtG1_1PZ26y-IOLm7XfZU7XTsoZ9xd8"
        />

        <span className="material-symbols-outlined text-primary text-4xl">
          data_exploration
        </span>
      </div>

      <blockquote className="font-headline text-xl md:text-2xl font-semibold text-on-surface leading-tight mb-12">
        "The precision of their{" "}
        <span className="text-primary">data analytics</span> is unmatched. We
        finally have a clear visual path of our customer journey."
      </blockquote>
    </div>

    <div className="space-y-8">
      
      <div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/10">
        <div className="flex justify-between items-end">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-1">
              Attribution Accuracy
            </p>
            <p className="font-headline text-3xl font-black text-on-surface">
              98.4%
            </p>
          </div>

          <span className="material-symbols-outlined text-primary">
            trending_up
          </span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full overflow-hidden bg-surface-container-highest">
          <img
            alt="David Park"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_r1DtqN0iPhdISnugYduku99HSQlFpjdM_Iv-P_JD1HSuN2zy3qQVwwXAUlIe70ICvUGcnAWFREEAJ9AZr4OXuOj7-DjB6VH2Tw7WodiNJaQuAIY6UPAtbj0Ie8c4CmbGkrq1HNjsbtFqBtfKoZwEQ28-POeHufwG5u6OUCiqfFDVpAgB98AB9gxskZBdqcgpSxJvEYUz5V7fzTqpWqLjjrF5Zz4_ise3Cnxio9PMzLLgBYAiJ_3Qiyci9hbf2XtArO5EcVq0iQ0"
          />
        </div>

        <div>
          <p className="font-bold text-on-surface">David Park</p>
          <p className="text-sm text-on-surface-variant font-medium">
            Head of Growth, Samsung
          </p>
        </div>
      </div>

    </div>
  </div>
</div>

      </section>

      {/* STATS */}
      <div className="max-w-[1440px] mx-auto px-8 mt-16 grid md:grid-cols-4 gap-6">
        <Stat number="200+" label="Partnerships" />
        <Stat number="12" label="Awards" />
        <Stat number="$4B" label="Revenue" />
        <Stat number="100%" label="Transparency" />
      </div>

      {/* CTA */}
      <section className="max-w-[1440px] mx-auto px-8 mt-32 text-center">
  
  <div className="bg-primary-container p-16 md:p-24 rounded-[3rem] relative overflow-hidden group">
    
    {/* Abstract Decoration */}
    <div className="absolute -right-20 -top-20 w-96 h-96 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-all duration-700"></div>

    <h2 className="font-headline text-4xl md:text-6xl font-extrabold text-white tracking-tighter mb-10 relative z-10">
      Ready to become the next success story?
    </h2>

    <div className="flex flex-col md:flex-row justify-center items-center gap-6 relative z-10">
      
      <button className="bg-white text-primary px-12 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl">
        Start Your Journey
      </button>

      <button className="text-white border-b-2 border-white/30 px-6 py-2 font-bold hover:border-white transition-all">
        View All Case Studies
      </button>

    </div>
  </div>

</section>

      {/* FAQ */}
      <section className="mt-32 mb-32 px-8 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-10">
          Frequently Asked Questions
        </h2>

        <FAQItem
          question="How do you measure ROI?"
          answer="We track full funnel attribution including CAC and LTV."
        />

        <FAQItem
          question="What platforms do you specialize in?"
          answer="Google, Meta, LinkedIn & TikTok."
        />
        <FAQItem
          question="How soon can we see results?"
          answer="Paid results in 14–30 days, SEO in 3–6 months."
        />

      </section>

    </div>
  );
}

export default TestimonialsSection;