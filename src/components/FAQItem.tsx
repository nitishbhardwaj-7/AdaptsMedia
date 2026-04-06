import React, { useState } from "react";

const FAQItem = ({ question, answer, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => setOpen(!open)}
      onKeyDown={(e) => e.key === "Enter" && setOpen(!open)}
      className="group cursor-pointer bg-surface-container-lowest/80 backdrop-blur-xl p-8 rounded-xl hover-lift border-b border-transparent transition-all duration-300 hover:ring-1 hover:ring-primary/20"
    >
      
      {/* Header */}
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-headline font-bold tracking-tight text-on-surface group-hover:text-primary transition-colors">
          {question}
        </h3>

        <span
          className={`material-symbols-outlined text-primary transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        >
          expand_more
        </span>
      </div>

      {/* Animated Content */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          open ? "max-h-125 opacity-100 mt-6" : "max-h-0 opacity-0"
        }`}
      >
        <div className="text-on-surface-variant leading-relaxed font-body">
          {answer}
        </div>
      </div>

    </div>
  );
};

export default FAQItem;