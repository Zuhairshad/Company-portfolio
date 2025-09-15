export default function VideoService() {
  const services = [
    {
      title: "Pre-Production Alignment",
      desc: "We align on goals, target platforms (YouTube, Reels, TikTok), aspect ratios, brand kit, and references. Clear scope and timelines ensure a smooth edit and on-time delivery."
    },
    {
      title: "Rough Cut & Story Assembly",
      desc: "We build the narrative from selects—tight pacing, clear beats, and structured arcs. Filler is trimmed, context is front-loaded, and hooks land in the first 3–5 seconds."
    },
    {
      title: "Motion Graphics & Titles",
      desc: "Kinetic typography, callouts, lower-thirds, logo stings, and info cards. We match your brand kit (fonts/colors/safe areas) and deliver reusable templates when needed."
    },
    {
      title: "Captions & Accessibility",
      desc: "Burned-in captions or SRT/VTT with platform-friendly styling. Multi-language options available to increase reach and retention, especially for sound-off viewers."
    },
    {
      title: "Color Grade & Look Consistency",
      desc: "Primary/secondary corrections, camera matching, tasteful LUTs, and shot-to-shot consistency. We ensure skin tones, contrast, and white balance feel natural and premium."
    },
    {
      title: "Sound Design & Mix",
      desc: "Dialogue cleanup, EQ/comp, noise reduction, and music/SFX balancing. Loudness is set per platform so your videos sound polished without clipping or pumping."
    },
    {
      title: "Platform Specs & Exports",
      desc: "Masters in 16:9, 1:1, and 9:16 with correct bitrates, color space, and codec for each destination. Thumbnails/cover frames optional for better CTR."
    },
    {
      title: "QC, Versioning & Delivery",
      desc: "Timestamped review links (Frame.io/Drive), change logs, and final QC (spelling, pops, flashes). We hand over masters, caption files, and organized project assets."
    }
  ];

  return (
    <section className="bg-blue-50">
      <div className="mx-auto max-w-6xl px-8 py-16">
        {/* custom grid: left 1fr, right 1.5fr */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.5fr]">
          {/* ===== Left: sticky only on lg ===== */}
          <aside className="relative z-0 lg:sticky lg:top-24 lg:self-start">
            <h2 className="text-3xl font-bold text-slate-900">
              Editing &amp; Post-Production
            </h2>

            <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="aspect-[16/10] w-full overflow-hidden rounded-xl">
                <img
                  src="/video.jpeg"
                  alt="Timeline view with color, captions, and motion graphics layers in a video editor"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>

              <p className="mt-4 text-sm leading-6 text-slate-600">
                We turn raw footage into compelling stories. From rough cut to
                motion graphics, color, captions, and sound mix—every step is
                engineered for retention, clarity, and platform performance.
              </p>
            </div>
          </aside>

          {/* ===== Right: services list ===== */}
          <div className="relative z-10">
            <p className="text-base text-slate-700">
              Our editing pipeline balances creative storytelling with technical
              precision. Each deliverable is tailored to your channels and
              audience, ensuring clean visuals, crisp audio, and scroll-stopping
              opens—without sacrificing brand consistency.
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
