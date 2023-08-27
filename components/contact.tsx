"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast, { Toaster } from 'react-hot-toast';

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
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
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:tirth886jain@gmail.com">
          tirth886jain@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
        id="form"
        action={async (formData) => {
          await sendEmail(formData)
          toast('Thank you for getting in touch. I\'ll respond as soon as I can.', {
            icon: '✅',
            iconTheme: {
              primary: '#000',
              secondary: '#fff',
            },
            ariaProps: {
              role: 'status',
              'aria-live': 'polite',
            }
          })
          document.querySelector('form')?.reset()
        }}
      >
        <div className="md:flex justify-between my-3 sm:block">
          <input
            className="h-14 px-4 md:flex-auto rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none w-full"
            name="senderFirstName"
            type="text"
            required
            maxLength={500}
            placeholder="Your first name"
          />
          <span className="md:mx-2 sm:mx-0"></span>
          <input
            className="w-full md:mt-0 sm:mt-3 h-14 px-4 md:flex-auto rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none mt-3 md:mt-0"
            name="senderLastName"
            type="text"
            required
            maxLength={500}
            placeholder="Your last name"
          />
        </div>
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <div className="md:flex justify-between my-3 sm:block">
          <input
            className="h-14 px-4 md:flex-auto rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none w-full"
            name="senderSubject"
            type="text"
            required
            maxLength={500}
            placeholder="Your subject"
          />
          <span className="md:mx-2 sm:mx-0"></span>
          <input
            className="w-full md:mt-0 sm:mt-3 h-14 px-4 md:flex-auto rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none mt-3 md:mt-0"
            name="senderTopic"
            type="text"
            required
            maxLength={500}
            placeholder="Your topic"
          />
        </div>
        <textarea
          className="h-52 mb-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
