"use client";

import React, { useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FaTimes, FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt, FaGlobe, FaCalendarAlt, FaInstagram } from "react-icons/fa";
import { personal, stats, social, contact } from "@/config/site-config";

interface ProfileCardProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ProfileCard({ isOpen, onClose }: ProfileCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          >
            {/* Profile Card */}
            <motion.div
              ref={cardRef}
              className="relative bg-gradient-to-br from-white via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 rounded-3xl shadow-2xl max-w-sm w-full overflow-hidden"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="close-btn absolute top-4 right-4 z-10 p-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full hover:bg-white dark:hover:bg-gray-700 transition-colors"
                aria-label="Close profile card"
              >
                <FaTimes className="w-4 h-4 text-gray-600 dark:text-gray-300" />
              </button>

              {/* Decorative Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full -translate-x-16 -translate-y-16"></div>
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-purple-400 to-pink-400 rounded-full translate-x-12 translate-y-12"></div>
              </div>

              <div className="relative p-8">
                {/* Profile Picture */}
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 p-1 shadow-lg">
                      <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 p-1">
                        <Image
                          src="/tj.png"
                          alt={personal.name}
                          width={88}
                          height={88}
                          className="w-full h-full rounded-full object-cover object-center"
                          priority
                          quality={100}
                          unoptimized={false}
                        />
                      </div>
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white dark:border-gray-800 flex items-center justify-center shadow-lg">
                      <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </div>

                {/* Name & Title */}
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                    {personal.name}
                  </h2>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">
                    {personal.title}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {personal.tagline}
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="text-center p-3 bg-white/50 dark:bg-gray-800/50 rounded-xl">
                    <div className="text-lg font-bold text-blue-600 dark:text-blue-400">
                      {stats.experience}
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      Years Exp.
                    </div>
                  </div>
                  <div className="text-center p-3 bg-white/50 dark:bg-gray-800/50 rounded-xl">
                    <div className="text-lg font-bold text-green-600 dark:text-green-400">
                      {stats.projects}
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      Projects
                    </div>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-sm">
                    <FaEnvelope className="w-4 h-4 text-blue-500 flex-shrink-0" />
                    <a 
                      href={`mailto:${contact.email}`}
                      className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors break-all"
                    >
                      {contact.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <FaMapMarkerAlt className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">
                      {personal.location}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <FaGlobe className="w-4 h-4 text-purple-500 flex-shrink-0" />
                    <a
                      href={`https://${personal.domain}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                    >
                      {personal.domain}
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <FaCalendarAlt className="w-4 h-4 text-orange-500 flex-shrink-0" />
                    <a
                      href={contact.calendly}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
                    >
                      Schedule a Meeting
                    </a>
                  </div>
                </div>

                {/* Social Links */}
                <div className="grid grid-cols-4 gap-3 mb-6">
                  <a
                    href={social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors flex items-center justify-center"
                  >
                    <FaLinkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors flex items-center justify-center"
                  >
                    <FaGithub className="w-5 h-5" />
                  </a>
                  <a
                    href={social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 rounded-full hover:bg-pink-200 dark:hover:bg-pink-900/50 transition-colors flex items-center justify-center"
                  >
                    <FaInstagram className="w-5 h-5" />
                  </a>
                  <a
                    href={contact.calendly}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-full hover:bg-orange-200 dark:hover:bg-orange-900/50 transition-colors flex items-center justify-center"
                  >
                    <FaCalendarAlt className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}