'use client';

import { AnimatedBackgroundWrapper } from "@/components/animated-background-wrapper";

export default function AboutContent() {
  return (
    <AnimatedBackgroundWrapper>
      <div className="container max-w-4xl mx-auto px-4 md:px-6 lg:px-8 pt-32">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Neural Control</h1>
          <p className="text-lg text-foreground/70">
            A faceless content brand dedicated to understanding how minds work and how systems shape behavior.
          </p>
        </div>

        {/* Mission */}
        <section className="mb-16 space-y-6">
          <h2 className="text-2xl font-bold">Our Mission</h2>
          <p className="text-foreground/70 leading-relaxed">
            Neural Control exists to cut through the noise. We create short, sharp insights into complex topics: dark psychology, artificial intelligence, technology, and discipline. No marketing speak. No entertainment fluff. No faces. Just information.
          </p>
          <p className="text-foreground/70 leading-relaxed">
            Our content is distributed across YouTube and Instagram as short-form videos, reaching audiences who want to understand the systems that influence their behavior and the world around them.
          </p>
        </section>

        {/* Core Topics */}
        <section className="mb-16 space-y-6">
          <h2 className="text-2xl font-bold">What We Cover</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Dark Psychology",
                points: [
                  "Manipulation and persuasion techniques",
                  "Cognitive biases and mental shortcuts",
                  "Social influence and conformity",
                  "Motivation and behavior modification"
                ]
              },
              {
                title: "Artificial Intelligence",
                points: [
                  "How AI systems actually work",
                  "Limitations and misconceptions",
                  "AI in society and ethics",
                  "The future of AI technology"
                ]
              },
              {
                title: "Technology & Behavior",
                points: [
                  "How algorithms shape human behavior",
                  "Digital infrastructure and control",
                  "Social media psychology",
                  "Technology addiction and design"
                ]
              },
              {
                title: "Discipline & Systems",
                points: [
                  "Building habits and systems",
                  "Environment design",
                  "Motivation vs. structure",
                  "Execution and accountability"
                ]
              }
            ].map((section, i) => (
              <div key={i} className="border border-border/50 p-6 rounded">
                <h3 className="font-mono text-sm text-primary uppercase tracking-widest mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.points.map((point, j) => (
                    <li key={j} className="text-sm text-foreground/70 flex gap-2">
                      <span className="text-primary/60">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Content Philosophy */}
        <section className="mb-16 space-y-6">
          <h2 className="text-2xl font-bold">Our Approach</h2>
          <div className="space-y-4">
            <div className="border-l-2 border-primary pl-6">
              <h3 className="font-bold mb-2">No Faces. No Hype.</h3>
              <p className="text-foreground/70">
                We focus on ideas, not personalities. No personal branding. No attention-seeking. The content speaks for itself.
              </p>
            </div>
            <div className="border-l-2 border-primary pl-6">
              <h3 className="font-bold mb-2">Educational, Not Entertainment</h3>
              <p className="text-foreground/70">
                Our goal is to inform and explain. We avoid sensationalism, clickbait, and unnecessary dramatization.
              </p>
            </div>
            <div className="border-l-2 border-primary pl-6">
              <h3 className="font-bold mb-2">Short Form, Deep Content</h3>
              <p className="text-foreground/70">
                Complex ideas broken down into short, digestible videos. Each piece is designed to educate in minutes, not hours.
              </p>
            </div>
            <div className="border-l-2 border-primary pl-6">
              <h3 className="font-bold mb-2">Informational, Not Advisory</h3>
              <p className="text-foreground/70">
                We provide information and education. We do not offer professional advice, financial guidance, or personal recommendations.
              </p>
            </div>
          </div>
        </section>

        {/* Audience */}
        <section className="border-t border-border/50 pt-16 space-y-6 pb-20">
          <h2 className="text-2xl font-bold">For Whom?</h2>
          <p className="text-foreground/70 leading-relaxed">
            Neural Control is for people who want to understand how the world works, not how to game it for personal gain. We serve professionals, students, curious minds, and anyone interested in the intersection of psychology, technology, and human behavior.
          </p>
          <p className="text-foreground/70 leading-relaxed">
            If you're looking for personal development hype, productivity hacks, or get-rich-quick schemes, this isn't the place. If you want to understand systems, psychology, and technology at a deeper level, welcome.
          </p>
        </section>
      </div>
    </AnimatedBackgroundWrapper>
  );
}
