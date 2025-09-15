// src/components/OnPageTechnicalSEO.jsx
export default function OnPageTechnicalSEO() {
  const services = [
    { title: "Comprehensive Site Audit", desc: "A detailed audit uncovers technical issues that affect search visibility. We analyze site architecture, crawlability, indexation, and internal linking to identify opportunities for improvement. This ensures search engines can effectively access your most valuable content while users experience a smooth, logical journey across your website." },
    { title: "Core Web Vitals Optimization", desc: "We optimize your site for Google’s Core Web Vitals by enhancing speed, responsiveness, and stability. From reducing load times and improving server response to eliminating layout shifts, our work creates a seamless browsing experience that improves rankings and reduces bounce rates." },
    { title: "Structured Data & Schema", desc: "By implementing schema markup, we make your content more discoverable in search engines. Product, FAQ, and article schemas improve click-through rates and help you appear in rich results, voice search, and featured snippets—giving your brand greater visibility and authority online." },
    { title: "Mobile-First Experience", desc: "Most searches happen on mobile devices, so your site must be responsive and fast. We optimize navigation, touch elements, and content presentation for smaller screens. The result is a mobile-friendly experience that improves engagement and aligns with Google’s mobile-first indexing." },
    { title: "Content Structure Alignment", desc: "Content that is clear, well-structured, and optimized drives both user satisfaction and SEO performance. We refine headings, meta data, and internal links to improve readability and topical relevance, ensuring your site communicates value to both visitors and search engines." },
    { title: "Secure & Crawl-Ready", desc: "We make sure your site is safe and fully indexable. HTTPS implementation, canonical tags, optimized sitemaps, and proper robots.txt rules ensure search engines crawl efficiently. These practices enhance rankings, protect user trust, and keep your website compliant with SEO best practices." }
  ];

  return (
    <section className="bg-blue-50">
      <div className="mx-auto max-w-6xl px-8 py-16">
        {/* custom grid: left 1fr, right 1.5fr */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.5fr]">
          {/* ===== Left: title + image + description ===== */}
          {/* Sticky only on lg+, and keep behind with lower z-index */}
          <aside className="relative z-0 lg:sticky lg:top-24 lg:self-start">
            <h2 className="text-3xl font-bold text-slate-900">
              On-Page &amp; Technical SEO
            </h2>

            <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="aspect-[16/10] w-full overflow-hidden rounded-xl">
                <img
                  src="/seo .jpeg"          // <- removed space in filename
                  alt="Analytics dashboard and charts representing SEO performance"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>

              <p className="mt-4 text-sm leading-6 text-slate-600">
                We focus on the foundations that search engines rely on: clean
                architecture, performant pages, and content that’s easy to
                understand. This section covers the technical groundwork that
                supports long-term organic growth.
              </p>
            </div>
          </aside>

          {/* ===== Right: services list ===== */}
          {/* Ensure it stacks above on all screens */}
          <div className="relative z-10">
            <p className="text-base text-slate-700">
              We refine every element of your website to ensure search engines
              and visitors get the best possible experience. Our technical and
              on-page optimizations establish a strong foundation for
              sustainable growth.
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
