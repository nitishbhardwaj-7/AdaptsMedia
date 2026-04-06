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

          {/* Expertise */}
          <div className="nav-item relative py-2 group">
            
            <button className="nav-link-3d text-[#0050cb] dark:text-[#0066ff] font-bold border-b-2 border-[#0050cb] pb-1 flex items-center gap-1">
              Expertise
              <span className="material-symbols-outlined text-sm">
                keyboard_arrow_down
              </span>
            </button>

            {/* Mega Menu */}
            <div className="mega-menu absolute top-full -left-48 w-[800px] mt-4 p-8 rounded-xl bg-surface-container-lowest/95 backdrop-blur-xl shadow-[0px_32px_64px_rgba(0,0,0,0.08)] border border-outline-variant/15 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">

              <div className="grid grid-cols-12 gap-8">

                {/* Left */}
                <div className="col-span-7 space-y-6">

                  <span className="text-label-md font-bold uppercase tracking-widest text-primary opacity-60 block mb-6">
                    Core Services
                  </span>

                  {/* Item */}
                  <div className="flex gap-4 p-3 rounded-lg hover:bg-surface-container-low transition-colors cursor-pointer">
                    <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined">search</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">SEO</h4>
                      <p className="text-sm opacity-70">
                        Dominate search rankings with optimization.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 p-3 rounded-lg hover:bg-surface-container-low transition-colors cursor-pointer">
                    <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined">ads_click</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Paid Ads</h4>
                      <p className="text-sm opacity-70">
                        High-intent PPC campaigns.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 p-3 rounded-lg hover:bg-surface-container-low transition-colors cursor-pointer">
                    <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined">share</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Social Content</h4>
                      <p className="text-sm opacity-70">
                        Viral creative production strategy.
                      </p>
                    </div>
                  </div>

                </div>

                {/* Right */}
                <div className="col-span-5 flex flex-col gap-8 border-l pl-8">

                  {/* Case Study */}
                  <div className="relative aspect-video overflow-hidden rounded-lg group cursor-pointer">
                    <img
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_bayuHp1NN4KDSmQMair4_78Um_1ZrUYetzJh8Fdn0BrQQvqAgeyK3gHQZAagyUUaNbDf2tH6zTlcGhL7mO9UsWqLAmwRxguUSibMyUwvRZ_s4WrRIG2gLAeP241Xm4ZnsLZBswon96WMUmdMb-C3gWNhhP5SPBkjRIqAgnJU9i1kRrvFsY-C1J9hetxR2chYma9tfY4ouiv5TcrcFwwzYapyb1ysdu1RTYM9iilI3FtgbkIQjZPwDMcT0ovA-nvaXheBjeZlpmc"
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    />

                    <div className="absolute bottom-0 p-4 bg-gradient-to-t from-black/70 text-white">
                      <h5 className="text-sm font-bold">
                        TechNova: 300% Growth
                      </h5>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="bg-primary/5 p-6 rounded-xl border">
                    <h4 className="font-bold mb-2">Ready to Scale?</h4>
                    <p className="text-sm opacity-70 mb-3">
                      Get analysis of your digital footprint.
                    </p>
                    <a className="text-primary font-bold flex items-center gap-2">
                      Growth Audit
                      <span className="material-symbols-outlined">
                        trending_up
                      </span>
                    </a>
                  </div>

                </div>

              </div>
            </div>
          </div>

         {/* Expertise */}
          <NavBarLink
  title="Case Studies"
  sectionLabel="Recent Work"
  services={[
    { icon: "work", title: "Branding", description: "Full brand identity systems." },
    { icon: "campaign", title: "Campaigns", description: "End-to-end campaign execution." },
  ]}
  ctaTitle="See All Work"
  ctaDescription="Browse our full portfolio."
  ctaLinkText="View Portfolio"
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
  caseStudyImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
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
      description: "Data-driven campaigns to drive qualified leads and pipeline growth." 
    },
    { 
      icon: "insights", 
      title: "Revenue Analytics", 
      description: "Track, measure, and optimize marketing impact on revenue." 
    },
    { 
      icon: "hub", 
      title: "Lifecycle Marketing", 
      description: "Engage prospects across the funnel to maximize conversions and retention." 
    },
  ]}
  ctaTitle="Explore Revenue Growth"
  ctaDescription="See how we help businesses scale predictable revenue."
  ctaLinkText="View Case Studies"
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