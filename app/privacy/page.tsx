import type { Metadata } from "next";
import PrivacyContent from "./privacy-content";

export const metadata: Metadata = {
  title: "Privacy Policy - Neural Control",
  description: "Privacy Policy for Neural Control website and content."
};

export default function Privacy() {
  return <PrivacyContent />;
}
