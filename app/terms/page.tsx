import type { Metadata } from "next";
import TermsContent from "./terms-content";

export const metadata: Metadata = {
  title: "Terms & Conditions - Neural Control",
  description: "Terms and Conditions for Neural Control website and content."
};

export default function Terms() {
  return <TermsContent />;
}
