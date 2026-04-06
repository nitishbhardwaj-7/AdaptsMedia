type LogoCardProps = {
  src: string;
};
const LogoCard = ({src}:LogoCardProps) => {
  return (
    <div className="glass-card h-32 flex items-center justify-center p-6 rounded-xl border">
      <img src={src} className="max-h-8" />
    </div>
  )
}

export default LogoCard