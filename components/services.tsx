"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";
import { 
  FaCode, 
  FaServer, 
  FaDatabase, 
  FaMobile, 
  FaCloud,
  FaCogs,
  FaRocket,
  FaShieldAlt,
  FaUsers,
  FaGlobe,
  FaChartLine,
  FaLaptopCode,
  FaIndustry,
  FaGraduationCap,
  FaShoppingCart,
  FaHeadset,
  FaRobot,
  FaHeart,
  FaBuilding,
  FaChartBar,
  FaGamepad,
  FaCar
} from "react-icons/fa";

const services = [
  {
    title: "Full-Stack Web Development",
    description: "Complete web application development using modern technologies like React, Next.js, Node.js, and PHP. From concept to deployment.",
    icon: FaLaptopCode,
    technologies: ["React", "Next.js", "Node.js", "PHP", "Laravel", "TypeScript"],
    color: "from-blue-500 to-purple-600",
  },
  {
    title: "API Development & Integration",
    description: "RESTful API design, development, and third-party service integrations. Scalable backend solutions with proper documentation.",
    icon: FaServer,
    technologies: ["REST APIs", "GraphQL", "Express.js", "Socket.IO", "Microservices"],
    color: "from-green-500 to-teal-600",
  },
  {
    title: "Database Design & Optimization",
    description: "Database architecture, optimization, and migration services. Both SQL and NoSQL database expertise for optimal performance.",
    icon: FaDatabase,
    technologies: ["MySQL", "MongoDB", "PostgreSQL", "Prisma", "Database Design"],
    color: "from-orange-500 to-red-600",
  },
  {
    title: "Mobile App Development",
    description: "Cross-platform mobile applications using Flutter and React Native. Native-like performance with code reusability.",
    icon: FaMobile,
    technologies: ["Flutter", "React Native", "Mobile UI/UX", "App Store Deployment"],
    color: "from-purple-500 to-pink-600",
  },
  {
    title: "Cloud Solutions & DevOps",
    description: "Cloud infrastructure setup, deployment automation, and DevOps practices. Scalable and secure cloud solutions.",
    icon: FaCloud,
    technologies: ["AWS", "Linux", "Docker", "CI/CD", "Server Management"],
    color: "from-cyan-500 to-blue-600",
  },
  {
    title: "Performance Optimization",
    description: "Website and application performance optimization. Speed improvements, SEO optimization, and user experience enhancement.",
    icon: FaRocket,
    technologies: ["Performance Audit", "SEO", "Core Web Vitals", "Caching"],
    color: "from-yellow-500 to-orange-600",
  },
  {
    title: "Security & Code Review",
    description: "Security audits, vulnerability assessments, and code review services. Ensuring robust and secure applications.",
    icon: FaShieldAlt,
    technologies: ["Security Audit", "Code Review", "Penetration Testing", "OWASP"],
    color: "from-red-500 to-pink-600",
  },
  {
    title: "Technical Consulting",
    description: "Technology strategy, architecture planning, and technical guidance for your projects. Expert advice for informed decisions.",
    icon: FaCogs,
    technologies: ["Architecture", "Tech Strategy", "Code Review", "Mentoring"],
    color: "from-indigo-500 to-purple-600",
  },
];

const industries = [
  {
    title: "Oil & Gas",
    description: "Developed robust applications for energy sector operations, monitoring systems, and data analytics platforms.",
    icon: FaIndustry,
    color: "from-amber-500 to-orange-600",
    projects: ["Operations Management", "Data Analytics", "Monitoring Systems"]
  },
  {
    title: "Education",
    description: "Built comprehensive educational platforms, learning management systems, and student information systems.",
    icon: FaGraduationCap,
    color: "from-blue-500 to-indigo-600",
    projects: ["Learning Management", "Student Portals", "Assessment Systems"]
  },
  {
    title: "E-commerce",
    description: "Created scalable online stores, payment integrations, inventory management, and customer experience platforms.",
    icon: FaShoppingCart,
    color: "from-green-500 to-emerald-600",
    projects: ["Online Stores", "Payment Systems", "Inventory Management"]
  },
  {
    title: "Lead Management & CRM",
    description: "Implemented advanced lead management systems with webhook integrations, automated lead assignment, and disposition tracking for sales teams.",
    icon: FaHeadset,
    color: "from-purple-500 to-violet-600",
    projects: ["Webhook Integration", "Lead Analysis", "Auto Assignment", "Disposition Tracking"]
  },
  {
    title: "AI & Chatbots",
    description: "Developed intelligent chatbot solutions, automated customer support systems, and AI-powered communication tools.",
    icon: FaRobot,
    color: "from-cyan-500 to-blue-600",
    projects: ["Conversational AI", "Customer Support", "Natural Language Processing"]
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Services() {
  const { ref } = useSectionInView("Services", 0.2);

  return (
    <section
      id="services"
      ref={ref}
      className="mb-28 max-w-[75rem] scroll-mt-28 sm:mb-40"
    >
      <SectionHeading>Professional Services</SectionHeading>
      
      <motion.div
        className="mb-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <p className="text-gray-700 dark:text-white/80 text-lg max-w-3xl mx-auto">
          With <span className="font-bold text-gradient">6+ years of experience</span>, I offer comprehensive software development services 
          to help businesses worldwide build robust, scalable, and modern applications.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="group relative bg-white dark:bg-white/10 rounded-2xl p-6 border border-black/10 dark:border-white/10 hover:shadow-soft dark:hover:shadow-glow transition-all duration-300 hover-lift"
          >
            {/* Gradient background on hover */}
            <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
            
            {/* Icon */}
            <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${service.color} mb-4 relative z-10`}>
              <service.icon className="w-6 h-6 text-white" />
            </div>

            {/* Content */}
            <div className="relative z-10">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white group-hover:text-gradient transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-600 dark:text-white/70 mb-4 leading-relaxed">
                {service.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {service.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="text-xs px-2 py-1 bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-white/80 rounded-full border border-gray-200 dark:border-white/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Hover effect overlay */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent to-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </motion.div>
        ))}
      </motion.div>

      {/* Industry Experience Section */}
      <motion.div
        className="mt-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            Industry Experience
          </h2>
          <p className="text-gray-700 dark:text-white/80 text-lg max-w-3xl mx-auto">
            Successfully delivered solutions across diverse industries, understanding unique business challenges 
            and implementing tailored technology solutions.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mt-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-white dark:bg-white/10 rounded-xl p-4 border border-black/10 dark:border-white/10 hover:shadow-soft dark:hover:shadow-glow transition-all duration-300 hover-lift"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300`}></div>
              
              {/* Icon */}
              <div className={`inline-flex p-2 rounded-lg bg-gradient-to-br ${industry.color} mb-3 relative z-10`}>
                <industry.icon className="w-4 h-4 text-white" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-gradient transition-colors">
                  {industry.title}
                </h3>
                
                <p className="text-gray-600 dark:text-white/70 mb-3 text-sm leading-relaxed">
                  {industry.description}
                </p>

                {/* Key Projects */}
                <div className="space-y-1">
                  {industry.projects.map((project, projectIndex) => (
                    <div
                      key={projectIndex}
                      className="text-xs px-2 py-1 bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-white/80 rounded-md border border-gray-200 dark:border-white/20"
                    >
                      {project}
                    </div>
                  ))}
                </div>
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-transparent to-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 border border-blue-200 dark:border-gray-600">
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            Ready to Start Your Project?
          </h3>
          <p className="text-gray-700 dark:text-white/80 mb-6 max-w-2xl mx-auto">
            Let's discuss how I can help bring your ideas to life with modern, scalable, and efficient solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="font-medium">Available for new projects</span>
            </div>
            
            <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
              <FaGlobe className="w-4 h-4" />
              <span className="font-medium">Working globally</span>
            </div>
            
            <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400">
              <FaChartLine className="w-4 h-4" />
              <span className="font-medium">6+ years experience</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}