export interface Project {
  id: string;
  title: string;
  slug: string;
  subtitle: string;
  category: "SaaS" | "E-Commerce" | "Web App" | "AI Platform";
  thumbnail: string;
  heroBanner: string;
  description: string;
  overview: string;
  challenge: string;
  solution: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  metrics: { label: string; value: string }[];
  screenshots: string[];
}

export interface TechItem {
  name: string;
  category: string;
  desc: string;
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  description: string;
  highlights: string[];
}

export interface ProcessStage {
  step: string;
  title: string;
  subtitle: string;
  description: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Zeeshan",
    role: "Full-Stack Developer & Digital Creative",
    bio: "I'm Zeeshan, a full-stack developer crafting high-performance modern websites, web applications, SaaS platforms, and e-commerce stores that combine rock-solid engineering with thoughtful design.",
    avatar: "/images/hero-portrait.jpg",
    email: "contact@zeeshan.dev",
    location: "Global / Remote",
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "mailto:contact@zeeshan.dev"
    }
  },
  stats: [
    { label: "YEARS EXPERIENCE", value: "2", prefix: "", suffix: "+" },
    { label: "COMPLETED PROJECTS", value: "30", prefix: "", suffix: "+" },
    { label: "HAPPY CLIENTS", value: "10", prefix: "", suffix: "+" },
  ],
  services: [
    {
      id: "01",
      title: "FULL-STACK WEB APPS",
      description: "End-to-end web applications built with Next.js, React, Node.js, and PostgreSQL. Architected for speed, security, and effortless scaling.",
      tags: ["Next.js 14", "React", "Node.js", "PostgreSQL"]
    },
    {
      id: "02",
      title: "SAAS PLATFORM DEVELOPMENT",
      description: "Custom multi-tenant SaaS products complete with subscription billing, authentication, role-based controls, and analytical dashboards.",
      tags: ["SaaS Architecture", "Stripe", "Prisma", "TypeScript"]
    },
    {
      id: "03",
      title: "CUSTOM E-COMMERCE STORES",
      description: "High-converting online stores engineered for blazing fast load times, seamless checkout flows, and custom admin workflows.",
      tags: ["Shopify Headless", "Next.js", "Tailwind CSS", "REST API"]
    },
    {
      id: "04",
      title: "UI/UX & FRONTEND CREATIVE",
      description: "Interactive visual interfaces with GSAP animations, Framer Motion transitions, and pixel-perfect responsive designs.",
      tags: ["GSAP", "Framer Motion", "Tailwind CSS", "Responsive UI"]
    }
  ],
  techStack: [
    { name: "NEXT.JS 14", category: "FRONTEND FRAMEWORK", desc: "React framework with App Router, Server Components, SSR, and edge API routes." },
    { name: "REACT 18", category: "UI LIBRARY", desc: "Declarative component-driven frontend architecture with hooks and concurrent rendering." },
    { name: "TYPESCRIPT", category: "LANGUAGE", desc: "Strict static typing across frontend components and backend API route payloads." },
    { name: "NODE.JS", category: "BACKEND RUNTIME", desc: "High-concurrency asynchronous JavaScript runtime for scalable REST and GraphQL microservices." },
    { name: "TAILWIND CSS", category: "STYLING", desc: "Utility-first CSS framework for rapid, responsive, design-system-aligned styling." },
    { name: "POSTGRESQL", category: "DATABASE", desc: "Enterprise SQL database with relational integrity, JSONB support, and ACID guarantees." },
    { name: "PRISMA ORM", category: "DATABASE LAYER", desc: "Type-safe ORM for intuitive database querying, migrations, and schema design." },
    { name: "GSAP", category: "ANIMATION", desc: "High-performance JavaScript animation engine for smooth scroll-bound UI choreography." },
    { name: "FRAMER MOTION", category: "ANIMATION", desc: "Production-ready motion library for fluid React layout transitions and gestures." },
    { name: "DOCKER", category: "DEVOPS", desc: "Containerization platform ensuring identical runtime environments across dev and production." },
    { name: "STRIPE", category: "PAYMENTS", desc: "Secure payment gateway integration for subscription billing and e-commerce checkout flows." },
    { name: "REDIS", category: "CACHING", desc: "In-memory key-value data store for high-speed session caching and rate-limiting." }
  ] as TechItem[],
  experience: [
    {
      period: "2023 — PRESENT",
      role: "SENIOR FULL-STACK DEVELOPER",
      company: "Apex Tech Digital Solutions",
      location: "Remote",
      description: "Leading frontend architecture and full-stack SaaS engineering for high-growth client web applications.",
      highlights: [
        "Architected modular micro-frontends reducing bundle size by 42%",
        "Implemented real-time telemetry analytics using WebSockets and Next.js Server Actions",
        "Mentored junior engineers and instituted TypeScript code quality standards"
      ]
    },
    {
      period: "2021 — 2023",
      role: "FULL-STACK SOFTWARE ENGINEER",
      company: "Nexus Creative Lab",
      location: "Remote / Hybrid",
      description: "Engineered headless e-commerce platforms and interactive web applications for global brands.",
      highlights: [
        "Delivered 12+ headless Shopify stores with Next.js and Tailwind CSS",
        "Optimized Lighthouse performance scores from 64 to 98 across core web vitals",
        "Integrated Stripe subscription billing engines for SaaS clients"
      ]
    },
    {
      period: "2020 — 2021",
      role: "FRONTEND DEVELOPER & UI CREATIVE",
      company: "Vanguard Web Studio",
      location: "On-site",
      description: "Built custom interactive web products with rich GSAP animations and responsive UI components.",
      highlights: [
        "Crafted smooth scroll transitions and micro-interactions using GSAP ScrollTrigger",
        "Converted complex Figma designs into pixel-perfect responsive React layouts"
      ]
    }
  ] as ExperienceItem[],
  process: [
    {
      step: "01",
      title: "DISCOVERY & ARCHITECTURE",
      subtitle: "REQUIREMENTS & SCOPE",
      description: "Deep dive into your product goals, target audience, technical stack, and database architecture plan."
    },
    {
      step: "02",
      title: "UI/UX & PROTOTYPING",
      subtitle: "DESIGN SYSTEM",
      description: "Crafting wireframes, component design systems, dark-mode aesthetics, and interactive motion mockups."
    },
    {
      step: "03",
      title: "FULL-STACK ENGINEERING",
      subtitle: "CLEAN CODE PRODUCTION",
      description: "Building production-ready code with Next.js 14, TypeScript, Tailwind CSS, and secure database APIs."
    },
    {
      step: "04",
      title: "QA & DEPLOYMENT",
      subtitle: "LAUNCH & OPTIMIZATION",
      description: "Rigorous testing, Lighthouse performance tuning, SEO meta optimization, and automated CI/CD deployment."
    }
  ] as ProcessStage[],
  projects: [
    {
      id: "p1",
      title: "ERHA TECHNOLOGIES",
      slug: "erha-technologies",
      subtitle: "AI & Software Solutions Platform",
      category: "AI Platform",
      thumbnail: "/images/projects/erha-technologies.jpg",
      heroBanner: "/images/projects/erha-technologies.jpg",
      description: "Enterprise AI agents, intelligent chatbots, automated pipelines, and custom software engineered to scale business growth.",
      overview: "Erha Technologies is an advanced software engineering and AI agency platform delivering custom AI agent workflows and high-performance modern web platforms.",
      challenge: "Articulating sophisticated AI capabilities with high converting UI and sub-second load times.",
      solution: "Engineered a bespoke web architecture with Next.js App Router, Tailwind CSS, and edge CDN delivery.",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "AI Agents", "Python", "Node.js"],
      liveUrl: "https://erhatechnologies.com/",
      githubUrl: "https://github.com/zeeshan99996",
      metrics: [
        { label: "Inbound Boost", value: "+220%" },
        { label: "Lighthouse Score", value: "99/100" },
        { label: "Edge Latency", value: "<400ms" }
      ],
      screenshots: ["/images/projects/erha-technologies.jpg"]
    },
    {
      id: "p2",
      title: "PUBLICORE",
      slug: "publicore-academic-research",
      subtitle: "AI-Native Academic Research & Publishing Ecosystem",
      category: "AI Platform",
      thumbnail: "/images/projects/alp-solar.jpg",
      heroBanner: "/images/projects/alp-solar.jpg",
      description: "An AI-native academic publishing platform empowering scientific researchers to submit, double-blind review, and discover peer-reviewed knowledge.",
      overview: "Publicore is an enterprise academic research ecosystem built for accelerated scientific discovery with 148,000+ open-access articles.",
      challenge: "Unifying author, reviewer, and editor workflows into an automated double-blind peer review pipeline.",
      solution: "Architected multi-portal routing with real-time manuscript status tracking and semantic search across publications.",
      techStack: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
      liveUrl: "https://www.alpsolarsp.com/",
      githubUrl: "https://github.com/zeeshan99996",
      metrics: [
        { label: "Indexed Papers", value: "148K+" },
        { label: "Turnaround Time", value: "21 Days" },
        { label: "Open Access", value: "100%" }
      ],
      screenshots: ["/images/projects/alp-solar.jpg"]
    },
    {
      id: "p3",
      title: "ZERONE EYEWEAR",
      slug: "zerone-luxury-eyewear",
      subtitle: "Luxury Eyewear & E-Commerce Storefront",
      category: "E-Commerce",
      thumbnail: "/images/projects/zerone.jpg",
      heroBanner: "/images/projects/zerone.jpg",
      description: "A high-fashion luxury sunglasses storefront crafted with 316L stainless steel branding, dynamic collection filtering, and seamless checkout.",
      overview: "Zerone is a modern direct-to-consumer luxury eyewear e-commerce application delivering editorial product catalogs and instant cart updates.",
      challenge: "Rendering high-resolution product imagery and instant filters without layout shifts or mobile lag.",
      solution: "Built a custom headless Next.js storefront with optimized image pipelines and Zustand optimistic state management.",
      techStack: ["Next.js", "Tailwind CSS", "Framer Motion", "Stripe", "PostgreSQL", "Zustand"],
      liveUrl: "https://zeeron.vercel.app/",
      githubUrl: "https://github.com/zeeshan99996",
      metrics: [
        { label: "Mobile Checkout", value: "+38%" },
        { label: "Page Transition", value: "0.6s" },
        { label: "Uptime Reliability", value: "99.9%" }
      ],
      screenshots: ["/images/projects/zerone.jpg"]
    },
    {
      id: "p4",
      title: "ABU ARISH TOW SERVICES",
      slug: "abu-arish-tow-services",
      subtitle: "24/7 Vehicle Recovery & Logistics Platform (سطحة أبو عريش)",
      category: "Web App",
      thumbnail: "/images/projects/abu-arish.jpg",
      heroBanner: "/images/projects/abu-arish.jpg",
      description: "A 24/7 bilingual on-demand vehicle emergency recovery and car towing platform operating across the Jazan region of Saudi Arabia.",
      overview: "Roadside emergency dispatch platform engineered for stranded motorists in need of immediate breakdown recovery and accident transport.",
      challenge: "Enabling friction-free, instantaneous emergency dispatch and WhatsApp live GPS coordination for motorists in distress.",
      solution: "Engineered an ultra-fast mobile-first web app with one-tap calling, bilingual Arabic/English layouts, and local SEO schema.",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Google Maps API", "Bilingual i18n"],
      liveUrl: "https://www.abuarishtowservices.com/",
      githubUrl: "https://github.com/zeeshan99996",
      metrics: [
        { label: "Rescues Executed", value: "500+" },
        { label: "Response Time", value: "<15 Min" },
        { label: "Customer Satisfaction", value: "100%" }
      ],
      screenshots: ["/images/projects/abu-arish.jpg"]
    },
    {
      id: "p5",
      title: "DR. TALHA CLINIC",
      slug: "dr-talha-clinic",
      subtitle: "24/7 Healthcare & Maternity Home Portal",
      category: "Web App",
      thumbnail: "/images/projects/talha-clinic.jpg",
      heroBanner: "/images/projects/talha-clinic.jpg",
      description: "An accessible, round-the-clock healthcare and maternity clinic portal serving patients with appointment booking, doctor schedules, and emergency services.",
      overview: "Comprehensive healthcare portal providing patients with 24/7 emergency hotline access, doctor directories, and department guides in Makhdoom Rasheed.",
      challenge: "Connecting local and suburban patients with critical medical timings, specialist doctors, and emergency numbers reliably.",
      solution: "Designed and built an empathetic, clean medical web portal with instant emergency calling and accessible department cards.",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Lucide React"],
      liveUrl: "https://www.drtalhaclinic.com/",
      githubUrl: "https://github.com/zeeshan99996",
      metrics: [
        { label: "Availability", value: "24/7" },
        { label: "Core Specialties", value: "7 Services" },
        { label: "Days Off", value: "0 Days" }
      ],
      screenshots: ["/images/projects/talha-clinic.jpg"]
    }
  ] as Project[]
};
