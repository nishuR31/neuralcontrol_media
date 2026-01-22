'use client';

import Link from "next/link";
import { AnimatedBackgroundWrapper } from "@/components/animated-background-wrapper";

export default function LinksContent() {
  const links = [
    {
      title: "YouTube",
      description: "Subscribe for long-form and short-form content on psychology, AI, and technology.",
      url: "https://www.youtube.com/@NeuralControl_media",
      icon: "▶"
    },
    {
      title: "Instagram",
      description: "Follow for daily insights, short clips, and behind-the-scenes content.",
      url: "https://www.instagram.com/neuralcontrol_media/",
      icon: "📸"
    },
    {
      title: "Linktree",
      description: "Centralized hub for all Neural Control links and resources.",
      url: "https://linktr.ee/NeuralControl_media",
      icon: "🔗"
    }
  ];

  return (
    <AnimatedBackgroundWrapper>
      <div className="container max-w-4xl mx-auto px-4 md:px-6 lg:px-8 pt-32 pb-20">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Links</h1>
          <p className="text-lg text-foreground/70">
            Find us on all platforms. Choose your preferred way to stay updated.
          </p>
        </div>

        {/* Links Grid */}
        <div className="grid md:grid-cols-1 gap-6 mb-12">
          {links.map((link) => (
            <Link
              key={link.title}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 border border-border/50 rounded hover:border-primary/50 transition-all duration-200 hover:shadow-[0_0_20px_rgba(0,217,255,0.1)]"
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl group-hover:scale-110 transition-transform duration-200">
                  {link.icon}
                </span>
                <div className="flex-1">
                  <h2 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {link.title}
                  </h2>
                  <p className="text-foreground/70 mb-4">{link.description}</p>
                  <span className="text-sm font-mono text-primary/70 group-hover:text-primary transition-colors">
                    Open →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Direct Links List */}
        <div className="border-t border-border/50 pt-12">
          <h2 className="text-2xl font-bold mb-8">Quick Access</h2>
          <div className="space-y-3">
            {links.map((link) => (
              <div key={link.title} className="flex items-center gap-3">
                <span className="text-primary">•</span>
                <Link
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-sm text-foreground/70 hover:text-primary transition-colors break-all"
                >
                  {link.url}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedBackgroundWrapper>
  );
}
