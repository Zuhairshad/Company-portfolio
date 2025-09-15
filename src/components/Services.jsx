// src/components/ServicesSection.jsx
import { useState } from "react";

function ExactServiceCard({
  title,
  intro,
  more,
  tags = [],
  primary = { label: "Learn More", href: "#" },
}) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="h-full w-auto border border-slate-200 bg-white px-8 py-8 xl:px-10 xl:py-10 shadow-md rounded-2xl transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
    >
      {/* Title */}
      <h2 className="text-2xl font-bold mb-4 text-slate-900">{title}</h2>

      {/* Intro */}
      <p className="text-base leading-7 text-slate-700">{intro}</p>

      {/* Read more toggle */}
      <button
        type="button"
        className="mt-2 text-sm font-semibold underline text-slate-600 hover:text-slate-900 transition"
        onClick={() => setOpen((v) => !v)}
      >
        {open ? "Read less" : "Read more"}
      </button>

      {open && (
        <p className="mt-3 text-base leading-7 text-slate-700">{more}</p>
      )}

      {/* Tags */}
      {!!tags.length && (
        <div className="mt-6 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-block rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-600"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* CTA */}
      <div className="mt-6">
        <a
          href={primary.href}
          className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-2.5 text-sm font-semibold text-white hover:bg-slate-800 transition"
        >
          {primary.label}
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            className="opacity-70"
          >
            <path
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default function Services() {
  const NAV_OFFSET_PX = 88;

  const services = [
    {
      title: "App Development",
      intro:
        "We design and build high-performance mobile and web apps that feel fast, reliable, and delightful across platforms.",
      more:
        "From MVPs for startups to enterprise-scale solutions, our app development covers end-to-end: planning, prototyping, development, testing, and continuous integration. We prioritize performance, offline-first experiences, and future scalability.",
      tags: ["iOS", "Android", "React Native", "Node.js"],
      primary: { label: "Learn More", href: "/services/app-development" },
    },
    {
      title: "Web Design & Development",
      intro:
        "We craft conversion-focused websites that blend modern aesthetics with technical excellence.",
      more:
        "Whether it’s a marketing site or a robust e-commerce build, we deliver blazing speed, accessibility, and SEO-ready structures. Our sites are optimized for scalability, integrations, and top-tier performance.",
      tags: ["Next.js", "React.js", "WordPress", "Webflow", "Shopify"],
      primary: { label: "Learn More", href: "/services/web-development" },
    },
    {
      title: "Search Engine Optimization (SEO)",
      intro:
        "Win organic visibility with technical foundations, intent-driven content, and smart internal linking.",
      more:
        "We dive deep into keyword strategy, optimize on-page elements, and strengthen your backlink profile. From Core Web Vitals to schema integration, we ensure your site stands out in search and drives meaningful traffic.",
      tags: ["Technical SEO", "On-Page", "Off-Page"],
      primary: { label: "Learn More", href: "/services/SEO" },
    },
    {
      title: "Digital Marketing",
      intro:
        "Campaigns engineered for growth—full-funnel strategy across paid, social, and email.",
      more:
        "Our team crafts compelling creatives and landing pages, manages ad spend with precision, and leverages analytics to scale ROI. Whether performance marketing or brand awareness, we ensure your message resonates.",
      tags: ["Performance", "Social Ads", "Email/SMS", "Landing Pages", "Analytics"],
      primary: { label: "Learn More", href: "/services/digital-marketing" },
    },
    {
      title: "UI / UX",
      intro:
        "User-centric flows, design systems, and prototypes that increase engagement and retention.",
      more:
        "We run detailed user research, build wireframes, and create clickable prototypes. Every design decision is backed by usability tests, ensuring intuitive experiences and measurable results.",
      tags: ["Wireframes", "Prototypes", "Usability", "Design System"],
      primary: { label: "Learn More", href: "/services/UIUX" },
    },
    {
      title: "Graphic Designing",
      intro:
        "Stand-out visuals that communicate your brand with clarity and impact across all touchpoints.",
      more:
        "From brand kits and illustrations to marketing collaterals and social packs, our designers craft assets that tell your story consistently across platforms.",
      tags: ["Brand Kit", "Social Creatives", "Print", "Illustration"],
      primary: { label: "Learn More", href: "/services/graphic-designing" },
    },
    {
      title: "Google PPC Ads",
      intro:
        "High-intent traffic on tap with tightly structured Google Ads that convert.",
      more:
        "We set up, manage, and optimize Google Ads campaigns across Search, Display, Shopping, and YouTube. Our data-driven approach focuses on reducing CPC and increasing ROAS.",
      tags: ["Search", "Display", "YouTube", "Shopping", "GA4", "GTM"],
      primary: { label: "Learn More", href: "/services/google-ppc-ads" },
    },
    {
      title: "Virtual Assistance",
      intro:
        "Reliable remote support to keep your operations organized and moving.",
      more:
        "Our virtual assistants can handle inbox management, CRM hygiene, research, scheduling, reporting, and more—giving you time to focus on strategic growth.",
      tags: ["Admin", "Research", "CRM", "Scheduling", "Reporting"],
      primary: { label: "Learn More", href: "/services/virtual-assistance" },
    },
    {
      title: "Video Editing",
      intro:
        "Scroll-stopping edits for ads, social, and brand stories—optimized per platform.",
      more:
        "From short-form TikTok/Reels to polished long-form YouTube edits, we cover cutting, captions, color grading, motion graphics, and sound design.",
      tags: ["Short-form", "Long-form", "Color", "Motion Graphics", "Captions"],
      primary: { label: "Learn More", href: "/services/video-editing" },
    },
  ];

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16">
        <h2 className="text-center text-5xl font-bold mb-12 text-slate-900">
          Webify Tech Creative Services
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">
          {/* LEFT sticky info panel */}
          <aside
            className="hidden lg:block lg:col-span-1 self-start -ml-6"
            style={{ position: "sticky", top: NAV_OFFSET_PX }}
          >
            <div className="space-y-4 bg-white">
              <div className="text-xs uppercase tracking-wide text-slate-500">
                Our Services
              </div>
              <p className="text-xl font-semibold text-slate-900">
                Customized &amp; creative marketing solutions for businesses
              </p>

              <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1493666438817-866a91353ca9?q=80&w=1200&auto=format&fit=crop"
                  alt="Featured project"
                  className="w-full h-60 object-cover"
                  loading="lazy"
                />
                <div className="p-5">
                  <div className="text-sm font-semibold text-slate-900">
                    Leaside Blvd
                  </div>
                  <a
                    href="#"
                    className="mt-2 inline-block text-sm font-semibold underline text-slate-700"
                  >
                    Read Our Case
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-full bg-black px-5 py-2.5 text-sm font-semibold text-white"
                >
                  Request a Proposal
                </a>
                <a href="#" className="text-sm text-slate-700">
                  Contact Us
                </a>
              </div>
            </div>
          </aside>

          {/* RIGHT cards */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
              {services.map((s) => (
                <ExactServiceCard key={s.title} {...s} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
