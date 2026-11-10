// Centralized data file for Shafi's Portfolio
// Easy to update, customize, and extend

export const personalInfo = {
  name: "Shafi",
  shortName: "Shafi",
  role: "Frontend Developer & UI/UX Designer",
  college: "Thejus Engineering College",
  collegeLocation: "Thrissur, Kerala, India",
  degree: "B.Tech in Computer Science & Engineering (AI)",
  currentYear: "1st-Year Undergraduate",
  location: "Kerala, India",
  email: "shafi.dev.craft@gmail.com",
  phone: "+91 98765 43210",
  availabilityStatus: "Available for Freelance Projects",
  isAvailable: true,
  collaboratorsCount: "+12",
  profileImage: "/profile.jpg",
  resumeUrl: "#resume", // Or link to public/resume-shafi.pdf
  bio: "Passionate 1st-year CSE (AI) student at Thejus Engineering College, Kerala, specializing in building high-performance, creative web experiences. I bridge the sweet spot between engineering precision and refined aesthetic design.",
  heroHeadline: "CREATE",
  heroAlternates: ["CREATE", "CRAFT", "INVENT", "DESIGN"],
  heroTagline: "Designs that inspire. Ideas that connect.",
  socials: {
    github: "https://github.com/shafi-dev",
    linkedin: "https://linkedin.com/in/shafi-creative",
    instagram: "https://instagram.com/shafi.ui",
    twitter: "https://twitter.com/shafi_dev",
    email: "mailto:shafi.dev.craft@gmail.com"
  }
};

export const navLinks = [
  { name: "Work", href: "#work" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Journey", href: "#journey" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export const heroClients = [
  { name: "Alex Rivers", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=80" },
  { name: "David Kim", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80" },
  { name: "Sophia Chen", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&q=80" },
  { name: "Liam Patel", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80" }
];

export const stats = [
  { value: 18, suffix: "+", label: "Projects Completed" },
  { value: 12, suffix: "+", label: "Technologies Mastered" },
  { value: 4, suffix: "+", label: "Hackathons & Awards" },
  { value: 99, suffix: "%", label: "Clean Code & Performance" },
];

export const skillsMarquee = [
  "React.js",
  "Tailwind CSS",
  "GSAP Animations",
  "Framer Motion",
  "Lenis Smooth Scroll",
  "UI/UX Prototyping",
  "TypeScript",
  "Next.js",
  "Figma Design",
  "Interactive 3D",
  "Responsive Design",
  "Web Performance",
  "Thejus Engineering College",
  "Creative Coding",
  "Vite & Modern Tooling"
];

export const projects = [
  {
    id: 1,
    title: "Aura Creative Agency",
    category: "Creative Agency & Motion",
    description: "Award-inspired digital studio experience featuring split-hero transitions, inertial Lenis scrolling, and custom WebGL particle glows.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    tags: ["React", "GSAP", "Tailwind CSS", "Lenis", "Framer Motion"],
    demoUrl: "https://aura-studio-demo.vercel.app",
    githubUrl: "https://github.com/shafi-dev/aura-creative-agency",
    featured: true
  },
  {
    id: 2,
    title: "Thejus Campus Nexus",
    category: "Fullstack Platform",
    description: "An integrated academic hub built for students of Thejus Engineering College to collaborate on projects, share notes, and organize technical events.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
    tags: ["React", "Node.js", "Tailwind CSS", "REST API", "Framer Motion"],
    demoUrl: "https://thejus-nexus.vercel.app",
    githubUrl: "https://github.com/shafi-dev/thejus-campus-nexus",
    featured: true
  },
  {
    id: 3,
    title: "Pulse SaaS Analytics",
    category: "Web Application & Data",
    description: "Next-generation analytics dashboard with live interactive data graphs, dark mode UI, and instant metric drill-downs.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    tags: ["React", "TypeScript", "Tailwind CSS", "Lucide", "Charts"],
    demoUrl: "https://pulse-saas-dashboard.vercel.app",
    githubUrl: "https://github.com/shafi-dev/pulse-saas-analytics",
    featured: true
  },
  {
    id: 4,
    title: "Veloce Crypto & DeFi Wallet",
    category: "Fintech & Web3 UI",
    description: "Sleek, biometric-ready cryptocurrency wallet interface with 3D glassmorphic card tilts and real-time gas tracking.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1200&q=80",
    tags: ["React", "Tailwind CSS", "Framer Motion", "Ethers.js UI"],
    demoUrl: "https://veloce-wallet-ui.vercel.app",
    githubUrl: "https://github.com/shafi-dev/veloce-crypto-wallet",
    featured: true
  },
  {
    id: 5,
    title: "Echo AI Voice Transcription",
    category: "AI & Productivity",
    description: "Intelligent audio recorder and multilingual speech summarizer with interactive waveform visualizations and export features.",
    image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&w=1200&q=80",
    tags: ["React", "Web Audio API", "Tailwind CSS", "AI Studio"],
    demoUrl: "https://echo-ai-audio.vercel.app",
    githubUrl: "https://github.com/shafi-dev/echo-ai-transcriber",
    featured: false
  },
  {
    id: 6,
    title: "Kinetic Brand Identity & 3D Cards",
    category: "UI/UX & Experimental",
    description: "Interactive brand guidelines platform featuring gyroscope card rotations, variable font animations, and responsive color palettes.",
    image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=1200&q=80",
    tags: ["React", "Tailwind CSS", "3D Tilt", "GSAP"],
    demoUrl: "https://kinetic-brand-system.vercel.app",
    githubUrl: "https://github.com/shafi-dev/kinetic-brand-identity",
    featured: false
  }
];

export const services = [
  {
    id: "01",
    title: "Frontend Development",
    subtitle: "Modern, Scalable Web Applications",
    description: "Crafting bulletproof web applications using React, modern JavaScript/TypeScript, and Vite. Every line of code is structured for reusability, maintainability, and sub-second load times.",
    deliverables: ["Single Page Applications (SPAs)", "Clean Component Architecture", "API Integration & State Management", "95+ Lighthouse Score Optimization"],
    icon: "Code2"
  },
  {
    id: "02",
    title: "UI/UX & Creative Prototyping",
    subtitle: "High-Fidelity Wireframes to Code",
    description: "Translating brand concepts into intuitive, modern interfaces. Combining user psychology with sleek aesthetics: dark/light modes, glassmorphism, and bold editorial typography.",
    deliverables: ["Interactive Prototypes", "Figma Design Systems", "Typography & Color Tokens", "User Journey Flow Mapping"],
    icon: "Palette"
  },
  {
    id: "03",
    title: "Animation & Creative Interactions",
    subtitle: "GSAP, Framer Motion & Lenis",
    description: "Giving static layouts personality and flow through organic momentum scrolling, ScrollTrigger pinned sequences, 3D card tilt physics, and staggered reveals.",
    deliverables: ["Smooth Inertial Lenis Scrolling", "Scroll-Triggered Sequences", "3D Hover Effects & Custom Cursors", "Accessible Reduced-Motion Modes"],
    icon: "Sparkles"
  },
  {
    id: "04",
    title: "Responsive & Performance Engineering",
    subtitle: "Seamless Across Every Screen",
    description: "Ensuring flawless user experiences from small mobile screens to 4K displays. Mobile-first responsive grids, fluid layouts, accessible semantic markup, and SEO best practices.",
    deliverables: ["Mobile-First Fluid Layouts", "Retina & 4K Ready Graphics", "SEO & Open Graph Meta Setup", "Cross-Browser Compatibility"],
    icon: "Smartphone"
  }
];

export const timeline = [
  {
    year: "2024 — Present",
    title: "B.Tech in Computer Science & Engineering (AI)",
    institution: "Thejus Engineering College, Kerala, India",
    type: "Education",
    description: "Currently in 1st year (CSE - AI). Exploring programming, artificial intelligence fundamentals, and modern web application development. Active participant in technical symposiums and open-source college projects.",
    badge: "Undergraduate"
  },
  {
    year: "2024",
    title: "Lead Frontend Developer — Hackathon Finalist",
    institution: "State-Level Tech Fest & Innovation Challenge",
    type: "Milestone",
    description: "Led a 4-member developer squad to conceptualize, design, and ship a real-time web portal within 36 hours. Recognized for outstanding UI/UX and smooth animation execution.",
    badge: "Achievement"
  },
  {
    year: "2023 — 2024",
    title: "Independent Creative Developer & Freelancer",
    institution: "Global & Local Clients",
    type: "Experience",
    description: "Partnered with startups, student ventures, and boutique agencies to build responsive landing pages, creative portfolios, and SaaS dashboards with modern React tech stacks.",
    badge: "Client Work"
  },
  {
    year: "2021 — 2023",
    title: "Higher Secondary (Computer Science)",
    institution: "Kerala State Board of Higher Secondary Education",
    type: "Education",
    description: "Graduated with distinction. Formed foundational skills in C++, Python, database systems, and logical problem solving.",
    badge: "Graduated"
  }
];

export const testimonials = [
  {
    id: 1,
    quote: "Shafi delivered outstanding work that exceeded our expectations. The split-screen hero and butter-smooth scrolling brought our brand identity to another level.",
    author: "James Carter",
    title: "Co-founder, Studio Aura",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    rating: 5
  },
  {
    id: 2,
    quote: "Shafi is one of the brightest engineering students at Thejus. His passion for modern web technologies and clean frontend architecture truly sets him apart.",
    author: "Prof. K. Narayanan",
    title: "Faculty Advisor, Thejus Engineering College",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
    rating: 5
  },
  {
    id: 3,
    quote: "Shafi has a rare knack for turning tricky problems into elegant solutions. Whenever he hit a wall, he came back with a creative approach I hadn't considered, and his React work always had a thoughtful touch that made the interface feel alive. [Optional: add one specific project or problem he solved.]",
    author: "[Mentor's name]",
    title: "[Mentor's title], [Institution or company]",
    avatar: "[path/to/new-photo.jpg]",
    initials: "[Initials]",
    rating: 5
  },
  {
    id: 4,
    quote: "Fast, communicative, and exceptionally skilled. Shafi's understanding of GSAP and Tailwind CSS is equal to senior agency engineers.",
    author: "Marcus Vance",
    title: "Founder, Horizon Digital Media",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    rating: 5
  }
];

