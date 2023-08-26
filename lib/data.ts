import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  // {
  //   name: "Projects",
  //   hash: "#projects",
  // },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Developer Internship",
    location: "Grass Solution Pvt Ltd",
    href: true,
    redirect: "https://grras.com/",
    description:
      "While doing Bachelor i got a chance doing internship, without missing i catch it and learn HTML, CSS, JS, PHP, PHP FrameWork (CodeIgniter), AngularJS",
    icon: React.createElement(CgWorkAlt),
    date: "2018",
  },
  {
    title: "BCA (Bachelor In Computer Application)",
    location: "Moradabad, Uttar Pradesh",
    href: false,
    description:
      "I started development journey with Core PHP / MYSQL, when i was doing my bachelors. I love to build applications and solving the problem.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Software Engineer",
    location: "Finbyz Tech Pvt Ltd",
    href: true,
    redirect: "https://finbyz.tech/",
    description:
      "In my first job at Finbyz Tech, Here i explored a lot of technologies #electron.js, frappe, javascript, websocket which excited me. As I was very pasionate about coding/learning and working with new technologies.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2020 (Pursuing MCA)",
  },
  {
    title: "Sr Full-Stack Developer",
    location: "Align Connect Pvt Ltd",
    href: true,
    redirect: "http://alignconnect.in/",
    description:
      "I wanted to find myself more with some new challenges. So, I joined as a FullStack Developer, later on i promoted as Sr. FullStack Software Engineer. Here i build product sales crm, Ecommerce Website (Araurveda), Lead Management System and many landing pages using Javascript framework. Here i also get a chance to work with the Hosting Server WHM, Cpannel. I do work here by taking up the ownership",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2021 (Pursuing MCA)",
  },

  {
    title: "MCA (Master In Computer Application)",
    location: "Ahmedabad, Gujarat",
    href: false,
    description:
      "I graduated immediately found a job as a Software Developer, above timeline showing that.",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },

  {
    title: "Software Enginner",
    location: "Hidden Brain Pvt Ltd",
    href: true,
    redirect: "https://www.hiddenbrains.com/",
    description:
      "I have been want to build a product by adapting the best practices in terms of development,testing and tooling. So, i expanded my understanding of what it takes to build a great product, and given me tremendous amounts of learnings in terms of product management and engineering systems design.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2023",
  },
  {
    title: "Tech Lead",
    location: "Excellent Web World",
    href: true,
    redirect: "https://www.excellentwebworld.com/",
    description:
      "My primary focus is to provide guidance to the team and facilitate their growth through the adoption of cutting-edge technologies.",
    icon: React.createElement(FaReact),
    date: "2023 - Present 🚀",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "BootStrap",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "ElectronJs",
  "Flutter",
  "Socket.IO",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "AWS",
  "Linux",
  "Shell Programming",
  "MySQl",
  // "GraphQL",
  // "Apollo",
  "Express",
  // "PostgreSQL",
  "Python",
  "Django",
  // "Framer Motion",
] as const;
