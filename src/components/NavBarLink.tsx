const NavBarLink = ({
  title,
  sectionLabel = "Core Services",
  services,
  caseStudyImage,
  caseStudyTitle,
  ctaTitle = "Ready to Scale?",
  ctaDescription = "Get analysis of your digital footprint.",
  ctaLinkText = "Growth Audit",
}) => {
  return (
    <div className="nav-item relative py-2 group">
      
      {/* TITLE (no button) */}
      <div className="nav-link-3d tracking-wide text-lg text-black hover:text-[#0066ff] border-black pb-1 flex items-center gap-1 cursor-pointer">
        {title}

        {/* Arrow */}
        <span className="material-symbols-outlined text-sm text-[#0066ff] transition-transform duration-300 group-hover:rotate-180">
          keyboard_arrow_down
        </span>
      </div>

      {/* Mega Menu */}
      <div className="fixed top-[90px] left-1/2 -translate-x-1/2 w-[90vw] px-6 max-w-screen-2xl mx-auto mt-6 p-10 rounded-2xl bg-surface-container-lowest/95 backdrop-blur-xl shadow-[0px_40px_80px_rgba(0,0,0,0.12)] border border-outline-variant/15 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">

        <div className="grid grid-cols-12 gap-10">

          {/* LEFT SIDE */}
          <div className="col-span-8">

            <div className="flex items-center gap-3 mb-8">
             
              <span className="text-xs font-black uppercase tracking-[0.2em] text-primary">
                {sectionLabel}
              </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {services.map((service, i) => (
                <div
                  key={i}
                  className="group/item flex flex-col gap-3 p-4 rounded-xl border border-transparent hover:border-primary/10 hover:bg-primary/5 transition-all duration-200 cursor-pointer"
                >
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover/item:bg-primary group-hover/item:text-white transition-all duration-200">
                    <span className="material-symbols-outlined text-[18px]">
                      {service.icon}
                    </span>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm mb-1 group-hover/item:text-primary">
                      {service.title}
                    </h4>
                    <p className="text-[11px] opacity-50 line-clamp-2">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="col-span-4 flex flex-col gap-6 border-l border-outline-variant/20 pl-10">

            {/* Case Study */}
            {caseStudyImage && (
              <div className="relative h-[200px] overflow-hidden rounded-2xl group/img cursor-pointer shadow-md">
                <img
                  src={caseStudyImage}
                  alt="case study"
                  className="w-full h-full object-cover group-hover/img:scale-105 transition duration-500"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Badge */}
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-bold uppercase tracking-widest bg-primary text-white px-2.5 py-1 rounded-full">
                    Case Study
                  </span>
                </div>

                {caseStudyTitle && (
                  <div className="absolute bottom-0 p-5 w-full">
                    <h5 className="text-sm font-bold text-white leading-snug mb-1">{caseStudyTitle}</h5>
                    <div className="flex items-center gap-1 text-white/60 text-[11px] font-medium">
                      <span>Read Story</span>
                      <span className="material-symbols-outlined text-[12px]">arrow_forward</span>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* CTA */}
            <div className="relative overflow-hidden bg-gradient-to-br from-primary/8 to-primary/3 p-6 rounded-2xl border border-primary/10 group/cta cursor-pointer">

              {/* Decorative circle */}
              <div className="absolute -right-6 -top-6 w-24 h-24 bg-primary/5 rounded-full" />
              <div className="absolute -right-2 -top-2 w-12 h-12 bg-primary/8 rounded-full" />

              <div className="relative z-10">
                <div className="w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-primary text-[18px]">rocket_launch</span>
                </div>

                <h4 className="font-bold text-base mb-1.5">{ctaTitle}</h4>
                <p className="text-xs opacity-60 mb-5 leading-relaxed">{ctaDescription}</p>

                <div className="flex items-center justify-between">
                  <a className="flex items-center gap-2 text-primary font-bold text-sm group-hover/cta:gap-3 transition-all duration-200">
                    {ctaLinkText}
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </a>

                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((n) => (
                      <div key={n} className="w-6 h-6 rounded-full bg-primary/20 border-2 border-white flex items-center justify-center">
                        <span className="material-symbols-outlined text-primary text-[10px]">person</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Quick stats row */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { value: "200+", label: "Clients" },
                { value: "$4B", label: "Revenue" },
                { value: "98%", label: "Retention" },
              ].map((stat, i) => (
                <div key={i} className="text-center p-3 rounded-xl bg-surface-container-low/60 border border-outline-variant/10">
                  <p className="font-black text-base text-primary tracking-tight">{stat.value}</p>
                  <p className="text-[10px] uppercase tracking-widest opacity-50 font-bold mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBarLink;