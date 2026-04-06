

import NavBarLink from "../NavBarLink";



function Navbar() {
  
  return (
    <nav className="fixed top-0 z-50 bg-surface/70 backdrop-blur-md dark:bg-zinc-900/70 shadow-[0px_24px_48px_rgba(28,27,27,0.06)]">
      
      <div className="flex justify-between items-center w-full font-headline tracking-tight text-on-surface">

        {/* Logo */}
        <div className="flex items-center gap-2 group cursor-pointer">
         <img className="absolute top-5" width={100} src="https://adaptsmedia.com/wp-content/uploads/2026/01/Adapts-Media-logo.png" alt="" />
         
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex gap-10">

          <NavBarLink
  title="Expertise"
  sectionLabel="What We Do Best"
  services={[
    { 
      icon: "search", 
      title: "SEO Optimization", 
      description: "Boost organic rankings with technical SEO, keyword strategy, and content optimization.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71"
    },
    { 
      icon: "ads_click", 
      title: "Performance Marketing", 
      description: "Data-driven paid campaigns across Google, Meta, and other platforms.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f"
    },
    { 
      icon: "code", 
      title: "Web Development", 
      description: "Fast, scalable, and SEO-friendly websites built with modern frameworks.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
    },
    { 
      icon: "insights", 
      title: "Analytics & Tracking", 
      description: "Set up GA4, conversion tracking, and dashboards to measure performance.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71"
    },
    { 
      icon: "design_services", 
      title: "UI/UX Design", 
      description: "User-focused designs that improve engagement and conversions.",
      image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e"
    },
    { 
      icon: "speed", 
      title: "Website Performance", 
      description: "Optimize speed, Core Web Vitals, and overall site performance.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475"
    },
  ]}
  caseStudyImage="https://images.unsplash.com/photo-1707157281599-d155d1da5b4c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  caseStudyTitle="E-commerce Brand: 3X Revenue Growth"
  ctaTitle="Explore Our Expertise"
  ctaDescription="See how we help businesses scale with data-driven strategies."
  ctaLinkText="View Services"
/>

         {/* Expertise */}
         <NavBarLink
  title="Case Studies"
  sectionLabel="Recent Work"
  services={[
    {
      icon: "trending_up",
      title: "SaaS Growth Campaign",
      description: "Scaled a SaaS brand to 4X qualified leads using SEO + paid acquisition.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71"
    },
    {
      icon: "shopping_cart",
      title: "E-commerce Scaling",
      description: "Increased revenue by 3X with performance marketing and CRO optimization.",
      image: "https://images.unsplash.com/photo-1515169067865-5387ec356754"
    },
    {
      icon: "language",
      title: "SEO Traffic Boost",
      description: "Achieved 200% organic growth with technical SEO and content strategy.",
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07"
    },
    {
      icon: "public",
      title: "Global Brand Launch",
      description: "Executed multi-channel campaigns for an international product launch.",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
    },
    {
      icon: "devices",
      title: "Website Revamp",
      description: "Redesigned and developed a high-converting website with modern UX.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
    },
    {
      icon: "insights",
      title: "Conversion Optimization",
      description: "Improved conversion rates by 65% through funnel and UX improvements.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71"
    },
  ]}
  caseStudyImage="https://plus.unsplash.com/premium_photo-1681487729805-91f220c7da25?q=80&w=1418&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  caseStudyTitle="Fintech Startup: 5X User Growth in 6 Months"
  ctaTitle="Explore Case Studies"
  ctaDescription="See how we deliver measurable results across industries."
  ctaLinkText="View All Case Studies"
/>

          {/* Expertise */}
          <NavBarLink
  title="SEO & Lead Generation"
  sectionLabel="Growth Services"
  services={[
    { 
      icon: "search", 
      title: "SEO Optimization", 
      description: "Increase organic traffic and rankings with technical, on-page, and content SEO." 
    },
    { 
      icon: "ads_click", 
      title: "Lead Generation Ads", 
      description: "High-converting PPC and paid social campaigns focused on quality leads." 
    },
    { 
      icon: "group_add", 
      title: "Conversion Funnels", 
      description: "Turn visitors into customers with optimized landing pages and funnels." 
    },
    { 
      icon: "search", 
      title: "SEO Optimization", 
      description: "Increase organic traffic and rankings with technical, on-page, and content SEO." 
    },
    { 
      icon: "ads_click", 
      title: "Lead Generation Ads", 
      description: "High-converting PPC and paid social campaigns focused on quality leads." 
    },
    { 
      icon: "group_add", 
      title: "Conversion Funnels", 
      description: "Turn visitors into customers with optimized landing pages and funnels." 
    },
    { 
      icon: "search", 
      title: "SEO Optimization", 
      description: "Increase organic traffic and rankings with technical, on-page, and content SEO." 
    },
    { 
      icon: "ads_click", 
      title: "Lead Generation Ads", 
      description: "High-converting PPC and paid social campaigns focused on quality leads." 
    },
    { 
      icon: "group_add", 
      title: "Conversion Funnels", 
      description: "Turn visitors into customers with optimized landing pages and funnels." 
    },
  ]}
  caseStudyImage="https://images.unsplash.com/photo-1516383274235-5f42d6c6426d?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  caseStudyTitle="SaaS Brand: 4X Qualified Leads"
  ctaTitle="Ready to Grow?"
  ctaDescription="Get a free SEO & lead generation audit for your business."
  ctaLinkText="Get Free Audit"
/>

          {/* Expertise */}
           <NavBarLink
  title="Revenue Marketing"
  sectionLabel="Growth Solutions"
  services={[
    { 
      icon: "trending_up", 
      title: "Demand Generation", 
      description: "Multi-channel campaigns designed to generate high-quality leads and pipeline growth.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71"
    },
    { 
      icon: "ads_click", 
      title: "Performance Marketing", 
      description: "ROI-focused paid campaigns across Google, Meta, and programmatic platforms.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f"
    },
    { 
      icon: "insights", 
      title: "Revenue Analytics", 
      description: "Advanced tracking, attribution models, and dashboards to measure revenue impact.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71"
    },
    { 
      icon: "hub", 
      title: "Lifecycle Marketing", 
      description: "Nurture leads across the funnel with email, automation, and retention strategies.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
    },
    { 
      icon: "filter_alt", 
      title: "Conversion Rate Optimization", 
      description: "Optimize landing pages and funnels to increase conversions and reduce drop-offs.",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
    },
    { 
      icon: "groups", 
      title: "Customer Acquisition Strategy", 
      description: "Build scalable acquisition systems tailored to your ideal customer profile.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4"
    },
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
    { icon: "public", title: "Global Reach", description: "Worldwide audience." },
    { icon: "lightbulb", title: "Creative", description: "Standout ideas." },
    { icon: "psychology", title: "Strategy", description: "Growth-focused planning." },
    { icon: "groups", title: "Team", description: "Expert specialists." },
    { icon: "rocket_launch", title: "Scaling", description: "Fast business growth." },
    { icon: "insights", title: "Analytics", description: "Data-backed decisions." }
  ]}
  caseStudyImage="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
  caseStudyTitle="Driven by Results, Built for Growth"
  ctaTitle="Let’s Build Together"
  ctaDescription="Learn how our team can help accelerate your business."
  ctaLinkText="About Our Team"
/>

        </div>

        {/* CTA */}
        <button className="learn-more"> <span className="circle"> <span className="icon arrow"></span> </span> <span className="button-text">Learn More</span> </button>

      </div>
    </nav>
  );
}

export default Navbar;