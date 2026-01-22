import type { Metadata } from "next";
import AboutContent from "./about-content";

export const metadata: Metadata = {
  title: "About Neural Control",
  description: "Learn about Neural Control's mission to provide educational content on dark psychology, AI, and technology."
};

export default function About() {
  return <AboutContent />;
}
