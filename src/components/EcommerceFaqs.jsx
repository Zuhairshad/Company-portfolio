// src/components/FaqsSection.jsx
import { useMemo, useState } from "react";

const TABS = ["All"];

const faqs = [
  {
    q: "What are the costs of managing a store on Amazon, eBay, and Etsy?",
    a: `The cost of our marketplace marketing services varies depending on scope and platform.
        Estimated prices:
        • Amazon - from $800
        • Etsy - from $500
        • eBay - from $500
        Contact our specialists for an exact quote tailored to your project.`,
    cat: "All",
  },
  {
    q: "How to pick a marketplace marketing agency that multiplies my sales?",
    a: `Look for deep marketplace expertise, diverse promotional strategies, and clear, consistent communication.
        The right agency should demonstrate measurable growth through transparent processes.`,
    cat: "All",
  },
  {
    q: "Why do you need business analysis?",
    a: `Business analysis helps you identify key market challenges and opportunities before launching.
        It includes evaluating the best products, target regions, competition level, pricing, delivery methods,
        and projected turnover - leading to data-driven decisions and stronger market entry.`,
    cat: "All",
  },
  {
    q: "How do you register a seller?",
    a: `We guide you through the entire seller registration process:
        1. Collect required project data and documents
        2. Communicate with platform support
        3. Set up and verify store details
        4. Warm up the account before launching sales`,
    cat: "All",
  },
  {
    q: "How is product certification verified?",
    a: `Product certification depends on category and region:
        • Determine if certification is required
        • Toys - certification in Europe and SPSC
        • FDA registration for food, pet food, cosmetics, etc.
        • CPNP notification (EU cosmetics)
        • FDA approval for cosmetic products`,
    cat: "All",
  },
  {
    q: "What does it mean to promote listings?",
    a: `Promotion means optimizing product visibility, content, and advertising across marketplaces. - Amazon: Keyword research, listing optimization, compliant copywriting, GTIN/UPC support, and indexing checks. - eBay: Tailored copy, keyword strategy, visuals, HTML templates, listing uploads, and StoreFront creation. - Etsy: Content creation, visuals, coupon promotions, listing updates, and platform support.`,
    cat: "All",
  },
];

function Chevron({ open }) {
  return (
    <svg
      className={`h-5 w-5 transition-transform duration-200 ${
        open ? "rotate-180" : ""
      }`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

function Item({ q, a, idx }) {
  const [open, setOpen] = useState(false);
  const id = `faq-${idx}-${q.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

  return (
    <div className="py-2">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-6 py-3 text-left"
        aria-expanded={open}
        aria-controls={id}
      >
        <span className="text-[15px] md:text-base font-medium text-slate-800">
          {q}
        </span>
        <span className="text-slate-500 shrink-0">
          <Chevron open={open} />
        </span>
      </button>

      <div
        id={id}
        className={`grid transition-[grid-template-rows,opacity,transform] duration-300 ease-out will-change-[grid-template-rows,opacity,transform] ${
          open
            ? "grid-rows-[1fr] opacity-100 translate-y-0"
            : "grid-rows-[0fr] opacity-0 -translate-y-1"
        }`}
      >
        <div className="overflow-hidden">
          <div className="pb-3 text-sm leading-6 text-slate-600 whitespace-pre-line">
            {a}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function EcommerceFaqs() {
  const [tab, setTab] = useState("All");

  const filtered = useMemo(() => {
    if (tab === "All") return faqs;
    return faqs.filter((f) => f.cat === tab);
  }, [tab]);

  return (
    <section className="relative bg-blue-50 pt-10">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-indigo-50/70 via-sky-50/50 to-white" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[360px,1fr] gap-12">
          {/* Left column */}
          <div>
            <div className="inline-flex items-center rounded-full bg-white shadow-sm border border-slate-200 px-3 py-1 text-[11px] font-semibold tracking-wide text-slate-700">
              FAQs
            </div>

            <h2 className="mt-4 text-3xl md:text-3xl font-semibold text-slate-900">
              Answers to Common Marketplace Questions
            </h2>

            <p className="mt-4 text-slate-600 text-base leading-7">
              Explore frequently asked questions about our e-commerce and
              marketplace management services for Amazon, eBay, and Etsy.
            </p>
          </div>

          {/* Right column */}
          <div className="relative">
            <div className="rounded-2xl bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70 border border-slate-200 p-3 divide-y divide-slate-200 shadow-sm">
              {filtered.map((f, i) => (
                <Item key={f.q} q={f.q} a={f.a} idx={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
