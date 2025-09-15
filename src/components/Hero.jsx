// src/components/Hero.jsx
import { Link } from "react-router-dom";

// Hero component WITHOUT framer-motion for debugging
export default function Hero({
  variant = "default",
  minH,
  fillViewport = true,
  imgDesktop = "2.png",
  imgMobile = "2.png",
  overlayClass = "bg-gradient-to-b from-black/25 via-black/20 to-black/55",
  titleLines = ["Innovative", "Software Solutions"],
  subtitle = null,
  pills = ["Web Design Agency", "Marketing Agency", "Publication and Media"],
  featured = [],
  showRightPanel = true,
  brand = "Webify Tech",
  aboutTop = "At Webify Tech, we deliver innovative software solutions, modern websites, and digital strategies that help businesses thrive.",
  aboutBody = "We specialize in designing, developing, and scaling web, mobile, and cloud applications tailored to your goals and growth.",
  ctas = [
    { label: "Request a Proposal", href: "/contact", primary: true },
    { label: "Let's Discuss", href: "/contact", primary: false },
  ],
  titleColor = "text-white",
  // NEW: fine-tune background focal point per variant (e.g., "50% 60%")
  bgPositionDefault = "50% 0%",
  bgPositionAbout = "50% 60%",
}) {
  const isAbout = variant === "about";
  const fullBleed = fillViewport && !minH;
  const heroMinH =
    minH
      ? minH
      : fullBleed
      ? "min-h-[100svh] md:min-h-[100dvh]"
      : isAbout
      ? "min-h-[calc(80svh-var(--nav-h,0px))] md:min-h-[calc(80dvh-var(--nav-h,0px))]"
      : "min-h-[calc(100svh-var(--nav-h,0px))] md:min-h-[calc(100dvh-var(--nav-h,0px))]";

  // helper: srcSet for common widths (works for local assets too when using Vite)
  const desktopSrcSet = `${imgDesktop} 1200w, ${imgDesktop} 1600w, ${imgDesktop} 2000w`;
  const mobileSrcSet = `${imgMobile} 640w, ${imgMobile} 960w, ${imgMobile} 1200w`;

  if (variant === "work") {
    return (
      <section className={["relative isolate flex items-center justify-center text-white", heroMinH].join(" ")}>
        {/* BG */}
        <div className="absolute inset-0 z-0 bg-slate-950">
          <picture>
            <source media="(min-width: 640px)" srcSet={desktopSrcSet} />
            <img
              src={imgMobile}
              srcSet={mobileSrcSet}
              alt="Work background"
              className="h-full w-full object-cover object-center"
              fetchPriority="high"
              loading="eager"
              decoding="async"
              sizes="100vw"
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 pointer-events-none" />
          <div className={`absolute inset-0 pointer-events-none ${overlayClass}`} />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-black/20 pointer-events-none" />
        </div>

        {/* Centered Content */}
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <h1 className={["text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight", titleColor].join(" ")}>
            {titleLines.map((line, i) => (
              <span key={i} className={i ? "block" : ""}>{line}</span>
            ))}
          </h1>
          {subtitle && (
            <>
              <div className="mt-6 h-px w-24 mx-auto bg-white/25" />
              <p className="mt-6 text-base sm:text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
                {subtitle}
              </p>
            </>
          )}
        </div>
      </section>
    );
  }

  // =======================
  // DEFAULT / ABOUT VARIANTS
  // =======================
  return (
    <section className={["relative isolate text-white flex items-end", heroMinH].join(" ")}>
      {/* ---- Background (responsive <picture>) ---- */}
      <div className="absolute inset-0 z-0 bg-[#0B0F19]">
        <picture>
          <source media="(min-width: 640px)" srcSet={desktopSrcSet} />
          <img
            src={imgMobile}
            srcSet={mobileSrcSet}
            alt="Showcase"
            className="h-full w-full object-cover"
            style={{ objectPosition: isAbout ? bgPositionAbout : bgPositionDefault }}
            fetchPriority="high"
            loading="eager"
            decoding="async"
            sizes="100vw"
          />
        </picture>

        {/* Fades/overlays */}
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black/80 via-black/35 to-transparent pointer-events-none" />
        <div className={`absolute inset-0 ${overlayClass} pointer-events-none`} />
        <div className="absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-black/70 to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-black/70 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/85 via-black/40 to-transparent pointer-events-none" />
      </div>

      {/* ---- Foreground ---- */}
      <div className="relative z-10 lg:pb-20 mx-auto w-full max-w-[1700px] px-4 sm:px-6 md:px-8 pb-6 sm:pb-8">
        <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 md:gap-10 items-center">
          {/* Left: Heading + CTAs */}
          <div className={[isAbout ? "lg:col-span-6 lg:pl-0" : "lg:col-span-7 lg:pl-10", "px-4 sm:px-6"].join(" ")}>
            <div
              className={[
                isAbout ? "max-w-[720px]" : "max-w-[680px]",
                "drop-shadow-[0_2px_16px_rgba(0,0,0,0.4)]",
                "mx-auto sm:mx-0",
                !isAbout && "text-center sm:text-left",
              ].join(" ")}
            >
              <h1 className="font-extrabold tracking-tight leading-[1.05] text-[32px] xs:text-[38px] sm:text-[46px] md:text-[56px]">
                {titleLines.map((line, i) => (
                  <span key={i} className={i === 0 ? "" : "block"}>
                    {line}
                  </span>
                ))}
              </h1>
            </div>

            {isAbout ? (
              <>
                {subtitle && (
                  <p className="mt-4 text-base sm:text-lg text-white/80 max-w-lg">{subtitle}</p>
                )}
                {!!featured.length && (
                  <div className="flex items-center gap-6 pt-6">
                    <span className="text-xs tracking-wide text-white/50 uppercase">Featured On</span>
                    {featured.map(({ src, alt, height = 24 }, i) => (
                      <img key={i} src={src} alt={alt} className="opacity-90" style={{ height }} loading="lazy" decoding="async" />
                    ))}
                  </div>
                )}
              </>
            ) : (
              <>
                {!!pills?.length && (
                  <div className="mt-4 flex flex-wrap gap-2 justify-center sm:justify-start">
                    {pills.map((t) => (
                      <span key={t} className="px-3 py-1 rounded-full text-[11px] bg-white/10 border border-white/15 backdrop-blur">
                        {t}
                      </span>
                    ))}
                  </div>
                )}
                <div className="h-px w-full max-w-md bg-white/15 mx-auto sm:mx-0 mt-4" />
                {!!ctas?.length && (
                  <div className="mt-4 flex flex-wrap gap-3 justify-center sm:justify-start">
                    {ctas.map(({ label, href, primary }) => (
                      <Link
                        key={label}
                        to={href}
                        className={
                          primary
                            ? "inline-flex items-center gap-2 rounded-xl px-5 py-3 bg-white text-black font-semibold hover:opacity-90 transition"
                            : "inline-flex items-center gap-2 rounded-xl px-5 py-3 border border-white/20 text-white hover:bg-white/10 transition"
                        }
                      >
                        <span>{label}</span>
                        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                      </Link>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>

          {/* Right panel (hidden on mobile) */}
          {showRightPanel && (
            <aside
              className={[
                isAbout ? "lg:col-span-6 pr-0" : "lg:col-span-5 pr-10",
                "hidden md:block space-y-3 max-w-[720px] ml-auto",
              ].join(" ")}
            >
              {isAbout ? (
                <p className="text-white">{aboutTop}</p>
              ) : (
                <>
                  <div className="text-3xl">
                    <p className="text-3xl font-['Outfit'] sm:text-2xl text-white">{brand}</p>
                  </div>
                  <p className="text-white pr-0 sm:pr-6">{aboutTop}</p>
                  <p className="text-white mr-0 sm:mr-6">{aboutBody}</p>
                </>
              )}
            </aside>
          )}
        </div>
      </div>
    </section>
  );
}
