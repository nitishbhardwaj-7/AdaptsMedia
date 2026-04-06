type TestimonialCardProps = {
  name: string;
  role: string;
  text: string;
  stat?: string;
  large?: boolean;
};

function TestimonialCard({
  name,
  role,
  text,
  stat,
  large,
}: TestimonialCardProps) {
  return (
    <div
      className={`glass-card p-10 rounded-xl ${
        large ? "md:col-span-7" : "md:col-span-5"
      }`}
    >
      <p className="text-lg mb-6">"{text}"</p>

      {stat && (
        <div className="text-4xl font-bold text-primary mb-4">
          {stat}
        </div>
      )}

      <div>
        <p className="font-bold">{name}</p>
        <p className="text-sm opacity-60">{role}</p>
      </div>
    </div>
  );
}

export default TestimonialCard