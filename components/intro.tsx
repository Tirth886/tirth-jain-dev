"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare, FaIdCard } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { personal, stats, social } from "@/config/site-config";
import ProfileCard from "./profile-card";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const [showProfileCard, setShowProfileCard] = useState(false);

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-28 relative"
    >
      {/* Background Gradient - Full viewport coverage with responsive sizing */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[120vw] h-[120vh] 
                        sm:w-[110vw] sm:h-[110vh] sm:top-[-15%] sm:left-[-5%]
                        md:w-[100vw] md:h-[100vh] md:top-[-10%] md:left-[0%]
                        lg:w-[90vw] lg:h-[90vh] lg:top-[-5%] lg:left-[5%]
                        xl:w-[80vw] xl:h-[80vh] xl:top-[0%] xl:left-[10%]
                        bg-gradient-to-br from-blue-400/25 via-purple-500/20 to-emerald-400/25 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-[-10%] right-[-20%] w-[80vw] h-[80vh]
                        sm:w-[70vw] sm:h-[70vh] sm:top-[-5%] sm:right-[-15%]
                        md:w-[60vw] md:h-[60vh] md:right-[-10%]
                        lg:w-[50vw] lg:h-[50vh] lg:right-[-5%]
                        xl:w-[40vw] xl:h-[40vh] xl:right-[0%]
                        bg-gradient-to-bl from-pink-400/20 via-blue-500/15 to-cyan-400/20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-[-30%] left-[-20%] w-[100vw] h-[60vh]
                        sm:w-[90vw] sm:h-[50vh] sm:bottom-[-25%] sm:left-[-15%]
                        md:w-[80vw] md:h-[40vh] md:bottom-[-20%] md:left-[-10%]
                        lg:w-[70vw] lg:h-[35vh] lg:bottom-[-15%] lg:left-[-5%]
                        xl:w-[60vw] xl:h-[30vh] xl:bottom-[-10%] xl:left-[0%]
                        bg-gradient-to-tr from-violet-400/20 via-emerald-500/15 to-orange-400/20 rounded-full blur-2xl"></div>
        <div className="absolute top-[30%] right-[10%] w-[60vw] h-[40vh]
                        sm:w-[50vw] sm:h-[35vh] sm:top-[25%] sm:right-[5%]
                        md:w-[40vw] md:h-[30vh] md:top-[20%] md:right-[0%]
                        lg:w-[35vw] lg:h-[25vh] lg:top-[15%] lg:right-[-5%]
                        xl:w-[30vw] xl:h-[20vh] xl:top-[10%] xl:right-[-10%]
                        bg-gradient-to-l from-indigo-400/15 via-pink-500/10 to-yellow-400/15 rounded-full blur-xl"></div>
      </div>

      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/tj.png"
              alt={`${personal.name} - ${personal.title}`}
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 sm:h-32 sm:w-32 bg-[#26282A] rounded-full object-cover border-[0.35rem] border-[#000000] shadow-xl hover:shadow-2xl transition-shadow duration-300"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-3xl sm:text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.div
        className="mb-10 mt-4 px-4"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium !leading-[1.4] mb-4">
          <span className="font-bold">Hello, I'm {personal.name}.</span>
        </h1>
        
        <div className="text-lg sm:text-xl lg:text-2xl font-medium !leading-[1.5] space-y-2">
          <p>
            I'm a <span className="font-bold text-gradient">Software Engineer</span> and{" "}
            <span className="font-bold text-gradient">{personal.title}</span>
          </p>
          <p>
            with <span className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{stats.experience}</span> {stats.experienceLabel.toLowerCase()}.
          </p>
        </div>
        
        <p className="text-base sm:text-lg text-gray-700 mt-4 max-w-2xl mx-auto leading-relaxed">
          {personal.description} I specialize in building <span className="italic font-medium">modern web applications</span> using{" "}
          <span className="font-semibold text-blue-600 dark:text-blue-400">React, Next.js, Node.js, PHP,</span> and{" "}
          <span className="font-semibold text-green-600 dark:text-green-400">cloud technologies</span>.
          Available for <span className="font-semibold underline decoration-2 decoration-purple-500">international projects</span>.
        </p>
      </motion.div>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition mobile-button touch-friendly w-full sm:w-auto justify-center"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack mobile-button touch-friendly w-full sm:w-auto justify-center"
          href="/Tirth_Jain_Resume.pdf"
          download={`${personal.name.replace(' ', '_')}_Resume.pdf`}
          aria-label={`Download ${personal.name}'s Resume`}
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          onClick={() => setShowProfileCard(true)}
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack mobile-button touch-friendly"
          aria-label="View Profile Card"
        >
          <FaIdCard />
        </a>

        <div className="flex gap-2 w-full sm:w-auto justify-center">
          <a
            className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack mobile-button touch-friendly"
            href={social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${personal.name}'s LinkedIn Profile`}
          >
            <BsLinkedin />
          </a>

          <a
            className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack mobile-button touch-friendly"
            href={social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${personal.name}'s GitHub Profile`}
          >
            <FaGithubSquare />
          </a>
        </div>
      </motion.div>

      {/* Professional Highlights */}
      <motion.div
        className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <div className="bg-white rounded-xl p-4 border border-gray-200 text-center">
          <div className="text-2xl font-bold text-blue-600">{stats.experience}</div>
          <div className="text-sm text-gray-600">{stats.experienceLabel}</div>
        </div>
        
        <div className="bg-white rounded-xl p-4 border border-gray-200 text-center">
          <div className="text-2xl font-bold text-green-600">{stats.projects}</div>
          <div className="text-sm text-gray-600">{stats.projectsLabel}</div>
        </div>
        
        {/* <div className="bg-white dark:bg-white/10 rounded-xl p-4 border border-gray-200 dark:border-white/20 text-center">
          <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">{stats.availability}</div>
          <div className="text-sm text-gray-600 dark:text-white/70">{stats.availabilityLabel}</div>
        </div> */}
      </motion.div>

      {/* Profile Card Modal */}
      <ProfileCard 
        isOpen={showProfileCard} 
        onClose={() => setShowProfileCard(false)} 
      />
    </section>
  );
}
