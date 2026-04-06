type StatCardProps = {
  icon: string;
  value: string | number;
  label: string;
};

const StatCard = ({ icon, value, label }: StatCardProps) => {
  return (
     <div className="glass-card p-10 flex items-center gap-8">
      <span className="material-symbols-outlined text-primary text-3xl">
        {icon}
      </span>
      <div>
        <h4 className="text-5xl font-extrabold">{value}</h4>
        <p className="text-sm uppercase">{label}</p>
      </div>
    </div>
  )
}

export default StatCard