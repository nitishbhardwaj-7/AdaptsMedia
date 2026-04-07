

const LandingPageCard = ({icon, title, desc, highlight} :{ icon: string; title: string; desc: string; highlight?: boolean }) => {
  return (
    <div
      className={`glass-card p-12 group transition-all duration-500 flex flex-col justify-between aspect-[4/5]
      ${highlight ? "md:mt-12 bg-surface-container-low/50 hover:bg-surface-container-lowest" : "hover:translate-y-[-8px]"}
      hover:shadow-[0px_24px_48px_rgba(28,27,27,0.06)]`}
    >
      <div>
        <div className="w-16 h-16 rounded-full bg-surface-container-low flex items-center justify-center mb-12 group-hover:bg-primary transition-colors duration-500">
          <span className="material-symbols-outlined text-3xl group-hover:text-on-primary transition-colors duration-500">
            {icon}
          </span>
        </div>

        <h3 className="font-headline text-5xl font-bold tracking-tight mb-6">
          {title}
        </h3>

        <p className="text-on-surface-variant leading-relaxed">
          {desc}
        </p>
      </div>

      <div>
        <a
          className="inline-flex items-center gap-2 group/link text-sm font-headline font-extrabold uppercase tracking-widest pt-8 border-t border-outline-variant/10 w-full"
          href="#"
        >
          <span className="text-on-surface group-hover/link:text-primary transition-colors">
            Learn more
          </span>
          <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">
            arrow_forward
          </span>
        </a>
      </div>
    </div>
  )
}

export default LandingPageCard