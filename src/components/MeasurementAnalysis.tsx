import React from "react";

const logos = [
  "https://img.icons8.com/color/96/salesforce.png",
  "https://img.icons8.com/color/96/zapier.png",
  "https://img.icons8.com/color/96/notion.png",
  "https://img.icons8.com/color/96/slack-new.png",
  "https://img.icons8.com/color/96/airtable.png",
  "https://img.icons8.com/color/96/stripe.png",
  "https://img.icons8.com/color/96/mailchimp.png",
  "https://img.icons8.com/color/96/asana.png",
];

const MeasurementAnalytics = () => {
  return (
    <section className="mb-32">

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <h2 className="font-bold text-5xl tracking-tighter">
          MEASUREMENT <span className="text-primary">&</span> ANALYTICS
        </h2>

        <p className="text-sm uppercase tracking-[0.3em] opacity-40">
          Precision Engineering
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-outline-variant/20 rounded-2xl overflow-hidden shadow-2xl shadow-on-surface/5">
        {logos.map((src, i) => (
          <div
            key={i}
            className="bg-surface hover:bg-primary/5 transition-colors p-12 flex items-center justify-center border border-outline-variant/20"
          >
            <img
              src={src}
              alt="logo"
              className="h-16 object-contain"
            />
          </div>
        ))}
      </div>

    </section>
  );
};

export default MeasurementAnalytics;