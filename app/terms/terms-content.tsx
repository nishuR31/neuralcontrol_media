'use client';

import { AnimatedBackgroundWrapper } from "@/components/animated-background-wrapper";

export default function TermsContent() {
  return (
    <AnimatedBackgroundWrapper>
      <div className="container max-w-3xl mx-auto px-4 md:px-6 lg:px-8 pt-32 pb-20">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Terms &amp; Conditions
          </h1>
          <p className="text-sm text-foreground/60 font-mono">
            Last updated: January 2025
          </p>
        </div>

        <div className="space-y-8 text-foreground/80 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-primary">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing and using the Neural Control website and content, you
              accept and agree to be bound by the terms and provision of this
              agreement. If you do not agree to abide by the above, please do not
              use this service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-primary">
              2. Educational Content Disclaimer
            </h2>
            <p>
              All content provided by Neural Control is educational and informational
              in nature. Our content is designed to educate and inform about topics
              including dark psychology, artificial intelligence, technology, and
              discipline.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-primary">
              3. No Professional Advice
            </h2>
            <p>
              Our content is NOT professional advice of any kind, including but not
              limited to: financial advice, legal advice, medical advice, or
              psychological treatment. We do not provide personalized recommendations
              or guidance.
            </p>
            <p className="mt-2">
              Do not rely on our content as a substitute for professional consultation
              from qualified experts in the relevant field.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-primary">
              4. Limitation of Liability
            </h2>
            <p>
              Neural Control and its creators shall not be liable for any damages,
              losses, or consequences arising from your use of this website or our
              content, including but not limited to direct, indirect, incidental,
              consequential, or punitive damages.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-primary">
              5. User-Generated Content
            </h2>
            <p>
              Any comments, messages, or information you provide through our contact
              form may be used by Neural Control for business purposes, including
              responding to inquiries and improving our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-primary">
              6. External Links
            </h2>
            <p>
              Our website contains links to external platforms and websites. We are
              not responsible for the content, accuracy, or practices of these
              third-party sites. Use of external links is at your own risk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-primary">
              7. Intellectual Property
            </h2>
            <p>
              All content, including text, videos, graphics, and designs published by
              Neural Control are the property of Neural Control or licensed
              accordingly. You may not reproduce, distribute, or transmit this content
              without explicit permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-primary">
              8. Modification of Terms
            </h2>
            <p>
              Neural Control reserves the right to modify these terms at any time
              without notice. Your continued use of our website following any
              modifications constitutes your acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-primary">9. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance
              with applicable law, and you irrevocably submit to the exclusive
              jurisdiction of the courts located in that area.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-primary">
              10. Contact Information
            </h2>
            <p>
              If you have questions about these terms, please contact us through our
              contact form or social media channels.
            </p>
          </section>
        </div>
      </div>
    </AnimatedBackgroundWrapper>
  );
}
