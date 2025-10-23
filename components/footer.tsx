import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt, FaInstagram } from "react-icons/fa";
import { personal, contact, social, stats } from "@/config/site-config";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mb-10 px-4 text-center text-gray-500 dark:text-white/60">
      <div className="max-w-4xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div className="text-left">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">{personal.name}</h3>
            <p className="text-sm leading-relaxed">
              {personal.title} & Software Engineer with {stats.experience} {stats.experienceLabel.toLowerCase()}. 
              Specializing in modern web technologies and available for international projects.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-left">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Quick Links</h3>
            <div className="space-y-2 text-sm">
              <a href="#about" className="block hover:text-gray-900 dark:hover:text-white transition-colors">About</a>
              <a href="#services" className="block hover:text-gray-900 dark:hover:text-white transition-colors">Services</a>
              <a href="#skills" className="block hover:text-gray-900 dark:hover:text-white transition-colors">Skills</a>
              <a href="#experience" className="block hover:text-gray-900 dark:hover:text-white transition-colors">Experience</a>
              <a href="#contact" className="block hover:text-gray-900 dark:hover:text-white transition-colors">Contact</a>
              <a href="/privacy" className="block hover:text-gray-900 dark:hover:text-white transition-colors">Privacy Policy</a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-left">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Get In Touch</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <FaEnvelope className="w-3 h-3" />
                <a 
                  href={`mailto:${contact.email}`}
                  className="hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  {contact.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <FaPhone className="w-3 h-3" />
                <a 
                  href={`tel:${contact.phone}`}
                  className="hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  {contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="w-3 h-3" />
                <span>{personal.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-6">
          <a
            href={social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white dark:bg-white/10 rounded-full border border-gray-200 dark:border-white/20 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-300 dark:hover:border-blue-700 transition-colors group"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          </a>
          
          <a
            href={social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white dark:bg-white/10 rounded-full border border-gray-200 dark:border-white/20 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-gray-300 dark:hover:border-gray-600 transition-colors group"
            aria-label="GitHub Profile"
          >
            <FaGithub className="w-5 h-5 text-gray-700 dark:text-gray-300" />
          </a>
          
          <a
            href={social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white dark:bg-white/10 rounded-full border border-gray-200 dark:border-white/20 hover:bg-pink-50 dark:hover:bg-pink-900/20 hover:border-pink-300 dark:hover:border-pink-700 transition-colors group"
            aria-label="Instagram Profile"
          >
            <FaInstagram className="w-5 h-5 text-pink-600 dark:text-pink-400" />
          </a>
          
          <a
            href={`mailto:${contact.email}`}
            className="p-3 bg-white dark:bg-white/10 rounded-full border border-gray-200 dark:border-white/20 hover:bg-green-50 dark:hover:bg-green-900/20 hover:border-green-300 dark:hover:border-green-700 transition-colors group"
            aria-label="Email Contact"
          >
            <FaEnvelope className="w-5 h-5 text-green-600 dark:text-green-400" />
          </a>
        </div>

        {/* Availability Status */}
        <div className="bg-white dark:bg-white/10 rounded-xl p-4 border border-gray-200 dark:border-white/20 mb-6 max-w-md mx-auto">
          <div className="flex items-center justify-center gap-2 text-sm">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="font-medium text-gray-900 dark:text-white">Available for new projects</span>
          </div>
          <p className="text-xs mt-1">Usually responds within {stats.responseTime}</p>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 dark:border-white/20 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
            <p>
              &copy; {currentYear} {personal.name}. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a href="/privacy" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
