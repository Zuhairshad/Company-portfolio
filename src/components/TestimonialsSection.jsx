// src/sections/Testimonials.jsx
import { useEffect, useMemo, useRef, useState } from "react";
import { FaLinkedinIn, FaXTwitter, FaFacebookF, FaInstagram } from "react-icons/fa6";

// tiny util
const cx = (...a) => a.filter(Boolean).join(" ");

// CSS animation class
const danceClass = "animate-[dance_1.8s_ease-in-out_infinite]";

function StaticCompanyCard({ prefersReducedMotion = false }) {
  const socials = [
    { Icon: FaInstagram, href: "https://www.instagram.com/webify.tech/", label: "Instagram", delay: 0 },
    { Icon: FaFacebookF, href: "https://www.facebook.com/webifytechnologies", label: "Facebook", delay: 0.12 },
    { Icon: FaLinkedinIn, href: "https://www.linkedin.com/company/webify-tech/?viewAsMember=true", label: "LinkedIn", delay: 0.24 },
    { Icon: FaXTwitter, href: "/", label: "X (Twitter)", delay: 0.36 },
  ];

  return (
    <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 md:p-7 shadow-sm">
      <div className="flex flex-col gap-5">
        <img
          src="/TesSecImg.jpg"
          alt="Webify Tech office"
          className="h-32 w-full object-cover rounded-xl"
          loading="lazy"
          decoding="async"
          sizes="(min-width: 768px) 33vw, 100vw"
        />
        <div>
          <h3 className="text-xl font-semibold text-slate-900">Webify Tech</h3>
          <p className="mt-1.5 text-sm text-slate-600">
            Our vision is to craft premium, performant web experiences that grow with your business —
            merging clean UX, modern engineering, and measurable outcomes.
          </p>

          <div className="mt-4 flex items-center gap-3">
            {socials.map(({ Icon, href, label, delay }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm hover:shadow transition focus:outline-none focus:ring-2 focus:ring-blue-400"
                style={{ willChange: "transform" }}
              >
                <Icon
                  className={cx(
                    "text-slate-700 h-4 w-4",
                    !prefersReducedMotion && danceClass
                  )}
                  style={{ animationDelay: `${delay}s` }}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function TCard({ title, body, author, role }) {
  return (
    <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 md:p-7 shadow-sm flex flex-col">
      <div className="text-lg font-semibold text-slate-900">{title}</div>
      <p className="mt-3 text-slate-600 flex-1">{body}</p>
      <div className="mt-6 pt-4 border-t border-slate-200">
        <div className="font-medium text-slate-900">{author}</div>
        <div className="text-sm text-slate-500">{role}</div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const wrapRef = useRef(null);

  // prefers-reduced-motion
  const [prefersReducedMotion, setPRM] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    if (!mq) return;
    const update = () => setPRM(mq.matches);
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);

  // lazy vendor state
  const [SwiperReact, setSwiperReact] = useState(null);
  const [SwiperModules, setSwiperModules] = useState(null);
  const [canRenderSwiper, setCanRenderSwiper] = useState(false);
  const [navReady, setNavReady] = useState(false);

  // only compute once
  const testimonials = useMemo(
    () => [
      { title: "Communication was simple and fast.", body: "Webify Tech delivered a requirement-accurate website with smooth animations. Responsive team and deep technical knowledge.", author: "Jim Willis", role: "CEO, Kinshasa Lifestyle" },
      { title: "We built a great website together.", body: "Visually pleasing design, engaging interactions, and on-time delivery. Their process was organized and transparent.", author: "Brian Mendoza", role: "Project Manager, Mendoza Firm" },
      { title: "Exactly what we wanted.", body: "They created a beautiful brand + site that helped us stand out. Communication and responsiveness were exceptional.", author: "Sean Alberto", role: "Marketing Director, Omni Management" },
      { title: "Exceeded expectations.", body: "Over 700 registrations after launch. Strategy, design, and execution resonated with our audience.", author: "Jordan Kianzad", role: "Marketing Coordinator, Winona Towns LTD" },
      { title: "Highly professional team.", body: "Their structured workflow and attention to detail ensured our project was delivered ahead of schedule without compromising quality.", author: "Amira Khan", role: "Operations Head, BrightWave Consulting" },
      { title: "A seamless collaboration.", body: "From kickoff to delivery, the process was transparent. They listened closely to our needs and translated them into an elegant product.", author: "Daniel Lee", role: "Founder, UrbanHive Digital" },
      { title: "True design innovators.", body: "The UI/UX strategy gave our platform a modern, user-friendly look. Feedback from our users has been overwhelmingly positive.", author: "Sophia Martinez", role: "Product Lead, Horizon Media" },
      { title: "Outstanding reliability.", body: "We appreciated their responsiveness and ability to solve complex challenges quickly. The final site exceeded our technical requirements.", author: "Michael Chen", role: "CTO, Nova Systems" },
      { title: "A valuable long-term partner.", body: "We’ve worked with many agencies, but Webify Tech consistently outperformed expectations. They are now our go-to partner for digital work.", author: "Rachel Adams", role: "Managing Director, Corestone Ventures" },
      { title: "Impressive results.", body: "Our website traffic increased by 65% post-launch, and conversions improved significantly. Their mix of creativity and strategy is rare.", author: "Omar Siddiqui", role: "Head of Marketing, Zenith Global" },
    ],
    []
  );

  // IO gate: when near viewport, dynamically import Swiper + styles
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    const loadSwiper = async () => {
      try {
        const [{ Swiper, SwiperSlide }, { Navigation, Autoplay, A11y }] = await Promise.all([
          import("swiper/react"),
          import("swiper/modules"),
        ]);
        setSwiperReact({ Swiper, SwiperSlide });
        setSwiperModules({ Navigation, Autoplay, A11y });

        await Promise.all([import("swiper/css"), import("swiper/css/navigation")]);
        setCanRenderSwiper(true);
      } catch (e) {
        console.warn("Failed to load Swiper; showing fallback.", e);
        setCanRenderSwiper(false);
      }
    };

    if (typeof IntersectionObserver === "undefined") {
      loadSwiper();
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          loadSwiper();
          io.disconnect();
        }
      },
      { root: null, rootMargin: "200px 0px", threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Fallback layout (no JS slider yet)
  const FallbackGrid = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {testimonials.slice(0, 2).map((t, i) => (
        <TCard key={`fb-${i}`} {...t} />
      ))}
    </div>
  );

  return (
    <section ref={wrapRef} className="section bg-white md:py-24">
      {/* inline keyframes to avoid touching global CSS files */}
      <style>{`
        @keyframes dance {
          0%   { transform: translateY(0) rotate(0deg) scale(1); }
          20%  { transform: translateY(-2px) rotate(-6deg) scale(1.04); }
          40%  { transform: translateY(0) rotate(0deg) scale(1); }
          60%  { transform: translateY(-3px) rotate(6deg) scale(1.05); }
          80%  { transform: translateY(0) rotate(0deg) scale(1); }
          100% { transform: translateY(0) rotate(0deg) scale(1); }
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-\\[dance_1\\.8s_ease-in-out_infinite\\] { animation: none !important; }
        }
      `}</style>

      <div className="w-full max-w-6xl mx-auto px-4">
        {/* Section title */}
        <div className="mb-6">
          <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600">
            Testimonials
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-slate-900">
            Hear From Our Clients
          </h2>
        </div>

        {/* === ROW OF 3 ON DESKTOP === */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* left: static card with dancing react-icons */}
          <StaticCompanyCard prefersReducedMotion={prefersReducedMotion} />

          {/* right: slider area */}
          <div className="md:col-span-2">
            {!canRenderSwiper || !SwiperReact || !SwiperModules ? (
              <FallbackGrid />
            ) : (
              <SwiperReact.Swiper
                id="testimonials-swiper"
                modules={[SwiperModules.Navigation, SwiperModules.Autoplay, SwiperModules.A11y]}
                autoplay={
                  prefersReducedMotion ? false : { delay: 4500, disableOnInteraction: false }
                }
                spaceBetween={24}
                slidesPerView={1}
                breakpoints={{ 768: { slidesPerView: 2 } }}
                a11y={{ enabled: true }}
                onInit={(swiper) => {
                  swiper.params.navigation.prevEl = prevRef.current;
                  swiper.params.navigation.nextEl = nextRef.current;
                  swiper.navigation.init();
                  swiper.navigation.update();
                  setNavReady(true);
                }}
                onSwiper={(swiper) => {
                  const el = swiper.el;
                  const pause = () => swiper.autoplay?.stop();
                  const resume = () => !prefersReducedMotion && swiper.autoplay?.start();
                  el.addEventListener("mouseenter", pause);
                  el.addEventListener("mouseleave", resume);
                  el.addEventListener("focusin", pause);
                  el.addEventListener("focusout", resume);
                }}
              >
                {testimonials.map((t, i) => (
                  <SwiperReact.SwiperSlide key={i}>
                    <TCard {...t} />
                  </SwiperReact.SwiperSlide>
                ))}
              </SwiperReact.Swiper>
            )}

            <div className="flex justify-end gap-3 mt-4">
              <button
                ref={prevRef}
                type="button"
                aria-label="Previous testimonials"
                aria-controls="testimonials-swiper"
                disabled={!navReady}
                className={cx(
                  "h-10 w-10 rounded-full bg-blue-500 text-white flex items-center justify-center shadow transition",
                  "hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400",
                  !navReady && "opacity-50 cursor-not-allowed"
                )}
              >
                ←
              </button>
              <button
                ref={nextRef}
                type="button"
                aria-label="Next testimonials"
                aria-controls="testimonials-swiper"
                disabled={!navReady}
                className={cx(
                  "h-10 w-10 rounded-full bg-blue-500 text-white flex items-center justify-center shadow transition",
                  "hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400",
                  !navReady && "opacity-50 cursor-not-allowed"
                )}
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
