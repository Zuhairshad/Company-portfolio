// src/pages/RequestProposal.jsx
import { useEffect } from "react";
import { InlineWidget } from "react-calendly"; // npm i react-calendly
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import FooterIntro from "../components/FooterIntro";
const logo = [
  { src: "favicon.png", alt: "Acme" },
];

const faqs = [
  { q: "How long is the intro call?", a: "Usually 15–30 minutes." },
  { q: "What do you need from me?", a: "A quick overview of goals, audience, examples you like, and any deadlines." },
  { q: "Do you sign NDAs?", a: "Yes. We can sign yours or provide ours." },
];

export default function RequestProposal() {
  useEffect(() => {
    // If you ever switch to Calendly’s script embed, keep it here to avoid blocking
  }, []);

  return (
    <main className=" bg-[#0B1220] text-white">
      <Navbar />

      {/* Header strip */}
      <div className="border-b pt-40 border-white/10 text-sm">
        <div className="mx-auto max-w-7xl px-4 py-2 flex items-center gap-2 text-slate-300">

          <span className="ml-auto text-slate-400">Avg. response: &lt; 2 hrs</span>
        </div>
      </div>

      {/* Title + trust row */}
      <section className="mx-auto max-w-7xl py-16 px-4 pt-10 pb-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
          Request a Proposal
        </h1>
        <p className="mt-3 text-slate-300 max-w-2xl">
          Book a quick discovery call (15–30 min). We’ll align on goals, scope, timeline, and budget to craft your proposal.
        </p>

        {/* Logos */}
        <div className="mt-6 flex flex-wrap items-center gap-6 opacity-80">
          {logo.map((l) => (
            <img key={l.alt} src={l.src} alt={l.alt} className="h-8 w-auto" />
          ))}
        </div>
      </section>

      {/* Main grid */}
      <section className="mx-auto max-w-7xl px-4 pb-16 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Calendly */}
        <div className="lg:col-span-8">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-xl font-semibold">Pick a time that works for you</h2>
            <span className="text-xs px-2 py-1 rounded-full bg-white/10 text-slate-200">
              Timezone auto-detected
            </span>
          </div>

          <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
            {/* Replace with your Calendly URL */}
            <InlineWidget
              url="https://calendly.com/zuhairshad140/proposal-discovery-call"
              styles={{ height: "720px" }} // adjust as you like
              pageSettings={{
                backgroundColor: "0B1220",
                hideEventTypeDetails: false,
                hideLandingPageDetails: true,
                primaryColor: "ffffff",
                textColor: "ffffff",
              }}
              prefill={{}}
            />
          </div>

          <p className="mt-3 text-xs text-slate-400">
            Powered by Calendly - we respect your privacy and never share your info.
          </p>
        </div>

        {/* Right: Sidebar (sticky) */}
        <aside className="lg:col-span-4">
          <div className="lg:sticky lg:top-24 space-y-6">
            {/* What we’ll cover */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <h3 className="text-lg font-semibold">What we’ll cover</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-200">
                <li>• Your goals & audience</li>
                <li>• Scope & key deliverables</li>
                <li>• Timeline & milestones</li>
                <li>• Budget ranges & next steps</li>
              </ul>
            </div>

            {/* Services mini-cards */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <h3 className="text-lg font-semibold">Popular services</h3>
              <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
                {["Web Design", "Web Dev", "SEO", "Branding"].map((s) => (
                  <Link
                    key={s}
                    to={`/services/${s.toLowerCase().replace(" ", "-")}`}
                    className="rounded-xl border border-white/10 bg-black/30 px-3 py-2 hover:bg-white/10 transition"
                  >
                    {s}
                  </Link>
                ))}
              </div>
            </div>

            {/* Testimonial */}
            <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-5">
              <p className="text-sm text-slate-200">
                “Nextstac translated our vision into a clean, high-converting site. Smooth process, on time, on budget.”
              </p>
              <div className="mt-3 text-xs text-slate-400"> - Sarah M., Head of Growth</div>
            </div>

            {/* Alternatives */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <h3 className="text-lg font-semibold">Prefer not to book?</h3>
              <p className="mt-2 text-sm text-slate-300">
                Email us your brief and we’ll reply within a business day.
              </p>
              <div className="mt-3 flex flex-wrap gap-3 text-sm">
                <a href="mailto:mubashir@nextstac.com" className="rounded-xl border border-white/10 px-3 py-2 hover:bg-white/10">
                  mubashir@nextstac.com
                </a>
                <a href="https://wa.me/923281610706" target="_blank" rel="noreferrer" className="rounded-xl border border-white/10 px-3 py-2 hover:bg-white/10">
                  WhatsApp
                </a>
              </div>
            </div>

            {/* FAQ mini */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <h3 className="text-lg font-semibold">FAQs</h3>
              <div className="mt-3 divide-y divide-white/10">
                {faqs.map((f) => (
                  <details key={f.q} className="group py-3">
                    <summary className="cursor-pointer list-none text-sm text-slate-200 flex items-center justify-between">
                      {f.q}
                      <span className="ml-4 text-slate-400 group-open:rotate-180 transition">⌄</span>
                    </summary>
                    <p className="mt-2 text-xs text-slate-300">{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </section>

      {/* Packages snapshot (optional) */}
      <section className="mx-auto max-w-7xl px-4 pb-20">
        <h2 className="text-2xl font-semibold">Typical Engagements</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { name: "Starter", blurb: "Landing page or mini-site", price: "$$", time: "2–3 weeks" },
            { name: "Growth", blurb: "Site + CMS + SEO setup", price: "$$$", time: "4–6 weeks" },
            { name: "Custom", blurb: "Complex features & integrations", price: "Custom", time: "Varies" },
          ].map((p) => (
            <div key={p.name} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <span className="text-xs rounded-full bg-white/10 px-2 py-1">{p.time}</span>
              </div>
              <p className="mt-2 text-sm text-slate-300">{p.blurb}</p>
              <div className="mt-3 text-sm text-slate-200">Budget: {p.price}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <div className="border-t border-white/10 bg-[#OB1220]">
        <div className="mx-auto max-w-7xl px-4 py-6 flex flex-col sm:flex-row items-center gap-3">
          <p className="text-sm text-slate-300">Ready to talk? Grab a slot or email your brief.</p>
          <div className="sm:ml-auto flex gap-3">
            <a href="#top" onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }} className="rounded-xl bg-white text-black px-4 py-2 text-sm font-semibold hover:opacity-90">
              Book a Call
            </a>
            <a href="mailto:mubashir@nextstac.com" className="rounded-xl border border-white/20 px-4 py-2 text-sm hover:bg-white/10">
              Email Brief
            </a>
          </div>
        </div>
      </div>
      <FooterIntro />
    </main>
  );
}
