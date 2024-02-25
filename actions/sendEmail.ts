"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

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

  let data;
  try {
    data = await resend.emails.send({
      from: "Contact Form | TirthJDev <onboarding@resend.dev>",
      to: "tirth886jain@gmail.com",
      subject: senderSubject.toString() + `${senderTopic.toString() === '' ? '' : senderTopic.toString()}`,
      reply_to: senderEmail,
      react: React.createElement(ContactFormEmail, {
        senderEmail: senderEmail,
        message: message,
        firstName: senderFirstName.toString(),
        lastName: senderLastName.toString()
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
