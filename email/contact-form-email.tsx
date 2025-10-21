import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
  Row,
  Column,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

interface ContactFormEmailProps {
  message: string;
  senderEmail: string;
  firstName: string;
  lastName: string;
  subject: string;
  topic: string;
}

export default function ContactFormEmail({
  message,
  senderEmail,
  lastName,
  firstName,
  subject,
  topic,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New project inquiry from {firstName} {lastName} - {subject}</Preview>
      <Tailwind>
        <Body className="bg-gray-50 font-sans">
          <Container className="mx-auto py-8 px-4 max-w-2xl">
            {/* Header Section */}
            <Section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-t-lg px-8 py-6">
              <Heading className="text-white text-2xl font-bold margin-0">
                🚀 New Project Inquiry
              </Heading>
              <Text className="text-blue-100 text-sm margin-0 mt-2">
                From your portfolio website - tirthj.dev
              </Text>
            </Section>

            {/* Content Section */}
            <Section className="bg-white rounded-b-lg px-8 py-6 border border-gray-200">
              {/* Client Information */}
              <div className="mb-6">
                <Heading className="text-gray-800 text-lg font-semibold mb-4 border-b border-gray-200 pb-2">
                  👤 Client Information
                </Heading>
                
                <Row className="mb-3">
                  <Column className="w-1/3">
                    <Text className="text-gray-600 font-medium text-sm margin-0">Name:</Text>
                  </Column>
                  <Column>
                    <Text className="text-gray-800 text-sm margin-0 font-semibold">
                      {firstName} {lastName}
                    </Text>
                  </Column>
                </Row>

                <Row className="mb-3">
                  <Column className="w-1/3">
                    <Text className="text-gray-600 font-medium text-sm margin-0">Email:</Text>
                  </Column>
                  <Column>
                    <Text className="text-blue-600 text-sm margin-0 underline">
                      {senderEmail}
                    </Text>
                  </Column>
                </Row>
              </div>

              {/* Project Details */}
              <div className="mb-6">
                <Heading className="text-gray-800 text-lg font-semibold mb-4 border-b border-gray-200 pb-2">
                  💼 Project Details
                </Heading>
                
                <Row className="mb-3">
                  <Column className="w-1/3">
                    <Text className="text-gray-600 font-medium text-sm margin-0">Project Type:</Text>
                  </Column>
                  <Column>
                    <Text className="text-gray-800 text-sm margin-0 font-semibold">
                      {subject}
                    </Text>
                  </Column>
                </Row>

                {topic && (
                  <Row className="mb-3">
                    <Column className="w-1/3">
                      <Text className="text-gray-600 font-medium text-sm margin-0">Budget Range:</Text>
                    </Column>
                    <Column>
                      <Text className="text-green-600 text-sm margin-0 font-semibold">
                        {topic}
                      </Text>
                    </Column>
                  </Row>
                )}
              </div>

              {/* Message */}
              <div className="mb-6">
                <Heading className="text-gray-800 text-lg font-semibold mb-4 border-b border-gray-200 pb-2">
                  💬 Project Requirements
                </Heading>
                <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-blue-500">
                  <Text className="text-gray-700 text-sm leading-relaxed margin-0 whitespace-pre-wrap">
                    {message}
                  </Text>
                </div>
              </div>

              <Hr className="border-gray-200 my-6" />

              {/* Footer */}
              <div className="text-center">
                <Text className="text-gray-500 text-xs margin-0">
                  This email was sent from the contact form on tirthj.dev
                </Text>
                <Text className="text-gray-500 text-xs margin-0 mt-1">
                  Reply directly to this email to respond to {firstName}
                </Text>
              </div>
            </Section>

            {/* Call-to-Action */}
            <Section className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg mt-4 px-8 py-4 border border-blue-200">
              <Text className="text-center text-gray-700 text-sm margin-0">
                🎯 <strong>Next Steps:</strong> Review the requirements and respond within 24 hours to maintain your professional response time.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
