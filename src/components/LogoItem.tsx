type LogoItemProps = {
  src: string;
};

const LogoItem = ({ src }: LogoItemProps) => {
  return (
    <div className="marquee-item">
      <img src={src} alt="brand" />
    </div>
    
  )
}

export default LogoItem