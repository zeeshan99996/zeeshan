export interface Project {
  id: string;
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  fullDescription: string;
  category: string;
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

export const PROJECTS: Project[] = [
  {
    id: "project-01",
    slug: "erha-technologies",
    number: "01",
    title: "ERHA TECHNOLOGIES",
    subtitle: "AI & Software Solutions Platform",
    shortDescription: "Enterprise AI agents, intelligent chatbots, automated pipelines, and custom software engineered to scale business growth.",
    fullDescription: "Erha Technologies is an advanced software engineering and AI agency platform. It delivers bespoke AI agent workflows, automated business infrastructure, intelligent conversational chatbots, and high-performance modern web platforms crafted with an ultra-sleek dark holographic aesthetic.",
    category: "AI & SOFTWARE SOLUTIONS",
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
  {
    id: "project-02",
    slug: "publicore-academic-research",
    number: "02",
    title: "PUBLICORE",
    subtitle: "AI-Native Academic Research & Publishing Ecosystem",
    shortDescription: "An AI-native academic publishing platform empowering scientific researchers to submit, double-blind review, and discover peer-reviewed knowledge.",
    fullDescription: "Publicore is an enterprise academic research ecosystem built for accelerated scientific discovery. It features integrated author and reviewer portals, automated manuscript indexing, 148,000+ open-access articles database, and fast 21-day turnaround workflows.",
    category: "AI PLATFORM & ACADEMIC ECOSYSTEM",
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
  {
    id: "project-03",
    slug: "zerone-luxury-eyewear",
    number: "03",
    title: "ZERONE EYEWEAR",
    subtitle: "Luxury Eyewear & E-Commerce Storefront",
    shortDescription: "A high-fashion luxury sunglasses storefront crafted with 316L stainless steel branding, dynamic collection filtering, and seamless checkout.",
    fullDescription: "Zerone is a modern direct-to-consumer luxury eyewear e-commerce application. It delivers immersive editorial product catalogs, instant category filtering, real-time cart state management, and optimized mobile-first checkout flows.",
    category: "HEADLESS E-COMMERCE",
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
  {
    id: "project-04",
    slug: "abu-arish-tow-services",
    number: "04",
    title: "ABU ARISH TOW SERVICES",
    subtitle: "24/7 Vehicle Recovery & Logistics Platform (سطحة أبو عريش)",
    shortDescription: "A 24/7 bilingual on-demand vehicle emergency recovery and car towing platform operating across the Jazan region of Saudi Arabia.",
    fullDescription: "Abu Arish Towing Services (سطحة أبو عريش) is a high-availability roadside emergency dispatch platform. Engineered for stranded motorists in need of immediate breakdown recovery, flatbed towing, and accident transport with guaranteed 15-minute response times.",
    category: "SERVICE PLATFORM & LOGISTICS",
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
  {
    id: "project-05",
    slug: "dr-talha-clinic",
    number: "05",
    title: "DR. TALHA CLINIC",
    subtitle: "24/7 Healthcare & Maternity Home Portal",
    shortDescription: "An accessible, round-the-clock healthcare and maternity clinic portal serving patients with appointment booking, doctor schedules, and emergency services.",
    fullDescription: "Talha Clinic & Maternity Home is a comprehensive medical web application providing patients with clear, accessible healthcare information, 24/7 emergency hotline connectivity, doctor directories, maternity care details, and pharmacy service guides in Makhdoom Rasheed.",
    category: "HEALTHCARE & MEDICAL WEB",
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
];
