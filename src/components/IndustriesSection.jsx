// src/components/IndustriesSection.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function IndustryCard({ title, blurb, more, href }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
      {/* Toggle */}
      <button
        type="button"
        onClick={() => setOpen(v => !v)}
        className="w-full p-5 flex items-start justify-between gap-4"
        aria-expanded={open}
      >
        <div className="flex-1">
          <div className="flex items-center gap-3">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-blue-600"></span>
            <h3 className="text-base font-medium text-slate-900">{title}</h3>
          </div>
          <p className="mt-2 text-sm text-slate-600">{blurb}</p>
        </div>

        <svg
          className={`mt-1 h-5 w-5 text-slate-500 transition-transform ${
            open ? "rotate-180" : ""
          }`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {/* Accordion content */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0, y: -6 }}
            animate={{ height: "auto", opacity: 1, y: 0 }}
            exit={{ height: 0, opacity: 0, y: -6 }}
            transition={{ duration: 0.22 }}
          >
            <div className="px-5 pb-5 pt-0 text-sm text-slate-700">
              <p className="mb-4">{more}</p>
              {href && (
                <a
                  href={href}
                  className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                >
                  Learn more
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4.5 12h15M19.5 12l-6.75-6.75M19.5 12l-6.75 6.75" />
                  </svg>
                </a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const ITEMS = [
  {
    title: "Real Estate & Construction",
    blurb: "Websites and UI/UX that build trust and drive leads",
    more:
      "Custom real estate platforms with clean UI/UX, property search features, and web design optimized for conversions.",
    href: "/services/UIUX",
  },
  {
    title: "B2B",
    blurb: "Strategic web development for complex sales cycles",
    more:
      "High-performing websites and applications that shorten long B2B sales cycles with tailored content and seamless development.",
    href: "/services/web-development",
  },
  {
    title: "E-Commerce",
    blurb: "Boost sales with user-focused design and PPC ads",
    more:
      "Conversion-first storefronts supported by strong UI/UX and Google PPC campaigns to drive targeted traffic and maximize ROI.",
    href: "/services/google-ppc",
  },
  {
    title: "Education",
    blurb: "Accessible web design for schools and programs",
    more:
      "Content-rich educational websites with intuitive UI/UX and responsive design for students, parents, and institutions.",
    href: "/services/web-development",
  },
  {
    title: "Technology",
    blurb: "Custom development and UX for tech companies",
    more:
      "Developer-friendly websites, SaaS landing pages, and product-focused UI/UX design built to scale with modern stacks.",
    href: "/services/web-development",
  },
  {
    title: "Business-to-Consumer",
    blurb: "Graphic design and branding that builds loyalty",
    more:
      "Creative visuals, graphic design, and UI that connect with consumers while web design ensures repeat visits.",
    href: "/services/UIUX",
  },
  {
    title: "Health & Wellness",
    blurb: "User-friendly design for healthcare websites",
    more:
      "HIPAA-aware web design with clear service flows, engaging UI/UX, and PPC campaigns to attract and retain patients.",
    href: "/services/UIUX",
  },
  {
    title: "Food & Beverage",
    blurb: "Graphic design and UI that captures taste",
    more:
      "Menu-focused websites, packaging visuals, and creative graphics combined with intuitive UI/UX to engage customers.",
    href: "/services/graphic-design",
  },
  {
    title: "Professional Services",
    blurb: "Web design and PPC ads that win new clients",
    more:
      "Professional, credibility-focused websites paired with Google PPC campaigns to generate and convert high-quality leads.",
    href: "/services/google-ppc",
  },
  {
    title: "Entertainment & Media",
    blurb: "Motion-rich UI/UX and creative design",
    more:
      "Web development and graphic design infused with interactivity and media-rich visuals to match pop culture energy.",
    href: "/services/UIUX",
  },
  {
    title: "StartUps",
    blurb: "Scalable web development for fast growth",
    more:
      "From MVPs to growth-stage products, startups get robust development, clean UI, and agile web design solutions.",
    href: "/services/web-development",
  },
  {
    title: "Sports & Fitness",
    blurb: "UI/UX that energizes and converts",
    more:
      "Dynamic websites with bold visuals, booking funnels, and UI/UX designed to excite and drive memberships.",
    href: "/services/UIUX",
  },
];


export default function IndustriesSection() {
  return (
    <section className="py-10 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="text-sm font-medium text-slate-500">Industries</div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
            Industries We Collaborate With
          </h2>
          <p className="mt-4 text-base text-slate-600">
            As a company with over a decade of experience, we’re proud to have
            partnered across many industries - expanding our expertise and
            delivering excellent results for our clients.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((it) => (
            <IndustryCard key={it.title} {...it} />
          ))}
        </div>
      </div>
    </section>
  );
}
