// src/components/FeaturedWork.jsx
import React, { memo, useEffect, useRef, useState, Suspense } from "react";
import { Link } from "react-router-dom";

// Data (unchanged except small typo fix)
const items = [
  {
    id: "safeway-b2b-portal",
    tagPrimary: "Website",
    tagSecondary: "Branding",
    title: "Safeway (Albertsons)",
    blurb:
      "Website Redesign & B2B Customer Experience for a National Grocery Brand",
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=2400&auto=format&fit=crop",
    caseHref: "/work/safeway-b2b-portal",
  },
  {
    id: "mostardi-platt",
    tagPrimary: "Website",
    tagSecondary: "Branding",
    title: "Mostardi Platt",
    blurb:
      "Website Design & Brand Refresh for an Environmental Consultancy",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2400&auto=format&fit=crop",
    caseHref: "/work/mostardi-platt",
  },
  {
    id: "arcelormittal",
    tagPrimary: "Website",
    title: "ArcelorMittal",
    blurb: "Website Design for the World’s Leading Steel Manufacturer",
    image:
      "https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?q=80&w=2400&auto=format&fit=crop",
    caseHref: "/work/arcelormittal",
  },
  {
    id: "flipp",
    tagPrimary: "Website",
    title: "Flipp",
    blurb: "Web Design and Development for a Professional Business",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2400&auto=format&fit=crop",
    caseHref: "/work/flipp",
  },
  {
    id: "2992-sheppard",
    tagSecondary: "Branding",
    title: "2992 Sheppard",
    blurb: "Branding for Real Estate Project",
    image:
      "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=2400&auto=format&fit=crop",
    caseHref: "/work/2992-sheppard",
  },
  {
    id: "brandvision",
    tagSecondary: "Branding",
    title: "Webify Tech",
    blurb: "Brand identity and campaign design for a creative agency",
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=2400&auto=format&fit=crop",
    caseHref: "/work/brandvision",
  },
];

// ---- Small util to gate mount until near viewport
function LazyMount({ children, rootMargin = "250px 0px", minHeight = 320 }) {
  const [show, setShow] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (show) return;
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShow(true);
          obs.disconnect();
        }
      },
      { rootMargin }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [show, rootMargin]);

  return (
    <div ref={ref} style={{ minHeight: show ? undefined : minHeight }}>
      {show ? children : null}
    </div>
  );
}

// ---- Project card (memoized)
const ProjectCard = memo(function ProjectCard({
  tagPrimary,
  tagSecondary,
  title,
  blurb,
  image,
  caseHref,
  liveHref,
  eager = false, // first card eager, rest lazy
}) {
  // Create a responsive srcSet from the base Unsplash URL
  const base = image.split("?")[0];
  const query = "q=80&auto=format&fit=crop";
  const srcSet = [
    `${base}?${query}&w=640 640w`,
    `${base}?${query}&w=960 960w`,
    `${base}?${query}&w=1280 1280w`,
    `${base}?${query}&w=1600 1600w`,
    `${base}?${query}&w=2000 2000w`,
    `${base}?${query}&w=2400 2400w`,
  ].join(", ");

  return (
    <article className="group relative overflow-hidden rounded-[20px]">
      {/* Keep a stable box to avoid CLS */}
      <div className="relative w-full aspect-[16/9] md:aspect-[21/9]">
        <img
          src={`${base}?${query}&w=1600`}
          srcSet={srcSet}
          sizes="(min-width: 1024px) 100vw, 100vw"
          alt={title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          fetchpriority={eager ? "high" : "low"}
        />
      </div>

      {/* Overlays */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7 md:p-9">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5">
          <div className="max-w-2xl">
            <div className="flex flex-wrap gap-2">
              {tagPrimary && (
                <span className="rounded-full bg-white/15 px-2.5 py-1 text-[11px] uppercase tracking-wide text-white ring-1 ring-white/20">
                  {tagPrimary}
                </span>
              )}
              {tagSecondary && (
                <span className="rounded-full bg-white/15 px-2.5 py-1 text-[11px] uppercase tracking-wide text-white ring-1 ring-white/20">
                  {tagSecondary}
                </span>
              )}
            </div>

            <h3 className="mt-3 text-2xl md:text-3xl font-semibold text-white drop-shadow-sm">
              {title}
            </h3>
            <p className="mt-2 text-sm md:text-base text-white/85 max-w-xl">
              {blurb}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              to={caseHref || "#"}
              className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-md hover:shadow-lg transition whitespace-nowrap"
            >
              Read Our Case
              <Chevron />
            </Link>

            {liveHref && (
              <a
                href={liveHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-black/70 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/20 backdrop-blur hover:bg-black/80 transition whitespace-nowrap"
              >
                Live Site
                <Chevron />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
});

function Chevron() {
  return (
    <svg viewBox="0 0 24 24" className="h-3 w-3">
      <g strokeWidth="2.5" fill="none" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m8.25 4.5 7.5 7.5-7.5 7.5"
        />
      </g>
    </svg>
  );
}

export default function FeaturedWork() {
  return (
    <section className="section bg-slate-100 py-16 lg:py-24">
      <div className="mx-auto w-full max-w-[90rem] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-12 gap-8 lg:gap-10">
          {/* Left aside — sticky only on lg+ */}
          <aside className="col-span-12 lg:col-span-3 self-start relative z-10 lg:sticky lg:top-24">
            <div className="space-y-6">
              <div>
                <span className="text-2xl tracking-wide uppercase text-slate-500">
                  Featured Work
                </span>
                <h2 className="mt-3 text-2xl leading-snug text-slate-900 font-medium">
                  Our goal is to nurture your vision and provide innovative,
                  custom solutions for all your marketing needs.
                </h2>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  to="/proposalrequest"
                  className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-white text-sm font-semibold hover:bg-blue-700 transition whitespace-nowrap"
                >
                  <span>Request a Proposal</span>
                  <Chevron />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-slate-800 text-sm font-semibold hover:bg-slate-50 transition whitespace-nowrap"
                >
                  <span>Contact Us</span>
                  <Chevron />
                </Link>
              </div>
            </div>
          </aside>

          {/* Right — project cards */}
          <div className="col-span-12 lg:col-span-9 space-y-10 relative z-0">
            {/* First card eager for instant visual */}
            {items.length > 0 && <ProjectCard {...items[0]} eager />}

            {/* Rest gated by IO to avoid main-thread work until scrolled */}
            {items.slice(1).map((p) => (
              <LazyMount key={p.id} minHeight={280}>
                <Suspense fallback={null /* tiny, avoids extra work */}>
                  <ProjectCard {...p} />
                </Suspense>
              </LazyMount>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
