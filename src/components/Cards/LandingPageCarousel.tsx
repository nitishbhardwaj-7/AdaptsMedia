"use client";

import React, { useState } from "react";

type Card = {
  icon: string;
  title: string;
  desc: string;
  highlight?: boolean;
};

type LandingPageCarouselProps = {
  cards: Card[];
};

const LandingPageCarousel = ({ cards }: LandingPageCarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const getCardClass = (i: number) => {
    const total = cards.length;
    const diff = (i - activeIndex + total) % total;

    if (diff === 0) return "card-active";
    if (diff === 1) return "card-next";
    if (diff === total - 1) return "card-prev";
    return "card-hidden";
  };

  const prev = () => setActiveIndex((prev) => (prev - 1 + cards.length) % cards.length);
  const next = () => setActiveIndex((prev) => (prev + 1) % cards.length);

  return (
    <>
      <style>{`
        .carousel-container {
          width: 100%;
          height: 600px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          perspective: 2000px;
        }
        .carousel-stage {
          width: 450px;
          height: 520px;
          position: relative;
          transform-style: preserve-3d;
        }
        .carousel-card-wrap {
          position: absolute;
          width: 120%;
          height: 110%;
          left: -10%;
          transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
          backface-visibility: hidden;
        }
        .card-active {
          transform: translate3d(0, 0, 0) scale(1);
          opacity: 1;
          z-index: 10;
        }
        .card-prev {
          transform: translate3d(-350px, 0, -250px) rotateY(35deg);
          opacity: 0.5;
          z-index: 5;
          pointer-events: none;
        }
        .card-next {
          transform: translate3d(350px, 0, -250px) rotateY(-35deg);
          opacity: 0.5;
          z-index: 5;
          pointer-events: none;
        }
        .card-hidden {
          transform: translate3d(0, 0, -500px) scale(0.5);
          opacity: 0;
          z-index: 0;
          pointer-events: none;
        }
      `}</style>

      <div className="relative flex items-center justify-center">

        
      <div
  className="arrow-btn arrow-left"
  role="button"
  tabIndex={0}
  onClick={prev}
>
  <div className="arrow-btn-box">
    
    <span className="arrow-btn-elem">
      <svg viewBox="0 0 48 40">
        <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z" />
      </svg>
    </span>

    <span className="arrow-btn-elem">
      <svg viewBox="0 0 46 40">
        <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z" />
      </svg>
    </span>

  </div>
</div>

        
        <div className="carousel-container">
          <div className="carousel-stage">
            {cards.map((card, i) => (
              <div key={i} className={`carousel-card-wrap shadow-2xl ${getCardClass(i)}`}>
                <div
                  className={`glass-card p-12 group transition-all duration-500 flex flex-col justify-between h-full
                    ${card.highlight
                      ? "bg-surface-container-low/50 hover:bg-surface-container-lowest"
                      : "hover:translate-y-[]"
                    }
                    hover:shadow-[0px_24px_48px_rgba(28,27,27,0.06)]`}
                >
                  <div>
                    <div className="w-16 h-16 rounded-full bg-surface-container-low flex items-center justify-center mb-12 group-hover:bg-primary transition-colors duration-500">
                      <span className="material-symbols-outlined text-3xl group-hover:text-on-primary transition-colors duration-500">
                        {card.icon}
                      </span>
                    </div>

                    <h3 className="font-headline text-3xl font-bold tracking-tight mb-6">
                      {card.title}
                    </h3>

                    <p className="text-on-surface-variant leading-relaxed">
                      {card.desc}
                    </p>
                  </div>

                  <div>
                    
                    <a className="inline-flex items-center gap-2 group/link text-sm font-headline font-extrabold uppercase tracking-widest pt-8 border-t border-outline-variant/10 w-full"
                      href="#">
                      <span className="text-on-surface group-hover/link:text-primary transition-colors">
                        Learn more
                      </span>
                      <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">
                        arrow_forward
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        
         <div
  className="arrow-btn arrow-right"
  role="button"
  tabIndex={0}
  onClick={next}
>
  <div className="arrow-btn-box">
    
    <span className="arrow-btn-elem">
      <svg viewBox="0 0 46 40">
        <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z" />
      </svg>
    </span>

    <span className="arrow-btn-elem">
      <svg viewBox="0 0 46 40">
        <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z" />
      </svg>
    </span>

  </div>
</div>
      </div>

      
      <div className="flex justify-center gap-2 mt-8">
        {cards.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === activeIndex ? "bg-primary w-6" : "bg-primary/30 w-2"
            }`}
          />
        ))}
      </div>
    </>
  );
};

export default LandingPageCarousel;