// src/components/FaqsSection.jsx
import { useMemo, useState } from "react";

const TABS = ["All", "Website", "Branding"];

const faqs = [
  // --- All (shared) ---
  {
    q: "Why partner with NextStac?",
    a: `We lead with clarity, craft, and honest process. We take on work where our experience makes a visible difference - then deliver it with tight communication and measurable outcomes. Our team’s work is consistently top-rated across industry platforms.`,
    cat: "All",
  },
  {
    q: "Which services do you provide?",
    a: `End-to-end Web Design & Development, Brand Strategy and Visual Identity, SEO, audits and consulting, content support, and graphic design for campaigns and social.`,
    cat: "All",
  },
  {
    q: "What timelines should I expect?",
    a: `Typical website builds land in the ~4–12 week window depending on scope and integrations. Branding programs are ~4–8 weeks. Audits/consulting run ~2–4 weeks. SEO operates on a monthly cadence.`,
    cat: "All",
  },
  {
    q: "How large is the team?",
    a: `A multidisciplinary group of 15+ senior specialists: creative direction, project management, UX/UI, full-stack development, brand strategy, and content.`,
    cat: "All",
  },
  {
    q: "Do you handle copy/content?",
    a: `Yes. Our content and SEO team creates on-brand, search-friendly copy for pages, landing funnels, and blogs as needed.`,
    cat: "All",
  },
  {
    q: "What’s inside a branding package?",
    a: `Two tracks: (1) Strategy - research, positioning, messaging; (2) Identity - logo system, color, typography, visual language, and brand guidelines.`,
    cat: "All",
  },
  {
    q: "Can you audit our marketing or website?",
    a: `Absolutely. We review brand, site UX, analytics, SEO and channels, then deliver a prioritized roadmap with effort vs. impact.`,
    cat: "All",
  },
  {
    q: "Do you offer SEO?",
    a: `Yes - technical and on-page foundations, content planning, and authority building. We tailor retainers to your goals and timeline.`,
    cat: "All",
  },
  {
    q: "Who do you usually work with?",
    a: `Startups to enterprise across tech, professional services, real estate, and nonprofits - primarily North America with international clients as well.`,
    cat: "All",
  },
  {
    q: "Do you provide ongoing maintenance?",
    a: `Yes - monthly plans or ad-hoc support for updates, fixes, and optimizations.`,
    cat: "All",
  },

  // --- Website tab specifics ---
  {
    q: "Can you refresh or upgrade my current site?",
    a: `Yes. We routinely redesign and modernize existing websites, preserving what works and improving speed, UX, and conversions.`,
    cat: "Website",
  },
  {
    q: "Do you build on Wix?",
    a: `We do. We design premium, performant sites on Wix when it’s the right fit for your team and content workflow.`,
    cat: "Website",
  },
  {
    q: "Do you build on WordPress?",
    a: `Yes - custom themes and component systems, as well as headless WordPress when needed.`,
    cat: "Website",
  },
  {
    q: "Will I be able to edit the site myself?",
    a: `We recommend editable CMS setups and include handover sessions so your team can confidently manage routine updates.`,
    cat: "Website",
  },
  {
    q: "Are your sites mobile-friendly?",
    a: `Every build is responsive by design with tailored mobile layouts for speed and readability.`,
    cat: "Website",
  },
  {
    q: "Is SEO included with web projects?",
    a: `Core on-page SEO (structure, metadata, performance) is included. Ongoing content and link strategy can be added as a retainer.`,
    cat: "Website",
  },
  {
    q: "Can you handle imagery and assets?",
    a: `We can source licensed stock and create simple graphics. Dedicated photography/video can be arranged on request.`,
    cat: "Website",
  },
  {
    q: "Do you work internationally?",
    a: `Yes - we operate remotely and support clients across time zones.`,
    cat: "Website",
  },
  {
    q: "Who will be on my project?",
    a: `A core squad led by a PM and Creative Director, with UX, dev, or brand specialists added per scope.`,
    cat: "Website",
  },
  {
    q: "What is wireframing?",
    a: `Low-fidelity screens to align structure and flows before design - reducing revisions and accelerating build time.`,
    cat: "Website",
  },
  {
    q: "What is a sitemap?",
    a: `A blueprint of pages and URL structure that guides navigation, content planning, and SEO.`,
    cat: "Website",
  },
  {
    q: "Do you work with pre-made themes?",
    a: `We can, but we generally favor custom components tuned to your goals, content, and brand system.`,
    cat: "Website",
  },
  {
    q: "Are you a certified/recognized agency?",
    a: `We’re an experienced team with a strong track record and public client reviews to match.`,
    cat: "Website",
  },
  {
    q: "Is there a page limit?",
    a: `No fixed cap - page count and content depth inform the scope and timeline. We’ll right-size together.`,
    cat: "Website",
  },
  {
    q: "I’m new to WordPress - do you train?",
    a: `Yes - live walkthroughs plus quick-reference docs at handover.`,
    cat: "Website",
  },
  {
    q: "Who owns the finished website?",
    a: `You do. After sign-off, we transfer access, code, and relevant licenses to your organization.`,
    cat: "Website",
  },
  {
    q: "Which platforms do you support?",
    a: `WordPress, Webflow, Wix, Squarespace - and custom stacks when the project calls for it.`,
    cat: "Website",
  },
  {
    q: "Which CRMs can you integrate?",
    a: `Common connections include HubSpot, Salesforce, Pardot, and Marketo - plus others via API/Zapier as needed.`,
    cat: "Website",
  },

  // --- Branding tab specifics ---
  {
    q: "What is brand positioning?",
    a: `The strategic place your brand occupies in the market and in the customer’s mind - clear differentiation against alternatives.`,
    cat: "Branding",
  },
  {
    q: "What is brand identity?",
    a: `Your visual and verbal toolkit: logo system, color, type, voice, messaging, and the rules that keep everything consistent.`,
    cat: "Branding",
  },
  {
    q: "What is a brand persona?",
    a: `An archetype that captures your brand’s character - helpful for steering tone, messaging, and creative decisions.`,
    cat: "Branding",
  },
  {
    q: "Voice vs. tone - what’s the difference?",
    a: `Voice is your constant personality; tone flexes to the context (e.g., sales page vs. help doc) while staying on-brand.`,
    cat: "Branding",
  },
  {
    q: "Why invest in brand research?",
    a: `It grounds creative decisions in evidence - audience insight, competitive mapping, and positioning that drives effective identity work.`,
    cat: "Branding",
  },
];

  

function Chevron({ open }) {
  return (
    <svg
      className={`h-5 w-5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
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
          open ? "grid-rows-[1fr] opacity-100 translate-y-0" : "grid-rows-[0fr] opacity-0 -translate-y-1"
        }`}
      >
        <div className="overflow-hidden">
          <div className="pb-3 text-sm leading-6 text-slate-600">{a}</div>
        </div>
      </div>
    </div>
  );
}

export default function FaqsSection() {
  const [tab, setTab] = useState("All");

  const filtered = useMemo(() => {
    if (tab === "All") return faqs.filter((f) => f.cat === "All");
    return faqs.filter((f) => f.cat === tab);
  }, [tab]);

  return (
    <section className="relative bg-blue-50 pt-10">
      {/* soft top gradient wash */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-indigo-50/70 via-sky-50/50 to-white" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[360px,1fr] gap-12">
          {/* Left intro column */}
          <div>
            <div className="inline-flex items-center rounded-full bg-white shadow-sm border border-slate-200 px-3 py-1 text-[11px] font-semibold tracking-wide text-slate-700">
              FAQs
            </div>

            <h2 className="mt-4 text-3xl md:text-3xl font-semibold text-slate-900">
              Answers To Frequently Asked Questions
            </h2>

            <p className="mt-4 text-slate-600 text-base leading-7">
              Curious about how NextStac operates? Explore our FAQ section
              for a comprehensive understanding of our services and procedures.
            </p>

            <a
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-slate-300/80 bg-white px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50"
            >
              <span>Let&apos;s Discuss</span>
              <svg
                viewBox="0 0 24 24"
                className="h-3.5 w-3.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </a>

            {/* Resources boxes */}
            <div className="mt-14 space-y-4">
              <div className="rounded-xl border border-slate-200 bg-white/70 px-4 py-3">
                <div className="text-[12px] font-semibold text-slate-700">Latest Business Articles</div>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white/70 px-4 py-3">
                <div className="text-[12px] font-semibold text-slate-700">Latest Marketing Articles</div>
              </div>
            </div>
          </div>

          {/* Right content: tabs + two-column accordions */}
          <div className="relative">
            {/* Tabs */}
            <div className="flex items-center gap-2">
              {TABS.map((t) => {
                const active = t === tab;
                return (
                  <button
                    key={t}
                    onClick={() => setTab(t)}
                    className={`rounded-full px-3 py-1 text-[12px] font-semibold border ${
                      active
                        ? "bg-slate-900 text-white border-slate-900"
                        : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
                    }`}
                  >
                    {t}
                  </button>
                );
              })}
            </div>

            {/* Lists (two columns on md+) */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Column 1 */}
              <div className="rounded-2xl bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70 border border-slate-200 p-2 md:p-3 divide-y divide-slate-200 shadow-sm">
                {filtered
                  .filter((_, i) => i % 2 === 0)
                  .map((f, i) => <Item key={f.q} q={f.q} a={f.a} idx={i} />)}
              </div>

              {/* Column 2 */}
              <div className="rounded-2xl bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70 border border-slate-200 p-2 md:p-3 divide-y divide-slate-200 shadow-sm">
                {filtered
                  .filter((_, i) => i % 2 === 1)
                  .map((f, i) => <Item key={f.q} q={f.q} a={f.a} idx={i} />)}
              </div>
            </div>

            {/* extra bottom padding so expanded items never overlap the next section */}
            <div className="h-2 md:h-4" />
          </div>
        </div>
      </div>
    </section>
  );
}
