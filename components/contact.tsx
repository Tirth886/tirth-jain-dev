"use client";

import React, { useState, useEffect } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from 'react-hot-toast';
import { FaClock, FaGlobe, FaCheckCircle, FaPhoneAlt, FaEnvelope, FaCalendarAlt } from "react-icons/fa";
import { personal, contact as contactConfig, stats, contact } from "@/config/site-config";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const [currentTime, setCurrentTime] = useState<string>("");
  const [isBusinessHours, setIsBusinessHours] = useState<boolean>(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const istTime = new Date(now.toLocaleString("en-US", {timeZone: "Asia/Kolkata"}));
      const timeString = istTime.toLocaleTimeString("en-IN", {
        hour: '2-digit',
        minute: '2-digit',
        timeZoneName: 'short'
      });
      setCurrentTime(timeString);
      
      const hour = istTime.getHours();
      setIsBusinessHours(hour >= 9 && hour < 21); // 9 AM to 9 PM IST
    };

    updateTime();
    const interval = setInterval(updateTime, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-full max-w-[65rem] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Get In Touch</SectionHeading>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Contact Information */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="text-left">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Let's Build Something Amazing Together
            </h3>
            <p className="text-gray-700 dark:text-white/80 leading-relaxed">
              I'm always excited to discuss new projects and opportunities. 
              Whether you need a complete web application, API development, 
              or technical consulting, I'm here to help bring your ideas to life.
            </p>
          </div>

          {/* Availability Status */}
          <div className="bg-white dark:bg-white/10 rounded-xl p-6 border border-gray-200 dark:border-white/20">
            <div className="flex items-center gap-3 mb-3">
              <div className={`w-3 h-3 rounded-full ${isBusinessHours ? 'bg-green-500 animate-pulse' : 'bg-yellow-500'}`}></div>
              <span className="font-semibold text-gray-900 dark:text-white">
                {isBusinessHours ? 'Available Now' : 'Will Respond Soon'}
              </span>
            </div>
            
            <div className="space-y-2 text-sm text-gray-600 dark:text-white/70">
              <div className="flex items-center gap-2">
                <FaClock className="w-4 h-4" />
                <span>Current time (IST): {currentTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaGlobe className="w-4 h-4" />
                <span>Working globally across timezones</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="w-4 h-4 text-green-500" />
                <span>Usually respond within 24 hours</span>
              </div>
            </div>
          </div>

          {/* Direct Contact Options */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href={`mailto:${contact.email}`}
              className="flex items-center gap-3 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors group"
            >
              <FaEnvelope className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <div className="text-left">
                <div className="font-medium text-blue-900 dark:text-blue-300">Email</div>
                <div className="text-sm text-blue-700 dark:text-blue-400 group-hover:underline">
                  {contact.email}
                </div>
              </div>
            </a>

            <a
              href={`tel:${contact.whatsapp}`}
              className="flex items-center gap-3 p-4 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-200 dark:border-green-800 hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors group"
            >
              <FaPhoneAlt className="w-5 h-5 text-green-600 dark:text-green-400" />
              <div className="text-left">
                <div className="font-medium text-green-900 dark:text-green-300">WhatsApp</div>
                <div className="text-sm text-green-700 dark:text-green-400 group-hover:underline">
                  {contact.whatsapp}
                </div>
              </div>
            </a>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="bg-white dark:bg-white/10 rounded-xl p-4 border border-gray-200 dark:border-white/20">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{stats.responseTime}</div>
              <div className="text-xs text-gray-600 dark:text-white/70">{stats.responseTimeLabel}</div>
            </div>
            <div className="bg-white dark:bg-white/10 rounded-xl p-4 border border-gray-200 dark:border-white/20">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">{stats.experience}</div>
              <div className="text-xs text-gray-600 dark:text-white/70">Years Exp.</div>
            </div>
            <div className="bg-white dark:bg-white/10 rounded-xl p-4 border border-gray-200 dark:border-white/20">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">{stats.projects}</div>
              <div className="text-xs text-gray-600 dark:text-white/70">Projects</div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="bg-white dark:bg-white/10 rounded-2xl p-6 sm:p-8 border border-gray-200 dark:border-white/20 shadow-soft">
            <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white text-left">
              Send me a message
            </h3>

            <form
              className="space-y-4"
              id="contact-form"
              action={async (formData) => {
                const result = await sendEmail(formData);
                if (result?.error) {
                  toast.error(result.error);
                } else {
                  toast.success('Thank you for getting in touch! I\'ll respond as soon as I can.', {
                    icon: '✅',
                    duration: 5000,
                  });
                  (document.getElementById('contact-form') as HTMLFormElement)?.reset();
                }
              }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  className="h-12 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none w-full mobile-button"
                  name="senderFirstName"
                  type="text"
                  required
                  maxLength={500}
                  placeholder="First name"
                />
                <input
                  className="h-12 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none w-full mobile-button"
                  name="senderLastName"
                  type="text"
                  required
                  maxLength={500}
                  placeholder="Last name"
                />
              </div>

              <input
                className="h-12 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none w-full mobile-button"
                name="senderEmail"
                type="email"
                required
                maxLength={500}
                placeholder="Your email"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  className="h-12 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none w-full mobile-button"
                  name="senderSubject"
                  type="text"
                  required
                  maxLength={500}
                  placeholder="Project type (e.g., Web App)"
                />
                <div className="space-y-1">
                  <input
                    className="h-12 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none w-full mobile-button"
                    name="senderTopic"
                    type="text"
                    maxLength={30}
                    placeholder="Project budget (e.g., $5000, €4500, ₹50000)"
                  />
                  <p className="text-xs text-gray-500 dark:text-white/60 text-left">
                    💡 Note: Please specify your currency.
                  </p>
                </div>
              </div>

              <textarea
                className="h-32 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none w-full resize-none"
                name="message"
                placeholder="Tell me about your project, timeline, and requirements..."
                required
                maxLength={5000}
              />

              <div className="text-center">
                <SubmitBtn />
              </div>

              {/* Book a Call Option */}
              <div className="text-center">
                <div className="flex items-center my-4">
                  <div className="flex-1 border-t border-gray-300 dark:border-gray-600"></div>
                  <span className="px-4 text-sm text-gray-500 dark:text-gray-400">or</span>
                  <div className="flex-1 border-t border-gray-300 dark:border-gray-600"></div>
                </div>
                
                <motion.a
                  href={contact.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-8 py-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 w-full sm:w-auto min-w-[200px]"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaCalendarAlt className="w-5 h-5" />
                  <span>{contact.calendlyLabel}</span>
                </motion.a>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
