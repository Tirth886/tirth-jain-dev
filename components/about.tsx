"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { personal, stats } from "@/config/site-config";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      
      <div className="space-y-6 text-gray-700 dark:text-white/80">
        <p className="text-lg">
          I began my development journey with{" "}
          <span className="font-semibold text-blue-600 dark:text-blue-400">Core PHP & MySQL</span>{" "}
          during my bachelor's degree. What started as curiosity quickly became a passion for{" "}
          <span className="font-bold text-gradient">solving complex problems</span>{" "}
          through code.
        </p>

        <p>
          Over the past <span className="font-bold text-purple-600 dark:text-purple-400">{stats.experience}</span> {stats.experienceLabel.toLowerCase()}, 
          I've evolved into a {personal.title.toLowerCase()} specializing in modern web technologies. 
          My core expertise includes{" "}
          <span className="font-bold">React, Next.js, Node.js, PHP, Laravel,</span>{" "}
          and both <span className="font-semibold">SQL & NoSQL databases</span>.
        </p>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-6 border border-blue-200 dark:border-gray-600">
          <p className="text-base">
            <span className="font-bold italic text-gradient">What drives me?</span>{" "}
            The thrill of transforming ideas into functional, scalable applications. 
            I love the problem-solving aspect of development and the satisfaction of 
            delivering solutions that make a real impact.
          </p>
        </div>

        <p>
          I'm always exploring new technologies and best practices to stay at the 
          forefront of web development. Currently excited about{" "}
          <span className="font-semibold text-green-600 dark:text-green-400">
            TypeScript, cloud architectures, and performance optimization
          </span>.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
          <div className="bg-white dark:bg-white/10 rounded-xl p-4 border border-gray-200 dark:border-white/20">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
              🎯 Current Focus
            </h4>
            <p className="text-sm">
              Building scalable web applications and helping businesses 
              achieve their digital transformation goals.
            </p>
          </div>
          
          <div className="bg-white dark:bg-white/10 rounded-xl p-4 border border-gray-200 dark:border-white/20">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
              🌍 Availability
            </h4>
            <p className="text-sm">
              Open to international projects and remote collaborations 
              across different timezones.
            </p>
          </div>
        </div>

        <p className="text-base italic">
          <span className="font-bold">When I'm not coding</span>, you'll find me 
          playing video games 🎮, watching movies 🍿, or exploring the latest tech trends. 
          I believe in maintaining a healthy work-life balance that keeps creativity flowing.
        </p>
      </div>
    </motion.section>
  );
}
