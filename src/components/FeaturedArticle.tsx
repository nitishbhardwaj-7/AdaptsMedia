

const FeaturedArticle = () => {
  return (
    <a className="group block -mx-6 px-6 py-10 glass-card rounded-xl shadow-sm border border-white/40 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl" href="#">
      
      <div className="flex justify-between items-start gap-6">
        <div className="flex-1">

          <div className="flex items-center gap-4 mb-4">
            <span className="text-[10px] font-label font-bold tracking-widest uppercase text-primary">
              Strategic Design
            </span>
            <span className="text-[10px] font-label text-outline tracking-widest uppercase">
              03.28.2024
            </span>
          </div>

          <h3 className="font-headline text-2xl md:text-3xl font-bold tracking-tight text-on-surface leading-tight">
            The Kinetic Framework: Scaling digital products without losing soul.
          </h3>

          <p className="mt-4 text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity duration-500 line-clamp-2">
            In a world of templates, we explore how to maintain brand authority while scaling architecture across global markets.
          </p>

        </div>

        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-on-primary shadow-[0_0_20px_rgba(0,80,203,0.3)]">
          <span className="material-symbols-outlined">north_east</span>
        </div>
      </div>

    </a>
  )
}

export default FeaturedArticle