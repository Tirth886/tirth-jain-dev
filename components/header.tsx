"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import { HiMenuAlt3, HiX, HiHome, HiUser, HiCog, HiCode, HiBriefcase, HiMail, HiCalendar } from "react-icons/hi";
import ScrollProgress from "./scroll-progress";
import { personal, contact } from "@/config/site-config";

const iconMap = {
  "Home": HiHome,
  "About": HiUser,
  "Services": HiCog,
  "Skills": HiCode,
  "Experience": HiBriefcase,
  "Contact": HiMail,
};

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);
      
      // Special handling for Home section when at the very top
      if (scrollY < 100 && activeSection !== "Home") {
        setActiveSection("Home");
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection, setActiveSection]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  // Enhanced close functionality for better touch handling
  const handleBackdropClick = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    e.stopPropagation();
    closeMobileMenu();
  };

  const handleBackdropTouch = (e: React.TouchEvent) => {
    e.preventDefault();
    e.stopPropagation();
    closeMobileMenu();
  };

  // Handle escape key to close menu
  useEffect(() => {
    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        closeMobileMenu();
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener('keydown', handleEscapeKey);
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';
    } else {
      document.removeEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (sectionName: string) => {
    setActiveSection(sectionName as any);
    setTimeOfLastClick(Date.now());
    closeMobileMenu();
    
    // Debug: log what we're trying to navigate to
    console.log(`Navigating to: ${sectionName}`);
    
    // Use the hash from the link data to ensure consistency
    const linkData = links.find(link => link.name === sectionName);
    if (linkData) {
      console.log(`Found link data:`, linkData);
      const targetElement = document.querySelector(linkData.hash);
      if (targetElement) {
        console.log(`Found target element:`, targetElement);
        const headerHeight = 120; // Increased for better positioning
        
        // For home section, scroll to top
        if (sectionName === "Home") {
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
          console.log(`Scrolled to top for Home`);
        } else {
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
          
          console.log(`Element position: ${elementPosition}, Offset: ${offsetPosition}`);
          
          window.scrollTo({
            top: Math.max(0, offsetPosition),
            behavior: 'smooth'
          });
        }
        
        console.log(`Scrolled to: ${linkData.hash}`);
      } else {
        console.error(`Element not found for: ${linkData.hash}`);
        // Try to find all elements with IDs for debugging
        const allElements = document.querySelectorAll('[id]');
        console.log('All elements with IDs:', Array.from(allElements).map(el => el.id));
      }
    } else {
      console.error(`Link data not found for: ${sectionName}`);
    }
  };

  return (
    <>
      <ScrollProgress />
      
      {/* Desktop Navigation - Floating */}
      <motion.header 
        className="fixed top-6 left-0 right-0 w-fit mx-auto z-[999] hidden sm:block"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.nav
          className={clsx(
            "bg-white/80 backdrop-blur-lg rounded-full border border-gray-200/50 shadow-lg",
            "transition-all duration-300 mx-auto",
            isScrolled ? "shadow-xl scale-95" : "shadow-lg scale-100"
          )}
          animate={{
            scale: isScrolled ? 0.95 : 1,
            boxShadow: isScrolled 
              ? "0 25px 50px -12px rgba(0, 0, 0, 0.25)" 
              : "0 10px 25px -3px rgba(0, 0, 0, 0.1)"
          }}
          transition={{ duration: 0.2 }}
        >
          <ul className="flex items-center justify-center gap-1 p-2">
            {links.map((link) => {
              const Icon = iconMap[link.name as keyof typeof iconMap];
              const isActive = activeSection === link.name;
              
              return (
                <motion.li key={link.hash} className="relative flex-shrink-0">
                  <Link
                    href={link.hash}
                    onClick={() => handleNavClick(link.name)}
                    className={clsx(
                      "relative flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap",
                      "hover:bg-gray-100/50",
                      isActive
                        ? "text-white z-10"
                        : "text-gray-600 hover:text-gray-900"
                    )}
                  >
                    {Icon && <Icon className="w-4 h-4 flex-shrink-0" />}
                    <span className="hidden lg:block">{link.name}</span>
                    
                    {isActive && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 rounded-full shadow-lg"
                        layoutId="activeBackground"
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 35,
                          duration: 0.3
                        }}
                        style={{ zIndex: -1 }}
                      />
                    )}
                  </Link>
                </motion.li>
              );
            })}
          </ul>
        </motion.nav>
        
        {/* Schedule Meeting Button - Desktop */}
        <motion.div
          className="fixed top-6 right-6 z-[998]"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <motion.a
            href={contact.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-medium text-sm whitespace-nowrap"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <HiCalendar className="w-4 h-4" />
            <span className="hidden lg:block">{contact.calendlyLabel}</span>
            <span className="lg:hidden">Meet</span>
          </motion.a>
        </motion.div>
      </motion.header>

      {/* Mobile Navigation */}
      <div className="sm:hidden">
        {/* Mobile Header Bar */}
        <motion.header
          className={clsx(
            "fixed top-0 left-0 right-0 z-[999] transition-all duration-300",
            "bg-white/90 backdrop-blur-lg",
            "border-b border-gray-200/50",
            isScrolled ? "shadow-lg" : "shadow-sm"
          )}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <div className="flex items-center justify-between h-16 px-3">
            <Link 
              href="#home"
              className="flex items-center gap-2 text-lg font-bold text-gray-900"
              onClick={() => handleNavClick("Home")}
            >
              <div className="w-7 h-7 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xs">{personal.logo}</span>
              </div>
              <span className="hidden mobile-lg:block text-base">{personal.domain}</span>
            </Link>
            
            <div className="flex items-center gap-2">
              {/* Schedule Meeting Button - Mobile */}
              <motion.a
                href={contact.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 font-medium text-sm whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <HiCalendar className="w-4 h-4 flex-shrink-0" />
                <span className="hidden xs:inline">{contact.calendlyLabel}</span>
                <span className="xs:hidden">Meet</span>
              </motion.a>
              
              <motion.button
                onClick={toggleMobileMenu}
                className="relative p-2 rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center touch-manipulation"
                whileTap={{ scale: 0.95 }}
                style={{ touchAction: 'manipulation' }}
              >
                <motion.div
                  animate={{ rotate: mobileMenuOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {mobileMenuOpen ? (
                    <HiX className="w-6 h-6 text-gray-700" />
                  ) : (
                    <HiMenuAlt3 className="w-6 h-6 text-gray-700" />
                  )}
                </motion.div>
              </motion.button>
            </div>
          </div>
        </motion.header>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                className="fixed inset-0 bg-black/50 z-[998] backdrop-blur-sm touch-manipulation"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={handleBackdropClick}
                onTouchEnd={handleBackdropTouch}
                style={{ touchAction: 'manipulation' }}
              />
              
              {/* Mobile Menu */}
              <motion.div
                className="fixed inset-0 flex items-center justify-center p-4 z-[999]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <motion.div
                  className="bg-white rounded-2xl shadow-2xl border border-gray-200/50 overflow-hidden w-80 max-w-full"
                  initial={{ y: -20, opacity: 0, scale: 0.95 }}
                  animate={{ y: 0, opacity: 1, scale: 1 }}
                  exit={{ y: -20, opacity: 0, scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <div className="p-4">
                    <div className="grid grid-cols-2 gap-3">
                      {links.map((link, index) => {
                        const Icon = iconMap[link.name as keyof typeof iconMap];
                        const isActive = activeSection === link.name;
                        
                        return (
                          <motion.div
                            key={link.hash}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <Link
                              href={link.hash}
                              onClick={() => handleNavClick(link.name)}
                              className={clsx(
                                "flex flex-col items-center gap-2 p-4 rounded-xl transition-all duration-300 relative overflow-hidden",
                                "hover:scale-105 active:scale-95",
                                isActive
                                  ? "bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 text-white shadow-xl shadow-blue-500/25"
                                  : "bg-gray-50 text-gray-700 hover:bg-gray-100 hover:shadow-lg"
                              )}
                            >
                              {Icon && (
                                <Icon className={clsx(
                                  "w-6 h-6 transition-colors duration-300",
                                  isActive ? "text-white" : "text-gray-600"
                                )} />
                              )}
                              <span className={clsx(
                                "text-sm font-medium transition-colors duration-300",
                                isActive ? "text-white" : ""
                              )}>{link.name}</span>
                              
                              {/* Subtle animation overlay for active state */}
                              {isActive && (
                                <motion.div
                                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                                  animate={{ x: [-100, 100] }}
                                  transition={{ 
                                    duration: 2, 
                                    repeat: Infinity, 
                                    ease: "linear" 
                                  }}
                                />
                              )}
                            </Link>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
