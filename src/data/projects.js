// src/Assets/projects.js
const projects = [
  // ===== Consultation & Audit (2) =====
  {
    id: "ops-readiness-review",
    title: "Ops Readiness Review",
    blurb:
      "Comprehensive discovery to align business goals, KPIs, and tech constraints before execution.",
    category: "Consultation & Audit",
    tags: ["Discovery", "Roadmap", "Workshops"],
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop",
    caseHref: "/work/ops-readiness-review",
    liveHref: "#",
    details: {
      client: "Regional Omni-Retail Group",
      industry: "Retail & eCommerce",
      timeframe: "12 weeks (Q1–Q2 2025)",
      team: ["Eng Lead", "Product Strategist", "BA", "Solutions Architect"],
      stack: ["Miro", "Jira", "Confluence", "BigQuery (read-only)", "Looker Studio"],
      challenge:
        "Leadership lacked a clear view of priorities and technical constraints, causing stalled initiatives.",
      solution:
        "Ran stakeholder workshops, mapped KPIs to initiatives, and produced a sequenced delivery roadmap.",
      deliverables: [
        "Operating model & RACI",
        "KPI tree aligned to OKRs",
        "12-week prioritized roadmap",
        "Budget & resourcing plan",
        "Risk register with mitigations",
      ],
      metrics: {
        alignmentWorkshops: 8,
        prioritizedInitiatives: 23,
        baseline: {
          avgDecisionCycleDays: 18,
        },
        after: {
          avgDecisionCycleDays: 7,
        },
      },
      outcome:
        "Alignment across teams, 12-week delivery plan approved, and faster sign-offs on key projects.",
      testimonial:
        "“The roadmap removed gridlock. We finally had shared KPIs and a realistic delivery plan.” - VP Operations",
    },
  },
  {
    id: "commerce-tech-audit",
    title: "Commerce Tech Audit",
    blurb:
      "End-to-end evaluation of the existing commerce stack with quick wins and a migration plan.",
    category: "Consultation & Audit",
    tags: ["Audit", "Architecture"],
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop",
    caseHref: "/work/commerce-tech-audit",
    liveHref: "#",
    details: {
      client: "D2C Lifestyle Brand",
      industry: "Consumer Goods",
      timeframe: "6 weeks (Sprint audit)",
      team: ["Solutions Architect", "SRE", "Data Analyst"],
      stack: ["Shopify Plus", "Node", "Postgres", "Segment", "GA4", "Cloudflare"],
      challenge:
        "High cart abandonment and slow releases due to monolithic code and unclear ownership.",
      solution:
        "Audited stack, recommended modular services, and introduced CI/CD with observability KPIs.",
      deliverables: [
        "Architecture gap analysis",
        "Release workflow redesign (CI/CD)",
        "Observability playbook (SLOs, SLIs)",
        "Security & PII handling checklist",
        "12-month migration path (phased)",
      ],
      metrics: {
        baseline: { cartAbandonment: "76%", weeklyDeploys: 2, p95CheckoutMs: 4200 },
        after: { cartAbandonment: "49%", weeklyDeploys: 6, p95CheckoutMs: 1900 },
      },
      outcome:
        "Checkout failures down 35%, deployments 3× more frequent, and clearer ownership boundaries.",
      testimonial:
        "“We regained confidence in shipping. Observability and ownership lines changed the culture.” - CTO",
    },
  },

  // ===== SEO (2) =====
  {
    id: "topical-map-expansion",
    title: "Topical Map Expansion",
    blurb:
      "Built a content cluster and internal-link structure that lifted non-brand traffic by 48%.",
    category: "SEO",
    tags: ["On-Page", "Content"],
    image:
      "https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?q=80&w=1600&auto=format&fit=crop",
    caseHref: "/work/topical-map-expansion",
    liveHref: "#",
    details: {
      client: "FinTech SaaS",
      industry: "Software",
      timeframe: "10 weeks + 90-day measurement",
      team: ["SEO Strategist", "Content Lead", "Tech SEO"],
      stack: ["Screaming Frog", "GSC", "Ahrefs", "GA4", "Contentful"],
      challenge:
        "Fragmented content with low topical authority and weak internal linking.",
      solution:
        "Created topical clusters, pillar pages, and a schema strategy; rolled out an internal link policy.",
      deliverables: [
        "Topical authority map",
        "10 pillar pages + 40 supporting articles",
        "Schema markup templates",
        "Internal linking policy & training",
      ],
      metrics: {
        baseline: { nonBrandTraffic: 100, avgPosition: 21.4 },
        after90d: { nonBrandTraffic: 148, avgPosition: 16.4 },
      },
      outcome:
        "+48% non-brand organic traffic and +23% average position across priority keywords in 90 days.",
      testimonial:
        "“We finally rank where our product deserves to be.” - VP Growth",
    },
  },
  {
    id: "core-web-vitals-sprint",
    title: "Core Web Vitals Sprint",
    blurb:
      "LCP + CLS improvements via image optimization, font policies, and route-level code splitting.",
    category: "SEO",
    tags: ["CWV", "Performance"],
    image:
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1600&auto=format&fit=crop",
    caseHref: "/work/core-web-vitals-sprint",
    liveHref: "#",
    details: {
      client: "Online Publisher",
      industry: "Media",
      timeframe: "4 weeks (two sprints)",
      team: ["Perf Engineer", "FE Dev", "Designer"],
      stack: ["Next.js", "Vercel Analytics", "Lighthouse CI"],
      challenge:
        "Poor LCP and CLS scores were capping rankings and hurting conversions on mobile.",
      solution:
        "Implemented responsive image policy, critical CSS, preconnect hints, and font-display swap.",
      deliverables: [
        "Image policy (breakpoints, formats, cdn rules)",
        "Font loading strategy + fallback tokens",
        "Route-level code splitting audit",
        "Lighthouse CI baseline & budget",
      ],
      metrics: {
        baseline: { LCPs: "5.2s", CLS: 0.24, mobileCR: "1.9%" },
        after: { LCPs: "3.0s", CLS: 0.08, mobileCR: "2.24%" },
      },
      outcome:
        "LCP improved by 42%, CLS stabilized under 0.1, and mobile conversion rate increased by 18%.",
    },
  },

  // ===== Branding (2) =====
  {
    id: "northwind-rebrand",
    title: "Northwind Rebrand",
    blurb:
      "A confident visual system: typography, color, and motion rules shipped as a brand kit.",
    category: "Branding",
    tags: ["Identity", "Guidelines"],
    image:
      "https://images.unsplash.com/photo-1607082349566-187342175e2f?q=80&w=1600&auto=format&fit=crop",
    caseHref: "/work/northwind-rebrand",
    liveHref: "#",
    details: {
      client: "Northwind Logistics",
      industry: "Supply Chain",
      timeframe: "8 weeks",
      team: ["Brand Designer", "Motion Designer", "Art Director"],
      stack: ["Figma", "After Effects", "Lottie"],
      challenge:
        "Inconsistent identity across touchpoints diluted brand recognition and trust.",
      solution:
        "Developed a scalable design language, motion guidelines, and an asset library with usage rules.",
      deliverables: [
        "Logo system & usage rules",
        "Type scale & color tokens",
        "Motion guidelines & micro-interactions",
        "Social & sales collateral kit",
      ],
      metrics: {
        surveyRecall: "+19% aided recall",
        productionSpeed: "Design turnaround down 28%",
      },
      outcome:
        "Consistent brand application, faster creative production, and stronger recall in surveys.",
    },
  },
  {
    id: "aurora-naming-voice",
    title: "Aurora Naming & Voice",
    blurb:
      "Naming sprint, story pillars, and tone of voice for a climate-tech startup.",
    category: "Branding",
    tags: ["Naming", "Copy"],
    image:
      "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=1600&auto=format&fit=crop",
    caseHref: "/work/aurora-naming-voice",
    liveHref: "#",
    details: {
      client: "Aurora",
      industry: "Climate Tech",
      timeframe: "3 weeks",
      team: ["Brand Strategist", "Copywriter"],
      stack: ["Figma", "Airtable", "Trademark pre-check tools"],
      challenge:
        "Founders needed a memorable name and voice that balanced innovation with trust.",
      solution:
        "Ran name exploration, legal pre-checks, and voice of customer research to craft tone pillars.",
      deliverables: [
        "Shortlist of 12 names (with linguistic + legal screens)",
        "Voice pillars & do/don’t guide",
        "Story framework + homepage messaging",
      ],
      metrics: {
        pitchClarity: "Investor pitch comprehension +31%",
        brandLift: "Unaided awareness +7% (post-launch 60d)",
      },
      outcome:
        "Approved name and messaging framework; improved pitch clarity and investor engagement.",
      testimonial:
        "“The name and story made fundraising conversations smoother from day one.” - Co-founder",
    },
  },

  // ===== Web Development (5) =====
  {
    id: "safeway-b2b-portal",
    featured: true,
    tagPrimary: "Website",
    tagSecondary: "Branding",
    title: "Safeway (Albertsons)",
    blurb:
      "Website Redesign & B2B Customer Experience for a national grocery brand.",
    category: "Web Development",
    tags: ["React", "Node", "RBAC"],
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1600&auto=format&fit=crop",
    caseHref: "/work/safeway-b2b-portal",
    liveHref: "#",
    details: {
      client: "Safeway / Albertsons",
      industry: "Grocery / B2B",
      timeframe: "16 weeks (pilot + rollout)",
      team: ["PM", "FE x2", "BE", "UX", "QA"],
      stack: ["React", "Node", "Postgres", "Redis", "AWS", "OpenSearch"],
      challenge:
        "Outdated B2B portal with slow performance and confusing user flows for corporate buyers.",
      solution:
        "Rebuilt as a component-driven React app with role-based dashboards, faster search, and updated brand UI.",
      deliverables: [
        "Design system (WCAG AA)",
        "Role-based dashboards & permissions",
        "Search & saved lists",
        "Order workflows with approvals",
      ],
      metrics: {
        baseline: { ttcMins: 12.4, buyerSatisfaction: 6.2 },
        after: { ttcMins: 7.3, buyerSatisfaction: 8.1 },
      },
      outcome:
        "Time-to-checkout reduced by ~40%, higher buyer satisfaction scores, and a scalable codebase.",
    },
  },
  {
    id: "headless-cms-publishing",
    title: "Headless CMS Publishing",
    blurb:
      "Next.js + headless content modeling for fast editorial workflows and preview flows.",
    category: "Web Development",
    tags: ["Next.js", "Headless CMS"],
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1600&auto=format&fit=crop",
    caseHref: "/work/headless-cms-publishing",
    liveHref: "#",
    details: {
      client: "B2B SaaS",
      industry: "Software",
      timeframe: "10 weeks",
      team: ["Tech Lead", "FE", "Content Architect"],
      stack: ["Next.js", "Vercel", "Sanity CMS", "Playwright"],
      challenge:
        "Marketing couldn’t move quickly due to dev bottlenecks and rigid content structures.",
      solution:
        "Modeled reusable content types, added preview environments, and role-based publishing.",
      deliverables: [
        "Composable content model",
        "Preview URLs + Draft workflows",
        "Role-based publishing & review",
        "Component library for marketing",
      ],
      metrics: {
        editorialVelocity: "3× more content shipped / month",
        rollbackIncidents: "-60% content hotfixes",
      },
      outcome:
        "Editorial velocity up 3×, fewer dev handoffs, and safer release workflows.",
    },
  },
  {
    id: "analytics-marketing-site",
    title: "Analytics-Ready Marketing Site",
    blurb:
      "Static-first routing, form endpoints, and privacy-friendly analytics instrumentation.",
    category: "Web Development",
    tags: ["Vite", "Edge"],
    image:
      "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop",
    caseHref: "/work/analytics-marketing-site",
    liveHref: "#",
    details: {
      client: "Professional Services Firm",
      industry: "Consulting",
      timeframe: "6 weeks",
      team: ["FE", "Platform Eng"],
      stack: ["Vite", "Cloudflare Pages", "Honeypot + hCaptcha", "Plausible"],
      challenge:
        "No reliable funnel analytics and frequent form spam polluted reporting.",
      solution:
        "Implemented serverless form handlers, consent mode, and event schema with auto-tracking.",
      deliverables: [
        "Static-first site with edge caching",
        "Event schema & UTM conventions",
        "Serverless forms with spam protection",
        "Consent mode & privacy policy updates",
      ],
      metrics: {
        spamReduction: "98%",
        attributionCoverage: "+34% tracked touchpoints",
      },
      outcome:
        "Clean analytics pipeline, spam reduced by 98%, and clear attribution for campaigns.",
    },
  },
  {
    id: "design-system-theming",
    title: "Design System & Theming",
    blurb:
      "Token-based theming with dark mode, accessibility passes, and UI docs.",
    category: "Web Development",
    tags: ["Design System", "A11y"],
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600&auto=format&fit=crop",
    caseHref: "/work/design-system-theming",
    liveHref: "#",
    details: {
      client: "Multi-product Startup",
      industry: "SaaS",
      timeframe: "9 weeks",
      team: ["Design Ops", "FE", "QA"],
      stack: ["Storybook", "Chromatic", "Jest-Axe", "Figma Tokens"],
      challenge:
        "UI inconsistency across teams slowed delivery and created accessibility regressions.",
      solution:
        "Built tokens, components, and linting rules; set WCAG targets and visual regression tests.",
      deliverables: [
        "Token JSON (color, spacing, type)",
        "Themeable component library",
        "A11y linters + CI checks",
        "Storybook docs + sandbox",
      ],
      metrics: {
        releaseConsistency: "+25% feature reuse",
        a11yBugs: "-63% a11y issues escaping to prod",
      },
      outcome:
        "Higher UI consistency, faster product teams, and fewer a11y bugs escaping to prod.",
    },
  },

  // ===== Web Design (2) =====
  {
    id: "wellness-saas",
    featured: true,
    tagPrimary: "Website",
    title: "Wellness SaaS Landing System",
    blurb:
      "Hero variants, social proof, and conversion-first layouts tested across segments.",
    category: "Web Design",
    tags: ["Landing", "A/B"],
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1600&auto=format&fit=crop",
    caseHref: "/work/wellness-saas",
    liveHref: "#",
    details: {
      client: "Wellness SaaS",
      industry: "Health Tech",
      timeframe: "5 weeks + 6 weeks test",
      team: ["UX", "CRO", "FE Dev"],
      stack: ["Optimizely", "Next.js", "Hotjar", "GA4"],
      challenge:
        "Low trial sign-ups due to generic messaging and unclear value propositions.",
      solution:
        "Introduced segmented hero variations, testimonial patterns, and pricing clarity tests.",
      deliverables: [
        "3 hero variants (ICP-specific)",
        "Proof pattern library",
        "Pricing clarity framework",
        "Experiment plans & post-test readouts",
      ],
      metrics: {
        baseline: { trialStartCR: "2.6%" },
        variantBest: { trialStartCR: "3.3%" },
      },
      outcome:
        "+27% trial starts and better comprehension scores in user testing.",
    },
  },
  {
    id: "editorial-magazine-ux",
    title: "Editorial Magazine UX",
    blurb:
      "Grid, rhythm, and typography system for long-form reading with subtle motion.",
    category: "Web Design",
    tags: ["Editorial", "Typography"],
    image:
      "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?q=80&w=1600&auto=format&fit=crop",
    caseHref: "/work/editorial-magazine-ux",
    liveHref: "#",
    details: {
      client: "Digital Magazine",
      industry: "Publishing",
      timeframe: "7 weeks",
      team: ["Design Lead", "FE"],
      stack: ["TypeScale tokens", "GSAP micro-motion"],
      challenge:
        "Readers struggled with long articles on mobile due to cramped typography and weak hierarchy.",
      solution:
        "Defined a fluid typographic scale, reading rhythm, and unobtrusive motion cues.",
      deliverables: [
        "Fluid type scale & rhythm",
        "Article templates & pull-quotes",
        "Micro-motion guidelines",
      ],
      metrics: {
        completionRate: "+22%",
        avgSessionTime: "+14%",
      },
      outcome:
        "Reading completion rates up 22% and longer average session time.",
    },
  },

  // ===== UI/UX (2) =====
  {
    id: "onboarding-flow-revamp",
    title: "Onboarding Flow Revamp",
    blurb:
      "Reduced time-to-value with guided tasks, clarity copy, and progressive disclosure.",
    category: "UI/UX",
    tags: ["Onboarding", "Product"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
    caseHref: "/work/onboarding-flow-revamp",
    liveHref: "#",
    details: {
      client: "B2B Productivity App",
      industry: "SaaS",
      timeframe: "6 weeks",
      team: ["PM", "UX", "UX Writer", "FE"],
      stack: ["Amplitude", "FullStory", "React", "Zustand"],
      challenge:
        "Users dropped off at the first session due to setup friction and unclear next steps.",
      solution:
        "Designed a guided checklist, in-product tours, and contextual empty states.",
      deliverables: [
        "Activation checklist pattern",
        "Contextual tooltips/tours",
        "Empty-state content system",
        "Success metrics & event taxonomy",
      ],
      metrics: {
        baseline: { activationRate: "41%", ttfvMins: 18 },
        after: { activationRate: "60%", ttfvMins: 11.7 },
      },
      outcome:
        "Activation rate +19% and time-to-first-value shortened by 35%.",
      testimonial:
        "“The guided flow cut confusion dramatically in week one.” - Product Director",
    },
  },

  // ===== Home Page Featured (additional 4 to make 6 total) =====
  {
    id: "mostardi-platt",
    featured: true,
    tagPrimary: "Website",
    tagSecondary: "Branding",
    title: "Mostardi Platt",
    blurb:
      "Website Design & Brand Refresh for an Environmental Consultancy.",
    category: "Branding",
    tags: ["Website", "Refresh"],
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop",
    caseHref: "/work/mostardi-platt",
    liveHref: "#",
    details: {
      client: "Mostardi Platt",
      industry: "Environmental Services",
      timeframe: "14 weeks",
      team: ["Brand Designer", "FE", "PM"],
      stack: ["Next.js", "Tailwind", "Framer Motion"],
      challenge:
        "Site failed to communicate credibility and expertise to enterprise prospects.",
      solution:
        "Modernized brand, clarified services, and restructured IA with case evidence.",
      deliverables: [
        "Rebrand kit (logo lockups, type, color)",
        "Case study pattern & storytelling",
        "Service IA + contact flow",
      ],
      metrics: {
        qualifiedLeads: "2× in 6 months",
        sessionDuration: "+18%",
        contactCR: "+24%",
      },
      outcome:
        "Leads doubled in six months; longer session duration and higher contact conversions.",
    },
  },
  {
    id: "arcelormittal",
    featured: true,
    tagPrimary: "Website",
    title: "ArcelorMittal",
    blurb:
      "Website Design for the world’s leading steel manufacturer.",
    category: "Web Development",
    tags: ["Enterprise", "Global"],
    image:
      "https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?q=80&w=1600&auto=format&fit=crop",
    caseHref: "/work/arcelormittal",
    liveHref: "#",
    details: {
      client: "ArcelorMittal (Division)",
      industry: "Industrial / Manufacturing",
      timeframe: "12 weeks",
      team: ["UX", "FE", "Designer", "Localization"],
      stack: ["Next.js i18n", "Azure Static Web Apps"],
      challenge:
        "Complex offerings and global footprint needed a clear digital narrative.",
      solution:
        "Clear IA, modular content, and localization support with an industrial yet accessible design.",
      deliverables: [
        "Information architecture",
        "Modular page builder blocks",
        "Localization framework",
      ],
      metrics: {
        partnerInquiries: "+35%",
        docFindability: "Search success +22%",
      },
      outcome:
        "+35% qualified inquiries from partners and stakeholders across regions.",
    },
  },
  {
    id: "flipp",
    featured: true,
    tagPrimary: "Website",
    title: "Flipp",
    blurb:
      "Web design and development for a professional services brand.",
    category: "Web Development",
    tags: ["Marketing", "CMS"],
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop",
    caseHref: "/work/flipp",
    liveHref: "#",
    details: {
      client: "Flipp",
      industry: "Professional Services",
      timeframe: "9 weeks",
      team: ["PM", "Designer", "FE"],
      stack: ["Next.js", "Headless CMS", "Vercel"],
      challenge:
        "Needed a site that communicated expertise while remaining approachable.",
      solution:
        "Performance-first build with CMS, structured case studies, and trust signals.",
      deliverables: [
        "Case study template & taxonomy",
        "Performance budget & CI checks",
        "CMS schema & editor guide",
      ],
      metrics: {
        bounceRate: "-50%",
        seoVisibility: "+17% impressions (90d)",
        brandPerception: "Qualitative lift in stakeholder surveys",
      },
      outcome:
        "Bounce rate halved; improved SEO visibility and stronger brand perception.",
    },
  },
  {
    id: "2992-sheppard",
    featured: true,
    tagSecondary: "Branding",
    title: "2992 Sheppard",
    blurb:
      "Brand identity for a premium real estate development.",
    category: "Branding",
    tags: ["Identity", "Real Estate"],
    image:
      "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1600&auto=format&fit=crop",
    caseHref: "/work/2992-sheppard",
    liveHref: "#",
    details: {
      client: "2992 Sheppard",
      industry: "Real Estate",
      timeframe: "6 weeks",
      team: ["Brand Designer", "3D/Render", "Copy"],
      stack: ["Figma", "Cinema 4D", "Adobe CC"],
      challenge:
        "Project struggled to stand out in a crowded market with look-alike brands.",
      solution:
        "Created a refined identity system, marketing collateral, and on-site signage pack.",
      deliverables: [
        "Identity system (primary/secondary marks)",
        "Premium brochure & signage kit",
        "Landing page concept",
      ],
      metrics: {
        salesInquiries: "+60% within 90d",
        adCTR: "+21% on premium placements",
      },
      outcome:
        "Sales inquiries +60% post-launch; campaign hit near sell-out within timeline.",
    },
  },
  {
    id: "brandvision",
    featured: true,
    tagSecondary: "Branding",
    title: "Webify Tech",
    blurb:
      "Brand identity and campaign system for a creative agency.",
    category: "Branding",
    tags: ["Campaign", "Identity"],
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1600&auto=format&fit=crop",
    caseHref: "/work/brandvision",
    liveHref: "#",
    details: {
      client: "Webify Tech",
      industry: "Creative / Technology",
      timeframe: "8 weeks",
      team: ["Creative Director", "Brand Designer", "FE"],
      stack: ["Figma", "Tailwind", "Framer Motion", "Spline (hero 3D)"],
      challenge:
        "Needed a bold identity and site that demonstrates innovation and trust.",
      solution:
        "Built a cohesive brand system and portfolio site showcasing outcomes and awards.",
      deliverables: [
        "Logo suite, tokens, motion language",
        "Animated hero & case gallery",
        "Awards/press library & CMS",
      ],
      metrics: {
        inbound: "+44% qualified inbound (60d)",
        avgLeadScore: "+18 points",
      },
      outcome:
        "Multiple award recognitions and increased inbound inquiries.",
      testimonial:
        "“The brand finally matches how we work - confident, fast, and polished.” - Founder",
    },
  },
];

export default projects;
