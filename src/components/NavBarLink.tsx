const NavBarLink = ({
  title,
  sectionLabel = "Core Services",
  services,
  caseStudyImage,
  caseStudyTitle,
  ctaTitle = "Ready to Scale?",
  ctaDescription = "Get analysis of your digital footprint.",
  ctaLinkText = "Growth Audit",
}: NavBarLinkProps) => {
  return (
    <div className="nav-item relative py-2 group">
      <button className="nav-link-3d text-black font-bold border-b-2 border-black pb-1 flex items-center gap-1">
        {title}
        <span className="material-symbols-outlined text-sm">keyboard_arrow_down</span>
      </button>

      {/* Mega Menu */}
      <div className="absolute top-full left-1/2 -translate-x-1/2 w-[90vw] max-w-[1200px] mt-6 p-10 rounded-2xl bg-surface-container-lowest/95 backdrop-blur-xl shadow-[0px_40px_80px_rgba(0,0,0,0.12)] border border-outline-variant/15 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">

        <div className="grid grid-cols-12 gap-10">

          {/* LEFT SIDE */}
          <div className="col-span-7">
            <span className="text-label-md font-bold uppercase tracking-widest text-primary opacity-60 block mb-6">
              {sectionLabel}
            </span>

            {/* SERVICES GRID */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {services.map((service, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-surface-container-low transition cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center text-primary shrink-0">
                    <span className="material-symbols-outlined text-sm">
                      {service.icon}
                    </span>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm leading-tight">
                      {service.title}
                    </h4>
                    <p className="text-xs opacity-60 line-clamp-2">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="col-span-5 flex flex-col gap-8 border-l pl-10">

            {/* Case Study */}
            {caseStudyImage && (
              <div className="relative h-[220px] overflow-hidden rounded-xl group cursor-pointer">
                <img
                  src={caseStudyImage}
                  alt="case study"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                {caseStudyTitle && (
                  <div className="absolute bottom-0 p-5 bg-gradient-to-t from-black/70 text-white w-full">
                    <h5 className="text-base font-bold">{caseStudyTitle}</h5>
                  </div>
                )}
              </div>
            )}

            {/* CTA */}
            <div className="bg-primary/5 p-6 rounded-xl border">
              <h4 className="font-bold text-lg mb-2">{ctaTitle}</h4>
              <p className="text-sm opacity-70 mb-4">{ctaDescription}</p>

              <a className="text-primary font-semibold flex items-center gap-2 cursor-pointer text-sm">
                {ctaLinkText}
                <span className="material-symbols-outlined text-sm">
                  trending_up
                </span>
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBarLink