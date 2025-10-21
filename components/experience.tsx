"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";
import { experiencesData } from "@/lib/data";
import { FaCalendarAlt, FaMapMarkerAlt, FaExternalLinkAlt } from "react-icons/fa";
import { stats } from "@/config/site-config";

export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.2);
  const { theme } = useTheme();

  // Filter to show only professional experience (not education)
  const professionalExperience = experiencesData.filter(item => 
    !item.title.toLowerCase().includes('education') && 
    !item.title.toLowerCase().includes('bachelor') && 
    !item.title.toLowerCase().includes('degree') &&
    !item.title.toLowerCase().includes('university') &&
    !item.title.toLowerCase().includes('college')
  );

  return (
    <motion.section 
      id="experience" 
      ref={ref} 
      className="scroll-mt-28 mb-28 sm:mb-40 max-w-6xl mx-auto px-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Professional Experience</SectionHeading>
      
      {/* Experience Summary */}
      <motion.div 
        className="mb-12 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold">
          <FaCalendarAlt className="w-4 h-4" />
          <span>{stats.experience} {stats.experienceLabel}</span>
        </div>
        <p className="mt-4 text-gray-600 dark:text-white/70 max-w-2xl mx-auto">
          Building innovative solutions and delivering exceptional results across diverse projects and technologies.
        </p>
      </motion.div>

      {/* Experience Timeline */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 transform md:-translate-x-0.5"></div>
        
        <div className="space-y-8 md:space-y-12">
          {professionalExperience.map((item, index) => (
            <motion.div
              key={index}
              className={`relative flex items-start gap-6 md:gap-0 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Timeline Icon */}
              <div className="relative z-10 flex-shrink-0">
                <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-full border-4 border-blue-500 flex items-center justify-center shadow-lg md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                  <div className="text-blue-600 dark:text-blue-400 text-xl">
                    {item.icon}
                  </div>
                </div>
              </div>

              {/* Content Card */}
              <div className={`flex-1 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                <motion.div
                  className="bg-white dark:bg-white/5 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-white/10 hover:shadow-xl transition-all duration-300 group"
                  whileHover={{ y: -5 }}
                >
                  {/* Date Badge */}
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
                    <FaCalendarAlt className="w-3 h-3" />
                    {item.date}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>

                  {/* Company/Location */}
                  <div className="flex items-center gap-2 mb-4">
                    <FaMapMarkerAlt className="w-3 h-3 text-gray-500 dark:text-white/50" />
                    {item.href ? (
                      <a
                        href={item.redirect}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-white/70 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium flex items-center gap-1"
                      >
                        {item.location}
                        <FaExternalLinkAlt className="w-3 h-3" />
                      </a>
                    ) : (
                      <span className="text-gray-600 dark:text-white/70 font-medium">
                        {item.location}
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 dark:text-white/80 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 border border-blue-200 dark:border-gray-600">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
            Ready to work together?
          </h3>
          <p className="text-gray-600 dark:text-white/70 mb-6">
            Let's discuss how my experience can help bring your project to life.
          </p>
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
            <FaExternalLinkAlt className="w-3 h-3" />
          </motion.a>
        </div>
      </motion.div>
    </motion.section>
  );
}
