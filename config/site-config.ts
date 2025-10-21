// Site Configuration - Global settings and static values
export const siteConfig = {
  // Personal Information
  personal: {
    name: "Tirth Jain",
    title: "Full-Stack Developer",
    email: "tirth.jain.dev@gmail.com", // Replace with actual email
    phone: "+91-7984814283", // Replace with actual phone
    location: "India",
    timezone: "Asia/Kolkata",
    avatar: "/avatar.jpg", // Replace with actual avatar path
    logo: "TJ",
    domain: "tirthj.dev",
    tagline: "Building Digital Solutions That Scale",
    description: "Full-stack developer specializing in modern web technologies, creating scalable solutions for global clients.",
  },

  // Statistics/Metrics
  stats: {
    experience: "6+",
    experienceLabel: "Years Experience",
    projects: "10+",
    projectsLabel: "Projects Completed",
    availability: "24/7",
    availabilityLabel: "Global Availability",
    responseTime: "24h",
    responseTimeLabel: "Response Time",
    clients: "50+",
    clientsLabel: "Happy Clients",
    technologies: "20+",
    technologiesLabel: "Technologies Mastered",
  },

  // Social Links
  social: {
    linkedin: "https://linkedin.com/in/tirthjaindev", // Replace with actual URL
    github: "https://github.com/Tirth886", // Replace with actual URL
    instagram: "https://instagram.com/tirth.jain.dev", // Replace with actual URL
    portfolio: "https://tirthj.dev",
  },

  // Contact Information
  contact: {
    email: "tirth.jain.dev@gmail.com", // Replace with actual email
    phone: "+91-7984814283", // Replace with actual phone
    whatsapp: "+91-7984814283", // Replace with actual WhatsApp
    calendlyLabel: "Schedule a Meeting",
    calendly: "https://calendly.com/tirth-jain-dev/60min", // Replace with actual Calendly
    availability: {
      timezone: "IST (UTC+5:30)",
      hours: "9 AM - 6 PM IST",
      response: "Within 24 hours",
    },
  },

  // SEO Configuration
  seo: {
    title: "Tirth Jain - Full-Stack Developer | Modern Web Solutions",
    description: "Expert full-stack developer specializing in React, Node.js, and modern web technologies. Building scalable solutions for global clients with 6+ years of experience.",
    keywords: [
      "Full-Stack Developer",
      "React Developer",
      "Node.js Developer",
      "Web Development",
      "JavaScript Expert",
      "TypeScript Developer",
      "API Development",
      "Database Design",
      "Cloud Solutions",
      "Mobile Development",
    ],
    author: "Tirth Jain",
    creator: "Tirth Jain",
    publisher: "Tirth Jain",
    robots: "index, follow",
    language: "en",
    region: "IN",
  },

  // Analytics IDs (Replace with actual IDs)
  analytics: {
    googleAnalytics: "G-ECVBPRRFP6", // Replace with actual GA4 ID
    hotjar: "6553249", // Replace with actual Hotjar ID
    googleAds: "AW-XXXXXXXXXX", // Replace with actual Google Ads ID
  },

  // Business Information
  business: {
    type: "Freelance Developer",
    location: "India",
    languages: ["English", "Hindi"],
    currencies: ["USD", "EUR", "INR"],
  },

  // Technical Preferences
  tech: {
    primaryStack: ["React", "Node.js", "TypeScript", "PostgreSQL"],
    expertise: [
      "Frontend Development",
      "Backend Development",
      "API Design",
      "Database Architecture",
      "Cloud Deployment",
      "Performance Optimization",
    ],
    tools: ["VS Code", "Git", "Docker", "AWS", "Vercel", "Figma"],
  },

  // Project Types
  services: {
    webDevelopment: {
      title: "Web Development",
      price: "Starting at $2,500",
      duration: "2-8 weeks",
    },
    apiDevelopment: {
      title: "API Development",
      price: "Starting at $1,500",
      duration: "1-4 weeks",
    },
    consulting: {
      title: "Technical Consulting",
      price: "$100/hour",
      duration: "Flexible",
    },
    maintenance: {
      title: "Maintenance & Support",
      price: "$500/month",
      duration: "Ongoing",
    },
  },
};

// Helper functions
export const getStat = (key: keyof typeof siteConfig.stats) => {
  return siteConfig.stats[key];
};

export const getPersonalInfo = (key: keyof typeof siteConfig.personal) => {
  return siteConfig.personal[key];
};

export const getSocialLink = (platform: keyof typeof siteConfig.social) => {
  return siteConfig.social[platform];
};

export const getContactInfo = (key: keyof typeof siteConfig.contact) => {
  return siteConfig.contact[key];
};

// Export individual sections for easier imports
export const { personal, stats, social, contact, seo, analytics, business, tech, services } = siteConfig;