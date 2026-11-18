export interface Project {
  id: string;
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  fullDescription: string;
  category: string;
  categoryGroup: "Website Development" | "AI Agents" | "AI Chatbots" | "Software & SaaS" | "E-Commerce";
  featured?: boolean;
  year: string;
  stack: string[];
  role: string;
  client: string;
  duration: string;
  problem: string;
  solution: string;
  buildDetails: string;
  results: string[];
  keyFeatures: string[];
  image: string;
  visualIdentity: {
    accentColor: string;
    badgeBg: string;
    bgPattern: string;
    deviceType: 'screenshot' | 'dashboard' | 'ecommerce' | 'collaboration' | 'finance' | 'creative';
  };
  demoUrl: string;
  githubUrl: string;
}

export const CATEGORIES = [
  "All",
  "Website Development",
  "AI Agents",
  "AI Chatbots",
  "Software & SaaS",
  "E-Commerce",
] as const;

export type ProjectCategory = (typeof CATEGORIES)[number];

export const PROJECTS: Project[] = [
  /* ── 01. ERHA TECHNOLOGIES (Featured 1) ────────────────────────── */
  {
    id: "project-01",
    slug: "erha-technologies",
    number: "01",
    title: "ERHA TECHNOLOGIES",
    subtitle: "AI & Software Solutions Platform",
    shortDescription: "Enterprise AI agents, intelligent chatbots, automated pipelines, and custom software engineered to scale business growth.",
    fullDescription: "Erha Technologies is an advanced software engineering and AI agency platform. It delivers bespoke AI agent workflows, automated business infrastructure, intelligent conversational chatbots, and high-performance modern web platforms crafted with an ultra-sleek dark holographic aesthetic.",
    category: "AI & ENTERPRISE SOFTWARE",
    categoryGroup: "AI Agents",
    featured: true,
    year: "2024",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "AI Agents", "Python", "Node.js"],
    role: "Lead Full-Stack Developer",
    client: "Erha Technologies",
    duration: "3 Months",
    problem: "The client needed an authoritative, high-converting digital platform capable of articulating sophisticated AI agent and custom software capabilities while preserving lightning-fast load times and cinematic dark-mode interactions.",
    solution: "Engineered a high-performance Next.js web application utilizing Tailwind CSS and interactive geometric visual elements, paired with automated consultation funnels and responsive enterprise project showcases.",
    buildDetails: "Constructed modular section architecture, optimized SVG geometries and neon glow aesthetics, engineered instant consultation lead-capture pipelines, and deployed across edge CDN nodes.",
    results: [
      "+220% increase in qualified enterprise inbound consultation inquiries.",
      "99/100 Google Lighthouse performance score on desktop.",
      "Sub-400ms initial page load across global edge network."
    ],
    keyFeatures: [
      "Interactive 3D geometry and particle visual hero showcase",
      "Automated consultation booking & inquiry qualification pipeline",
      "Dynamic service catalog for AI agents, chatbots, and enterprise software",
      "Fully responsive fluid typography and dark holographic theme"
    ],
    image: "/images/projects/erha-technologies.jpg",
    visualIdentity: {
      accentColor: "#00E5FF",
      badgeBg: "#0A2533",
      bgPattern: "from-cyan-900/20 to-neutral-900",
      deviceType: "screenshot",
    },
    demoUrl: "https://erhatechnologies.com/",
    githubUrl: "https://github.com/zeeshan99996",
  },

  /* ── 02. PUBLICORE (Featured 2) ────────────────────────────────── */
  {
    id: "project-02",
    slug: "publicore-academic-research",
    number: "02",
    title: "PUBLICORE",
    subtitle: "AI-Native Academic Research & Publishing Ecosystem",
    shortDescription: "An AI-native academic publishing platform empowering scientific researchers to submit, double-blind review, and discover peer-reviewed knowledge.",
    fullDescription: "Publicore is an enterprise academic research ecosystem built for accelerated scientific discovery. It features integrated author and reviewer portals, automated manuscript indexing, 148,000+ open-access articles database, and fast 21-day turnaround workflows.",
    category: "SOFTWARE & ACADEMIC ECOSYSTEM",
    categoryGroup: "Software & SaaS",
    featured: true,
    year: "2024",
    stack: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
    role: "Senior Full-Stack Engineer",
    client: "Publicore / Alp Solar",
    duration: "4 Months",
    problem: "Academic publishing often suffers from disconnected author-reviewer portals, sluggish manuscript submission pipelines, and clunky interfaces that hamper collaborative scientific progress.",
    solution: "Architected a unified digital publishing platform featuring specialized multi-portal routing (Author, Reviewer, Editor), real-time manuscript status tracking, and high-speed semantic search across peer-reviewed repositories.",
    buildDetails: "Built role-based authentication and portal switching, structured PostgreSQL database with indexed full-text paper search, integrated COPE double-blind review pipelines, and built responsive manuscript previewers.",
    results: [
      "148,000+ scientific publications indexed and searchable in real time.",
      "Accelerated average manuscript turnaround down to 21 days.",
      "100% Open Access compliance with COPE double-blind review standards."
    ],
    keyFeatures: [
      "Multi-role portal architecture with specialized dashboards (Author, Editor, Reviewer)",
      "Instant manuscript submission flow with PDF extraction and metadata parsing",
      "Global research community discussion forums and citation trackers",
      "Dynamic dark/light theme optimization with responsive academic tables"
    ],
    image: "/images/projects/alp-solar.jpg",
    visualIdentity: {
      accentColor: "#00D2FF",
      badgeBg: "#0A2B3D",
      bgPattern: "from-sky-900/20 to-neutral-900",
      deviceType: "screenshot",
    },
    demoUrl: "https://www.alpsolarsp.com/",
    githubUrl: "https://github.com/zeeshan99996",
  },

  /* ── 03. ZERONE EYEWEAR (Featured 3) ───────────────────────────── */
  {
    id: "project-03",
    slug: "zerone-luxury-eyewear",
    number: "03",
    title: "ZERONE EYEWEAR",
    subtitle: "Luxury Eyewear & E-Commerce Storefront",
    shortDescription: "A high-fashion luxury sunglasses storefront crafted with 316L stainless steel branding, dynamic collection filtering, and seamless checkout.",
    fullDescription: "Zerone is a modern direct-to-consumer luxury eyewear e-commerce application. It delivers immersive editorial product catalogs, instant category filtering, real-time cart state management, and optimized mobile-first checkout flows.",
    category: "HEADLESS E-COMMERCE",
    categoryGroup: "E-Commerce",
    featured: true,
    year: "2024",
    stack: ["Next.js", "Tailwind CSS", "Framer Motion", "Stripe", "PostgreSQL", "Zustand"],
    role: "Full-Stack E-Commerce Developer",
    client: "Zerone Eyewear",
    duration: "2.5 Months",
    problem: "High-end fashion retail requires flawless visual presentation, rapid photo gallery rendering, and zero layout shift, as traditional platforms suffered from slow mobile collection browsing and cart abandonment.",
    solution: "Constructed a custom headless Next.js storefront with optimized image pipelines, optimistic cart updates via Zustand, and smooth micro-animations that elevate the premium brand feel.",
    buildDetails: "Built high-speed product catalog filters, integrated slide-out shopping drawer with live order totals, connected WhatsApp checkout support, and configured automated dispatch calculation logic.",
    results: [
      "+38% increase in mobile checkout completion rate.",
      "0.6s average collection page transition with zero flash.",
      "Successfully handled high-volume seasonal flash drops without downtime."
    ],
    keyFeatures: [
      "High-fidelity product carousel with interactive lens & frame selectors",
      "Optimistic sliding cart drawer with instant quantity modification",
      "Nationwide fast dispatch tracker & free delivery progress bar",
      "Integrated WhatsApp quick-inquiry and one-click order confirmation"
    ],
    image: "/images/projects/zerone.jpg",
    visualIdentity: {
      accentColor: "#CCFF00",
      badgeBg: "#1E2816",
      bgPattern: "from-lime-900/20 to-neutral-900",
      deviceType: "screenshot",
    },
    demoUrl: "https://zeeron.vercel.app/",
    githubUrl: "https://github.com/zeeshan99996",
  },

  /* ── 04. ABU ARISH TOW SERVICES (Featured 4) ───────────────────── */
  {
    id: "project-04",
    slug: "abu-arish-tow-services",
    number: "04",
    title: "ABU ARISH TOW SERVICES",
    subtitle: "24/7 Vehicle Recovery & Logistics Platform (سطحة أبو عريش)",
    shortDescription: "A 24/7 bilingual on-demand vehicle emergency recovery and car towing platform operating across the Jazan region of Saudi Arabia.",
    fullDescription: "Abu Arish Towing Services (سطحة أبو عريش) is a high-availability roadside emergency dispatch platform. Engineered for stranded motorists in need of immediate breakdown recovery, flatbed towing, and accident transport with guaranteed 15-minute response times.",
    category: "LOGISTICS & WEB PLATFORM",
    categoryGroup: "Website Development",
    featured: true,
    year: "2024",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Google Maps API", "Bilingual i18n"],
    role: "Full-Stack Web Developer",
    client: "Abu Arish Towing Services",
    duration: "1.5 Months",
    problem: "Motorists dealing with highway emergencies need immediate, frictionless phone/WhatsApp dispatch with zero confusing navigation, especially across Arabic and English speakers in desert and highway zones.",
    solution: "Engineered an ultra-fast, mobile-first progressive web platform featuring prominent one-tap direct calling, one-click WhatsApp live GPS location sharing, RTL Arabic layout support, and local SEO optimization.",
    buildDetails: "Structured bilingual localized routing, implemented one-touch phone dialers and prefilled WhatsApp SOS messages with GPS coordinates, optimized high-contrast emergency banners, and tuned Google Local SEO schema.",
    results: [
      "500+ successful vehicle recovery rescues executed.",
      "Under 15-minute average fleet dispatch response time across Jazan.",
      "Top-3 Google Local SEO ranking for vehicle towing across the region."
    ],
    keyFeatures: [
      "Instant one-tap emergency call and WhatsApp live GPS sharing triggers",
      "Bilingual Arabic (RTL) and English localized interface toggle",
      "Interactive regional service coverage map across Jazan and neighboring cities",
      "Trust metrics showcasing 24/7 availability and safe flatbed equipment"
    ],
    image: "/images/projects/abu-arish.jpg",
    visualIdentity: {
      accentColor: "#FF7A00",
      badgeBg: "#381E0A",
      bgPattern: "from-amber-900/20 to-neutral-900",
      deviceType: "screenshot",
    },
    demoUrl: "https://www.abuarishtowservices.com/",
    githubUrl: "https://github.com/zeeshan99996",
  },

  /* ── 05. DR. TALHA CLINIC (Featured 5) ─────────────────────────── */
  {
    id: "project-05",
    slug: "dr-talha-clinic",
    number: "05",
    title: "DR. TALHA CLINIC",
    subtitle: "24/7 Healthcare & Maternity Home Portal",
    shortDescription: "An accessible, round-the-clock healthcare and maternity clinic portal serving patients with appointment booking, doctor schedules, and emergency services.",
    fullDescription: "Talha Clinic & Maternity Home is a comprehensive medical web application providing patients with clear, accessible healthcare information, 24/7 emergency hotline connectivity, doctor directories, maternity care details, and pharmacy service guides in Makhdoom Rasheed.",
    category: "HEALTHCARE & MEDICAL WEB",
    categoryGroup: "Website Development",
    featured: true,
    year: "2024",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Lucide React"],
    role: "Full-Stack Developer & UI Designer",
    client: "Talha Clinic & Maternity Home",
    duration: "2 Months",
    problem: "Patients in regional communities struggled with finding reliable clinic timings, emergency contact numbers, and available specialist doctors due to a lack of a clean, trustworthy digital portal.",
    solution: "Designed and built an empathetic, clean medical web portal with instant emergency calling, doctor profiles, comprehensive service cards, and an interactive patient inquiry assistant.",
    buildDetails: "Crafted clean clinical design system, integrated 24/7 emergency call buttons with direct teleconsultation triggers, built doctor department cards, and added interactive patient guidance tools.",
    results: [
      "24/7 round-the-clock emergency care access connecting hundreds of local patients.",
      "Zero off-days reliability with 7 comprehensive core medical specialties covered.",
      "98+ mobile usability score with high-contrast accessibility standards."
    ],
    keyFeatures: [
      "One-click 24/7 emergency hotline & consultation dialer",
      "Doctor schedule directory with specialization profiles",
      "Comprehensive department guides: General, Maternity, Lab, Pharmacy & Emergency",
      "Floating patient support assistant widget for instant guidance"
    ],
    image: "/images/projects/talha-clinic.jpg",
    visualIdentity: {
      accentColor: "#2563EB",
      badgeBg: "#0C2340",
      bgPattern: "from-blue-900/20 to-neutral-900",
      deviceType: "screenshot",
    },
    demoUrl: "https://www.drtalhaclinic.com/",
    githubUrl: "https://github.com/zeeshan99996",
  },

  /* ── 06. AUTONOMOUS AI AGENT ORCHESTRATOR ──────────────────────── */
  {
    id: "project-06",
    slug: "autonomous-ai-agent-orchestrator",
    number: "06",
    title: "AUTONOMOUS AI WORKFLOW AGENT",
    subtitle: "Multi-Agent System for Enterprise Automation",
    shortDescription: "Self-directing autonomous AI agent that interprets high-level instructions, calls external APIs, and generates verified code & marketing assets.",
    fullDescription: "An intelligent autonomous multi-agent orchestration architecture engineered with Python, LangGraph, FastAPI, and Next.js. Equipped with tool-use decision trees, vector memory retention, and automated validation gates.",
    category: "AI AGENTS",
    categoryGroup: "AI Agents",
    year: "2024",
    stack: ["Python", "LangGraph", "FastAPI", "Next.js", "Pinecone", "Docker"],
    role: "AI Systems Architect",
    client: "Nexus AI Lab",
    duration: "3.5 Months",
    problem: "Manual orchestration of multi-step business research and code synthesis took hours per team member with high inconsistency.",
    solution: "Architected a multi-agent hierarchy with Planner, Executor, and Critic agents interacting over WebSockets with real-time UI streaming.",
    buildDetails: "Implemented tool-calling frameworks, persistent vector store sessions via Pinecone, and built a sleek dark control room dashboard.",
    results: [
      "Automated 80% of repetitive research synthesis pipelines.",
      "Sub-2s multi-agent decision convergence time.",
      "Zero-hallucination guardrails via secondary Critic agent verification."
    ],
    keyFeatures: [
      "Dynamic tool-calling graph with live execution visualization",
      "Long-term vector memory retrieval with Pinecone and OpenAI embeddings",
      "Human-in-the-loop approval triggers before irreversible API actions",
      "Live terminal logs and streaming markdown outputs"
    ],
    image: "/images/projects/erha-technologies.jpg",
    visualIdentity: {
      accentColor: "#CCFF00",
      badgeBg: "#1F291E",
      bgPattern: "from-lime-900/20 to-neutral-900",
      deviceType: "screenshot",
    },
    demoUrl: "https://erhatechnologies.com/",
    githubUrl: "https://github.com/zeeshan99996",
  },

  /* ── 07. CONVERSA RAG AI CHATBOT ───────────────────────────────── */
  {
    id: "project-07",
    slug: "conversa-rag-ai-chatbot",
    number: "07",
    title: "CONVERSA OMNI-CHANNEL CHATBOT",
    subtitle: "RAG-Powered Customer Support & Sales Conversational Agent",
    shortDescription: "An intelligent conversational chatbot with vector document retrieval, 24/7 instant client support, and automated CRM lead capture.",
    fullDescription: "Conversa is an enterprise-grade multi-channel conversational AI chatbot that ingests custom PDFs, documentation, and product catalogs to provide instant, verified answers across websites and WhatsApp.",
    category: "AI CHATBOTS",
    categoryGroup: "AI Chatbots",
    year: "2024",
    stack: ["Next.js", "TypeScript", "LangChain", "OpenAI API", "PostgreSQL", "Tailwind CSS"],
    role: "Full-Stack AI Engineer",
    client: "Conversa Technologies",
    duration: "2 Months",
    problem: "High client inquiry volume resulted in delayed customer responses and lost sales opportunities during non-business hours.",
    solution: "Engineered a low-latency RAG chatbot embedded into client portals with real-time streaming tokens and semantic vector lookups.",
    buildDetails: "Built chunking and embedding pipelines for documents, customized dark/light chat widget with sound effects and feedback ratings.",
    results: [
      "75% of incoming support tickets resolved instantly without human intervention.",
      "Average response latency under 320ms for full-sentence answers.",
      "+45% boost in qualified after-hours sales lead conversions."
    ],
    keyFeatures: [
      "RAG document search with citation highlighting and sources preview",
      "One-click embeddable script tag with zero CSS conflict isolation",
      "Live handover to human agents when conversation reaches escalation criteria",
      "Analytics dashboard tracking top user questions, sentiment, and satisfaction"
    ],
    image: "/images/projects/erha-technologies.jpg",
    visualIdentity: {
      accentColor: "#38BDF8",
      badgeBg: "#0F2B3C",
      bgPattern: "from-sky-900/20 to-neutral-900",
      deviceType: "screenshot",
    },
    demoUrl: "https://erhatechnologies.com/",
    githubUrl: "https://github.com/zeeshan99996",
  },

  /* ── 08. CLOUD PULSE SAAS & CRM ────────────────────────────────── */
  {
    id: "project-08",
    slug: "cloud-pulse-saas-platform",
    number: "08",
    title: "CLOUD PULSE SAAS DASHBOARD",
    subtitle: "High-Frequency Analytics & Multi-Tenant Management",
    shortDescription: "A full-stack multi-tenant SaaS application complete with subscription billing, analytics visualizers, and team permission controls.",
    fullDescription: "Cloud Pulse is an enterprise cloud telemetry and team collaboration platform designed for distributed engineering and marketing organizations to track system health, revenue trends, and operational metrics.",
    category: "SOFTWARE & SAAS",
    categoryGroup: "Software & SaaS",
    year: "2024",
    stack: ["Next.js", "Node.js", "PostgreSQL", "Prisma", "Stripe", "Recharts"],
    role: "Lead Full-Stack Developer",
    client: "Pulse Cloud Corp",
    duration: "4 Months",
    problem: "Existing dashboard tools were fragmented, slow to update real-time streams, and lacked granular workspace permissions.",
    solution: "Developed an event-driven serverless architecture on Next.js paired with WebSocket telemetry updates and Stripe automated tier billing.",
    buildDetails: "Built custom multi-tenant schema in PostgreSQL, configured JWT & OAuth authentication, and designed high-density dark mode charts.",
    results: [
      "Scaled to 15,000+ daily active dashboards with zero lag.",
      "99.98% platform availability across worldwide regional clusters.",
      "SOC2-compliant audit logging and automated encryption."
    ],
    keyFeatures: [
      "Real-time chart streaming with customizable dashboard widget grids",
      "Stripe customer portal integration for automated subscription management",
      "Granular role-based access control (Admin, Member, Viewer)",
      "Automated CSV/PDF analytical reporting pipelines"
    ],
    image: "/images/projects/alp-solar.jpg",
    visualIdentity: {
      accentColor: "#A855F7",
      badgeBg: "#2A133D",
      bgPattern: "from-purple-900/20 to-neutral-900",
      deviceType: "screenshot",
    },
    demoUrl: "https://www.alpsolarsp.com/",
    githubUrl: "https://github.com/zeeshan99996",
  },

  /* ── 09. VOX AI VOICE & CHAT ASSISTANT ─────────────────────────── */
  {
    id: "project-09",
    slug: "vox-ai-voice-assistant",
    number: "09",
    title: "VOX MULTI-MODAL AI BOT",
    subtitle: "Real-Time Voice & Text Conversational Interface",
    shortDescription: "A next-generation AI assistant that listens, analyzes, and speaks with human-like vocal inflection and sub-second latency.",
    fullDescription: "Vox is a multi-modal conversational assistant supporting real-time voice input/output streaming, automated meeting transcription, and contextual query execution.",
    category: "AI CHATBOTS",
    categoryGroup: "AI Chatbots",
    year: "2024",
    stack: ["Next.js", "WebRTC", "Whisper", "ElevenLabs API", "Tailwind CSS"],
    role: "Voice AI Developer",
    client: "Vox Cognitive Systems",
    duration: "2 Months",
    problem: "Standard text-only chatbots were insufficient for hands-free industrial and customer service environments requiring natural voice conversation.",
    solution: "Integrated WebRTC audio streaming with low-latency Whisper speech-to-text and ElevenLabs neural voice synthesis pipelines.",
    buildDetails: "Engineered client-side audio visualizer waveforms, optimized buffer queues to eliminate audio stutter, and built customizable bot personas.",
    results: [
      "Achieved sub-500ms voice-to-voice end-to-end response latency.",
      "Supports 12+ international languages with natural accent synthesis.",
      "Reduced call center initial wait times by 65%."
    ],
    keyFeatures: [
      "Bidirectional voice audio streaming over low-latency WebSockets",
      "Interactive audio reactive visualizer wave UI",
      "Context-aware fallback from voice to real-time text chat",
      "Customizable voice personas with varied pacing and tone"
    ],
    image: "/images/projects/erha-technologies.jpg",
    visualIdentity: {
      accentColor: "#F43F5E",
      badgeBg: "#3B111A",
      bgPattern: "from-rose-900/20 to-neutral-900",
      deviceType: "screenshot",
    },
    demoUrl: "https://erhatechnologies.com/",
    githubUrl: "https://github.com/zeeshan99996",
  },

  /* ── 10. LUXE VELOCE E-COMMERCE ────────────────────────────────── */
  {
    id: "project-10",
    slug: "luxe-veloce-ecommerce",
    number: "10",
    title: "LUXE VELOCE APPAREL",
    subtitle: "High-Speed Headless Fashion Storefront",
    shortDescription: "A minimalist luxury apparel storefront engineered for instant collection filtering, high-converting product pages, and sub-second checkouts.",
    fullDescription: "Luxe Veloce is a digital boutique e-commerce destination with animated product lookbooks, size guide calculators, and instant cart updates.",
    category: "E-COMMERCE",
    categoryGroup: "E-Commerce",
    year: "2024",
    stack: ["Next.js", "Tailwind CSS", "Stripe", "Prisma", "PostgreSQL"],
    role: "Lead E-Commerce Architect",
    client: "Veloce Atelier",
    duration: "2.5 Months",
    problem: "Traditional shop platforms suffered from high cart abandonment on mobile due to slow page loads and cluttered multi-step checkout.",
    solution: "Engineered a headless Next.js frontend with Apple Pay / Google Pay one-tap checkout and pre-cached product detail sheets.",
    buildDetails: "Built sliding side-drawer cart, integrated dynamic currency converters, and added high-res zoomable product galleries.",
    results: [
      "+42% increase in mobile conversion rates within 30 days.",
      "Average mobile page load reduced to 380ms.",
      "Zero checkout drops during high-volume seasonal sales."
    ],
    keyFeatures: [
      "Instant multi-attribute filter engine (Color, Size, Material, Price)",
      "One-click Stripe & mobile wallet accelerated checkout flow",
      "Animated editorial lookbook with clickable product hotspots",
      "Automated stock level alerts and WhatsApp customer confirmation"
    ],
    image: "/images/projects/zerone.jpg",
    visualIdentity: {
      accentColor: "#CCFF00",
      badgeBg: "#1F291E",
      bgPattern: "from-lime-900/20 to-neutral-900",
      deviceType: "screenshot",
    },
    demoUrl: "https://zeeron.vercel.app/",
    githubUrl: "https://github.com/zeeshan99996",
  },

  /* ── 11. STRATA DIGITAL AGENCY PORTFOLIO ───────────────────────── */
  {
    id: "project-11",
    slug: "strata-digital-agency",
    number: "11",
    title: "STRATA CREATIVE STUDIO",
    subtitle: "Award-Winning Editorial Agency Experience",
    shortDescription: "A dark editorial digital agency website featuring GSAP scroll-triggered animations, interactive WebGL cards, and custom typography.",
    fullDescription: "Strata Studio is an immersive digital agency website designed to capture high-value design and development contracts worldwide through bespoke web design.",
    category: "WEBSITE DEVELOPMENT",
    categoryGroup: "Website Development",
    year: "2023",
    stack: ["Next.js", "GSAP", "ScrollTrigger", "Tailwind CSS", "Lenis"],
    role: "Creative Frontend Developer",
    client: "Strata Creative Lab",
    duration: "2 Months",
    problem: "The agency needed a show-stopping visual portfolio that stood out from cookie-cutter WordPress themes and communicated technical mastery.",
    solution: "Constructed a custom Next.js portfolio utilizing GSAP ScrollTrigger physics, magnetic cursor interactions, and high-contrast typography.",
    buildDetails: "Crafted scroll-bound image distortion effects, modular case study transitions, and optimized bundle size for smooth 60fps scrolling.",
    results: [
      "Recognized with Site of the Day award on international design showcase.",
      "Average user session duration increased by +180%.",
      "100/100 best practices score on Google Lighthouse."
    ],
    keyFeatures: [
      "Cinematic 60fps smooth scroll choreography with Lenis & GSAP",
      "Interactive magnetic buttons and custom responsive cursor",
      "Dynamic project filtering with zero layout shifts",
      "Dark graphite aesthetic with neon lime typographic accents"
    ],
    image: "/images/projects/erha-technologies.jpg",
    visualIdentity: {
      accentColor: "#F97316",
      badgeBg: "#3A1A07",
      bgPattern: "from-orange-900/20 to-neutral-900",
      deviceType: "screenshot",
    },
    demoUrl: "https://erhatechnologies.com/",
    githubUrl: "https://github.com/zeeshan99996",
  },

  /* ── 12. COGNITIVE INTEL AI AGENT ──────────────────────────────── */
  {
    id: "project-12",
    slug: "cognitive-intel-ai-agent",
    number: "12",
    title: "COGNITIVE INTEL AGENT",
    subtitle: "Autonomous Market Intelligence & Scraping Agent",
    shortDescription: "An autonomous AI agent monitoring web sources, synthesizing industry developments, and generating structured market intelligence reports.",
    fullDescription: "Cognitive Intel is a background-running autonomous intelligence agent built with Python, Playwright, and Next.js. It continuously scans competitive landscapes, summarizes key regulatory and technology changes, and dispatches automated digests.",
    category: "AI AGENTS",
    categoryGroup: "AI Agents",
    year: "2024",
    stack: ["Python", "Playwright", "FastAPI", "OpenAI", "Next.js", "PostgreSQL"],
    role: "Lead AI Engineer",
    client: "Intel Horizon",
    duration: "3 Months",
    problem: "Corporate intelligence teams spent 20+ hours each week manually reading and collating sector news, competitor filings, and tech updates.",
    solution: "Engineered an autonomous scraping and summarization agent with cron scheduling, anti-bot handling, and structured JSON telemetry outputs.",
    buildDetails: "Configured distributed scraper nodes, vector semantic clustering of news topics, and built an interactive Next.js review portal.",
    results: [
      "Over 500,000+ data points ingested and summarized autonomously.",
      "Saved 85% of analyst research time while increasing source coverage.",
      "Delivered real-time alerting on critical competitor product shifts."
    ],
    keyFeatures: [
      "Automated scheduled cron pipelines with intelligent fallback retries",
      "Vector clustering to group related events across different news sources",
      "Clean executive summary dashboard with one-click PDF export",
      "Direct integration with enterprise Slack and email notification webhooks"
    ],
    image: "/images/projects/alp-solar.jpg",
    visualIdentity: {
      accentColor: "#00E5FF",
      badgeBg: "#0A2533",
      bgPattern: "from-cyan-900/20 to-neutral-900",
      deviceType: "screenshot",
    },
    demoUrl: "https://www.alpsolarsp.com/",
    githubUrl: "https://github.com/zeeshan99996",
  }
];
