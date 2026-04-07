"use client";

import { useState, useEffect, useRef } from "react";
import FAQItem from "./FAQItem";
import Stat from "./Stat";

const testimonialSets = [
  {
    card1: {
      logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuDxLSUjrQavGQtpni8LcVIiaGv87OYmAF3xMtO6ZpJ_ben-T4ciXPNQvyKQfYEX7Cwu7d2XabehSQ-MQZXBU00tegxtGQm1yQmh0VwmK_PNpEyDft_8tQCiDJ-Z5Cled5bXZQdaYtx4V-mASkuq_MpJQRcT10EGCIhDAj65Yo0o3ZdMDBgHZy-m978rQEFGip3PtydIWSUnadGbj6lzn-NIwwSzRW8_AokZ5y9Bacxky1uqfoe9mbi6Tlekip-urM5r3AuKXj1nIFM",
      logoAlt: "Marriott Logo",
      icon: "format_quote",
      quote: `"Electric Ethos transformed our digital footprint in the <primary>luxury sector</primary>. Their kinetic approach to SEO and content strategy led to a 40% increase in direct bookings within six months."`,
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAS_bs43gWm282prB8pxX7v-LcUrqOS5RhSzx2MGteFG6IOOOh85YeflVsHArTz_Z_WFSOrymzyt84U_ZDBS02v-_x8FztPU6_9PbLl-IEM9kcDjAj8CCv3ULKBrk7WJnQHjt3MuuDjgNSOe9dkSM3ITkPR9Y8_guPCIzPfObFKLZh2ZvGUq5_LzcBl88VSQK4dDmRPePLWFqZQwfli7yy5cQvBv7_aiFSYiWt4EOzuIOtId3b7uzQXsQYddraHaxd0LLu4DPl6XTA",
      name: "Sarah Jenkins",
      role: "CMO, Marriott",
      stat: "40%",
      statLabel: "Growth Index",
    },
    card2: {
      logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuB95c8an0ODWGW65SIKhxPBti7fSa8cTyJIXzwOunwiHSs5S9teb3wSm6p0NUk7yDfv58q2s6Ie9YsGK4WkUgPIFgrnzPhp-FHMLenME0dAcajgW5f8kOxPeOViU_7Cyguj7SorccV39fgkzgVDUqHTBiCNML8sJLtzYuS5H06yQg7emjekilifmckr-KpyaqnMjjvJYaHi-Ww_NBK29AGoKnxM3ak5stZCGEfFfukI4gc3jtG1_1PZ26y-IOLm7XfZU7XTsoZ9xd8",
      logoAlt: "Samsung Logo",
      icon: "bolt",
      quote: `"The precision of their <primary>data analytics</primary> is unmatched. We finally have a clear visual path of our customer journey."`,
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      name: "David Park",
      role: "Head of Growth, Samsung",
      stat: "98.4%",
      statLabel: "Attribution Accuracy",
    },
  },
  {
    card1: {
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png",
      logoAlt: "Google Logo",
      icon: "search",
      quote: `"Their <primary>growth strategy</primary> completely changed how we approach B2B marketing. Pipeline increased by 65% in just one quarter."`,
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      name: "Amanda Lee",
      role: "VP Marketing, Google",
      stat: "65%",
      statLabel: "Pipeline Growth",
    },
    card2: {
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png",
      logoAlt: "Amazon Logo",
      icon: "bolt",
      quote: `"The team delivered <primary>exceptional results</primary> in record time. Our conversion rate doubled within the first two months."`,
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      name: "James Carter",
      role: "Director of eCommerce, Amazon",
      stat: "2x",
      statLabel: "Conversion Rate",
    },
  },
  {
    card1: {
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png",
      logoAlt: "Netflix Logo",
      icon: "play_circle",
      quote: `"Working with this team gave us an <primary>unfair advantage</primary>. Our subscriber acquisition cost dropped by 38% while quality improved."`,
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      name: "Priya Sharma",
      role: "Growth Lead, Netflix",
      stat: "38%",
      statLabel: "Lower CAC",
    },
    card2: {
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1200px-Microsoft_logo.svg.png",
      logoAlt: "Microsoft Logo",
      icon: "cloud",
      quote: `"Their <primary>content strategy</primary> positioned us as the definitive voice in enterprise cloud. Organic traffic tripled in 6 months."`,
      avatar: "https://randomuser.me/api/portraits/men/75.jpg",
      name: "Tom Richards",
      role: "CMO, Microsoft Azure",
      stat: "3x",
      statLabel: "Organic Traffic",
    },
  },
  {
    card1: {
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/1200px-IBM_logo.svg.png",
      logoAlt: "IBM Logo",
      icon: "psychology",
      quote: `"The <primary>AI-powered insights</primary> they delivered transformed our entire go-to-market strategy. Revenue up 52% year over year."`,
      avatar: "https://randomuser.me/api/portraits/women/21.jpg",
      name: "Claire Dupont",
      role: "Chief Strategy Officer, IBM",
      stat: "52%",
      statLabel: "YoY Revenue",
    },
    card2: {
      logo: "https://cdn.worldvectorlogo.com/logos/shopify.svg",
      logoAlt: "Shopify Logo",
      icon: "storefront",
      quote: `"Remarkable <primary>e-commerce expertise</primary>. Our merchant acquisition campaigns outperformed every benchmark we had set."`,
      avatar: "https://randomuser.me/api/portraits/men/54.jpg",
      name: "Ravi Patel",
      role: "Head of Partnerships, Shopify",
      stat: "4.1x",
      statLabel: "ROAS",
    },
  },
  {
    card1: {
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Notion-logo.svg/1200px-Notion-logo.svg.png",
      logoAlt: "Notion Logo",
      icon: "edit_note",
      quote: `"They understood our <primary>product-led growth</primary> model instantly. Our activation rate improved by 47% within the first 90 days."`,
      avatar: "https://randomuser.me/api/portraits/women/33.jpg",
      name: "Yuki Tanaka",
      role: "Head of Growth, Notion",
      stat: "47%",
      statLabel: "Activation Rate",
    },
    card2: {
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/1200px-LinkedIn_Logo.svg.png",
      logoAlt: "LinkedIn Logo",
      icon: "group",
      quote: `"Their <primary>B2B demand generation</primary> playbook is world class. We saw a 3x increase in qualified leads within the first month."`,
      avatar: "https://randomuser.me/api/portraits/men/11.jpg",
      name: "Marcus Webb",
      role: "VP Sales, LinkedIn",
      stat: "3x",
      statLabel: "Qualified Leads",
    },
  },
];

const faqSets = [
  [
    {
      question: "How do you measure ROI?",
      answer: "Our proprietary attribution model tracks every touchpoint from first click to final conversion. We integrate directly with your CRM to prove exact revenue impact, moving beyond simple vanity metrics like impressions and likes.",
      col: 1, defaultOpen: true,
    },
    {
      question: "What platforms do you specialize in?",
      answer: "We are ecosystem agnostic but maintain deep vertical expertise in Meta, Google, LinkedIn, and TikTok. Our strategy prioritizes the platforms where your specific high-value audience segments are most active.",
      col: 1, defaultOpen: false,
    },
    {
      question: "How soon can we see results?",
      answer: "Immediate gains are often identified within the first 14 days during our optimization phase. Sustainable, scaled growth typically stabilizes within the first 60 to 90 days as we refine the audience-to-creative feedback loop.",
      col: 2, defaultOpen: true,
    },
    {
      question: "What is the Kinetic Growth Audit?",
      answer: "It's our deep-dive diagnostic of your current digital presence. We analyze funnel efficiency, creative resonance, and technical infrastructure to provide a roadmap of immediate opportunities and long-term scaling levers.",
      col: 2, defaultOpen: false,
    },
  ],
  [
    {
      question: "Do you offer custom pricing?",
      answer: "Yes, every engagement is scoped based on your business size, growth stage, and specific objectives. We don't believe in one-size-fits-all retainers — your investment should match your ambition.",
      col: 1, defaultOpen: true,
    },
    {
      question: "Can we pause our campaign?",
      answer: "Absolutely. We operate with full flexibility. Campaigns can be paused or restructured with 48 hours notice, ensuring you're never locked into a strategy that no longer fits your business reality.",
      col: 1, defaultOpen: false,
    },
    {
      question: "Do you sign NDAs?",
      answer: "Yes, we sign mutual NDAs before any project kickoff. Confidentiality is a cornerstone of every client relationship we build.",
      col: 2, defaultOpen: true,
    },
    {
      question: "Who owns the creative assets?",
      answer: "You do — 100%. All creative assets, strategies, and data are transferred to you upon project completion. We believe in building your brand equity, not dependency.",
      col: 2, defaultOpen: false,
    },
  ],
  [
    {
      question: "What industries do you work with?",
      answer: "We have deep vertical expertise in luxury, enterprise tech, e-commerce, healthcare, and financial services. Each vertical requires a distinct playbook, and we've built them all.",
      col: 1, defaultOpen: true,
    },
    {
      question: "Do you provide monthly reports?",
      answer: "Yes, you receive detailed performance dashboards every month with clear commentary on what's working, what's being optimized, and what the next 30-day plan looks like.",
      col: 1, defaultOpen: false,
    },
    {
      question: "What's your average client retention?",
      answer: "Over 90% of our clients renew annually. We measure our success by the longevity of our partnerships, not the volume of new logos.",
      col: 2, defaultOpen: true,
    },
    {
      question: "How large is your team?",
      answer: "We have 80+ specialists across strategy, design, paid media, SEO, and data analytics — all working as an integrated unit rather than siloed departments.",
      col: 2, defaultOpen: false,
    },
  ],
  [
    {
      question: "Is there a minimum contract length?",
      answer: "Our minimum engagement is 3 months. Meaningful growth requires time to test, learn, and optimize. We're transparent about this because we want results, not just revenue.",
      col: 1, defaultOpen: true,
    },
    {
      question: "Do you offer a free audit?",
      answer: "Yes, we offer a complimentary Kinetic Digital Audit for qualified prospects. It's a no-strings diagnostic of your current funnel with actionable recommendations you can implement immediately.",
      col: 1, defaultOpen: false,
    },
    {
      question: "How do we get started?",
      answer: "Book a discovery call and we'll map out your custom growth strategy within 48 hours. No lengthy onboarding decks — just a clear, actionable plan from day one.",
      col: 2, defaultOpen: true,
    },
    {
      question: "Do you work with startups?",
      answer: "Yes, we have specific growth packages designed for early-stage companies that need to move fast and prove traction. We've helped multiple startups scale from seed to Series B.",
      col: 2, defaultOpen: false,
    },
  ],
  [
    {
      question: "What makes your approach different?",
      answer: "We combine creative intuition with rigorous data science. Every campaign is built on a foundation of deep audience intelligence, tested creative frameworks, and full-funnel attribution — not guesswork.",
      col: 1, defaultOpen: true,
    },
    {
      question: "Do you handle creative production?",
      answer: "Yes, we have an in-house creative studio that produces everything from static ads to full video campaigns. Strategy and creative are built together, not in isolation.",
      col: 1, defaultOpen: false,
    },
    {
      question: "Can you work with our existing agency?",
      answer: "Absolutely. We integrate seamlessly with existing agency partners and internal teams. We're collaborative by nature and ego-free by design.",
      col: 2, defaultOpen: true,
    },
    {
      question: "What technology stack do you use?",
      answer: "We work across the full martech landscape including HubSpot, Salesforce, Klaviyo, Segment, and custom data pipelines. We meet you where your stack is and optimize from there.",
      col: 2, defaultOpen: false,
    },
  ],
];

function Quote({ text }: { text: string }) {
  const parts = text.split(/(<primary>.*?<\/primary>)/g);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith("<primary>")) {
          const inner = part.replace(/<\/?primary>/g, "");
          return <span key={i} className="text-primary italic">{inner}</span>;
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}

function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [fade, setFade] = useState(true);

  const [faqIndex, setFaqIndex] = useState(0);
  const [faqFade, setFaqFade] = useState(true);
  const isFaqHoveredRef = useRef(false); // ← ref instead of state

  // Testimonial rotation — unchanged
  useEffect(() => {
    if (isHovered) return;
    let timeout: ReturnType<typeof setTimeout>;
    const interval = setInterval(() => {
      setFade(false);
      timeout = setTimeout(() => {
        setIndex((prev) => (prev + 1) % testimonialSets.length);
        setFade(true);
      }, 300);
    }, 3000);
    return () => { clearInterval(interval); clearTimeout(timeout); };
  }, [isHovered]);

  // FAQ rotation — uses ref, never restarts
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const interval = setInterval(() => {
      if (isFaqHoveredRef.current) return; // ← skip if hovered, don't restart
      setFaqFade(false);
      timeout = setTimeout(() => {
        setFaqIndex((prev) => (prev + 1) % faqSets.length);
        setFaqFade(true);
      }, 300);
    }, 3000);
    return () => { clearInterval(interval); clearTimeout(timeout); };
  }, []); // ← empty deps, runs once only

  const { card1, card2 } = testimonialSets[index];
  const currentFaqs = faqSets[faqIndex];
  const col1Faqs = currentFaqs.filter((f) => f.col === 1);
  const col2Faqs = currentFaqs.filter((f) => f.col === 2);

  const goTo = (i: number) => {
    setFade(false);
    setTimeout(() => { setIndex(i); setFade(true); }, 300);
  };

  const goToFaq = (i: number) => {
    setFaqFade(false);
    setTimeout(() => { setFaqIndex(i); setFaqFade(true); }, 300);
  };

  return (
    <div>

      {/* HERO */}
<header className="px-10 sm:px-6 md:px-8 lg:px-10 max-w-screen-2xl mx-auto mb-16 sm:mb-20 md:mb-24 mt-20 sm:mt-24 md:mt-32">
  <span className="text-[10px] sm:text-xs uppercase text-primary">Digital Proof</span>

  <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-extrabold mt-4 sm:mt-6 leading-[1] md:leading-tight">
    Success Stories from <br /> Our Partners
  </h1>

  <p className="mt-4 sm:mt-6 max-w-xl text-xs sm:text-sm md:text-base opacity-70">
    We build sustainable digital ecosystems through design & strategy.
  </p>
</header>

{/* TESTIMONIAL GRID */}
<section
  onMouseEnter={() => setIsHovered(true)}
  onMouseLeave={() => setIsHovered(false)}
>
  <div className={`px-4 sm:px-6 md:px-8 lg:px-10 max-w-screen-2xl mx-auto grid md:grid-cols-12 gap-4 sm:gap-6 md:gap-8 transition-opacity duration-300 ${fade ? "opacity-100" : "opacity-0"}`}>

    {/* Card 1 */}
    <div className="md:col-span-7 group">
      <div className="glass-card p-6 sm:p-8 md:p-12 lg:p-14 rounded-2xl sm:rounded-3xl h-full flex flex-col justify-between hover:-translate-y-2 shadow-xl sm:shadow-2xl transition-all duration-500">

        <div>
          <div className="flex justify-between items-start mb-6 sm:mb-8 md:mb-12">
            <img alt={card1.logoAlt} className="h-6 sm:h-7 md:h-8" src={card1.logo} />
            <span className="material-symbols-outlined text-primary text-2xl sm:text-3xl md:text-4xl">
              {card1.icon}
            </span>
          </div>

          <blockquote className="font-headline text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold leading-tight mb-6 sm:mb-8 md:mb-10">
            <Quote text={card1.quote} />
          </blockquote>
        </div>

        <div className="flex items-end justify-between gap-4 sm:gap-6 border-t border-outline-variant/20 pt-4">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden">
              <img alt={card1.name} className="w-full h-full object-cover" src={card1.avatar} />
            </div>
            <div>
              <p className="font-bold text-sm sm:text-base">{card1.name}</p>
              <p className="text-xs sm:text-sm opacity-70">{card1.role}</p>
            </div>
          </div>

          <div className="text-right">
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-primary">
              {card1.stat}
            </p>
            <p className="text-[9px] sm:text-[10px] uppercase mt-1 opacity-70">
              {card1.statLabel}
            </p>
          </div>
        </div>

      </div>
    </div>

    {/* Card 2 */}
    <div className="md:col-span-5 group">
      <div className="glass-card p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl sm:rounded-3xl h-full flex flex-col justify-between">

        <div>
          <div className="flex justify-between items-start mb-6 sm:mb-8 md:mb-12">
            <img alt={card2.logoAlt} className="h-5 sm:h-6" src={card2.logo} />
            <span className="material-symbols-outlined text-primary text-2xl sm:text-3xl md:text-4xl">
              {card2.icon}
            </span>
          </div>

          <blockquote className="font-headline text-base sm:text-lg md:text-xl lg:text-2xl font-semibold leading-tight mb-6 sm:mb-8 md:mb-12">
            <Quote text={card2.quote} />
          </blockquote>
        </div>

        <div className="space-y-4 sm:space-y-6">
          <div className="bg-surface-container-lowest p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl">
            <div className="flex justify-between items-end">
              <div>
                <p className="text-[9px] sm:text-[10px] uppercase opacity-70 mb-1">
                  {card2.statLabel}
                </p>
                <p className="text-xl sm:text-2xl md:text-3xl font-black">
                  {card2.stat}
                </p>
              </div>
              <span className="material-symbols-outlined text-primary text-sm sm:text-base">
                trending_up
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden">
              <img alt={card2.name} className="w-full h-full object-cover" src={card2.avatar} />
            </div>
            <div>
              <p className="font-bold text-sm sm:text-base">{card2.name}</p>
              <p className="text-xs sm:text-sm opacity-70">{card2.role}</p>
            </div>
          </div>
        </div>

      </div>
    </div>

  </div>

  {/* dots */}
  <div className="flex justify-center gap-2 mt-6 sm:mt-8">
    {testimonialSets.map((_, i) => (
      <button
        key={i}
        onClick={() => goTo(i)}
        className={`h-2 rounded-full transition-all duration-300 ${i === index ? "bg-primary w-6" : "bg-primary/30 w-2"}`}
      />
    ))}
  </div>
</section>

{/* STATS */}
<div className="px-4 sm:px-6 md:px-8 lg:px-10 max-w-screen-2xl mx-auto mt-16 sm:mt-20 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
  <Stat number="200+" label="Partnerships" />
  <Stat number="12" label="Awards" />
  <Stat number="$4B" label="Revenue" />
  <Stat number="100%" label="Transparency" />
</div>

{/* CTA */}
<section className="px-4 sm:px-6 md:px-8 lg:px-10 max-w-screen-2xl mx-auto mt-20 sm:mt-24 md:mt-32 text-center">
  <div className="bg-primary-container p-8 sm:p-12 md:p-16 lg:p-24 rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem]">
    <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-6xl font-extrabold text-white mb-6 sm:mb-8 md:mb-10">
      Ready to become the next success story?
    </h2>

    <div className="flex flex-col md:flex-row justify-center items-center gap-4 sm:gap-6">
      <button className="bg-white text-primary px-6 sm:px-8 md:px-12 py-3 sm:py-4 md:py-5 rounded-full font-bold text-sm sm:text-base md:text-lg">
        Start Your Journey
      </button>
      <button className="text-white border-b-2 border-white/30 px-4 sm:px-6 py-2 text-sm sm:text-base">
        View All Case Studies
      </button>
    </div>
  </div>
</section>

{/* FAQ */}
<main className="relative pt-20 sm:pt-24 md:pt-32 pb-16 sm:pb-20 md:pb-24 overflow-hidden">
  <section className="max-w-screen-2xl mx-auto px-10 sm:px-6 md:px-8 lg:px-10">

    <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-10 sm:mb-12 md:mb-16">
      <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-extrabold leading-tight">
        Frequently Asked <br />
        <span className="text-primary italic">Questions</span>
      </h1>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
      <div className="space-y-4 sm:space-y-6">
        {col1Faqs.map((faq, i) => (
          <FAQItem key={i} {...faq} />
        ))}
      </div>

      <div className="space-y-4 sm:space-y-6">
        {col2Faqs.map((faq, i) => (
          <FAQItem key={i} {...faq} />
        ))}
      </div>
    </div>

  </section>
</main>

    </div>
  );
}

export default TestimonialsSection;