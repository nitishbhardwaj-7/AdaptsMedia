type StatProps = {
  number: string | number;
  label: string;
};

function Stat({ number, label }: StatProps) {
  return (
    <div className="text-center">
      <div className="text-4xl font-bold text-primary">{number}</div>
      <div className="text-xs uppercase opacity-60">{label}</div>
    </div>
  );
}
export default Stat