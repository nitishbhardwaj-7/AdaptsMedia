import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full pt-24 pb-12 bg-[#1c1b1b] text-white">
  <div className="max-w-7xl mx-auto px-12">

    {/* Footer Branding & Main Grid */}
    <div className="mb-20">
      <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-16">
        ADAPTS MEDIA.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-24">

        {/* Column 1 */}
        <div className="space-y-8">
          <h4 className="text-primary font-headline font-extrabold uppercase tracking-widest text-xs">
            Our Expertise
          </h4>

          <ul className="space-y-3 font-manrope text-sm tracking-wide">
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
        <div className="space-y-8">
          <h4 className="text-primary font-headline font-extrabold uppercase tracking-widest text-xs">
            Navigation
          </h4>

          <ul className="space-y-3 font-manrope text-sm tracking-wide">
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
        <div className="md:col-span-2 space-y-8">
          <h4 className="text-primary font-headline font-extrabold uppercase tracking-widest text-xs">
            Global Presence
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

            {/* Dubai */}
            <div className="group border-l border-white/10 pl-6 py-2 hover:border-primary transition-colors">
              <span className="font-headline text-white font-bold text-lg block mb-2">Dubai</span>
              <p className="text-white/50 text-xs leading-relaxed mb-2">
                702, Warsan Tower, Near Media Rotana, Tecom, Barsha Heights.
              </p>
              <a className="text-primary text-xs font-medium" href="mailto:info@adaptsmedia.com">
                info@adaptsmedia.com
              </a>
            </div>

            {/* London */}
            <div className="group border-l border-white/10 pl-6 py-2 hover:border-primary transition-colors">
              <span className="font-headline font-bold text-white text-lg block mb-2">London</span>
              <p className="text-white/50 text-xs leading-relaxed mb-2">
                Surbiton KT5, London, UK.
              </p>
              <a className="text-primary text-xs font-medium" href="mailto:info@adaptsmedia.com">
                info@adaptsmedia.com
              </a>
            </div>

            {/* US */}
            <div className="group border-l border-white/10 pl-6 py-2 hover:border-primary transition-colors">
              <span className="font-headline font-bold text-white text-lg block mb-2">United States</span>
              <p className="text-white/50 text-xs leading-relaxed mb-2">
                2807 Allen St Dallas, Texas 75204.
              </p>
              <a className="text-primary text-xs font-medium" href="mailto:info@adaptsmedia.com">
                info@adaptsmedia.com
              </a>
            </div>

            {/* India */}
            <div className="group border-l border-white/10 pl-6 py-2 hover:border-primary transition-colors">
              <span className="font-headline font-bold text-white text-lg block mb-2">India</span>
              <p className="text-white/50 text-xs leading-relaxed mb-2">
                Gurugram, Plot no 23, Sector 18.
              </p>
              <a className="text-primary text-xs font-medium" href="mailto:info@adaptsmedia.com">
                info@adaptsmedia.com
              </a>
            </div>

            {/* Philippines */}
            <div className="group border-l border-white/10 pl-6 py-2 hover:border-primary transition-colors">
              <span className="font-headline font-bold text-white text-lg block mb-2">Philippines</span>
              <p className="text-white/50 text-xs leading-relaxed mb-2">
                Julia Vargas Avenue, Ortigas Pasig City.
              </p>
              <a className="text-primary text-xs font-medium" href="mailto:info@adaptsmedia.com">
                info@adaptsmedia.com
              </a>
            </div>

          </div>
        </div>

      </div>
    </div>

    {/* Bottom Bar */}
    <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">

      <div className="flex flex-col gap-2">
        <p className="text-white/40 text-xs font-manrope">
          ADAPTS MEDIA. All rights reserved. Built with Motion.
        </p>

        <div className="flex gap-4 items-center opacity-40">
          <span className="text-[10px] border border-white/30 px-2 py-0.5 rounded">
            DMCA PROTECTED
          </span>
          <span className="text-[10px] border border-white/30 px-2 py-0.5 rounded">
            GDPR COMPLIANT
          </span>
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex gap-6">

        <a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300 group" href="#">
          <span className="material-symbols-outlined text-sm group-hover:text-white">share</span>
        </a>

        <a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300 group" href="#">
          <span className="material-symbols-outlined text-sm group-hover:text-white">public</span>
        </a>

        <a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300 group" href="#">
          <span className="material-symbols-outlined text-sm group-hover:text-white">alternate_email</span>
        </a>

        <a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300 group" href="#">
          <span className="material-symbols-outlined text-sm group-hover:text-white">data_thresholding</span>
        </a>

      </div>
    </div>

  </div>
</footer>
  )
}

export default Footer