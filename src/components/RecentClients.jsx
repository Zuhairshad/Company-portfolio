// src/components/RecentClients.jsx
import { useEffect } from "react";

/** Your logo images */
const logos = [
  "https://dripzclub.com/wp-content/uploads/2025/09/Screenshot-2025-08-29-175157.png",
  "https://dripzclub.com/wp-content/uploads/2025/09/Screenshot-2025-08-29-175128.png",
  "https://dripzclub.com/wp-content/uploads/2025/09/Screenshot-2025-08-29-175106.png",
  "https://dripzclub.com/wp-content/uploads/2025/09/Screenshot-2025-08-29-175026.png",
  "https://dripzclub.com/wp-content/uploads/2025/09/Screenshot-2025-08-29-175255.png",
  "https://dripzclub.com/wp-content/uploads/2025/09/Screenshot-2025-08-29-175143.png",
  "https://dripzclub.com/wp-content/uploads/2025/09/Screenshot-2025-08-29-175218.png",
  "https://dripzclub.com/wp-content/uploads/2025/09/Screenshot-2025-08-29-175308.png",
  "https://dripzclub.com/wp-content/uploads/2025/09/Screenshot-2025-08-29-175326-1.png",
  "https://dripzclub.com/wp-content/uploads/2025/09/WhatsApp-Image-2025-09-02-at-19.23.11_dc67e622-1.jpg",
];

/* Carousel */
function MarqueeRow({ items, speed = 12 }) {
  return (
    <div className="relative overflow-hidden group">
      {/* fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-50 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-50 to-transparent" />

      <div
        className="flex gap-16 items-center whitespace-nowrap will-change-transform animate-marquee"
        style={{ ["--speed"]: `${speed}s` }}
      >
        {[...items, ...items].map((src, i) => (
          <div key={i} className="shrink-0 w-[200px] md:w-[240px] flex justify-center">
            <img
              src={src}
              alt={`Client Logo ${i + 1}`}
              className="max-h-20 object-contain"
            />
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee var(--speed) linear infinite;
        }
        .group:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}

export default function RecentClients() {
  return (
    <section className="bg-white text-slate-900 py-20 md:py-28">
      <div className="mx-auto w-full max-w-6xl px-4 text-center">
      <span className="inline-block text-xs px-3 py-1 rounded-full bg-white/5 text-black"> Clients &amp; Achievements </span>
        {/* Title + Subtitle */}
        <h2 className="text-3xl md:text-5xl font-semibold text-black">
          Our Recent Client
        </h2>
        <p className="mt-3 md:mt-4 text-slate-600">
          Trusted by top brands and businesses — here are some of our latest collaborations.
        </p>

        {/* Carousel */}
        <div className="mt-10 md:mt-14">
          <MarqueeRow items={logos} speed={15} />
        </div>
      </div>
    </section>
  );
}
