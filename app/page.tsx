"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatedBackgroundWrapper } from "@/components/animated-background-wrapper";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

export default function Home() {
  const slides = [
    {
      id: 1,
      title: "Dark Psychology",
      description: "Understanding manipulation and human behavior",
    },
    {
      id: 2,
      title: "Artificial Intelligence",
      description: "How AI systems actually work",
    },
    {
      id: 3,
      title: "Technology & Systems",
      description: "How algorithms shape behavior",
    },
  ];

  return (
    <>
      <AnimatedBackgroundWrapper>
        {/* Hero Section */}

        {/* Hero Carousel Section */}

        <section className="container max-w-4xl mx-auto px-4 md:px-6 lg:px-8 mb-20 pt-32">
          <div className="text-center space-y-6">
            {/* Badge */}
            <div className="inline-block">
              <span className="text-xs font-mono text-primary/80 border border-primary/30 rounded-full px-4 py-2">
                Educational Content
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
              Dark Psychology, AI, and Discipline —{" "}
              <span className="text-primary">Explained Simply</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-foreground/70 text-balance max-w-2xl mx-auto">
              Short, sharp insights into how minds work and how systems shape
              behavior. No fluff. No hype. Pure information.
            </p>

            <section className="w-full py-12">
              <Carousel className="w-full justify-center align-middle flex-col flex">
                <CarouselContent>
                  {slides.map((slide) => (
                    <CarouselItem key={slide.id}>
                      <div className="p-4 text-center">

                        <h2 className="text-3xl text-balance font-bold mb-4">
                          {slide.title}
                        </h2>
                        <p className="text-lg text-balance">
                          {slide.description}
                        </p>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </section>

            {/* CTA */}
            <div className="pt-4">
              <Link
                href="/links"
                className="inline-block px-6 py-3 border border-primary text-primary font-mono text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-200"
              >
                Explore the Content Ecosystem
              </Link>
            </div>
          </div>

          {/* Abstract Visual Element */}
          <div className="mt-20 relative h-64 md:h-80 lg:h-96 rounded-lg border border-border/50 overflow-hidden bg-gradient-to-b from-primary/5 to-transparent flex items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
              <svg
                className="w-full h-full"
                viewBox="0 0 400 300"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid slice"
              >
                {/* Neural network visualization */}
                <defs>
                  <linearGradient
                    id="gradientCyan"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#00d9ff" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#9945ff" stopOpacity="0.1" />
                  </linearGradient>
                </defs>
                <circle cx="100" cy="80" r="4" fill="#00d9ff" opacity="0.4" />
                <circle cx="200" cy="50" r="4" fill="#00d9ff" opacity="0.5" />
                <circle cx="300" cy="100" r="4" fill="#9945ff" opacity="0.3" />
                <circle cx="150" cy="150" r="3" fill="#00d9ff" opacity="0.3" />
                <circle cx="250" cy="180" r="3" fill="#9945ff" opacity="0.4" />
                <circle cx="100" cy="220" r="4" fill="#9945ff" opacity="0.3" />
                <circle cx="300" cy="240" r="4" fill="#00d9ff" opacity="0.4" />

                {/* Connecting lines */}
                <line
                  x1="100"
                  y1="80"
                  x2="200"
                  y2="50"
                  stroke="url(#gradientCyan)"
                  strokeWidth="1"
                  opacity="0.2"
                />
                <line
                  x1="200"
                  y1="50"
                  x2="300"
                  y2="100"
                  stroke="url(#gradientCyan)"
                  strokeWidth="1"
                  opacity="0.2"
                />
                <line
                  x1="100"
                  y1="80"
                  x2="150"
                  y2="150"
                  stroke="url(#gradientCyan)"
                  strokeWidth="1"
                  opacity="0.2"
                />
                <line
                  x1="150"
                  y1="150"
                  x2="250"
                  y2="180"
                  stroke="url(#gradientCyan)"
                  strokeWidth="1"
                  opacity="0.2"
                />
                <line
                  x1="250"
                  y1="180"
                  x2="300"
                  y2="240"
                  stroke="url(#gradientCyan)"
                  strokeWidth="1"
                  opacity="0.2"
                />
                <line
                  x1="100"
                  y1="220"
                  x2="250"
                  y2="180"
                  stroke="url(#gradientCyan)"
                  strokeWidth="1"
                  opacity="0.2"
                />
              </svg>
            </div>
            <p className="text-sm font-mono text-foreground/40 relative z-10">
              Neural networks. Systems. Behavior.
            </p>
          </div>
        </section>

        {/* Content Pillars Section */}
        <section className="border-t border-border/50 py-20">
          <div className="container max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
              What You'll Learn
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Dark Psychology",
                  description:
                    "Manipulation, persuasion, and the mechanics of human behavior. Understanding influence without the hype.",
                },
                {
                  title: "Artificial Intelligence",
                  description:
                    "How AI works, what it can and cannot do. Separating reality from narrative in the AI revolution.",
                },
                {
                  title: "Technology & Systems",
                  description:
                    "How technology shapes behavior. Social media algorithms, digital infrastructure, and digital discipline.",
                },
                {
                  title: "Discipline & Execution",
                  description:
                    "Building systems that work. Motivation is unreliable. Structure and environment are everything.",
                },
              ].map((pillar, i) => (
                <div
                  key={i}
                  className="p-6 border border-border/50 rounded bg-foreground/2 hover:border-primary/30 transition-colors duration-200"
                >
                  <h3 className="font-mono text-sm text-primary uppercase tracking-widest mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedBackgroundWrapper>
    </>
  );
}
