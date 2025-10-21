"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { stats } from "@/config/site-config";

// Skill categories for better organization
const skillCategories = [
  {
    category: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind", "BootStrap", "TanStack Query", "Redux"],
    color: "from-blue-500 to-cyan-600",
  },
  {
    category: "Backend",
    skills: ["Node.js", "Nest.js", "Express", "PHP", "Python", "Socket.IO", "GraphQL", "Prisma"],
    color: "from-green-500 to-emerald-600",
  },
  {
    category: "Database",
    skills: ["MongoDB", "MySQL", "PostgreSQL", "SQLite"],
    color: "from-purple-500 to-violet-600",
  },
  {
    category: "Caching",
    skills: ["Redis", "Memcache"],
    color: "from-teal-500 to-cyan-600",
  },
  {
    category: "DevOps & Cloud",
    skills: ["AWS", "Linux", "Docker", "CI/CD", "Git", "Shell Programming"],
    color: "from-orange-500 to-red-600",
  },
  {
    category: "Mobile & Desktop",
    skills: ["Flutter", "React Native", "ElectronJs"],
    color: "from-pink-500 to-rose-600",
  },
  {
    category: "AI & Automation",
    skills: ["LangChain.js", "Prompt Engineering"],
    color: "from-indigo-500 to-purple-600",
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

const categoryVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.05,
    },
  },
};

const skillVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
    },
  },
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[75rem] scroll-mt-28 sm:mb-40"
    >
      <SectionHeading>Technical Skills</SectionHeading>
      
      <motion.div
        className="mb-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <p className="text-gray-700 dark:text-white/80 text-lg max-w-3xl mx-auto">
          Comprehensive expertise across the <span className="font-bold text-gradient">full technology stack</span>, 
          from frontend user interfaces to backend systems, cloud infrastructure, and modern AI integrations.
        </p>
      </motion.div>

      <motion.div
        className="space-y-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.category}
            variants={categoryVariants}
            className="group"
          >
            {/* Category Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${category.color}`}></div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {category.category}
              </h3>
              <div className={`flex-1 h-px bg-gradient-to-r ${category.color} opacity-30`}></div>
            </div>

            {/* Skills Grid */}
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3"
              variants={containerVariants}
            >
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skill}
                  variants={skillVariants}
                  className="group/skill relative"
                >
                  <div className="bg-white dark:bg-white/10 rounded-xl px-4 py-3 border border-black/10 dark:border-white/10 hover:shadow-soft dark:hover:shadow-glow transition-all duration-300 hover-lift cursor-pointer">
                    {/* Gradient background on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover/skill:opacity-5 rounded-xl transition-opacity duration-300`}></div>
                    
                    {/* Skill name */}
                    <div className="relative z-10 text-center">
                      <span className="text-sm font-medium text-gray-800 dark:text-white/90 group-hover/skill:text-gradient transition-colors">
                        {skill}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Skills Summary */}
      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6 border border-blue-200 dark:border-gray-600">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                {skillCategories.reduce((total, cat) => total + cat.skills.length, 0)}+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                {stats.experience}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                {skillCategories.length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Skill Categories</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                {stats.projects}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{stats.projectsLabel}</div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
