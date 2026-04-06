function AwardCard({ img, title, tag }: { img: string; title: string; tag: string }) {
  return (
    <div className="glass-card p-10 flex flex-col items-center text-center rounded-xl border border-outline-variant/15">
      
      <div className="w-24 h-24 mb-8 grayscale hover:grayscale-0 transition-all duration-500">
        <img src={img} className="w-full h-full object-contain" />
      </div>

      <span className="text-xs font-bold tracking-widest uppercase text-primary mb-2">
        {tag}
      </span>

      <h3 className="font-headline text-xl font-bold tracking-tight mb-4">
        {title}
      </h3>

      {/* Stars */}
      <div className="flex text-[#FFB800]">
        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
      </div>

    </div>
  );
}

export default AwardCard;