"use client";

import { personal, contact } from "@/config/site-config";
import Link from "next/link";
import { useEffect } from "react";
import { HiArrowLeft, HiShieldCheck, HiLockClosed, HiEye, HiDatabase, HiMail } from "react-icons/hi";

export default function PrivacyPolicy() {
  // Set page metadata dynamically
  useEffect(() => {
    document.title = "Privacy Policy | Tirth Jain - Full Stack Developer";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Privacy policy for Tirth Jain\'s portfolio website. Learn how we collect, use, and protect your personal information.');
    }
  }, []);

  return (
    <div data-page="privacy" className="min-h-screen bg-white text-gray-900">
      <main className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Header with Back Link */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors mb-6"
          >
            <HiArrowLeft className="h-5 w-5" />
            Back to Home
          </Link>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            Privacy Policy
          </h1>
          <p className="text-gray-600">
            Effective Date: October 23, 2025
          </p>
        </div>

        {/* Introduction */}
        <section className="mb-8">
          <div className="flex items-center mb-4">
            <HiShieldCheck className="h-6 w-6 text-blue-600 mr-2" />
            <h2 className="text-xl font-semibold text-gray-900">Introduction</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Welcome to {personal.name}&apos;s portfolio website ({personal.domain}). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
          </p>
        </section>

        {/* Information We Collect */}
        <section className="mb-8">
          <div className="flex items-center mb-4">
            <HiDatabase className="h-6 w-6 text-blue-600 mr-2" />
            <h2 className="text-xl font-semibold text-gray-900">Information We Collect</h2>
          </div>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Personal Information</h3>
              <p className="text-gray-700">
                When you contact us through our contact form, we may collect:
              </p>
              <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                <li>Name</li>
                <li>Email address</li>
                <li>Message content</li>
                <li>Any other information you voluntarily provide</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Automatically Collected Information</h3>
              <p className="text-gray-700">
                We automatically collect certain information when you visit our website:
              </p>
              <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Pages visited and time spent</li>
                <li>Referring website</li>
                <li>Device information</li>
              </ul>
            </div>
          </div>
        </section>

        {/* How We Use Your Information */}
        <section className="mb-8">
          <div className="flex items-center mb-4">
            <HiEye className="h-6 w-6 text-blue-600 mr-2" />
            <h2 className="text-xl font-semibold text-gray-900">How We Use Your Information</h2>
          </div>
          <p className="text-gray-700 mb-4">We use the collected information for:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Responding to your inquiries and communications</li>
            <li>Improving our website and user experience</li>
            <li>Analytics and understanding website usage patterns</li>
            <li>Preventing fraud and ensuring website security</li>
            <li>Complying with legal obligations</li>
          </ul>
        </section>

        {/* Third-Party Services */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Third-Party Services</h2>
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Google Analytics</h3>
              <p className="text-gray-700">
                We use Google Analytics to analyze website traffic and usage. Google Analytics may collect information about your visits, including pages viewed, time spent, and interactions. This data is used to improve our website and understand user behavior.
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Google Ads</h3>
              <p className="text-gray-700">
                We use Google Ads for conversion tracking and remarketing. This helps us understand the effectiveness of our marketing efforts and may show you relevant ads on other websites.
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Hotjar</h3>
              <p className="text-gray-700">
                We use Hotjar to understand user behavior through heatmaps and session recordings. This helps us improve website usability and user experience.
              </p>
            </div>
          </div>
        </section>

        {/* Data Security */}
        <section className="mb-8">
          <div className="flex items-center mb-4">
            <HiLockClosed className="h-6 w-6 text-blue-600 mr-2" />
            <h2 className="text-xl font-semibold text-gray-900">Data Security</h2>
          </div>
          <p className="text-gray-700">
            We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no internet transmission is completely secure, and we cannot guarantee absolute security.
          </p>
        </section>

        {/* Your Rights */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Your Rights</h2>
          <p className="text-gray-700 mb-4">You have the right to:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate or incomplete information</li>
            <li>Request deletion of your personal information</li>
            <li>Object to processing of your personal information</li>
            <li>Request data portability</li>
            <li>Withdraw consent where processing is based on consent</li>
          </ul>
        </section>

        {/* Cookies */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Cookies and Tracking Technologies</h2>
          <p className="text-gray-700 mb-4">
            Our website uses cookies and similar tracking technologies to enhance your browsing experience. Cookies are small files stored on your device that help us:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Remember your preferences</li>
            <li>Analyze website performance</li>
            <li>Provide personalized content</li>
            <li>Understand user behavior</li>
          </ul>
          <p className="text-gray-700 mt-4">
            You can manage or disable cookies through your browser settings. However, disabling cookies may affect website functionality.
          </p>
        </section>

        {/* Data Retention */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Data Retention</h2>
          <p className="text-gray-700">
            We retain personal information only as long as necessary to fulfill the purposes outlined in this Privacy Policy, comply with legal obligations, resolve disputes, and enforce agreements. When information is no longer needed, we securely delete or anonymize it.
          </p>
        </section>

        {/* International Transfers */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">International Data Transfers</h2>
          <p className="text-gray-700">
            Your information may be transferred to and processed in countries other than your country of residence. These countries may have different data protection laws. We ensure appropriate safeguards are in place to protect your information during such transfers.
          </p>
        </section>

        {/* Children's Privacy */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Children&apos;s Privacy</h2>
          <p className="text-gray-700">
            Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information.
          </p>
        </section>

        {/* Changes to Privacy Policy */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Changes to This Privacy Policy</h2>
          <p className="text-gray-700">
            We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. We encourage you to review this Privacy Policy periodically for any changes.
          </p>
        </section>

        {/* Contact Information */}
        <section className="mb-8">
          <div className="flex items-center mb-4">
            <HiMail className="h-6 w-6 text-blue-600 mr-2" />
            <h2 className="text-xl font-semibold text-gray-900">Contact Us</h2>
          </div>
          <p className="text-gray-700 mb-4">
            If you have any questions about this Privacy Policy or our privacy practices, please contact us:
          </p>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-700">
              <strong>Email:</strong> <a href={`mailto:${contact.email}`} className="text-blue-600 hover:text-blue-800">{contact.email}</a>
            </p>
            <p className="text-gray-700">
              <strong>Phone:</strong> <a href={`tel:${contact.phone}`} className="text-blue-600 hover:text-blue-800">{contact.phone}</a>
            </p>
            <p className="text-gray-700">
              <strong>Address:</strong> {personal.location}
            </p>
          </div>
        </section>

        {/* Footer */}
        <div className="text-center mt-12 pt-8 border-t border-gray-200">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
          >
            <HiArrowLeft className="h-4 w-4" />
            Return to Home
          </Link>
          <p className="text-gray-500 text-sm mt-4">
            © 2025 {personal.name}. All rights reserved.
          </p>
        </div>
      </main>
    </div>
  );
}