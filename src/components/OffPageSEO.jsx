// src/components/OffPageSEO.jsx
export default function OffPageSEO() {
  const services = [
    { title: "High-Quality Link Building", desc: "We build authoritative backlinks from trusted sources through ethical strategies. Our approach focuses on relevance and long-term value, ensuring your website gains credibility in the eyes of search engines while driving referral traffic from real users." },
    { title: "Guest Posting & Editorial Outreach", desc: "Our team secures placements on reputable blogs, industry magazines, and news outlets. By creating tailored content and building relationships with publishers, we earn mentions that establish thought leadership and expand your brand reach." },
    { title: "Digital PR & Brand Mentions", desc: "Through creative campaigns and PR-driven content, we generate buzz that earns organic mentions and backlinks. These strategies increase visibility across media channels, strengthen your reputation, and help you dominate your niche online." },
    { title: "Influencer & Community Engagement", desc: "We connect with influencers and online communities relevant to your industry. By leveraging their authority and active audiences, your brand gains credibility, referral traffic, and social signals that complement your SEO efforts." },
    { title: "Backlink Profile Audits", desc: "A strong off-page strategy also requires monitoring. We analyze your backlink profile for harmful or low-quality links, remove risks, and focus on building a clean, powerful link portfolio that supports consistent ranking growth." },
    { title: "Local & Niche Citations", desc: "For local and specialized businesses, we create citations in high-trust directories and niche hubs. These placements improve your local search visibility and help search engines verify your brand’s legitimacy and authority." }
  ];

  return (
    <section className="bg-blue-50">
      <div className="mx-auto max-w-6xl px-8 py-16">
        {/* custom grid: left 1fr, right 1.5fr */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.5fr]">
          {/* ===== Left: title + image + description ===== */}
          {/* Make sticky only on lg+, and push it behind with lower z-index */}
          <aside className="relative z-0 lg:sticky lg:top-24 lg:self-start">
            <h2 className="text-3xl font-bold text-slate-900">Off-Page SEO</h2>

            <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="aspect-[16/10] w-full overflow-hidden rounded-xl">
                <img
                  src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?auto=format&fit=crop&w=1200&q=60"
                  alt="Team collaborating on off-page SEO strategy"
                  className="h-full w-full object-cover"
                />
              </div>

              <p className="mt-4 text-sm leading-6 text-slate-600">
                Off-page SEO is about building authority and trust outside of
                your website. By earning high-quality backlinks, cultivating
                brand mentions, and leveraging influencer relationships, we help
                your business grow visibility, credibility, and long-term search
                performance beyond your own domain.
              </p>
            </div>
          </aside>

          {/* ===== Right: services list ===== */}
          {/* Ensure it stacks above on all screens */}
          <div className="relative z-10">
            <p className="text-base text-slate-700">
              Our off-page strategies are designed to strengthen your domain’s
              authority while driving qualified referral traffic. From digital
              PR to community engagement, we focus on sustainable methods that
              increase your brand’s reach and credibility.
            </p>

            <div className="mt-6 space-y-5">
              {services.map((s) => (
                <div
                  key={s.title}
                  className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <h4 className="font-semibold text-slate-800">{s.title}</h4>
                  <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
