import type { Metadata } from "next";
import ContactContent from "./contact-content";

export const metadata: Metadata = {
  title: "Contact - Neural Control",
  description: "Get in touch with Neural Control for general inquiries and feedback."
};

export default function Contact() {
  return <ContactContent />;
}
