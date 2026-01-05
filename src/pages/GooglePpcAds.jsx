import react from "react";

import HeroSection from "../components/serviceHero";
import RecentClients from "../components/RecentClients";
import FaqsSection from "../components/FaqsSection";
import IndustriesSection from "../components/IndustriesSection";
import Insights from "../components/Insights";
import FooterIntro from "../components/FooterIntro";
import TestimonialsSection from "../components/TestimonialsSection";
import ContactSection from '../components/ContactSection';
import ScrollSection from "../components/ServiceSlidingDivs";

const GooglePpcAds = () => {
  return (
    <>
      <HeroSection
        backgroundImage="/21.png"
        marqueeText="GOOGLE PPC ADS"
      />

      <ScrollSection
        sections={[
          {
            title: "What is Google PPC?",
            eyebrow: "Google Ads",
            description:
              "Pay-Per-Click (PPC) on Google is a performance marketing model where you pay only when someone clicks your ad. With precise keyword targeting, audience segments, and intent-driven placements, Google Ads puts your offer in front of high-intent users at the exact moment they’re searching - driving qualified traffic, leads, and sales with measurable ROI.",
            image:
              "/ppc1.jpeg",
            reverse: false,
          },
          {
            title: "Campaign Structure & Targeting",
            eyebrow: "Google Ads",
            description:
              "Effective PPC starts with clean campaign architecture: tightly themed ad groups, laser-focused keywords (exact, phrase, and broad match with negatives), compelling ad copy, and optimized landing pages. Layer in geo targeting, demographics, device bid adjustments, and audience signals (in-market, custom intent, remarketing) to boost Quality Score, reduce CPC, and scale profitably.",
            image:
              "/ppc2.jpeg",
            reverse: true,
          },
        ]}
      />

      <section className="w-full bg-[#070d13] font-Inter text-[#f2f5f7] px-12 py-28">
        <div className="max-w-7xl mx-auto">
          {/* Title Section */}
          <div className="text-center space-y-6">
            <p className="md:text-lg font-semibold text-white text-sm">
              Google PPC Ads
            </p>

            <h5 className="text-2xl sm:text-4xl md:text-6xl font-semibold leading-snug">
              From Click to Conversion
            </h5>

            <div className="max-w-3xl mx-auto">
              <p className="text-base text-white leading-relaxed">
                Great PPC blends strategy and execution. Ad relevance and keyword
                intent win the auction; landing page experience and conversion
                design win the revenue. We connect the dots - researching queries,
                crafting persuasive ads, and optimizing pages - then iterate with
                A/B tests, bid strategies, and negative keywords to compound
                results over time.
              </p>
            </div>

            <div className="flex gap-2 md:gap-4 m-4 h-64 md:h-96">
              <img
                src="/ppc3.jpeg"
                alt="Search Ads Preview"
                className="w-2/3 border rounded-lg border-gray-800"
              />
              <img
                src="/ppc2.jpeg"
                alt="Display & Remarketing"
                className="w-1/3 border rounded-lg border-gray-800"
              />
            </div>
          </div>
        </div>
      </section>

      <RecentClients />
      <IndustriesSection />
      <FaqsSection />
      <Insights />
      <TestimonialsSection />
      <ContactSection />
      <FooterIntro />
    </>
  );
};

export default GooglePpcAds;
