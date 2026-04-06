type MeasureCardProps = {
  src: string;
};

function MeasureCard({ src }: MeasureCardProps) {
  return (
    <div className="p-12 flex items-center justify-center border">
      <img src={src} className="h-8" />
    </div>
  );
}
export default MeasureCard