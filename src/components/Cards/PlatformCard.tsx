type PlatformCardProps = {
  src: string;
  name: string;
};

function PlatformCard({ src, name }: PlatformCardProps) {
  return (
    <div className="glass-card p-6 sm:p-10 md:p-14 lg:p-20 rounded-xl sm:rounded-2xl flex flex-col items-center gap-2 sm:gap-3 md:gap-4 text-center">
      <img src={src} className="h-10 sm:h-12 md:h-14 lg:h-16" />
      <span className="text-[10px] sm:text-xs md:text-sm uppercase opacity-60">
        {name}
      </span>
    </div>
  );
}

export default PlatformCard;