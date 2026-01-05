import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import RecentClients from "../components/RecentClients";
import FaqsSection from "../components/FaqsSection";
import IndustriesSection from "../components/IndustriesSection";
import Insights from "../components/Insights";
import FooterIntro from "../components/FooterIntro";
import TestimonialsSection from "../components/TestimonialsSection";
import ContactSection from '../components/ContactSection';
import HeroSection from '../components/serviceHero';
import AwardSec from '../components/serviceAwardSec';
import OnPageTechnicalSEO from '../components/OnPageTechnicalSEO';
import OffPageSEO from '../components/OffPageSEO';
<link href="https://fonts.googleapis.com/css2?family=Prata&display=swap" rel="stylesheet"></link>

const SEO = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  /* =========================
     SEO SERVICES (MAIN CARDS)
     ========================= */
  const services = [
    {
      id: "technical-seo",
      title: "Technical SEO",
      paragraph:
        "Fix what search engines see first - site architecture, crawlability, speed, and indexation - so every page can rank and scale with confidence.",
      richText: (
        <>
          <p className="text-sm md:text-base mb-4">
            We start with a deep technical audit: crawl errors, duplicate content, redirect chains,
            JavaScript rendering, Core Web Vitals, canonicalization, and XML sitemaps. Then we ship a prioritized
            roadmap that your engineering team can act on quickly.
          </p>
          <p className="text-sm md:text-base mb-4">
            Implementation support includes structured data (Schema.org), robots.txt &amp; noindex rules,
            internal linking frameworks, and page speed optimization. We monitor impact as fixes roll out.
          </p>
        </>
      ),
      tags: [
        "Site Architecture",
        "CWV & Speed",
        "Crawl & Index",
        "Structured Data",
        "Canonicalization",
      ],
    },
    {
      id: "on-page-seo",
      title: "On-Page SEO",
      paragraph:
        "Turn every page into a ranking asset - research, intent mapping, content structure, internal links, and metadata that earns higher positions.",
      richText: (
        <>
          <p className="text-sm md:text-base mb-4">
            We align topics to user intent, build outlines that match SERP patterns, and optimize headings, copy,
            and media for clarity and engagement. Pages are structured for both readers and crawlers.
          </p>
          <p className="text-sm md:text-base mb-4">
            Deliverables include keyword clusters, title/description templates, header hierarchy guidelines,
            FAQ/People-Also-Ask expansion, and internal link plans that spread authority efficiently.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center space-x-2 text-blue-500 hover:text-blue-600 transition-colors"
          >
            <span className="font-semibold underline">Request on-page audit</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </a>
        </>
      ),
      tags: [
        "Keyword Clusters",
        "Metadata",
        "Content Outlines",
        "Internal Linking",
        "EEAT Signals",
      ],
    },
    {
      id: "off-page-seo",
      title: "Off-Page SEO",
      paragraph:
        "Build authority the right way - editorial backlinks, digital PR, and content partnerships that compound rankings over time.",
      richText: (
        <>
          <p className="text-sm md:text-base mb-4">
            We focus on quality over quantity: topical relevance, trustworthy publications, and link patterns
            that look natural and sustain growth. All outreach is personalized and brand-safe.
          </p>
          <p className="text-sm md:text-base mb-4">
            We also strengthen EEAT with author pages, citations, and third-party mentions that reinforce credibility.
          </p>
        </>
      ),
      tags: [
        "Digital PR",
        "Editorial Links",
        "Citations",
        "Brand Mentions",
        "EEAT",
      ],
    },
    {
      id: "local-seo",
      title: "Local SEO",
      paragraph:
        "Dominate local search - optimize Google Business Profile, NAP consistency, local pages, and reviews to capture high-intent traffic.",
      richText: (
        <>
          <p className="text-sm md:text-base mb-4">
            We optimize GBP categories, services, posts, and Q&amp;A, build city/service pages, and clean up
            citations across directories. Review velocity and response playbooks included.
          </p>
          <p className="text-sm md:text-base mb-4">
            Perfect for multi-location brands needing scalable local visibility and lead capture.
          </p>
        </>
      ),
      tags: [
        "Google Business Profile",
        "Citations",
        "Local Pages",
        "Reviews",
        "Maps Ranking",
      ],
    },
  ];

  /* =========================
     SEO SMALL SERVICE HIGHLIGHTS
     ========================= */
  const smallServices = [
    {
      id: "keyword-research",
      title: "Keyword Research",
      richText:
        "Builds topic clusters from search intent and opportunity, not guesswork - foundational for content and IA.",
    },
    {
      id: "content-strategy",
      title: "Content Strategy",
      richText:
        "Editorial roadmap: pillars, clusters, PAA angles, and updates that win SERP share and conversions.",
    },
    {
      id: "analytics-tracking",
      title: "Analytics & Tracking",
      richText:
        "GA4, GSC, and conversion tracking set up right - so ranking gains connect to real revenue metrics.",
    },
    {
      id: "site-migrations",
      title: "Site Migrations",
      richText:
        "SEO-safe replatforms and redesigns: redirect mapping, parity checks, and post-launch monitoring.",
    },
    {
      id: "international-seo",
      title: "International SEO",
      richText:
        "Hreflang, language targeting, and locale-specific content to scale search globally without cannibalization.",
    },
    {
      id: "programmatic-seo",
      title: "Programmatic SEO",
      richText:
        "Template-driven pages at scale with quality controls, dedupe logic, and internal link automation.",
    },
    {
      id: "competitive-gap",
      title: "Competitive Gap",
      richText:
        "Identify your competitors’ weak spots - then outrank with better information gain and linkable assets.",
    },
    {
      id: "reporting-cadence",
      title: "Reporting Cadence",
      richText:
        "Clear monthly reporting on rankings, traffic, conversions, and the next actions that move the needle.",
    },
  ];

  /* =========================
     EXCELLENCE / VALUE PROPS
     ========================= */
  const items = [
    {
      id: 1,
      title: "Measurable Growth through",
      highlight: "Search Visibility",
      description:
        "We connect rankings to revenue. Audits turn into roadmaps, and roadmaps turn into traction - better positions, more qualified traffic, and reliable lead flow.",
      image:
        "https://images.unsplash.com/photo-1551281044-8d8d1ae5d87b?q=80&w=1600&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Senior-Led Strategy with",
      highlight: "Hands-On Execution",
      description:
        "Your SEO is led by senior specialists - technical, content, and digital PR - working together to execute the plan end-to-end.",
      image:
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1600&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "White-Hat Authority and",
      highlight: "Sustainable Results",
      description:
        "We build durable organic growth. That means quality content, clean tech, and editorial links from reputable sites - no shortcuts.",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop",
    },
  ];

  /* =========================
     SEO PROCESS (4 STAGES)
     ========================= */
  const [openDropdowns, setOpenDropdowns] = useState({});
  const toggleDropdown = (id) => {
    setOpenDropdowns(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const processStages = [
    {
      id: 1,
      stage: "Stage 1",
      title: "Audit & Strategy",
      description:
        "We benchmark your current organic performance, run technical and content audits, and build a prioritized SEO roadmap aligned to business goals.",
      glowColor: "blue",
      steps: [
        {
          title: "Technical & Content Audit",
          items: [
            "Crawl health, indexation, duplication & canonical checks",
            "Core Web Vitals and page speed diagnostics",
            "Content inventory, cannibalization, and intent mapping",
          ],
        },
        {
          title: "Opportunity Model",
          items: [
            "Keyword clustering and SERP pattern analysis",
            "Competitive gap & link intersect",
            "Roadmap with sequencing and owners",
          ],
        },
        {
          title: "Tracking Setup",
          items: [
            "GA4, GSC, conversions and events",
            "Dashboard for rankings/traffic/leads",
          ],
        },
      ],
    },
    {
      id: 2,
      stage: "Stage 2",
      title: "On-Page & Technical",
      description:
        "We execute high-impact fixes and optimizations - so pages are fast, understandable, and easy for crawlers to index and rank.",
      glowColor: "green",
      steps: [
        {
          title: "Site Architecture & Internal Links",
          items: [
            "Logical IA with topic clusters",
            "Link frameworks to push authority",
          ],
        },
        {
          title: "Content & Metadata",
          items: [
            "Titles, descriptions, headers, schema",
            "FAQ/PAA expansion and information gain",
          ],
        },
        {
          title: "Speed & Rendering",
          items: [
            "CWV improvements (LCP, INP, CLS)",
            "JS rendering & image optimization",
          ],
        },
      ],
    },
    {
      id: 3,
      stage: "Stage 3",
      title: "Authority & Local",
      description:
        "We earn trust with editorial links and brand mentions, while optimizing your local presence for high-intent discovery.",
      glowColor: "red",
      steps: [
        {
          title: "Digital PR & Links",
          items: [
            "Editorial outreach and thought leadership",
            "Linkable assets and citations",
          ],
        },
        {
          title: "Local SEO",
          items: [
            "Google Business Profile optimization",
            "Location pages & reviews strategy",
          ],
        },
      ],
    },
    {
      id: 4,
      stage: "Stage 4",
      title: "Measure & Scale",
      description:
        "We track rankings, traffic, and conversions; report wins and next steps; and scale what works across the site.",
      glowColor: "blue",
      steps: [
        {
          title: "Reporting & Iteration",
          items: [
            "Monthly reports on KPIs",
            "Backlog grooming and next experiments",
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
      {/* HERO - keep layout, switch to SEO */}
      <HeroSection
        backgroundImage="/18.png"
        marqueeText="SEARCH ENGINE OPTIMIZATION"
      />

      {/* AWARD / INTRO - rewritten for SEO */}
      <AwardSec
        topText="Top SEO Company"
        heading="We grow your organic traffic"
        subHeading="and turn rankings into revenue."
        description="Nextstac delivers complete SEO - technical, on-page, off-page, and local - tailored to your market. We audit, optimize, and build authority to improve search visibility, increase qualified traffic, and drive measurable business results."
      />

      {/* BIG SPLIT SECTION - rewrite headline/paragraphs for SEO */}
      <OnPageTechnicalSEO />
      <OffPageSEO />
      {/* WHO WE ARE - SEO angle */}
      <section className="w-full px-8 md:px-20 py-24 flex flex-col justify-center items-center relative overflow-hidden bg-gray-50">
        <div className="max-w-[95em] w-full">
          <div className="relative rounded-3xl overflow-hidden bg-white shadow-lg p-12 md:p-16">
            <div className="relative z-10 flex flex-col gap-8 text-center">
              {/* Heading */}
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                What Makes Us Different
              </h2>
              <p className="max-w-4xl mx-auto text-gray-600 text-base md:text-lg leading-relaxed">
                Our strength lies in merging large-agency expertise with a boutique,
                hands-on approach. With the depth of resources to handle every aspect
                of SEO and content, we still treat every client with the focus and
                care of a dedicated partner. Guided by transparency, creativity, and
                collaboration, we ensure that when you work with us, you benefit from
                both scale and personalization.
              </p>
            </div>

            {/* Cards */}
            <div className="grid md:grid-cols-2 gap-8 mt-12 text-left">
              {/* Card 1 */}
              <div className="p-6 bg-gray-50 rounded-xl border border-gray-200 hover:shadow-md transition">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Tailored, Boutique Support
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  Work directly with seasoned SEO specialists who adapt strategies
                  around your exact goals. Clear communication and dedicated account
                  management mean you’ll never be left guessing.
                </p>
              </div>

              {/* Card 2 */}
              <div className="p-6 bg-gray-50 rounded-xl border border-gray-200 hover:shadow-md transition">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Holistic Marketing Expertise
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  By integrating branding insights, design knowledge, and marketing
                  know-how into SEO, we align your search strategy with your broader
                  business objectives - delivering a unified, powerful online presence.
                </p>
              </div>

              {/* Card 3 */}
              <div className="p-6 bg-gray-50 rounded-xl border border-gray-200 hover:shadow-md transition">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Transparency & Partnership
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  From detailed audits to regular updates, we ensure complete
                  openness at every stage. Our approach builds trust, accountability,
                  and long-lasting client partnerships.
                </p>
              </div>

              {/* Card 4 */}
              <div className="p-6 bg-gray-50 rounded-xl border border-gray-200 hover:shadow-md transition">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Innovation With Results
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  We evolve alongside the industry, refining tactics with each
                  algorithm shift to achieve more than just rankings - driving traffic,
                  ROI, and measurable business impact.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="relative z-10 mt-16 text-center">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all duration-300 hover:scale-105"
              >
                Get a Free Proposal
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* SERVICES GRID - now SEO services */}
      <div className="min-h-screen bg-gray-50">
        <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
              <div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                  Our SEO Services
                </h1>
                <p className="mt-4 text-gray-600 max-w-xl text-lg">
                  Complete programs across <strong>Technical</strong>, <strong>On-Page</strong>, <strong>Off-Page</strong>, and <strong>Local</strong> - built to grow organic traffic and revenue.
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

      {/* PROCESS - renamed and rewritten for SEO */}
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
                A Closer Look At Our <span>SEO Methodology</span>
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
                            <span className="font-medium text-white">
                              {step.title}
                            </span>
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
              className={`absolute h-full w-0.5 bg-gray-900 top-0 left-1/2 -translate-x-1/2 transition-transform duration-300 ${isOpen ? 'rotate-0' : 'rotate-90'
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
            className={`absolute h-full w-0.5 bg-gray-900 top-0 left-1/2 -translate-x-1/2 transition-transform duration-300 ${isOpen ? 'rotate-0' : 'rotate-90'
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

export default SEO;
