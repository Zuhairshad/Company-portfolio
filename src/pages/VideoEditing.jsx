import React, { useState } from 'react';
import FaqsSection from "../components/FaqsSection";
import IndustriesSection from "../components/IndustriesSection";
import Insights from "../components/Insights";
import FooterIntro from "../components/FooterIntro";
import TestimonialsSection from "../components/TestimonialsSection";
import ContactSection from '../components/ContactSection';
import HeroSection from '../components/serviceHero';
import VideoService from '../components/VideoService';
import ShowReels from '../components/ShowReels';
<link href="https://fonts.googleapis.com/css2?family=Prata&display=swap" rel="stylesheet"></link>

const VideoEditing = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  /* =========================
     VIDEO EDITING (MAIN CARDS)
     ========================= */
  const services = [
    {
      id: "short-form",
      title: "Short-Form Editing (Reels/Shorts/TikTok)",
      paragraph:
        "Hook-first edits optimized for mobile retention—snappy pacing, subtitles, sound design, and seamless transitions to keep viewers watching.",
      richText: (
        <>
          <p className="text-sm md:text-base mb-4">
            We craft platform-native cuts (9:16) with cold opens, pattern interrupts, motion
            text, and punchy SFX. Great for UGC, product demos, and creator clips.
          </p>
          <p className="text-sm md:text-base mb-4">
            Deliverables include multiple variations for A/B tests, burned-in or SRT captions,
            and exports in bitrates your platforms prefer.
          </p>
        </>
      ),
      tags: ["9:16 Mobile", "Captions/SRT", "Hooks", "SFX", "A/B Variations"],
    },
    {
      id: "long-form",
      title: "Long-Form Editing (YouTube/Podcasts)",
      paragraph:
        "Narrative-driven edits with clean structure—selects, pacing, b-roll, and graphics that turn raw footage into watchable stories.",
      richText: (
        <>
          <p className="text-sm md:text-base mb-4">
            We build story beats, add relevant cutaways, and tighten dead air. Lower-thirds,
            chapter markers, and end screens boost session time and CTR.
          </p>
          <p className="text-sm md:text-base mb-4">
            Perfect for founders, coaches, and brands investing in evergreen content.
          </p>
        </>
      ),
      tags: ["Story Beats", "B-roll", "Lower-Thirds", "Chapters", "End Screens"],
    },
    {
      id: "color-sound",
      title: "Color Grading & Sound Mix",
      paragraph:
        "Make footage pop and audio sit right—balanced color, noise reduction, EQ/comp, and broadcast-safe loudness.",
      richText: (
        <>
          <p className="text-sm md:text-base mb-4">
            We perform primary/secondary corrections, LUT matching between cameras, and add
            tasteful looks. Dialogue is cleaned, leveled, and mixed with music and SFX.
          </p>
          <p className="text-sm md:text-base mb-4">
            Final masters include platform-ready loudness (YouTube/shorts/specs).
          </p>
        </>
      ),
      tags: ["Primary/Secondary", "LUTs", "Noise Reduce", "EQ/Comp", "Loudness"],
    },
  ];

  /* =========================
     SMALL SERVICE HIGHLIGHTS
     ========================= */
  const smallServices = [
    { id: "scripting", title: "Scripting & Storyboards", richText: "Hooks, beats, and VO prompts that fit your brand voice and audience." },
    { id: "stock", title: "Stock & B-roll Sourcing", richText: "Licensed footage and music that reinforce narrative and compliance." },
    { id: "captions", title: "Captions & Subtitles", richText: "Burned-in styles or SRT/VTT in multiple languages." },
    { id: "thumbnails", title: "Thumbnails/Covers", richText: "CTR-oriented design with clear promise and framing." },
    { id: "multi-aspect", title: "Multi-Aspect Exports", richText: "16:9 / 1:1 / 9:16, proper bitrates and color spaces per platform." },
    { id: "asset-mgmt", title: "Asset Management", richText: "Clean project organization, proxy workflow, and version control." },
    { id: "brand-kits", title: "Brand Kits & Templates", richText: "Reusable presets for titles, transitions, and LUTs." },
    { id: "platform-ops", title: "Platform Optimization", richText: "Retention curve reviews, titles/description best practices." },
  ];

  /* =========================
     EXCELLENCE / VALUE PROPS
     ========================= */
  const items = [
    {
      id: 1,
      title: "Editor-led storytelling with",
      highlight: "data-backed pacing",
      description:
        "We cut to the beat of retention: early payoff, quick context, and visual variety that keeps viewers engaged from hook to CTA.",
      image:
        "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?q=80&w=1600&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Brand-consistent visuals and",
      highlight: "repeatable systems",
      description:
        "Motion templates, caption styles, and music palettes that scale across campaigns without reinventing the wheel.",
      image:
        "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1600&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Fast turnarounds with",
      highlight: "clear revision loops",
      description:
        "Asana/Notion boards, review links (Frame.io/Drive), and timestamped feedback to iterate quickly and cleanly.",
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1600&auto=format&fit=crop",
    },
  ];

  /* =========================
     VIDEO EDITING PROCESS (4 STAGES)
     ========================= */
  const [openDropdowns, setOpenDropdowns] = useState({});
  const toggleDropdown = (id) => setOpenDropdowns(prev => ({ ...prev, [id]: !prev[id] }));

  const processStages = [
    {
      id: 1,
      stage: "Stage 1",
      title: "Brief & Asset Intake",
      description:
        "We align on goals, audience, and deliverables, then collect footage, audio, brand kit, and references.",
      glowColor: "blue",
      steps: [
        { title: "Discovery ", items: ["Goals & key messages", "Audience & platform", "Deadlines & outputs"] },
        { title: "Intake ", items: ["Footage & audio upload", "Brand assets & fonts", "Reference edits & tone"] },
        { title: "Plan ", items: ["Cut list / storyboard", "Schedule & milestones", "Review workflow setup"] },
      ],
    },
    {
      id: 2,
      stage: "Stage 2",
      title: "Edit & Story Build",
      description:
        "We assemble selects, structure story beats, add motion text, b-roll, and sound design.",
      glowColor: "green",
      steps: [
        { title: "Rough Cut ", items: ["Selects & assembly", "Narrative beats & pacing", "Music/SFX palette"] },
        { title: "Fine Cut ", items: ["Transitions & graphics", "Captions & callouts", "Color balance"] },
      ],
    },
    {
      id: 3,
      stage: "Stage 3",
      title: "Review & Revisions",
      description:
        "You leave timestamped feedback; we iterate quickly with tracked changes and versioning.",
      glowColor: "red",
      steps: [
        { title: "Review Links ", items: ["Frame.io/Drive preview", "Notes by timestamp", "Change log"] },
        { title: "Polish ", items: ["Color grade & mix", "QC pass (spelling/audio pops)", "Final approvals"] },
      ],
    },
    {
      id: 4,
      stage: "Stage 4",
      title: "Delivery & Optimization",
      description:
        "Master exports for each platform, plus optional thumbnails and cutdowns for testing.",
      glowColor: "blue",
      steps: [
        { title: "Masters ", items: ["16:9 / 1:1 / 9:16", "Recommended bitrates", "Captions & source files"] },
        { title: "Optimize ", items: ["Thumbnail options", "Title/description ideas", "Performance review"] },
      ],
    },
  ];

  const getGlowClasses = (color) => {
    switch (color) {
      case 'green': return 'bg-green-400';
      case 'red': return 'bg-red-400';
      default: return 'bg-blue-400';
    }
  };

  const handleMouseMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY });

  return (
    <>
      {/* HERO — Video Editing */}
      <HeroSection
        backgroundImage="/25.png"
        marqueeText="VIDEO EDITING SERVICES"
      />

      {/* Use only ONE of the twin components (kept for layout parity) */}
      <VideoService />
      <ShowReels />

      {/* DIFFERENTIATORS */}
      <section className="w-full px-8 md:px-20 py-24 flex flex-col justify-center items-center relative overflow-hidden bg-gray-50">
        <div className="max-w-[95em] w-full">
          <div className="relative rounded-3xl overflow-hidden bg-white shadow-lg p-12 md:p-16">
            <div className="relative z-10 flex flex-col gap-8 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                What Makes Our Edits Work
              </h2>
              <p className="max-w-4xl mx-auto text-gray-600 text-base md:text-lg leading-relaxed">
                We mix creative storytelling with platform-specific tactics. From hooks and
                captions to color and mix, everything is tuned to keep viewers engaged and convert.
              </p>
            </div>

            {/* Value cards */}
            <div className="grid md:grid-cols-2 gap-8 mt-12 text-left">
              <div className="p-6 bg-gray-50 rounded-xl border border-gray-200 hover:shadow-md transition">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Creator-Speed Turnarounds</h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  Clear milestones, review links, and fast iterations—so you can publish consistently.
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-xl border border-gray-200 hover:shadow-md transition">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Brand-First Consistency</h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  Reusable templates and looks that scale across campaigns and channels.
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-xl border border-gray-200 hover:shadow-md transition">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Platform-Native Craft</h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  Aspect ratios, bitrates, loudness, and subtitles dialed in for each destination.
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-xl border border-gray-200 hover:shadow-md transition">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Data-Aware Decisions</h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  We review retention curves and iterate on hooks, pacing, and CTAs for lift.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="relative z-10 mt-16 text-center">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all duration-300 hover:scale-105"
              >
                Get a Video Editing Proposal
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID — Video Editing */}
      <div className="min-h-screen bg-gray-50">
        <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
              <div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                  Our Video Editing Services
                </h1>
                <p className="mt-4 text-gray-600 max-w-xl text-lg">
                  Short-form, long-form, motion graphics, color & audio—delivered in platform-ready packages.
                </p>
              </div>
              <div className="flex items-center space-x-4 mt-8 md:mt-0">
                <a
                  href="/contact"
                  className="inline-flex items-center space-x-2 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors"
                >
                  <span>Request a Proposal</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </a>
                <a
                  href="/services"
                  className="inline-flex items-center space-x-2 px-6 py-3 text-gray-700 font-semibold hover:text-blue-500 transition-colors"
                >
                  <span className="underline">All Services</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <div key={service.id} className="col-span-1">
                  <ServiceCard service={service} />
                </div>
              ))}
              <div className="md:col-span-2 lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
                {smallServices.map((service) => (
                  <SmallServiceCard key={service.id} service={service} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* PROCESS — Video Editing */}
      <section className="w-full flex flex-col justify-center items-center px-8 md:px-20 py-48 relative overflow-hidden text-[#f0f5fa] bg-[#0c1013]">
        <div className="max-w-[95em] w-full">
          <div className="mb-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <div className="text-sm font-medium bg-gray-800/50 px-3 py-2 rounded-lg tracking-wide text-gray-300 w-fit mb-6">
                Our Process
              </div>
            </div>
            <div className="lg:col-span-2">
              <h2 className="text-3xl md:text-6xl font-bold leading-tight">
                A Closer Look At Our <span>Editing Workflow</span>
              </h2>
            </div>
          </div>

          <div className="space-y-16">
            {processStages.map((stage) => (
              <div key={stage.id} className="group">
                <div className="mb-8 grid grid-cols-1 md:grid-cols-3">
                  <div className="text-sm text-gray-400 mb-4">{stage.stage}</div>
                  <div className="flex flex-col col-span-2">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                      <div className="flex gap-4">
                        <div className="relative">
                          <div className={`w-2 h-10 ${getGlowClasses(stage.glowColor)}`}></div>
                          <div className={`absolute inset-0 w-3 h-3 rounded-full ${getGlowClasses(stage.glowColor)} blur-sm opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold">{stage.title}</h3>
                      </div>
                      <p className="text-[#a6b9c9] leading-relaxed max-w-4xl">
                        {stage.description}
                      </p>
                    </div>

                    <div className="h-px bg-white/10 mt-4 mb-8"></div>

                    <div className="space-y-4">
                      {stage.steps.map((step, stepIndex) => (
                        <div key={stepIndex} className="border border-gray-800/50 rounded-lg overflow-hidden bg-gray-900/20">
                          <button
                            onClick={() => toggleDropdown(`${stage.id}-${stepIndex}`)}
                            className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-800/30 transition-colors duration-200"
                          >
                            <span className="font-medium text-white">{step.title}</span>
                            <svg
                              className={`w-4 h-4 transition-transform duration-200 ${openDropdowns[`${stage.id}-${stepIndex}`] ? 'rotate-180' : ''}`}
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </button>

                          {openDropdowns[`${stage.id}-${stepIndex}`] && (
                            <div className="px-6 pb-4">
                              <ul className="space-y-2 text-sm text-gray-300">
                                {step.items.map((item, itemIndex) => (
                                  <li key={itemIndex} className="flex items-start gap-2">
                                    <span className="text-blue-400 mt-2">•</span>
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    
      <Insights />
      <TestimonialsSection />
      <ContactSection />
      <FooterIntro />
    </>
  );
};

/* ====== Reused Cards (unchanged structure) ====== */
const ServiceCard = ({ service }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between min-h-[400px]">
      <div>
        <div
          className="flex items-center justify-between cursor-pointer mb-4"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="flex items-center space-x-4 flex-1">
            <span className="h-3 w-3 bg-blue-500 rounded-full flex-shrink-0" />
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">
              {service.title}
            </h2>
          </div>
          <div className="h-6 w-6 relative flex-shrink-0 ml-4">
            <div
              className={`absolute h-full w-0.5 bg-gray-900 top-0 left-1/2 -translate-x-1/2 transition-transform duration-300 ${
                isOpen ? 'rotate-0' : 'rotate-90'
              }`}
            />
            <div className="absolute h-0.5 w-full bg-gray-900 top-1/2 left-0 -translate-y-1/2" />
          </div>
        </div>

        <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-6">
          {service.paragraph}
        </p>

        {isOpen && (
          <div className="mb-6 text-gray-700 animate-in slide-in-from-top duration-300">
            {service.richText}
          </div>
        )}
      </div>

      <div className="flex flex-wrap gap-2">
        {service.tags.map((tag, index) => (
          <span key={index} className="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full font-medium">
            {tag}
          </span>
        ))}
        <span className="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full font-medium">
          and more.
        </span>
      </div>
    </div>
  );
};

const SmallServiceCard = ({ service }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100  flex flex-col">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center  space-x-4 flex-1">
          <span className="h-3 w-3 bg-green-500 rounded-full flex-shrink-0" />
          <h4 className="text-lg font-bold text-gray-900 leading-tight">
            {service.title}
          </h4>
        </div>
        <div className="h-6 w-6 relative flex-shrink-0 ml-4">
          <div
            className={`absolute h-full w-0.5 bg-gray-900 top-0 left-1/2 -translate-x-1/2 transition-transform duration-300 ${
              isOpen ? 'rotate-0' : 'rotate-90'
            }`}
          />
          <div className="absolute h-0.5 w-full bg-gray-900 top-1/2 left-0 -translate-y-1/2" />
        </div>
      </div>

      {isOpen && (
        <div className="flex-1 animate-in mt-2 slide-in-from-top duration-300">
          <p className="text-gray-700 text-sm leading-relaxed">{service.richText}</p>
        </div>
      )}
    </div>
  );
};

export default VideoEditing;
