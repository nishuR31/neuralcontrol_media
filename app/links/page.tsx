import type { Metadata } from "next";
import LinksContent from "./links-content";

export const metadata: Metadata = {
  title: "Links - Neural Control",
  description: "Find all Neural Control links to YouTube, Instagram, and other platforms."
};

export default function Links() {
  return <LinksContent />;
}
