"use client";

import { useState } from "react";

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
    if (diff === 2) return "card-far-next";
    if (diff === total - 1) return "card-prev";
    if (diff === total - 2) return "card-far-prev";
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
          opacity: 0.6;
          z-index: 7;
          pointer-events: none;
        }
        .card-next {
          transform: translate3d(350px, 0, -250px) rotateY(-35deg);
          opacity: 0.6;
          z-index: 7;
          pointer-events: none;
        }
        .card-far-prev {
          transform: translate3d(-620px, 0, -450px) rotateY(45deg);
          opacity: 0.3;
          z-index: 5;
          pointer-events: none;
        }
        .card-far-next {
          transform: translate3d(620px, 0, -450px) rotateY(-45deg);
          opacity: 0.3;
          z-index: 5;
          pointer-events: none;
        }
        .card-hidden {
          transform: translate3d(0, 0, -600px) scale(0.4);
          opacity: 0;
          z-index: 0;
          pointer-events: none;
        }

        @media (max-width: 768px) {
          .carousel-container {
            height: 480px;
          }
          .carousel-stage {
            width: 280px;
            height: 420px;
          }
          .card-prev {
            transform: translate3d(-180px, 0, -200px) rotateY(35deg);
          }
          .card-next {
            transform: translate3d(180px, 0, -200px) rotateY(-35deg);
          }
          .card-far-prev {
            transform: translate3d(-300px, 0, -350px) rotateY(45deg);
          }
          .card-far-next {
            transform: translate3d(300px, 0, -350px) rotateY(-45deg);
          }
        }

        /* Arrow Button */
        .arrow-btn {
          display: block;
          position: relative;
          width: 56px;
          height: 56px;
          overflow: hidden;
          background-color: transparent;
          cursor: pointer;
          user-select: none;
          flex-shrink: 0;
          z-index: 40;
        }
        .arrow-btn::before,
        .arrow-btn::after {
          content: "";
          position: absolute;
          border-radius: 50%;
          inset: 5px;
          pointer-events: none;
        }
        .arrow-btn::before {
          border: 4px solid #f0eeef;
          transition: 0.4s;
        }
        .arrow-btn::after {
          border: 4px solid #0066ff;
          transform: scale(1.3);
          opacity: 0;
          transition: 0.4s;
        }
        .arrow-btn:hover::before {
          opacity: 0;
          transform: scale(0.7);
        }
        .arrow-btn:hover::after {
          opacity: 1;
          transform: scale(1);
        }
        .arrow-btn-box {
          display: flex;
          align-items: center;
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          transition: transform 0.4s;
        }
        .arrow-btn-elem {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 20px;
          height: 20px;
          margin: 0 18px;
          fill: #000;
          flex-shrink: 0;
        }
        .arrow-btn-elem svg {
          width: 100%;
          height: 100%;
        }
        .arrow-left .arrow-btn-elem {
          transform: rotate(180deg);
        }
        .arrow-right .arrow-btn-elem {
          transform: rotate(0deg);
        }
        .arrow-btn:hover .arrow-btn-box {
          transform: translateX(-56px);
        }

        @media (max-width: 768px) {
          .arrow-btn {
            width: 40px;
            height: 40px;
          }
          .arrow-btn-elem {
            width: 14px;
            height: 14px;
            margin: 0 13px;
          }
          .arrow-btn:hover .arrow-btn-box {
            transform: translateX(-40px);
          }
        }
      `}</style>

      {/* Outer wrapper */}
      <div className="relative flex">

        {/* Prev Arrow */}
        <div
          className="arrow-btn arrow-left absolute left-0 top-[240px] md:top-[350px] -translate-y-1/2 z-40"
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

        {/* Carousel */}
        <div className="carousel-container">
          <div className="carousel-stage">
            {cards.map((card, i) => (
              <div key={i} className={`carousel-card-wrap shadow-2xl ${getCardClass(i)}`}>
                <div
                  className={`glass-card p-6 md:p-12 group transition-all duration-500 flex flex-col justify-between h-full
                    ${card.highlight
                      ? "bg-surface-container-low/50 hover:bg-surface-container-lowest"
                      : ""
                    }
                    hover:shadow-[0px_24px_48px_rgba(28,27,27,0.06)]`}
                >
                  <div>
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-surface-container-low flex items-center justify-center mb-6 md:mb-12 group-hover:bg-primary transition-colors duration-500">
                      <span className="material-symbols-outlined text-2xl md:text-3xl group-hover:text-on-primary transition-colors duration-500">
                        {card.icon}
                      </span>
                    </div>

                    <h3 className="font-headline text-2xl md:text-4xl font-bold tracking-tight mb-4 md:mb-6">
                      {card.title}
                    </h3>

                    <p className="text-on-surface-variant text-base md:text-xl leading-relaxed">
                      {card.desc}
                    </p>
                  </div>

                  <div>
                    
                      
                    <a className="inline-flex items-center gap-2 group/link text-sm font-headline font-extrabold uppercase tracking-widest pt-6 md:pt-8 border-t border-outline-variant/10 w-full"
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

        {/* Next Arrow */}
        <div
          className="arrow-btn arrow-right absolute right-0 top-[240px] md:top-[350px] -translate-y-1/2 z-[100]"
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

      {/* Dot indicators */}
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