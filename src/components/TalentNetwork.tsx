

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
    <section className="mb-32">
      
      {/* Title */}
      <div className="flex items-center gap-4 mb-12">
        <div className="h-[1px] flex-grow bg-surface-container-highest"></div>
        <h2 className="font-bold text-2xl tracking-tight px-4">
          TALENT NETWORK
        </h2>
        <div className="h-[1px] w-12 bg-primary"></div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {logos.map((src, i) => (
          <div
            key={i}
            className="glass-card h-32 flex items-center justify-center p-6 rounded-xl border border-outline-variant/10 hover:scale-105 transition"
          >
            <img
              src={src}
              alt="brand logo"
              className="max-h-16 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition"
            />
          </div>
        ))}
      </div>

    </section>
  );
};

export default TalentNetwork;