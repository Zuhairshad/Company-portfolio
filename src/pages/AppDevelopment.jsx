import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import RecentClients from "../components/RecentClients";
import FeaturedWork from "../components/FeaturedWork";
import FaqsSection from "../components/FaqsSection";
import IndustriesSection from "../components/IndustriesSection";
import Insights from "../components/Insights";
import FooterIntro from "../components/FooterIntro";
import TestimonialsSection from "../components/TestimonialsSection";
import ContactSection from '../components/ContactSection';
import HeroSection from '../components/serviceHero';
import StatsSection from '../components/StatsSection';
// <link href="https://fonts.googleapis.com/css2?family=Prata&display=swap" rel="stylesheet"></link>

const AppDevelopment = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // ===== Primary service cards (kept structure; copy now app-focused) =====
  const services = [
    {
      id: "product-design",
      title: "Product Design",
      paragraph:
        "We design mobile products that feel native, purposeful, and effortless. Every screen, state, and gesture is crafted to reduce friction and move users toward meaningful outcomes.",
      richText: (
        <>
          <p className="text-sm md:text-base mb-4">
            We start with journeys and use-cases, map core jobs-to-be-done, and establish the
            information architecture that keeps the app simple at scale. Design systems
            ensure consistency across features and future updates.
          </p>
          <p className="text-sm md:text-base mb-4">
            The result is a UI that looks great and a UX that’s genuinely helpful - so onboarding is shorter,
            retention is higher, and reviews trend upward.
          </p>
        </>
      ),
      tags: [
        "Design Systems",
        "Native Patterns",
        "Onboarding UX",
        "Accessibility",
        "Micro-interactions",
      ],
    },
    {
      id: "product-strategy",
      title: "Product Strategy & Roadmapping",
      paragraph:
        "Great apps are built on sharp focus. We align business goals with user needs, then shape a release plan that proves value quickly and compounds with every iteration.",
      richText: (
        <>
          <p className="text-sm md:text-base mb-4">
            Through discovery workshops, market scans, and prioritization frameworks, we
            define scope, KPI targets, and a pragmatic MVP. Each milestone ladders up to adoption,
            retention, and revenue goals.
          </p>
          <p className="text-sm md:text-base mb-4">
            Roadmaps are living documents - built to adapt as we learn from analytics and user feedback.
          </p>
          <a
            href="/services/product-strategy"
            className="inline-flex items-center space-x-2 text-blue-500 hover:text-blue-600 transition-colors"
          >
            <span className="font-semibold underline">Learn more</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </a>
        </>
      ),
      tags: [
        "MVP Definition",
        "KPI Alignment",
        "Release Planning",
        "Experiment Design",
        "Analytics Setup",
      ],
    },
    {
      id: "app-development",
      title: "Mobile App Development",
      paragraph:
        "We build reliable, secure, and high-performance apps - architected for speed today and scale tomorrow - while matching design intent pixel-for-pixel.",
      richText: (
        <>
          <p className="text-sm md:text-base mb-4">
            Our engineering approach emphasizes native UX fidelity, offline-first thinking,
            state management that stays predictable, and modular code that’s straightforward to extend.
          </p>
          <p className="text-sm md:text-base mb-4">
            CI/CD pipelines, automated tests, and rigorous QA keep releases stable. We handle
            store readiness (App Store/Play policies, screenshots, privacy, and review responses) end-to-end.
          </p>
          <p className="text-sm md:text-base mb-4">
            Post-launch, we monitor crashes, performance, and usage patterns to prioritize
            fixes and enhancements that move the metrics that matter.
          </p>
        </>
      ),
      tags: [
        "Scalable Architecture",
        "Offline-First",
        "CI/CD & QA",
        "Analytics & Crash Monitoring",
        "App Store Readiness",
      ],
    },
  ];

  // ===== Small highlight cards (kept layout) =====
  const smallServices = [
    {
      id: "security-compliance",
      title: "Security & Compliance",
      richText:
        "Best practices across auth, secrets, encryption at rest/in transit, and PII handling. We help you meet privacy and policy requirements confidently.",
    },
    {
      id: "performance",
      title: "Performance & Reliability",
      richText:
        "Cold-start budgets, bundle discipline, network efficiency, and crash-free sessions - measured and improved with every release.",
    },
    {
      id: "integrations",
      title: "Integrations & Payments",
      richText:
        "We integrate payments, maps, notifications, analytics, and 3rd-party APIs with a focus on resilience and graceful failure states.",
    },
    {
      id: "lifecycle",
      title: "Full Lifecycle Support",
      richText:
        "From discovery to post-launch growth - backlog grooming, A/B tests, and iteration cadence built around your KPIs.",
    },
    {
      id: "accessibility",
      title: "Accessible by Design",
      richText:
        "Color contrast, semantics, dynamic type, and assistive tech support are standard - not afterthoughts.",
    },
    {
      id: "observability",
      title: "Observability",
      richText:
        "Dashboards for usage, retention, performance, and crashes so you always know what to build next - and why.",
    },
    {
      id: "scalability",
      title: "Built to Scale",
      richText:
        "Modular code, clear boundaries, and API contracts that let multiple teams ship in parallel without stepping on each other.",
    },
    {
      id: "support",
      title: "Ongoing Maintenance",
      richText:
        "Version bumps, OS changes, device compatibility, and policy updates handled proactively.",
    },
  ];

  // ===== Hover feature list (kept structure; app-focused) =====
  const items = [
    {
      id: 1,
      title: "Deep Product Thinking and",
      highlight: "Measurable Outcomes",
      description:
        "We translate strategy into roadmaps, align on KPIs, and instrument the app from day one - so every release earns its keep with clear, trackable impact.",
      image:
        "https://cdn.prod.website-files.com/630bc5625ada9a1e2dbb10a6/661d4d7cf9b52a7779e62f10_Flipp.avif",
    },
    {
      id: 2,
      title: "Senior Talent and",
      highlight: "Hands-On Delivery",
      description:
        "Leads who have shipped complex mobile apps own the work - not just supervise it - so decisions are fast, context-rich, and high quality.",
      image:
        "https://cdn.prod.website-files.com/630bc5625ada9a1e2dbb10a6/661d4d7b765b6b416fa0eb20_Retina.avif",
    },
    {
      id: 3,
      title: "Modern Craft and",
      highlight: "Native-Quality UX",
      description:
        "We embrace platform conventions and motion patterns that feel right at home on iOS and Android, creating an experience users instinctively trust.",
      image:
        "https://cdn.prod.website-files.com/630bc5625ada9a1e2dbb10a6/661d4d7bcf37920bc03e72f4_ReadyMode.avif",
    },
  ];

  const [openDropdowns, setOpenDropdowns] = useState({});
  const toggleDropdown = (id) => {
    setOpenDropdowns((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // ===== Process (kept layout; steps rewritten for app dev) =====
  const processStages = [
    {
      id: 1,
      stage: "Stage 1",
      title: "Discovery",
      description:
        "We align on the problem space, audience, and success criteria. Research informs the value proposition and narrows scope to what matters most.",
      glowColor: "blue",
      steps: [
        {
          title: "Kick-off & Goals",
          items: [
            "Define business goals, target users, and constraints.",
            "Review existing data, research, and competitor apps.",
            "Agree on success metrics and guardrails.",
          ],
        },
        {
          title: "User & Market Insights",
          items: [
            "Interviews, heuristics review, and opportunity mapping.",
            "Feature prioritization and risk assessment.",
          ],
        },
        {
          title: "Plan & Roadmap",
          items: [
            "MVP definition and phased releases.",
            "Backlog creation with acceptance criteria.",
            "Tooling setup for design, tracking, and delivery.",
          ],
        },
      ],
    },
    {
      id: 2,
      stage: "Stage 2",
      title: "Product Design",
      description:
        "We turn insights into intuitive flows and interfaces. Systems thinking keeps the experience consistent as features grow.",
      glowColor: "green",
      steps: [
        {
          title: "Flows & Wireframes",
          items: [
            "Journey maps and core task flows.",
            "Low-fi wireframes to validate structure early.",
          ],
        },
        {
          title: "Visual Design & Prototypes",
          items: [
            "High-fi mockups with motion states and micro-copy.",
            "Interactive prototypes and iterative feedback rounds.",
          ],
        },
      ],
    },
    {
      id: 3,
      stage: "Stage 3",
      title: "Engineering & QA",
      description:
        "We implement resilient, testable code with the pipelines to ship safely and often - keeping quality high and surprises low.",
      glowColor: "red",
      steps: [
        {
          title: "Core Build",
          items: [
            "Front-end app implementation and state management.",
            "API integration, auth, and notifications.",
          ],
        },
        {
          title: "Quality & Readiness",
          items: [
            "Unit/UI tests, performance passes, and accessibility checks.",
            "App Store/Play listing, privacy, and policy review.",
          ],
        },
      ],
    },
    {
      id: 4,
      stage: "Stage 4",
      title: "Launch & Growth",
      description:
        "We release, observe, and iterate - turning real-world usage into product decisions that increase retention and ROI.",
      glowColor: "blue",
      steps: [
        {
          title: "Go-Live & Optimization",
          items: [
            "Crash/analytics dashboards and alerting.",
            "Experimentation and feature rollout plan.",
            "Training, handover, and ongoing support.",
          ],
        },
      ],
    },
  ];

  const getGlowClasses = (color) => {
    switch (color) {
      case 'green':
        return 'bg-green-400';
      case 'red':
        return 'bg-red-400';
      default:
        return 'bg-blue-400';
    }
  };

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <>
      <HeroSection
        backgroundImage="/19.png"
        marqueeText="APP DEVELOPMENT"
      />
        <StatsSection/>

      {/* Intro band (kept layout) */}
      <section className="w-full px-8 md:px-20 py-24 flex flex-col justify-center items-center relative overflow-hidden bg-gray-50">
        <div className="max-w-[95em] w-full">
          <div className="relative rounded-3xl overflow-hidden bg-gray-900 p-12 md:p-16">
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>

            <div className="relative z-10 flex flex-col lg:flex-row gap-12 text-white">
              {/* Left */}
              <div className="flex-1">
                <h5 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
                  Mobile products,{" "}
                  <span className="block">built to grow with you</span>
                </h5>

                <div className="flex flex-wrap gap-4">
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-gray-900 font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105"
                  >
                    Request a Proposal
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 5l7 7-7 7" />
                    </svg>
                  </a>

                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-transparent border border-white/30 text-white font-semibold hover:bg-white/10 transition-all duration-300 hover:scale-105"
                  >
                    Contact Us
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Right */}
              <div className="flex-1 text-gray-200 space-y-6 text-xl leading-relaxed">
                <p>
                  Your app is the front door to your product. We combine product strategy,
                  design systems, and robust engineering to deliver experiences that feel
                  native, perform beautifully, and earn five-star reviews.
                </p>
                <p>
                  Every engagement is outcomes-first: shorter time-to-value, higher retention,
                  lower crash rates, and clearer insight into what to ship next. You get a
                  roadmap, a release plan, and a partner that executes.
                </p>
              </div>
            </div>

            <div className="relative z-10 mt-16 pt-12 border-t border-white/20">
              <div className="text-center mb-12">
                <div className="text-xl md:text-2xl font-semibold text-white">
                  Powering product launches and growth for ambitious teams
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who we are (kept layout) */}
      <section
        id="Who-we-are"
        className="w-full flex flex-col justify-center items-center px-8 md:px-20 py-24 relative overflow-hidden text-[#f0f5fa] bg-[#0c1013]"
        onMouseMove={handleMouseMove}
      >
        <div className="max-w-[95em] w-full">
          <div className="mb-16 text-left">
            <h5 className="text-4xl md:text-6xl font-bold leading-tight">
              Apps That <span className="block">Push New Limits</span>
            </h5>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <div className="text-sm font-medium bg-gray-800/50 px-3 py-2 rounded-lg tracking-wide text-gray-300 w-fit">
                Our Excellence
              </div>
            </div>

            <div className="lg:col-span-3 space-y-12">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="cursor-pointer transition-all duration-300"
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <div className="grid grid-cols-1 space-x-6 md:grid-cols-2 border-b border-gray-700/50 pb-8">
                    <div className="text-2xl md:text-3xl font-semibold mb-4 leading-tight">
                      {item.title} <span>{item.highlight}</span>
                    </div>
                    <p className="text-[#a6b9c9] leading-relaxed text-base max-w-4xl">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {hoveredItem && (
          <div
            className="fixed pointer-events-none z-50 transition-all duration-300 ease-out"
            style={{ left: mousePosition.x + 20, top: mousePosition.y - 100 }}
          >
            <img
              src={items.find((i) => i.id === hoveredItem)?.image}
              alt="Hover Preview"
              className="w-80 h-48 object-cover rounded-lg shadow-2xl opacity-90"
            />
          </div>
        )}

        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-l from-blue-900/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-r from-purple-900/10 to-transparent rounded-full blur-3xl"></div>
      </section>

      {/* Services grid (kept layout) */}
      <div className="min-h-screen bg-gray-50">
        <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
              <div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                  App Development Services
                </h1>
                <p className="mt-4 text-gray-600 max-w-xl text-lg">
                  From MVP to enterprise scale, we combine product strategy, design,
                  and engineering to ship mobile apps that perform and grow.
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

      {/* NOTE: TechStack removed */}
      <FeaturedWork />

      {/* Process (kept layout, copy app-focused) */}
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
                A Closer Look At Our{" "}
                <span>App Development Methodology</span>
              </h2>
            </div>
          </div>

          <div className="space-y-16">
            {processStages.map((stage) => (
              <div key={stage.id} className="group">
                <div className="mb-8 grid grid-cols-1 md:grid-cols-3">
                  <div className="text-sm text-gray-400 mb-4">{stage.stage}</div>

                  <div className="flex flex-col col-span-2 ">
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

// ===== Reused card components (unchanged layout) =====
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

export default AppDevelopment;
