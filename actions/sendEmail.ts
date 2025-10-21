"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";
import { contact } from "@/config/site-config";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail") || '';
  const message = formData.get("message") || '';
  const senderFirstName = formData.get("senderFirstName") || '';
  const senderLastName = formData.get("senderLastName") || '';
  const senderSubject = formData.get("senderSubject") || '';
  const senderTopic = formData.get("senderTopic") || '';

  // simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }
  if (!validateString(senderFirstName, 100)) {
    return {
      error: "Invalid first name",
    };
  }
  if (!validateString(senderLastName, 100)) {
    return {
      error: "Invalid last name",
    };
  }
  if (!validateString(senderSubject, 200)) {
    return {
      error: "Invalid subject",
    };
  }

  // Validate budget format if provided - accepts any currency
  if (senderTopic.toString().trim() !== '') {
    const budgetPattern = /^[\$€£¥₹₽¢₩₪₨₦₱₴₡₵₧₪₫₡₵₼₽₨₦₴₩₱₪₫₡₵]+[0-9,\s\-kKmMbB]*/;
    if (!budgetPattern.test(senderTopic.toString()) && !/^[0-9,\s\-kKmMbB]+[\$€£¥₹₽¢₩₪₨₦₱₴₡₵₧₪₫₡₵₼₽₨₦₴₩₱₪₫₡₵]?/.test(senderTopic.toString())) {
      return {
        error: "Please enter a valid budget with currency symbol (e.g., $5000, €4500, ₹50000)",
      };
    }
  }

  // Create email subject
  const emailSubject = `New Project Inquiry: ${senderSubject.toString()}${senderTopic.toString() ? ` - ${senderTopic.toString()}` : ''} | From ${senderFirstName} ${senderLastName}`;

  let data;
  try {
    data = await resend.emails.send({
      from: "TirthJ.Dev Contact Form <onboarding@resend.dev>",
      to: contact.email,
      subject: emailSubject,
      reply_to: senderEmail.toString(),
      react: React.createElement(ContactFormEmail, {
        senderEmail: senderEmail.toString(),
        message: message.toString(),
        firstName: senderFirstName.toString(),
        lastName: senderLastName.toString(),
        subject: senderSubject.toString(),
        topic: senderTopic.toString(),
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
