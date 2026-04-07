const logos = [
  "https://img.icons8.com/color/96/salesforce.png",
  "https://img.icons8.com/color/96/zapier.png",
  "https://img.icons8.com/color/96/notion.png",
  "https://img.icons8.com/color/96/discord-logo.png",
  "https://img.icons8.com/color/96/microsoft.png",
  "https://img.icons8.com/color/96/stripe.png",
  "https://img.icons8.com/color/96/google-logo.png",
  "https://img.icons8.com/color/96/trello.png",
];

const MeasurementAnalytics = () => {
  return (
    <section className="mb-16 sm:mb-20 md:mb-24 lg:mb-32">

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-6 sm:mb-8 md:mb-10 lg:mb-12 gap-4 sm:gap-6">
        <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight md:tracking-tighter">
          MEASUREMENT <span className="text-primary">&</span> ANALYTICS
        </h2>

        <p className="text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] opacity-40">
          Precision Engineering
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-0 border border-outline-variant/20 rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl shadow-on-surface/5">
        {logos.map((src, i) => (
          <div
            key={i}
            className="bg-surface hover:bg-primary/5 transition-colors p-6 sm:p-8 md:p-10 lg:p-12 flex items-center justify-center border border-outline-variant/20"
          >
            <img
              src={src}
              alt="logo"
              className="h-10 sm:h-12 md:h-14 lg:h-16 object-contain"
            />
          </div>
        ))}
      </div>

    </section>
  );
};

export default MeasurementAnalytics;