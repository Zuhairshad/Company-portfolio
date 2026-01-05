import React, { useEffect, useRef } from "react";

/* inline icons (no external deps) */
const ChevronRight = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
  </svg>
);
const ClockIcon = (props) => (
  <svg viewBox="0 0 12 13" fill="none" stroke="currentColor" {...props}>
    <path d="M6 3.5V6.5H8.25" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10.5 6.5a.5.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const CalendarDays = (props) => (
  <svg viewBox="0 0 12 13" fill="currentColor" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.375 1.625a.375.375 0 0 1 .375.375V2.75h4.5V2a.375.375 0 0 1 .75 0v.75h.375c.828 0 1.5.672 1.5 1.5v5.625c0 .828-.672 1.5-1.5 1.5h-6.75c-.828 0-1.5-.672-1.5-1.5V4.25c0-.828.672-1.5 1.5-1.5H3V2a.375.375 0 0 1 .375-.375Zm6.75 4.5a.75.75 0 0 0-.75-.75h-6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75h6.75c.414 0 .75-.336.75-.75V6.125Z"
    />
  </svg>
);

/* ===== helpers ===== */
function timeAgo(datetime) {
  const parsed = new Date(datetime.replace(" ", "T"));
  if (Number.isNaN(parsed)) return "Invalid date";
  const now = new Date();
  const diff = now - parsed;
  const m = 60 * 1000, h = 60 * m, d = 24 * h;
  if (diff < m) return `${Math.max(1, Math.round(diff / 1000))} sec ago`;
  if (diff < h) return `${Math.round(diff / m)} min ago`;
  if (diff < d) return `${Math.round(diff / h)} hr ago`;
  return `${Math.round(diff / d)} days ago`;
}

/* ====== REWRITTEN BLOG DATA (layout unchanged) ====== */

const latestFeature = {
  category: "Tech",
  readMins: 12,
  date: "2025-09-08",
  title: "React Native vs. Flutter in 2025: Hiring, Performance & Total Cost",
  description:
    "We benchmark startup-ready stacks for mobile: build speed, native performance, animations, plugin ecosystems, talent availability, and long-term maintenance. Includes a decision matrix and real TCO examples.",
  href: "/post/react-native-vs-flutter-2025",
  image:
    "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1600&auto=format&fit=crop",
};

const trending = [
  {
    category: "Marketing",
    title: "2025 Brand Design Trends: From Neobrutalism To Soft Glass - What Actually Converts",
    href: "/post/2025-brand-design-trends-that-convert",
    image:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1200&auto=format&fit=crop",
  },
  {
    category: "Tech",
    title: "Vite + React + Tailwind: A Production Setup Checklist For Fast Sites",
    href: "/post/vite-react-tailwind-production-checklist",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop",
  },
  {
    category: "Educational",
    title: "Framer Motion Patterns: 12 Micro-Interactions That Lift Conversion",
    href: "/post/framer-motion-patterns-landing-pages",
    image:
      "https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=1200&auto=format&fit=crop",
  },
];
const midGrid = [
  {
    category: "Business",
    mins: 6,
    date: "2025-09-06",
    title: "How Agencies Price Web Projects In 2025 (Data From 120 Quotes)",
    href: "/post/how-agencies-price-web-projects-2025",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop", 
    // 📊 Business meeting / pricing discussion
  },
  {
    category: "Tech",
    mins: 7,
    date: "2025-09-05",
    title: "React Native For Startups: What To Ship In The First 30 Days",
    href: "/post/react-native-startup-30-day-roadmap",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop", 
    // 💻 Developer coding on laptop (tech/startup vibe)
  },
  {
    category: "Social Media",
    mins: 5,
    date: "2025-09-04",
    title: "Short-Form Video Playbook: 5 Hooks That Boost 3-Second Retention",
    href: "/post/short-form-video-hooks-2025",
    image:
      "https://images.unsplash.com/photo-1607344645866-009c320b63e0?q=80&w=1600&auto=format&fit=crop", 
    // 📱 Social media on phone (fits short-form video topic)
  },
];


const categories = [
  { name: "Breaking News", href: "/insights/breaking-news" },
  { name: "Educational", href: "/insights/educational" },
  { name: "Tech", href: "/insights/tech" },
  { name: "Marketing", href: "/insights/marketing" },
  { name: "Entertainment", href: "/insights/entertainment" },
  { name: "Social Media", href: "/insights/social-media" },
  { name: "Products", href: "/insights/products" },
  { name: "Events", href: "/insights/events" },
  { name: "Business", href: "/insights/business" },
  { name: "Business Directory", href: "/directory" },
];

const breaking = [
  { when: "2025-09-09 18:20", title: "Meta Ships React 19 RC With Actions And Improved Server Components", href: "/post/react-19-rc-actions-server-components" },
  { when: "2025-09-09 16:45", title: "Vite 6 Beta Focuses On DX: Faster HMR, Better Monorepo Stories", href: "/post/vite-6-beta-dx-hmr-monorepo" },
  { when: "2025-09-09 12:30", title: "Figma Adds Native Variables To Prototyping For Multi-Theme Systems", href: "/post/figma-variables-prototyping-multitheme" },
  { when: "2025-09-08 22:10", title: "Expo SDK 52 Brings New Dev Tools And Hermes Improvements", href: "/post/expo-sdk-52-release-notes" },
  { when: "2025-09-08 15:05", title: "Next.js 15 Rumor Roundup: Partial Prerendering Gets A Usability Pass", href: "/post/nextjs-15-ppr-usability-rumors" },
  { when: "2025-09-08 10:48", title: "Shopify Drops New B2B APIs For Headless Checkout", href: "/post/shopify-b2b-apis-headless-checkout" },
  { when: "2025-09-07 19:40", title: "Stripe Releases Analytics Templates For SaaS Dashboards", href: "/post/stripe-analytics-templates-saas" },
  { when: "2025-09-07 14:05", title: "Tailwind v4 Sneak Peek Shows Design Tokens And Faster JIT", href: "/post/tailwind-v4-sneak-peek" },
  { when: "2025-09-06 20:25", title: "Apple App Store Policy Update Eases TestFlight External Testing Limits", href: "/post/app-store-testflight-policy-update" },
  { when: "2025-09-06 09:55", title: "GitHub Actions Adds Matrix Caching For Monorepos", href: "/post/github-actions-matrix-caching" },
];

/* ===== component ===== */
export default function Insights() {
  const scrollerRef = useRef(null);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    let raf, dir = 1;
    const step = () => {
      el.scrollLeft += 0.5 * dir;
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 2) dir = -1;
      if (el.scrollLeft <= 0) dir = 1;
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section className="bvi-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* header */}
        <div className="flex items-center justify-between py-8">
          <a href="#" className="flex items-center gap-3">
            <div className="text-xl font-semibold tracking-wide">
              <span className=" text-2xl opacity-80">NextStac</span>{" "}
              <span className="italic text-primary">Insights</span>
            </div>
          </a>

          <a href="/insights" className="btn-primary">
            <span className="link-underline">Visit Insights</span>
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>

        <div className="soft-divider" />

        {/* main 2-col */}
        <div className="grid lg:grid-cols-[1fr_360px] gap-8 py-8">
          {/* latest feature */}
          <article className="relative bvi-card">
            <div className="overflow-hidden rounded-2xl">
              <div className="aspect-[16/9] relative">
                <img
                  alt={latestFeature.title}
                  src={latestFeature.image}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-black/10" />
              </div>

              <div className="p-5 sm:p-6">
                <header className="flex flex-wrap items-center gap-3 text-xs">
                  <a
                    href={`/insights/${latestFeature.category.toLowerCase()}`}
                    className="badge"
                  >
                    <span className="link-underline">{latestFeature.category}</span>
                  </a>

                  <div className="inline-flex items-center gap-1 u-tx-secondary">
                    <ClockIcon className="w-3.5 h-3.5" />
                    <span>{latestFeature.readMins} min</span>
                  </div>

                  <div className="inline-flex items-center gap-1 u-tx-secondary">
                    <CalendarDays className="w-3.5 h-3.5" />
                    <span>
                      {new Date(latestFeature.date).toLocaleDateString(undefined, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                </header>

                <h2 className="mt-3 text-2xl sm:text-3xl leading-snug font-semibold">
                  {latestFeature.title}
                </h2>
                <p className="mt-3 text-base u-tx-secondary line-clamp-3">
                  {latestFeature.description}
                </p>
                <a href={latestFeature.href} className="absolute inset-0" aria-label={latestFeature.title} />
              </div>
            </div>
          </article>

          {/* sidebar */}
          <aside className="space-y-8">
            {/* trending */}
            <div>
              <div className="text-xs uppercase tracking-wide u-tx-secondary mb-3">Trending</div>
              <div className="space-y-3">
                {trending.map((t, i) => (
                  <a
                    key={i}
                    href={t.href}
                    className="group flex gap-3 rounded-xl px-2 py-2 hover:bg-white/[0.04] transition"
                  >
                    <div className="w-28 shrink-0 aspect-video overflow-hidden rounded-md ring-subtle">
                      <img src={t.image} alt="" className="w-full h-full object-cover" loading="lazy" />
                    </div>
                    <div className="py-1 pr-1 flex-1">
                      <div className="text-[11px] u-tx-secondary mb-1">{t.category}</div>
                      <div className="text-sm leading-snug opacity-90 group-hover:opacity-100 clamp-3">
                        {t.title}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* categories */}
            <div>
              <div className="text-xs uppercase tracking-wide u-tx-secondary mb-3">
                Explore All Insights Topic
              </div>
              <div className="grid grid-cols-2 gap-y-2">
                {(categories ?? []).map((c, i) => (
                  <a
                    key={i}
                    href={c.href}
                    className="group inline-flex items-center gap-2 text-[15px] font-semibold text-white/90 hover:text-white"
                  >
                    <span className="relative inline-flex items-center justify-center w-5 h-5">
                      <ChevronRight className="w-4 h-4 opacity-0 -translate-x-1 group-hover:opacity-70 group-hover:translate-x-0 transition" />
                    </span>
                    <span className="link-underline">{c.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </aside>
        </div>

        <div className="soft-divider" />

        {/* mid grid */}
        <div className="py-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {midGrid.map((post, i) => (
              <a
                key={i}
                href={post.href}
                className="group rounded-2xl overflow-hidden ring-subtle ring-subtle-hov bvi-card"
              >
                <div className="aspect-[16/9]">
                  <img src={post.image} alt="" className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-5">
                  <header className="flex items-center gap-3 text-[12px] u-tx-secondary">
                    <span>{post.category}</span>
                    <span className="inline-flex items-center gap-1">
                      <ClockIcon className="w-3.5 h-3.5" />
                      {post.mins} min
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <CalendarDays className="w-3.5 h-3.5" />
                      {new Date(post.date).toLocaleDateString(undefined, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </header>
                  <h3 className="mt-2 text-[15px] leading-snug text-white/90 group-hover:text-white clamp-3">
                    {post.title}
                  </h3>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* breaking news strip */}
        <div className="py-6">
          <div className="flex items-center justify-between mb-3">
            <div className="inline-flex items-center gap-2">
              <span className="text-[11px] uppercase tracking-wide px-2 py-1 rounded bg-primary text-white">
                Breaking News
              </span>
              <a href="/insights/breaking-news" className="text-sm u-tx-secondary hover:text-white transition">
                View All
              </a>
            </div>
          </div>

          <div ref={scrollerRef} className="flex gap-3 overflow-x-auto no-scrollbar scroll-smooth pr-1">
            {breaking.map((b, i) => (
              <a
                key={i}
                href={b.href}
                className="min-w-[360px] max-w-[480px] flex-1 rounded-xl px-4 py-3 ring-subtle ring-subtle-hov bvi-card"
              >
                <div className="text-xs u-tx-secondary">{timeAgo(b.when)}</div>
                <div className="mt-1 text-base text-white/90">{b.title}</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
