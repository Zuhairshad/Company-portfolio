import { useEffect, useMemo, useState, useCallback } from "react";

const defaultItems = [
  {
    id: "239u8Wtv4BQ",
    title: "Hik Kursi - AI Music Video",
    duration: "3:45",
    tag: "Music Video",
    thumb: "https://img.youtube.com/vi/239u8Wtv4BQ/maxresdefault.jpg",
    blurb:
      "AI-generated music video featuring Adnan Dhool's Siraiki song with creative visual storytelling",
  },
  {
    id: "Tq5u3Ot1h6s",
    title: "Master Paint - TVC",
    duration: "0:30",
    tag: "Commercial",
    thumb: "https://img.youtube.com/vi/Tq5u3Ot1h6s/maxresdefault.jpg",
    blurb: "High-impact brand spot emphasizing color fidelity and finish.",
  },
  {
    id: "JOABcfVc1zw",
    title: "Cakes & Bakes - TVC",
    duration: "4:05",
    tag: "Commercial",
    thumb: "https://img.youtube.com/vi/JOABcfVc1zw/maxresdefault.jpg",
    blurb: "Story-led commercial celebrating craft baking and family moments.",
  },
  {
    id: "42wmmawVKvY",
    title: "Brand Film",
    duration: "2:30",
    tag: "Brand Film",
    thumb: "https://img.youtube.com/vi/42wmmawVKvY/maxresdefault.jpg",
    blurb: "Engaging brand story that connects with audiences",
  },
  {
    id: "KNasgbZzQfA",
    title: "Changan - Mini Documentary",
    duration: "3:45",
    tag: "Documentary",
    thumb: "https://img.youtube.com/vi/KNasgbZzQfA/maxresdefault.jpg",
    blurb: "Mini documentary capturing authentic experiences and storytelling",
  },
  {
    id: "L1CMZtsQ7GY",
    title: "Creative Showcase",
    duration: "0:57",
    tag: "Creative",
    thumb: "https://img.youtube.com/vi/L1CMZtsQ7GY/maxresdefault.jpg",
    blurb: "Innovative video production showcasing creative storytelling",
  },
  {
    id: "y3QebRpWuO0",
    title: "Wedding Trailer",
    duration: "3:12",
    tag: "Weddings",
    thumb: "https://img.youtube.com/vi/y3QebRpWuO0/maxresdefault.jpg",
    blurb: "Beautifully crafted wedding trailer capturing memorable moments.",
  }
  
];

export default function ShowReels({
  id = "portfolio",
  items = defaultItems,
  backgroundVideo = "/assets/showreel-bg-D9HVt5Hg.mp4",
  showVideoBg = true,
}) {
  const [index, setIndex] = useState(0);
  const [openId, setOpenId] = useState(null);

  const go = useCallback(
    (dir) => setIndex((i) => (i + dir + items.length) % items.length),
    [items.length]
  );

  const center = items[index];
  const left = items[(index - 1 + items.length) % items.length];
  const right = items[(index + 1) % items.length];

  useEffect(() => {
    const onKey = (e) => {
      if (openId) return;
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, openId]);

  const dots = useMemo(() => items.map((_, i) => i), [items]);

  // live warm gradient
  const gradientStyle = {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(-45deg, #d4b140, #ff9f43, #ff6b6b, #7a3e1d)",
    backgroundSize: "400% 400%",
    animation: "gradientMove 16s ease-in-out infinite",
    mixBlendMode: "soft-light",
    opacity: 0.75,
    pointerEvents: "none",
  };

  return (
    <section id={id} className="relative overflow-hidden bg-black py-24">
      {/* keyframes + tiny utility for hidden scrollbar on thumbnails */}
      <style>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {showVideoBg && (
        <video
          autoPlay
          loop
          playsInline
          muted
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        >
          <source src={backgroundVideo} type="video/mp4" />
        </video>
      )}

      <div className="absolute inset-0 bg-black/25" />
      <div style={gradientStyle} />

      {/* radial glows */}
      <div className="pointer-events-none absolute inset-0 opacity-25">
        <div
          className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side, rgba(212,177,64,0.30), rgba(0,0,0,0.06), transparent)",
          }}
        />
        <div
          className="absolute right-1/4 top-1/4 h-[420px] w-[420px] rounded-full blur-2xl"
          style={{
            background:
              "radial-gradient(closest-side, rgba(212,177,64,0.22), rgba(0,0,0,0.04), transparent)",
          }}
        />
        <div
          className="absolute bottom-1/4 left-1/4 h-[600px] w-[600px] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side, rgba(212,177,64,0.24), rgba(0,0,0,0.05), transparent)",
          }}
        />
      </div>

      {/* content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="font-playfair text-4xl font-bold text-foreground md:text-5xl">
            Our <span className="text-primary">Recent Work</span>
          </h2>
          <p className="font-inter mx-auto mb-8 mt-6 max-w-3xl text-xl leading-relaxed text-muted-foreground">
            Explore our collection of showreels showcasing our expertise across
            different categories and styles.
          </p>
        </div>

        {/* main carousel */}
        <div className="relative flex h-[700px] items-center justify-center">
          <CarouselCard
            item={left}
            style={{
              transform: "translateX(-80%) scale(0.8)",
              zIndex: 15,
              filter: "blur(2px)",
              opacity: 0.45,
              transition: "transform 700ms ease-out, opacity 700ms ease-out",
            }}
            onPlay={() => left && setOpenId(left.id)}
          />
          <CarouselCard
            item={right}
            style={{
              transform: "translateX(80%) scale(0.8)",
              zIndex: 15,
              filter: "blur(2px)",
              opacity: 0.45,
              transition: "transform 700ms ease-out, opacity 700ms ease-out",
            }}
            onPlay={() => right && setOpenId(right.id)}
          />
          <CarouselCard
            item={center}
            isCenter
            style={{
              transform: "translateX(0) scale(1)",
              zIndex: 30,
              filter: "none",
              opacity: 1,
              transition: "transform 700ms ease-out, opacity 700ms ease-out",
            }}
            onPlay={() => setOpenId(center.id)}
          />

          <button
            aria-label="Previous"
            onClick={() => go(-1)}
            className="absolute left-6 top-1/2 z-40 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-yellow-500/40 bg-yellow-500/30 backdrop-blur-sm transition-all duration-300 hover:bg-yellow-500/40"
          >
            <ChevronLeft />
          </button>
          <button
            aria-label="Next"
            onClick={() => go(1)}
            className="absolute right-6 top-1/2 z-40 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-yellow-500/40 bg-yellow-500/30 backdrop-blur-sm transition-all duration-300 hover:bg-yellow-500/40"
          >
            <ChevronRight />
          </button>
        </div>

        {/* dots */}
        <div className="mt-10 flex justify-center gap-3">
          {dots.map((i) => {
            const active = i === index;
            return (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-3 w-3 rounded-full transition-all duration-300 ${
                  active
                    ? "bg-yellow-500 shadow-[0_0_20px_rgba(234,179,8,0.6)]"
                    : "bg-yellow-500/40 hover:bg-yellow-500/70"
                }`}
              />
            );
          })}
        </div>

        {/* thumbnail strip */}
        <div className="mt-8 flex justify-center">
          <div className="scrollbar-hide flex gap-4 overflow-x-auto px-1 pb-2">
            {items.map((item, i) => (
              <button
                key={item.id}
                onClick={() => setIndex(i)}
                aria-label={`Open ${item.title}`}
                title={item.title}
                className={`relative flex-shrink-0 overflow-hidden rounded-lg border-2 transition-transform duration-200 ${
                  i === index
                    ? "border-yellow-500 shadow-[0_8px_24px_rgba(212,177,64,0.35)] scale-100"
                    : "border-transparent hover:scale-[1.03]"
                }`}
                style={{ width: 120, height: 70 }}
              >
                <img
                  src={`https://img.youtube.com/vi/${item.id}/mqdefault.jpg`}
                  alt={item.title}
                  className="h-full w-full object-cover"
                />
                {/* subtle dark overlay */}
                <div className="absolute inset-0 bg-black/20" />
                {/* small duration chip */}
                <span className="absolute bottom-1 right-1 rounded bg-black/70 px-1 text-[11px] leading-4 text-white">
                  {item.duration}
                </span>
                {/* tiny play icon on hover */}
                <span className="pointer-events-none absolute left-1 top-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-black/60">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    className="h-3.5 w-3.5 text-white"
                  >
                    <polygon
                      points="6 4 20 12 6 20 6 4"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <button className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 font-montserrat text-sm font-semibold text-primary-foreground shadow-[0_8px_24px_rgba(212,177,64,0.35)] transition-all duration-300 hover:scale-105 hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400/70">
            Get Your Project Started
          </button>
        </div>
      </div>

      {/* modal */}
      {openId && (
        <Lightbox onClose={() => setOpenId(null)}>
          <iframe
            className="aspect-video w-full rounded-xl"
            src={`https://www.youtube.com/embed/${openId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
            title="Showreel Player"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        </Lightbox>
      )}
    </section>
  );
}

function CarouselCard({ item, isCenter = false, style, onPlay }) {
  if (!item) return null;
  return (
    <div className="absolute cursor-pointer" style={style}>
      <div className="w-[700px] overflow-hidden rounded-xl border border-white/10 bg-black/30 text-card-foreground shadow-[0_12px_40px_rgba(0,0,0,0.45)]">
        <div className="relative aspect-video overflow-hidden">
          <img
            loading="lazy"
            src={item.thumb}
            alt={item.title}
            className="h-full w-full object-cover"
            onError={(e) => {
              if (!e.target.dataset.fallback) {
                e.target.dataset.fallback = "1";
                e.target.src = `https://img.youtube.com/vi/${item.id}/hqdefault.jpg`;
              }
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-transparent" />

          <div className="absolute left-4 top-4 rounded-full bg-yellow-500/90 px-3 py-1 text-sm font-inter font-medium text-black shadow">
            {item.tag}
          </div>
          <div className="absolute right-4 top-4 rounded bg-black/70 px-2 py-1 text-sm font-inter text-white">
            {item.duration}
          </div>

          <button
            onClick={onPlay}
            className="group absolute inset-0 flex items-center justify-center"
          >
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-yellow-500/35 backdrop-blur-sm transition-all duration-300 group-hover:bg-yellow-500/50">
                <Play className="ml-0.5 h-7 w-7 text-white" />
              </div>

              {isCenter && (
                <div className="mt-1">
                  <h3 className="font-montserrat text-2xl font-extrabold tracking-tight text-white drop-shadow-md">
                    {item.title}
                  </h3>
                  <p className="font-inter mt-1 text-sm text-white/80">
                    {item.duration}
                  </p>
                </div>
              )}
            </div>
            <span className="sr-only">Play {item.title}</span>
          </button>
        </div>

        <div className="bg-black/50 p-6 backdrop-blur-sm">
          <h3 className="font-montserrat mb-2 text-xl font-semibold text-white">
            {item.title}
          </h3>
          <p className="font-inter text-white/80">{item.blurb}</p>
        </div>
      </div>
    </div>
  );
}

function Lightbox({ onClose, children }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 p-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-5xl flex-1"
      >
        <button
          onClick={onClose}
          aria-label="Close player"
          className="absolute -right-3 -top-3 rounded-full bg-white/90 p-2 shadow hover:bg-white"
        >
          <Close />
        </button>
        {children}
      </div>
    </div>
  );
}

/* icons */
const Play = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <polygon
      points="6 3 20 12 6 21 6 3"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const ChevronLeft = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <path d="m15 18-6-6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const ChevronRight = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <path d="m9 18 6-6-6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const Close = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <path d="M18 6 6 18M6 6l12 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
