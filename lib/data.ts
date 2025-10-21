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
  {
    name: "Services",
    hash: "#services",
  },
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
    title: "Software Developer III",
    location: "Zuru Tech",
    href: true,
    redirect: "https://www.zuru.tech/",
    description:
      "Leading technological innovation as a Senior Software Developer, contributing expertise to cutting-edge software solutions. Collaborating with talented teams to drive impactful solutions and shape the future of technology. Focus on excellence and pushing technological boundaries in a dynamic development environment.",
    icon: React.createElement(FaReact),
    date: "2023 - Present 🚀",
  },
  {
    title: "Tech Lead",
    location: "Excellent Web World",
    href: true,
    redirect: "https://www.excellentwebworld.com/",
    description:
      "Provided technical leadership and guidance to development teams, facilitating growth through adoption of cutting-edge technologies. Led architectural decisions, code reviews, and mentored junior developers while delivering high-quality web solutions for clients.",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
  {
    title: "Software Engineer",
    location: "Hidden Brain Pvt Ltd",
    href: true,
    redirect: "https://www.hiddenbrains.com/",
    description:
      "Built scalable products by implementing industry best practices in development, testing, and tooling. Expanded understanding of product management and engineering systems design while delivering robust software solutions. Gained tremendous learning in product development lifecycle.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2023",
  },
  {
    title: "Sr Full-Stack Developer",
    location: "Align Connect Pvt Ltd",
    href: true,
    redirect: "http://alignconnect.in/",
    description:
      "Promoted to Senior Full-Stack Developer, taking ownership of complex projects including CRM systems, e-commerce platforms, and lead management solutions. Worked with hosting servers (WHM, CPanel) and delivered multiple landing pages using modern JavaScript frameworks.",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2021",
  },
  {
    title: "Software Engineer",
    location: "Finbyz Tech Pvt Ltd",
    href: true,
    redirect: "https://finbyz.tech/",
    description:
      "Explored cutting-edge technologies including Electron.js, Frappe framework, JavaScript, and WebSocket implementations. Passionate about learning new technologies and solving complex development challenges in a fast-paced startup environment.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2020",
  },
  {
    title: "Software Developer Internship",
    location: "Grass Solution Pvt Ltd",
    href: true,
    redirect: "https://grras.com/",
    description:
      "Kickstarted development career during bachelor's degree, learning foundational technologies including HTML, CSS, JavaScript, PHP, CodeIgniter framework, and AngularJS. Built strong programming fundamentals and gained hands-on industry experience.",
    icon: React.createElement(CgWorkAlt),
    date: "2018",
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
  "Nest.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "AWS",
  "Linux",
  "Shell Programming",
  "MySQL",
  "PHP",
  "Express",
  "Python",
  "LangChain.js",
  "CI/CD",
  "Docker",
  "GraphQL",
  "PostgreSQL",
  "Framer Motion",
] as const;
