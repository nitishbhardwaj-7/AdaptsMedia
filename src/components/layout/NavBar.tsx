"use client";

import { useState } from "react";
import NavBarLink from "../NavBarLink";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 z-50 bg-surface/70 backdrop-blur-md dark:bg-zinc-900/70 shadow-[0px_24px_48px_rgba(28,27,27,0.06)] w-full">
        <div className="flex justify-between items-center w-full font-headline tracking-tight text-on-surface px-2 h-16 md:h-auto max-w-screen-2xl mx-auto">

          {/* Logo */}
          <div className="flex items-center gap-2 group cursor-pointer">
            <img
              className="absolute"
              width={100}
              src="https://adaptsmedia.com/wp-content/uploads/2026/01/Adapts-Media-logo.png"
              alt=""
            />
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex gap-10">
            <NavBarLink
              title="Expertise"
              sectionLabel="What We Do Best"
              services={[
                { icon: "search", title: "SEO Optimization", description: "Boost organic rankings with technical SEO, keyword strategy, and content optimization." },
                { icon: "ads_click", title: "Performance Marketing", description: "Data-driven paid campaigns across Google, Meta, and other platforms." },
                { icon: "code", title: "Web Development", description: "Fast, scalable, and SEO-friendly websites built with modern frameworks." },
                { icon: "insights", title: "Analytics & Tracking", description: "Set up GA4, conversion tracking, and dashboards to measure performance." },
                { icon: "design_services", title: "UI/UX Design", description: "User-focused designs that improve engagement and conversions." },
                { icon: "speed", title: "Website Performance", description: "Optimize speed, Core Web Vitals, and overall site performance." },
              ]}
              caseStudyImage="https://images.unsplash.com/photo-1707157281599-d155d1da5b4c?q=80&w=1470&auto=format&fit=crop"
              caseStudyTitle="E-commerce Brand: 3X Revenue Growth"
              ctaTitle="Explore Our Expertise"
              ctaDescription="See how we help businesses scale with data-driven strategies."
              ctaLinkText="View Services"
            />
            <NavBarLink
              title="Case Studies"
              sectionLabel="Recent Work"
              services={[
                { icon: "trending_up", title: "SaaS Growth Campaign", description: "Scaled a SaaS brand to 4X qualified leads using SEO + paid acquisition." },
                { icon: "shopping_cart", title: "E-commerce Scaling", description: "Increased revenue by 3X with performance marketing and CRO optimization." },
                { icon: "language", title: "SEO Traffic Boost", description: "Achieved 200% organic growth with technical SEO and content strategy." },
                { icon: "public", title: "Global Brand Launch", description: "Executed multi-channel campaigns for an international product launch." },
                { icon: "devices", title: "Website Revamp", description: "Redesigned and developed a high-converting website with modern UX." },
                { icon: "insights", title: "Conversion Optimization", description: "Improved conversion rates by 65% through funnel and UX improvements." },
              ]}
              caseStudyImage="https://plus.unsplash.com/premium_photo-1681487729805-91f220c7da25?q=80&w=1418&auto=format&fit=crop"
              caseStudyTitle="Fintech Startup: 5X User Growth in 6 Months"
              ctaTitle="Explore Case Studies"
              ctaDescription="See how we deliver measurable results across industries."
              ctaLinkText="View All Case Studies"
            />
            <NavBarLink
              title="SEO & Lead Generation"
              sectionLabel="Growth Services"
              services={[
                { icon: "search", title: "SEO Optimization", description: "Increase organic traffic and rankings with technical, on-page, and content SEO." },
                { icon: "ads_click", title: "Lead Generation Ads", description: "High-converting PPC and paid social campaigns focused on quality leads." },
                { icon: "group_add", title: "Conversion Funnels", description: "Turn visitors into customers with optimized landing pages and funnels." },
                { icon: "search", title: "SEO Optimization", description: "Increase organic traffic and rankings with technical, on-page, and content SEO." },
                { icon: "ads_click", title: "Lead Generation Ads", description: "High-converting PPC and paid social campaigns focused on quality leads." },
                { icon: "group_add", title: "Conversion Funnels", description: "Turn visitors into customers with optimized landing pages and funnels." },
              ]}
              caseStudyImage="https://images.unsplash.com/photo-1516383274235-5f42d6c6426d?q=80&w=1474&auto=format&fit=crop"
              caseStudyTitle="SaaS Brand: 4X Qualified Leads"
              ctaTitle="Ready to Grow?"
              ctaDescription="Get a free SEO & lead generation audit for your business."
              ctaLinkText="Get Free Audit"
            />
            <NavBarLink
              title="Revenue Marketing"
              sectionLabel="Growth Solutions"
              services={[
                { icon: "trending_up", title: "Demand Generation", description: "Multi-channel campaigns designed to generate high-quality leads and pipeline growth." },
                { icon: "ads_click", title: "Performance Marketing", description: "ROI-focused paid campaigns across Google, Meta, and programmatic platforms." },
                { icon: "insights", title: "Revenue Analytics", description: "Advanced tracking, attribution models, and dashboards to measure revenue impact." },
                { icon: "hub", title: "Lifecycle Marketing", description: "Nurture leads across the funnel with email, automation, and retention strategies." },
                { icon: "filter_alt", title: "Conversion Rate Optimization", description: "Optimize landing pages and funnels to increase conversions and reduce drop-offs." },
                { icon: "groups", title: "Customer Acquisition Strategy", description: "Build scalable acquisition systems tailored to your ideal customer profile." },
              ]}
              caseStudyImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
              caseStudyTitle="B2B SaaS: Pipeline Growth in 90 Days"
              ctaTitle="Drive Predictable Revenue"
              ctaDescription="Discover how our revenue marketing strategies turn growth into measurable results."
              ctaLinkText="Explore Strategies"
            />
            <NavBarLink
              title="About Us"
              sectionLabel="Who We Are"
              services={[
                { icon: "psychology", title: "Strategy", description: "Growth-focused planning." },
                { icon: "groups", title: "Team", description: "Expert specialists." },
                { icon: "rocket_launch", title: "Scaling", description: "Fast business growth." },
                { icon: "insights", title: "Analytics", description: "Data-backed decisions." },
                { icon: "hub", title: "Automation", description: "Smart workflows." },
                { icon: "campaign", title: "Campaigns", description: "Performance marketing." },
              ]}
              caseStudyImage="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
              caseStudyTitle="Driven by Results, Built for Growth"
              ctaTitle="Let's Build Together"
              ctaDescription="Learn how our team can help accelerate your business."
              ctaLinkText="About Our Team"
            />
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <button className="learn-more">
              <span className="circle"><span className="icon arrow"></span></span>
              <span className="button-text">Learn More</span>
            </button>
          </div>

          {/* Mobile: Hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 z-[110]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-on-surface transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-on-surface transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-on-surface transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>

        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[100] bg-surface/95 backdrop-blur-xl md:hidden flex flex-col pt-20 px-6 overflow-y-auto">

          {/* Close button */}
          <button
            className="absolute top-5 right-6 text-on-surface"
            onClick={() => setMobileOpen(false)}
          >
            <span className="material-symbols-outlined text-3xl">close</span>
          </button>

          {/* Mobile Nav Items */}
          <div className="flex flex-col gap-0 mt-4">
            {[
              "Expertise",
              "Case Studies",
              "SEO & Lead Generation",
              "Revenue Marketing",
              "About Us",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center justify-between py-5 border-b border-outline-variant/20 cursor-pointer group"
                onClick={() => setMobileOpen(false)}
              >
                <span className="font-headline font-bold text-xl text-on-surface group-hover:text-primary transition-colors">
                  {item}
                </span>
                <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">
                  arrow_forward
                </span>
              </div>
            ))}
          </div>

          {/* Mobile CTA */}
          <div className="mt-10">
            <button className="learn-more w-full" onClick={() => setMobileOpen(false)}>
              <span className="circle"><span className="icon arrow"></span></span>
              <span className="button-text">Learn More</span>
            </button>
          </div>

        </div>
      )}
    </>
  );
}

export default Navbar;