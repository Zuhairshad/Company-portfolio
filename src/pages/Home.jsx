// src/pages/Home.jsx
import React, { lazy, Suspense, useEffect, useRef, useState } from "react";
import Hero from "../components/Hero.jsx"; // keep eager for LCP

// Route-level chunks for below-the-fold sections
const Services = lazy(() => import("../components/Services.jsx"));
const RecentClients = lazy(() => import("../components/RecentClients.jsx"));
const FeaturedWork = lazy(() => import("../components/FeaturedWork.jsx"));
const IndustriesSection = lazy(() =>
  import("../components/IndustriesSection.jsx")
);
const FaqsSection = lazy(() => import("../components/FaqsSection.jsx"));
const Insights = lazy(() => import("../components/Insights.jsx"));
const TestimonialsSection = lazy(() =>
  import("../components/TestimonialsSection.jsx")
);
const ContactSection = lazy(() => import("../components/ContactSection.jsx"));
const FooterIntro = lazy(() => import("../components/FooterIntro.jsx"));

/**
 * LazyVisible: mounts children only when scrolled near viewport.
 * - rootMargin preloads ~200px before entry to look instant
 * - once visible, it stays mounted (no unmount on scroll away)
 */
function LazyVisible({ children, minHeight = 320 }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (isVisible) return; // already shown
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <div ref={ref} style={{ minHeight: isVisible ? undefined : minHeight }}>
      {isVisible ? children : null}
    </div>
  );
}

// Light skeleton used inside Suspense to keep CLS low
function SectionFallback() {
  return (
    <div className="w-full py-16">
      <div className="mx-auto max-w-6xl animate-pulse">
        <div className="h-6 w-40 rounded bg-black/10 mb-6"></div>
        <div className="h-4 w-3/4 rounded bg-black/10 mb-3"></div>
        <div className="h-4 w-2/3 rounded bg-black/10 mb-3"></div>
        <div className="h-4 w-1/2 rounded bg-black/10"></div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-white">
      {/* Navbar is already rendered in App.jsx — avoid double render */}

      <main className="container-x pb-2 bg-white !pt-0">
        {/* Eager/LCP */}
        <Hero />

        {/* Below-the-fold sections: gated + lazy chunked */}
        <LazyVisible>
          <Suspense fallback={<SectionFallback />}>
            <Services />
          </Suspense>
        </LazyVisible>

        <LazyVisible>
          <Suspense fallback={<SectionFallback />}>
            <RecentClients />
          </Suspense>
        </LazyVisible>

        <LazyVisible>
          <Suspense fallback={<SectionFallback />}>
            <FeaturedWork />
          </Suspense>
        </LazyVisible>

        <LazyVisible>
          <Suspense fallback={<SectionFallback />}>
            <IndustriesSection />
          </Suspense>
        </LazyVisible>

        <LazyVisible>
          <Suspense fallback={<SectionFallback />}>
            <FaqsSection />
          </Suspense>
        </LazyVisible>

        <LazyVisible>
          <Suspense fallback={<SectionFallback />}>
            <Insights />
          </Suspense>
        </LazyVisible>

        <LazyVisible>
          <Suspense fallback={<SectionFallback />}>
            <TestimonialsSection />
          </Suspense>
        </LazyVisible>

        <LazyVisible>
          <Suspense fallback={<SectionFallback />}>
            <ContactSection />
          </Suspense>
        </LazyVisible>

        <LazyVisible minHeight={160}>
          <Suspense fallback={<SectionFallback />}>
            <FooterIntro />
          </Suspense>
        </LazyVisible>
      </main>
    </div>
  );
}
