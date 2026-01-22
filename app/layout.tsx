import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Neural Control | Dark Psychology, AI & Discipline",
  description:
    "Short, sharp insights into dark psychology, artificial intelligence, technology, and discipline. Educational content for understanding how minds work and systems shape behavior.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased bg-background text-foreground"
        suppressHydrationWarning
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
