function AwardCardAlt({ img, title, tag, desc, badge, offset }) {
  return (
    <div
      className={`glass-card p-10 flex flex-col items-center text-center rounded-xl border border-outline-variant/15 ${
        offset ? "md:mt-12" : ""
      }`}
    >
      
      <div className="w-24 h-24 mb-8 grayscale hover:grayscale-0 transition-all duration-500">
        <img src={img} className="w-full h-full object-contain" />
      </div>

      <span className="text-xs font-bold tracking-widest uppercase text-primary mb-2">
        {tag}
      </span>

      <h3 className="font-headline text-xl font-bold tracking-tight mb-4">
        {title}
      </h3>

      {/* Description */}
      {desc && (
        <p className="text-sm text-on-surface-variant leading-snug">
          {desc}
        </p>
      )}

      {/* Badge */}
      {badge && (
        <div className="mt-4 px-4 py-1 bg-surface-container rounded-full text-xs font-bold">
          {badge}
        </div>
      )}

    </div>
  );
}

export default AwardCardAlt;