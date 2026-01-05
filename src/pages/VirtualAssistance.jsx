import React, { useState } from "react";
import RecentClients from "../components/RecentClients";
import FeaturedWork from "../components/FeaturedWork";
import FaqsSection from "../components/FaqsSection";
import IndustriesSection from "../components/IndustriesSection";
import Insights from "../components/Insights";
import FooterIntro from "../components/FooterIntro";
import TestimonialsSection from "../components/TestimonialsSection";
import ContactSection from "../components/ContactSection";
import HeroSection from "../components/serviceHero";
// removed: AwardSec, TechStack

// If you really need this font, include it globally (e.g., in index.html or a Layout)
<link
  href="https://fonts.googleapis.com/css2?family=Prata&display=swap"
  rel="stylesheet"
/>

const VirtualAssistance = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  // Why-us highlights (kept structure, updated copy for Virtual Assistance)
  const items = [
    {
      id: 1,
      title: "Dedicated, trained, and",
      highlight: "business-savvy assistants",
      description:
        "Work with vetted Virtual Assistants trained on SOPs, tools, and your brand voice. We assign a primary VA with built-in backup coverage so operations never stall.",
      image:
        "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?q=80&w=1200&auto=format&fit=crop", // illustrative
    },
    {
      id: 2,
      title: "Process-driven onboarding and",
      highlight: "measurable outcomes",
      description:
        "Clear intake, role definition, and KPI alignment from day one. We document workflows, create checklists, and report on turnaround time, accuracy, and SLA adherence.",
      image:
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Tool-agnostic, secure, and",
      highlight: "scalable support",
      description:
        "From Google Workspace, Notion, and Slack to CRMs and helpdesks, we plug into your stack with least privilege access, activity logs, and easy scaling up or down.",
      image:
        "https://images.unsplash.com/photo-1529336953121-ad5a0d43d0d2?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  // VA process (replacing web design stages)
  const processStages = [
    {
      id: 1,
      stage: "Stage 1",
      title: "Discovery & Role Mapping",
      description:
        "We clarify goals, recurring tasks, tools, time zones, comms cadence, and success metrics. Then we define the ideal VA profile and scope of work.",
      glowColor: "blue",
      steps: [
        {
          title: "Intake & Goals ",
          items: [
            "Identify priorities (admin, support, research, ops).",
            "Document SLAs and weekly/hourly coverage needs.",
            "Confirm tools, access, and stakeholders.",
          ],
        },
        {
          title: "SOW & Playbooks ",
          items: [
            "Draft scope of work and responsibilities.",
            "Create starter SOPs and checklists.",
          ],
        },
        {
          title: "Success Metrics ",
          items: [
            "Define KPIs (TAT, accuracy, CSAT, tasks closed).",
            "Agree reporting format and cadence.",
          ],
        },
      ],
    },
    {
      id: 2,
      stage: "Stage 2",
      title: "Onboarding & Knowledge Transfer",
      description:
        "We introduce your VA, align on communication channels, and run shadow sessions to absorb context quickly.",
      glowColor: "green",
      steps: [
        {
          title: "Setup & Access ",
          items: [
            "Accounts, permissions, security brief.",
            "Templates: email, tickets, notes, meeting minutes.",
          ],
        },
        {
          title: "Shadow & Rehearsal ",
          items: [
            "Live run-through of daily/weekly tasks.",
            "Edge cases and escalation paths.",
          ],
        },
      ],
    },
    {
      id: 3,
      stage: "Stage 3",
      title: "Execution & Daily Operations",
      description:
        "Your VA takes ownership of tasks with clear SLAs. We track workload, automate where possible, and keep you in the loop.",
      glowColor: "red",
      steps: [
        {
          title: "Core Tasks ",
          items: [
            "Inbox & calendar, meeting notes & follow-ups.",
            "CRM hygiene, lead qualification, data entry.",
            "Support tickets, chat responses, knowledge base updates.",
          ],
        },
        {
          title: "Quality & Automation ",
          items: [
            "Checklists, double-checks, and canned responses.",
            "Identify repetitive work for automation or templates.",
          ],
        },
      ],
    },
    {
      id: 4,
      stage: "Stage 4",
      title: "Reporting, Optimization & Scale",
      description:
        "We review KPIs, suggest improvements, and scale hours or add specialized VAs as your needs grow.",
      glowColor: "blue",
      steps: [
        {
          title: "Review & Improve ",
          items: [
            "Weekly reports: volume, TAT, CSAT, blockers.",
            "Refine SOPs and introduce new efficiencies.",
            "Add coverage (timezone/weekends) when needed.",
          ],
        },
      ],
    },
  ];

  const [openDropdowns, setOpenDropdowns] = useState({});
  const toggleDropdown = (id) =>
    setOpenDropdowns((prev) => ({ ...prev, [id]: !prev[id] }));

  const getGlowClasses = (color) => {
    switch (color) {
      case "green":
        return "bg-green-400";
      case "red":
        return "bg-red-400";
      default:
        return "bg-blue-400";
    }
  };

  return (
    <>
      {/* HERO */}
      <HeroSection
        backgroundImage="/24.png"
        marqueeText="VIRTUAL ASSISTANCE SERVICES"
      />

      {/* Removed: Top Agency (AwardSec) */}

      {/* Value Prop Banner */}
      <section className="w-full px-8 md:px-20 py-24 flex flex-col justify-center items-center relative overflow-hidden bg-gray-50">
        <div className="max-w-[95em] w-full">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-black via-black to-blue-500 p-12 md:p-16">
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>

            <div className="relative z-10 flex flex-col lg:flex-row gap-12 text-white">
              <div className="flex-1">
                <h5 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
                  Delegate more,{" "}
                  <span className="block">grow faster</span>
                </h5>

                <div className="flex flex-wrap gap-4">
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-gray-900 font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105"
                  >
                    Book a Discovery Call
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
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-transparent border border-white/30 text-white font-semibold hover:bg-white/10 transition-all duration-300 hover:scale-105"
                  >
                    Get Pricing
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

              <div className="flex-1 text-gray-200 space-y-6 text-sm md:text-base leading-relaxed">
                <p>
                  <strong>Nextstac</strong> supplies dedicated Virtual Assistants who
                  take on your admin, inbox & calendar, customer support, research, CRM
                  updates, and operations - so your team can focus on high-leverage work.
                </p>
                <p>
                  We’re process-driven: documented SOPs, clear SLAs, and weekly reports.
                  Scale coverage by hours, time zones, and specialized roles without the
                  hiring overhead.
                </p>
              </div>
            </div>

            <div className="relative z-10 mt-16 pt-12 border-t border-white/20">
              <div className="text-center mb-12">
                <div className="text-xl md:text-2xl font-semibold text-white">
                  Trusted by founders, agencies, and growth teams
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who we are / Excellence */}
      <section
        id="Who-we-are"
        className="w-full flex flex-col justify-center items-center px-8 md:px-20 py-24 relative overflow-hidden text-[#f0f5fa] bg-[#0c1013]"
        onMouseMove={handleMouseMove}
      >
        <div className="max-w-[95em] w-full">
          <div className="mb-16 text-left">
            <h5 className="text-4xl md:text-6xl font-bold leading-tight">
              Assistants That <span className="block">Operate Like Teammates</span>
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
            style={{
              left: mousePosition.x + 20,
              top: mousePosition.y - 100,
              transform: "translate(0, 0)",
            }}
          >
            <img
              src={items.find((item) => item.id === hoveredItem)?.image}
              alt="Hover Preview"
              className="w-80 h-48 object-cover rounded-lg shadow-2xl opacity-90"
            />
          </div>
        )}

        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-l from-blue-900/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-r from-purple-900/10 to-transparent rounded-full blur-3xl"></div>
      </section>

      {/* Removed: Our Services section */}
      {/* Removed: Tech stack */}

      <FeaturedWork />

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
                How We Deliver <span>Virtual Assistance</span>
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
                          <div
                            className={`absolute inset-0 w-3 h-3 rounded-full ${getGlowClasses(
                              stage.glowColor
                            )} blur-sm opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                          ></div>
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
                        <div
                          key={stepIndex}
                          className="border border-gray-800/50 rounded-lg overflow-hidden bg-gray-900/20"
                        >
                          <button
                            onClick={() => toggleDropdown(`${stage.id}-${stepIndex}`)}
                            className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-800/30 transition-colors duration-200"
                          >
                            <span className="font-medium text-white">{step.title}</span>
                            <svg
                              className={`w-4 h-4 transition-transform duration-200 ${
                                openDropdowns[`${stage.id}-${stepIndex}`] ? "rotate-180" : ""
                              }`}
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

export default VirtualAssistance;
