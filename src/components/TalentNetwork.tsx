const logos = [
  "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png",
  "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png",
  "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
  "https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg",
  "https://upload.wikimedia.org/wikipedia/commons/3/3f/HubSpot_Logo.svg",
];

const TalentNetwork = () => {
  return (
    <section className="mb-16 sm:mb-20 md:mb-24 lg:mb-32">
      
      {/* Title */}
      <div className="flex items-center gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8 md:mb-10 lg:mb-12">
        <div className="h-[1px] flex-grow bg-surface-container-highest"></div>
        <h2 className="font-bold text-lg sm:text-xl md:text-2xl tracking-tight px-2 sm:px-3 md:px-4">
          TALENT NETWORK
        </h2>
        <div className="h-[1px] w-8 sm:w-10 md:w-12 bg-primary"></div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
        {logos.map((src, i) => (
          <div
            key={i}
            className="glass-card h-20 sm:h-24 md:h-28 lg:h-32 flex items-center justify-center p-3 sm:p-4 md:p-5 lg:p-6 rounded-lg sm:rounded-xl border border-outline-variant/10 hover:scale-105 transition"
          >
            <img
              src={src}
              alt="brand logo"
              className="max-h-10 sm:max-h-12 md:max-h-14 lg:max-h-16 object-contain hover:opacity-100 transition"
            />
          </div>
        ))}
      </div>

    </section>
  );
};

export default TalentNetwork;