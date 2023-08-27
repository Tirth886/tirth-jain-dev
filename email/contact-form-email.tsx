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
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

interface ContactFormEmailProps {
  message: string;
  senderEmail: string;
  firstName: string;
  lastName: string;
};

export default function ContactFormEmail({
  message,
  senderEmail,
  lastName,
  firstName,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New message from your tirthj.dev site</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
              <Hr />
              <Text>The sender's name is: {firstName + ' ' + lastName}</Text>
              <Text>The sender's email is: {senderEmail}</Text>
              <Text>{message}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
