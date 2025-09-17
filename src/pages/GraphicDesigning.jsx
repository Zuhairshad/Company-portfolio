import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import RecentClients from "../components/RecentClients";
import FaqsSection from "../components/FaqsSection";
import Insights from "../components/Insights";
import FooterIntro from "../components/FooterIntro";
import TestimonialsSection from "../components/TestimonialsSection";
import ContactSection from '../components/ContactSection';
import HeroSection from '../components/serviceHero';
import StatsSection from '../components/StatsSection';

const GraphicDesigning = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // ===== Primary service cards (graphic design focused) =====
  const services = [
    {
      id: "brand-identity",
      title: "Brand Identity & Logo Design",
      paragraph:
        "We craft distinctive brand identities that capture your essence and resonate with your audience. Every logo, color palette, and typographic choice tells your unique story.",
      richText: (
        <>
          <p className="text-sm md:text-base mb-4">
            Our process begins with deep brand discovery, competitive analysis, and audience research. 
            We develop comprehensive brand guidelines that ensure consistency across all touchpoints 
            and create memorable visual experiences.
          </p>
          <p className="text-sm md:text-base mb-4">
            From concept sketches to final deliverables, we provide logo variations, color systems, 
            typography hierarchies, and application examples that bring your brand to life across 
            digital and print media.
          </p>
        </>
      ),
      tags: [
        "Logo Design",
        "Brand Guidelines",
        "Color Systems",
        "Typography",
        "Brand Applications",
      ],
    },
    {
      id: "marketing-materials",
      title: "Marketing & Advertising Design",
      paragraph:
        "Compelling visuals that drive action. We design marketing materials that cut through the noise and convert viewers into customers with strategic creativity.",
      richText: (
        <>
          <p className="text-sm md:text-base mb-4">
            From social media campaigns to trade show displays, we create cohesive marketing 
            ecosystems that amplify your message. Each design is optimized for its specific 
            medium and audience, ensuring maximum impact and engagement.
          </p>
          <p className="text-sm md:text-base mb-4">
            Our data-driven approach combines aesthetic excellence with performance metrics, 
            creating designs that not only look stunning but deliver measurable results for 
            your marketing objectives.
          </p>
          <a
            href="/services/marketing-design"
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
        "Social Media Graphics",
        "Print Advertising",
        "Campaign Design",
        "Performance Marketing",
        "A/B Testing",
      ],
    },
    {
      id: "digital-design",
      title: "Digital & Web Graphics",
      paragraph:
        "Pixel-perfect digital designs optimized for every screen and platform. We create engaging web graphics, UI elements, and digital assets that enhance user experience.",
      richText: (
        <>
          <p className="text-sm md:text-base mb-4">
            Our digital design approach prioritizes user experience, accessibility, and performance. 
            We create scalable graphics, interactive elements, and responsive designs that work 
            seamlessly across devices and platforms.
          </p>
          <p className="text-sm md:text-base mb-4">
            From website headers to email templates, mobile app graphics to social media content, 
            we ensure every digital touchpoint reflects your brand while optimizing for engagement 
            and conversion rates.
          </p>
          <p className="text-sm md:text-base mb-4">
            All deliverables include multiple formats, sizes, and variations to support your 
            digital marketing efforts and maintain consistency across platforms.
          </p>
        </>
      ),
      tags: [
        "Web Graphics",
        "UI Elements",
        "Email Design",
        "Banner Ads",
        "Responsive Design",
      ],
    },
  ];

  // ===== Small highlight cards =====
  const smallServices = [
    {
      id: "print-design",
      title: "Print & Publication Design",
      richText:
        "Brochures, catalogs, annual reports, and packaging that make lasting impressions. We handle everything from concept to print-ready files.",
    },
    {
      id: "packaging",
      title: "Packaging Design",
      richText:
        "Product packaging that stands out on shelves and communicates your brand values. Structural design meets visual appeal for maximum impact.",
    },
    {
      id: "illustration",
      title: "Custom Illustration",
      richText:
        "Original artwork and illustrations that add personality to your brand. From technical diagrams to artistic concepts, we bring ideas to visual life.",
    },
    {
      id: "infographics",
      title: "Infographics & Data Visualization",
      richText:
        "Transform complex data into compelling visual stories. Clear, engaging graphics that make information accessible and memorable.",
    },
    {
      id: "presentations",
      title: "Presentation Design",
      richText:
        "Professional slide decks and presentation materials that captivate audiences and effectively communicate your message.",
    },
    {
      id: "environmental",
      title: "Environmental Graphics",
      richText:
        "Signage, wayfinding, and spatial graphics that enhance physical spaces and create immersive brand experiences.",
    },
    {
      id: "motion-graphics",
      title: "Motion Graphics",
      richText:
        "Animated logos, explainer videos, and dynamic content that brings your brand to life through movement and storytelling.",
    },
    {
      id: "brand-refresh",
      title: "Brand Refresh & Redesign",
      richText:
        "Modernize existing brands while preserving equity. Strategic evolution that keeps your brand relevant and competitive.",
    },
  ];

  // ===== Hover feature list =====
  const items = [
    {
      id: 1,
      title: "Strategic Creative and",
      highlight: "Brand-First Thinking",
      description:
        "Every design decision supports your brand strategy and business goals. We combine creative excellence with strategic thinking to deliver visuals that drive results.",
      image:
        "https://cdn.prod.website-files.com/630bc5625ada9a1e2dbb10a6/661d4d7cf9b52a7779e62f10_Flipp.avif",
    },
    {
      id: 2,
      title: "Senior Designers and",
      highlight: "Proven Expertise",
      description:
        "Award-winning designers with decades of experience lead every project. From concept to completion, you work directly with seasoned professionals.",
      image:
        "https://cdn.prod.website-files.com/630bc5625ada9a1e2dbb10a6/661d4d7b765b6b416fa0eb20_Retina.avif",
    },
    {
      id: 3,
      title: "Timeless Design and",
      highlight: "Contemporary Relevance",
      description:
        "We create designs that feel fresh today and remain effective tomorrow. Classic principles meet current trends for maximum longevity and impact.",
      image:
        "https://cdn.prod.website-files.com/630bc5625ada9a1e2dbb10a6/661d4d7bcf37920bc03e72f4_ReadyMode.avif",
    },
  ];

  const [openDropdowns, setOpenDropdowns] = useState({});
  const toggleDropdown = (id) => {
    setOpenDropdowns((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // ===== Process stages for graphic design =====
  const processStages = [
    {
      id: 1,
      stage: "Stage 1",
      title: "Discovery & Research",
      description:
        "We dive deep into your brand, audience, and competitive landscape. Research and insights inform every creative decision that follows.",
      glowColor: "blue",
      steps: [
        {
          title: "Brand & Audience Analysis",
          items: [
            "Brand audit and competitive landscape review.",
            "Target audience research and persona development.",
            "Brand positioning and messaging clarification.",
          ],
        },
        {
          title: "Creative Brief & Strategy",
          items: [
            "Project goals, success metrics, and constraints definition.",
            "Creative direction and visual strategy development.",
            "Timeline, deliverables, and approval process setup.",
          ],
        },
      ],
    },
    {
      id: 2,
      stage: "Stage 2",
      title: "Concept Development",
      description:
        "Multiple creative directions take shape through sketches, mood boards, and initial concepts. We explore diverse approaches before refining the strongest ideas.",
      glowColor: "green",
      steps: [
        {
          title: "Ideation & Sketching",
          items: [
            "Brainstorming sessions and concept exploration.",
            "Rough sketches and initial visual directions.",
            "Mood boards and visual reference compilation.",
          ],
        },
        {
          title: "Concept Refinement",
          items: [
            "Digital concept development and refinement.",
            "Client feedback integration and iteration.",
            "Final concept selection and approval.",
          ],
        },
      ],
    },
    {
      id: 3,
      stage: "Stage 3",
      title: "Design & Production",
      description:
        "Approved concepts become polished designs. Meticulous attention to typography, color, and composition ensures professional-grade results.",
      glowColor: "red",
      steps: [
        {
          title: "Design Execution",
          items: [
            "High-fidelity design creation and refinement.",
            "Typography selection and hierarchy establishment.",
            "Color palette application and visual consistency.",
          ],
        },
        {
          title: "Production & Quality Control",
          items: [
            "File preparation for various media and formats.",
            "Quality assurance and technical specifications check.",
            "Final proofing and client approval process.",
          ],
        },
      ],
    },
    {
      id: 4,
      stage: "Stage 4",
      title: "Delivery & Support",
      description:
        "Complete file packages delivered with usage guidelines. Ongoing support ensures successful implementation and brand consistency.",
      glowColor: "blue",
      steps: [
        {
          title: "Asset Delivery & Documentation",
          items: [
            "Comprehensive file package with all formats and sizes.",
            "Usage guidelines and brand application documentation.",
            "Training and handover for internal teams.",
            "Ongoing support and future iteration planning.",
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
        backgroundImage="/43.png"
        marqueeText="GRAPHIC DESIGN"
      />
      <StatsSection/>

      {/* Intro band */}
      <section className="w-full px-8 md:px-20 py-24 flex flex-col justify-center items-center relative overflow-hidden bg-gray-50">
        <div className="max-w-[95em] w-full">
          <div className="relative rounded-3xl overflow-hidden bg-gray-900 p-12 md:p-16">
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>

            <div className="relative z-10 flex flex-col lg:flex-row gap-12 text-white">
              {/* Left */}
              <div className="flex-1">
                <h5 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
                  Visual storytelling{" "}
                  <span className="block">that drives results</span>
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
                    View Portfolio
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
                  Great design isn't just about looking good—it's about communicating effectively 
                  and driving business results. We combine strategic thinking with creative excellence 
                  to deliver graphics that captivate, inform, and convert.
                </p>
                <p>
                  From brand identity to marketing campaigns, every project is rooted in research, 
                  refined through collaboration, and optimized for performance. You get designs 
                  that work as hard as they look good.
                </p>
              </div>
            </div>

            <div className="relative z-10 mt-16 pt-12 border-t border-white/20">
              <div className="text-center mb-12">
                <div className="text-xl md:text-2xl font-semibold text-white">
                  Trusted by brands that value exceptional design and measurable impact
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who we are */}
      <section
        id="Who-we-are"
        className="w-full flex flex-col justify-center items-center px-8 md:px-20 py-24 relative overflow-hidden text-[#f0f5fa] bg-[#0c1013]"
        onMouseMove={handleMouseMove}
      >
        <div className="max-w-[95em] w-full">
          <div className="mb-16 text-left">
            <h5 className="text-4xl md:text-6xl font-bold leading-tight">
              Design That <span className="block">Makes an Impact</span>
            </h5>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <div className="text-sm font-medium bg-gray-800/50 px-3 py-2 rounded-lg tracking-wide text-gray-300 w-fit">
                Why Choose Us
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

      {/* Services grid */}
      <div className="min-h-screen bg-gray-50">
        <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
              <div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                  Graphic Design Services
                </h1>
                <p className="mt-4 text-gray-600 max-w-xl text-lg">
                  From brand identity to marketing campaigns, we create compelling 
                  visuals that communicate your message and drive business growth.
                </p>
              </div>
              <div className="flex items-center space-x-4 mt-8 md:mt-0">
                <a
                  href="/contact"
                  className="inline-flex items-center space-x-2 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors"
                >
                  <span>Start Your Project</span>
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


      {/* Process */}
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
                <span>Design Methodology</span>
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
      <FaqsSection />
      <Insights />
      <TestimonialsSection />
      <ContactSection />
      <FooterIntro />
    </>
  );
};

// ===== Reused card components =====
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

export default GraphicDesigning;