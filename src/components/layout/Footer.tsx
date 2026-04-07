const Footer = () => {
  return (
    <footer className="w-full pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-10 md:pb-12 bg-[#1c1b1b] text-white text-center md:text-left lg:text-left">
      <div className="px-4 sm:px-6 md:px-8 lg:px-10 max-w-screen-2xl mx-auto">

        {/* Footer Branding & Main Grid */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-black tracking-tight md:tracking-tighter text-white mb-8 sm:mb-12 md:mb-16">
            ADAPTS MEDIA.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 md:gap-12 lg:gap-24">

            {/* Column 1 */}
            <div className="space-y-6 sm:space-y-8">
              <h4 className="text-primary font-headline font-extrabold uppercase tracking-[0.15em] sm:tracking-widest text-[10px] sm:text-xs">
                Our Expertise
              </h4>

              <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm tracking-wide">
                <li><a className="text-white/60 hover:text-primary transition-all duration-300" href="#">SEM</a></li>
                <li><a className="text-white/60 hover:text-primary transition-all duration-300" href="#">Data Analytics</a></li>
                <li><a className="text-white/60 hover:text-primary transition-all duration-300" href="#">Creative Designing</a></li>
                <li><a className="text-white/60 hover:text-primary transition-all duration-300" href="#">SEO</a></li>
                <li><a className="text-white/60 hover:text-primary transition-all duration-300" href="#">SMS Campaign</a></li>
                <li><a className="text-white/60 hover:text-primary transition-all duration-300" href="#">Social Media Marketing</a></li>
                <li><a className="text-white/60 hover:text-primary transition-all duration-300" href="#">Web Development</a></li>
                <li><a className="text-white/60 hover:text-primary transition-all duration-300" href="#">Display Campaign</a></li>
                <li><a className="text-white/60 hover:text-primary transition-all duration-300" href="#">Programmatic Advertising</a></li>
                <li><a className="text-white/60 hover:text-primary transition-all duration-300" href="#">Ad Operations</a></li>
              </ul>
            </div>

            {/* Column 2 */}
            <div className="space-y-6 sm:space-y-8">
              <h4 className="text-primary font-headline font-extrabold uppercase tracking-[0.15em] sm:tracking-widest text-[10px] sm:text-xs">
                Navigation
              </h4>

              <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm tracking-wide">
                <li><a className="text-white/60 hover:text-primary transition-all duration-300" href="#">About Us</a></li>
                <li><a className="text-white/60 hover:text-primary transition-all duration-300" href="#">Contact Us</a></li>
                <li><a className="text-white/60 hover:text-primary transition-all duration-300" href="#">Clients &amp; Our Work</a></li>
                <li><a className="text-white/60 hover:text-primary transition-all duration-300" href="#">Meet The Team</a></li>
                <li><a className="text-white/60 hover:text-primary transition-all duration-300" href="#">Blog</a></li>
                <li><a className="text-white/60 hover:text-primary transition-all duration-300" href="#">Services</a></li>
                <li><a className="text-white/60 hover:text-primary transition-all duration-300" href="#">Location</a></li>
                <li><a className="text-white/60 hover:text-primary transition-all duration-300" href="#">Privacy Policy</a></li>
                <li><a className="text-white/60 hover:text-primary transition-all duration-300" href="#">Terms and Conditions</a></li>
              </ul>
            </div>

            {/* Column 3 & 4 */}
            <div className="sm:col-span-2 md:col-span-2 space-y-6 sm:space-y-8">
              <h4 className="text-primary font-headline font-extrabold uppercase tracking-[0.15em] sm:tracking-widest text-[10px] sm:text-xs">
                Global Presence
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">

                {[
                  ["Dubai", "702, Warsan Tower, Near Media Rotana, Tecom, Barsha Heights."],
                  ["London", "Surbiton KT5, London, UK."],
                  ["United States", "2807 Allen St Dallas, Texas 75204."],
                  ["India", "Gurugram, Plot no 23, Sector 18."],
                  ["Philippines", "Julia Vargas Avenue, Ortigas Pasig City."]
                ].map(([city, addr], i) => (
                  <div key={i} className="group border-l border-white/10 pl-4 sm:pl-5 md:pl-6 py-2 hover:border-primary transition-colors">
                    <span className="font-headline font-bold text-white text-sm sm:text-base md:text-lg block mb-2">
                      {city}
                    </span>
                    <p className="text-white/50 text-[10px] sm:text-xs leading-relaxed mb-2">
                      {addr}
                    </p>
                    <a className="text-primary text-[10px] sm:text-xs font-medium" href="#">
                      info@adaptsmedia.com
                    </a>
                  </div>
                ))}

              </div>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 sm:pt-10 md:pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8">

          <div className="flex flex-col gap-2 text-center md:text-left">
            <p className="text-white/40 text-[10px] sm:text-xs">
              ADAPTS MEDIA. All rights reserved.
            </p>

            <div className="flex gap-2 sm:gap-4 items-center justify-center md:justify-start opacity-40 flex-wrap">
              <span className="text-[9px] sm:text-[10px] border border-white/30 px-2 py-0.5 rounded">
                DMCA PROTECTED
              </span>
              <span className="text-[9px] sm:text-[10px] border border-white/30 px-2 py-0.5 rounded">
                GDPR COMPLIANT
              </span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 sm:gap-5 md:gap-6">
            {["share", "public", "alternate_email", "data_thresholding"].map((icon, i) => (
              <a
                key={i}
                className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-white/90 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300 group"
                href="#"
              >
                <span className="material-symbols-outlined text-xs sm:text-sm group-hover:text-white">
                  {icon}
                </span>
              </a>
            ))}
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;