function PlatformCard({ src, name }) {
  return (
    <div className="glass-card p-20 rounded-2xl flex flex-col items-center gap-4 text-center">
      <img src={src} className="h-10" />
      <span className="text-xs uppercase opacity-60">{name}</span>
    </div>
  );
}
export default PlatformCard