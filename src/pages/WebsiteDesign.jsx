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
import AwardSec from '../components/serviceAwardSec';
import TechStack from '../components/TechStack';
<link href="https://fonts.googleapis.com/css2?family=Prata&display=swap" rel="stylesheet"></link>

const WebsiteDesign = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const services = [
    {
      id: "website-design",
      title: "Website Design",
      paragraph:
        "At Webify, we design purpose-built websites that reflect your brand and move visitors to action. Every layout, color, and component is chosen to support your goals.",
      richText: (
        <>
          <p className="text-sm md:text-base mb-4">
            In today’s landscape, your site is your first impression. Our{" "}
            <a
              href="/services/web-development"
              className="underline text-blue-500 hover:text-blue-600 transition-colors"
            >
              design
            </a>{" "}
            and engineering team works together to deliver interfaces that are
            elegant, fast, and conversion-ready.
          </p>
          <p className="text-sm md:text-base mb-4">
            We combine aesthetics with UX psychology—clear information hierarchy,
            consistent components, and accessible patterns—so the site is both
            memorable and easy to use. If you want a custom design that lifts your
            brand and performance, Webify can help.
          </p>
        </>
      ),
      tags: [
        "Custom Layouts",
        "Accessibility-Focused",
        "Performance-Tuned",
        "Conversion-Ready",
        "Design Systems",
      ],
    },
    {
      id: "ui-ux",
      title: "UI/UX",
      paragraph:
        "We craft UI/UX that feels effortless—clear journeys, helpful micro-interactions, and layouts that guide users to the right outcome.",
      richText: (
        <>
          <p className="text-sm md:text-base mb-4">
            Our process starts with research, user flows, and wireframes to lock
            in structure. From there we translate insights into interfaces that
            are visually consistent and simple to navigate.
          </p>
          <p className="text-sm md:text-base mb-4">
            We validate with iteration and lightweight testing, then ship designs
            that balance brand expression with usability. See more about our{" "}
            <a
              href="/services/ui-ux"
              className="underline text-blue-500 hover:text-blue-600 transition-colors"
            >
              UI/UX approach
            </a>
            .
          </p>
          <a
            href="/services/ui-ux"
            className="inline-flex items-center space-x-2 text-blue-500 hover:text-blue-600 transition-colors"
          >
            <span className="font-semibold underline">Learn more</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </a>
        </>
      ),
      tags: [
        "User-Centered",
        "Info Architecture",
        "Wireframes",
        "Prototyping",
        "Iterative Testing",
      ],
    },
    {
      id: "website-development",
      title: "Website Development",
      paragraph:
        "Our full-stack team ships robust, scalable builds that match design intent pixel-for-pixel—and stay maintainable long after launch.",
      richText: (
        <>
          <p className="text-sm md:text-base mb-4">
            We engineer with performance, security, and accessibility in mind.
            SEO-friendly structure, WCAG-aligned patterns, and modern build tools
            come standard in our{" "}
            <a
              href="/services/web-development"
              className="underline text-blue-500 hover:text-blue-600 transition-colors"
            >
              development
            </a>{" "}
            process.
          </p>
          <p className="text-sm md:text-base mb-4">
            We plan modules with design early, choose the right stack (custom or
            CMS), and ship in small, testable increments. Quality checks catch
            regressions before release.
          </p>
          <p className="text-sm md:text-base mb-4">
            Near launch, we run technical reviews, performance passes, and
            accessibility audits—so handoff is smooth and your marketing team can
            move fast on day one.
          </p>
        </>
      ),
      tags: [
        "Clean Architecture",
        "Scalable & Secure",
        "CMS-Ready",
        "QA & Audits",
        "Post-Launch Support",
      ],
    },
  ];

  const smallServices = [
    {
      id: "future-proof-strategies",
      title: "Future-Proof Strategies",
      richText:
        "We design with tomorrow in mind—flexible systems, modular components, and a roadmap that can grow with your goals.",
    },
    {
      id: "senior-team",
      title: "Senior Team",
      richText:
        "Every project is led by seasoned designers, engineers, and PMs to ensure velocity, clarity, and quality decisions.",
    },
    {
      id: "custom-designs",
      title: "Custom Designs",
      richText:
        "No templates. Your brand, audience, and objectives drive a unique design system built just for you.",
    },
    {
      id: "partnership",
      title: "Partnership",
      richText:
        "We work with you, not just for you—co-creating goals, sharing progress often, and making decisions transparently.",
    },
    {
      id: "seo-focused",
      title: "SEO-Ready",
      richText:
        "Information architecture, semantic markup, and performance best practices baked in to support organic visibility.",
    },
    {
      id: "built-in-cms",
      title: "Built-In CMS",
      richText:
        "We implement intuitive CMS setups so your team can edit pages, posts, and media without developer overhead.",
    },
    {
      id: "industry-expertise",
      title: "Industry Expertise",
      richText:
        "From B2B and tech to e-commerce and services, we tailor approach and team composition to your market realities.",
    },
    {
      id: "backed-by-strategy",
      title: "Backed by Strategy",
      richText:
        "Research, positioning, and clear KPIs guide design and development—so the site looks great and performs.",
    },
  ];

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

  const handleMouseMove = (e) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY
    });
  };

  const items = [
    {
      id: 1,
      title: "Extensive Industry Expertise and",
      highlight: "Client-Focused Solutions",
      description:
        "At Webify Tech, we leverage deep industry knowledge to craft tailored website solutions that fit your unique goals. Every project is designed around your business objectives—not a one-size-fits-all model—ensuring precision, relevance, and measurable impact that helps your brand stand out in the market.",
      image:
        "https://cdn.prod.website-files.com/630bc5625ada9a1e2dbb10a6/661d4d7cf9b52a7779e62f10_Flipp.avif",
    },
    {
      id: 2,
      title: "Award-Winning Talent and",
      highlight: "Senior-Level Expertise",
      description:
        "From start to finish, your project is guided by senior professionals with proven, award-winning experience in branding, design, and user experience. At Webify Tech, our hands-on approach ensures innovative, high-quality solutions that consistently exceed client expectations.",
      image:
        "https://cdn.prod.website-files.com/630bc5625ada9a1e2dbb10a6/661d4d7b765b6b416fa0eb20_Retina.avif",
    },
    {
      id: 3,
      title: "Modern, Visionary, and",
      highlight: "Tailored Design",
      description:
        "We stay ahead of trends to deliver designs that are not only current but also forward-thinking. Each Webify Tech project is crafted to reflect your unique brand identity, industry, and goals—ensuring a custom design that is both timeless and adaptable to evolving market demands.",
      image:
        "https://cdn.prod.website-files.com/630bc5625ada9a1e2dbb10a6/661d4d7bcf37920bc03e72f4_ReadyMode.avif",
    },
  ];

  const [openDropdowns, setOpenDropdowns] = useState({});

  const toggleDropdown = (id) => {
    setOpenDropdowns(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const processStages = [
    {
      id: 1,
      stage: "Stage 1",
      title: "Discovery",
      description:
        "We start by learning your goals, audience, and competitors. Through research and planning, we build the foundation for a website strategy that aligns with your brand.",
      glowColor: "blue",
      steps: [
        {
          title: "Kick-off & Goals",
          items: [
            "Define goals, target audience, and stakeholders.",
            "Discuss existing website analytics and performance.",
            "Outline project vision and success metrics.",
          ],
        },
        {
          title: "Research & Analysis ",
          items: [
            "Competitor and market research.",
            "Collect brand assets and audience insights.",
          ],
        },
        {
          title: "Planning & Roadmap ",
          items: [
            "Create sitemap and navigation structure.",
            "Build detailed project timeline.",
            "Set up tools (Asana, Figma, Drive).",
          ],
        },
      ],
    },
    {
      id: 2,
      stage: "Stage 2",
      title: "Design",
      description:
        "Using insights from Discovery, we craft layouts and interfaces that are visually appealing, responsive, and user-friendly.",
      glowColor: "green",
      steps: [
        {
          title: "Concept & Wireframes ",
          items: [
            "Mood boards and style guides.",
            "Low-fidelity wireframes for structure.",
          ],
        },
        {
          title: "Visual Mockups ",
          items: [
            "High-fidelity mockups across devices.",
            "Refinement based on client feedback.",
          ],
        },
      ],
    },
    {
      id: 3,
      stage: "Stage 3",
      title: "Development",
      description:
        "We turn approved designs into a fully functional website, ensuring performance, security, and scalability.",
      glowColor: "red",
      steps: [
        {
          title: "Core Development ",
          items: [
            "Front-end and back-end coding.",
            "CMS setup and content integration.",
          ],
        },
        {
          title: "Features & Testing",
          items: [
            "Add e-commerce, forms, or integrations.",
            "Performance, security, and accessibility tests.",
          ],
        },
      ],
    },
    {
      id: 4,
      stage: "Stage 4",
      title: "Launch & Support",
      description:
        "After QA and optimization, we launch your site and provide training, monitoring, and ongoing support.",
      glowColor: "blue",
      steps: [
        {
          title: "Go-Live & Support ",
          items: [
            "Cross-browser and device testing.",
            "SEO optimization and analytics setup.",
            "Launch and monitoring.",
            "Training and post-launch support.",
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

  return (
    <>
      {/* HERO (note: if your HeroSection has oversized marquee, hide it on mobile within that component or add a prop to do so) */}
      <HeroSection
        backgroundImage="/17.png"
        marqueeText="WEBSITE DESIGN & DEVELOPMENT"
      />

      <AwardSec
        topText="Top Web Design Agency"
        heading="We create beautiful websites"
        subHeading="that drive business growth."
        description="Webfiy Tech is a leading media and web design agency with
              extensive experience in crafting custom-designed and expertly
              developed websites. Our creative team takes pride in producing
              visually striking, user-friendly platforms that excel in both user
              experience and SEO."
      />

      {/* Intro band */}
      <section className="w-full px-6 md:px-20 py-16 md:py-24 flex flex-col justify-center items-center relative overflow-hidden bg-gray-50">
        <div className="max-w-[95em] w-full">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-black via-black to-orange-500 p-8 md:p-16">
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>

            <div className="relative z-10 flex flex-col lg:flex-row gap-8 lg:gap-12 text-white">
              {/* Left */}
              <div className="flex-1">
                <h5 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 md:mb-8">
                  Tailored websites,{" "}
                  <span className="block">driven by strategy</span>
                </h5>

                {/* CTAs */}
                <div className="flex flex-wrap gap-4">
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-gray-900 font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 whitespace-nowrap"
                  >
                    Request a Proposal
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

                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-transparent border border-white/30 text-white font-semibold hover:bg-white/10 transition-all duration-300 hover:scale-105 whitespace-nowrap"
                  >
                    Contact Us
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

              {/* Right */}
              <div className="flex-1 text-gray-200 space-y-6 text-sm md:text-base leading-relaxed">
                <p>
                  Your website is often the first interaction customers have with your brand—so it
                  needs to be more than just visually appealing. At <strong>Webify Tech</strong>, we
                  craft sites that blend stunning design with seamless usability, helping your business
                  stand out in a crowded digital landscape.
                </p>
                <p>
                  Our team combines creative design with technical expertise, grounded in user
                  psychology and conversion strategy. The result is a website that not only looks
                  impressive but also delivers measurable outcomes—engaging audiences, building trust,
                  and accelerating growth.
                </p>
              </div>
            </div>

            {/* Bottom Section - Partners */}
            <div className="relative z-10 mt-12 md:mt-16 pt-12 border-t border-white/20">
              <div className="text-center mb-6 md:mb-12">
                <div className="text-lg md:text-2xl font-semibold text-white">
                  Making the Growth effortless for Hundreds of Businesses
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who we are */}
      <section
        id="Who-we-are"
        className="w-full flex flex-col justify-center items-center px-6 md:px-20 py-20 md:py-24 relative overflow-hidden text-[#f0f5fa] bg-[#0c1013]"
        onMouseMove={handleMouseMove}
      >
        <div className="max-w-[95em] w-full">
          <div className="mb-10 md:mb-16 text-left">
            <h5 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight">
              Websites That <span className="block">Push New Limits</span>
            </h5>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Caption */}
            <div className="lg:col-span-1">
              <div className="text-xs sm:text-sm font-medium bg-gray-800/50 px-3 py-2 rounded-lg tracking-wide text-gray-300 w-fit">
                Our Excellence
              </div>
            </div>

            {/* Items */}
            <div className="lg:col-span-3 space-y-12">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="cursor-pointer transition-all duration-300"
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 border-b border-gray-700/50 pb-8">
                    <div className="text-2xl md:text-3xl font-semibold leading-tight">
                      {item.title}{" "}
                      <span>{item.highlight}</span>
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

        {/* Floating Image (disabled on mobile) */}
        {hoveredItem && (
          <div
            className="hidden md:block fixed pointer-events-none z-50 transition-all duration-300 ease-out"
            style={{
              left: mousePosition.x + 20,
              top: mousePosition.y - 100,
              transform: 'translate(0, 0)',
            }}
          >
            <img
              src={items.find(item => item.id === hoveredItem)?.image}
              alt="Hover Preview"
              className="w-80 h-48 object-cover rounded-lg shadow-2xl opacity-90"
              loading="lazy"
            />
          </div>
        )}

        {/* Decorative */}
        <div className="absolute top-1/4 right-0 w-72 md:w-96 h-72 md:h-96 bg-gradient-to-l from-blue-900/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-72 md:w-96 h-72 md:h-96 bg-gradient-to-r from-purple-900/10 to-transparent rounded-full blur-3xl"></div>
      </section>

      {/* Services grid */}
      <div className="min-h-screen bg-gray-50">
        <section className="bg-gray-50 py-16 md:py-20 px-4 sm:px-6 lg:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 md:mb-16">
              <div>
                <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                  Our Services
                </h1>
                <p className="mt-4 text-gray-600 max-w-xl text-base sm:text-lg">
                  Our team integrates strategy, <a href="/" className="text-blue-500 hover:text-blue-600 underline transition-colors">branding</a>, UX design, and technology to create award-winning websites.
                </p>
              </div>
              <div className="flex items-center space-x-4 mt-8 md:mt-0">
                <a
                  href="/contact"
                  className="inline-flex items-center space-x-2 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors whitespace-nowrap"
                >
                  <span>Request a Proposal</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </a>
                <a
                  href="/services"
                  className="inline-flex items-center space-x-2 px-6 py-3 text-gray-700 font-semibold hover:text-blue-500 transition-colors whitespace-nowrap"
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

      <TechStack />
      <FeaturedWork />

      {/* Process */}
      <section className="w-full flex flex-col justify-center items-center px-6 md:px-20 py-32 md:py-48 relative overflow-hidden text-[#f0f5fa] bg-[#0c1013]">
        <div className="max-w-[95em] w-full">
          {/* Title */}
          <div className="mb-10 md:mb-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <div className="text-sm font-medium bg-gray-800/50 px-3 py-2 rounded-lg tracking-wide text-gray-300 w-fit mb-6">
                Our Process
              </div>
            </div>

            <div className="lg:col-span-2">
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight">
                A Closer Look At Our{" "}
                <span>Web Design Methodology</span>
              </h2>
            </div>
          </div>

          {/* Stages */}
          <div className="space-y-12 md:space-y-16">
            {processStages.map((stage) => (
              <div key={stage.id} className="group">
                <div className="mb-6 md:mb-8 grid grid-cols-1 md:grid-cols-3">
                  <div className="text-sm text-gray-400 mb-4">{stage.stage}</div>

                  <div className="flex flex-col col-span-2">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex gap-4 items-start">
                        <div className="relative">
                          <div className={`w-2 h-10 ${getGlowClasses(stage.glowColor)}`}></div>
                          <div className={`absolute inset-0 w-3 h-3 rounded-full ${getGlowClasses(stage.glowColor)} blur-sm opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                        </div>
                        <h3 className="text-2xl md:text-4xl font-bold">{stage.title}</h3>
                      </div>

                      <p className="text-[#a6b9c9] leading-relaxed max-w-4xl">
                        {stage.description}
                      </p>
                    </div>

                    <div className="h-px bg-white/10 mt-4 mb-6 md:mb-8"></div>

                    <div className="space-y-4">
                      {stage.steps.map((step, stepIndex) => (
                        <div key={stepIndex} className="border border-gray-800/50 rounded-lg overflow-hidden bg-gray-900/20">
                          <button
                            onClick={() => toggleDropdown(`${stage.id}-${stepIndex}`)}
                            className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-800/30 transition-colors duration-200"
                          >
                            <span className="font-medium text-white">
                              {step.title.includes('strong') ? (
                                <strong>{step.title.replace(/<\/?strong>/g, '')}</strong>
                              ) : (
                                step.title
                              )}
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
}

export default WebsiteDesign;
