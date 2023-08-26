"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

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
      <p className="mb-3">I started development journey with <span className="font-medium"> Core PHP / MYSQL</span>, when i was doing my bachelors.{" "}I learned{" "}
        <span className="font-bold">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-bold">
          React, Next.js, Node.js,PHP, MongoDB and MySql
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies.
      </p>

      <p>
        <span className="font-bold italic">When I'm not coding</span>, I enjoy playing
        video games 🎮, and watching movies 🍿.
      </p>
    </motion.section>
  );
}
