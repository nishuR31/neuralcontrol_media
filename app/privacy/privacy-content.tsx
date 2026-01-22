'use client';

import { AnimatedBackgroundWrapper } from "@/components/animated-background-wrapper";

export default function PrivacyContent() {
  return (
    <AnimatedBackgroundWrapper>
      <div className="container max-w-3xl mx-auto px-4 md:px-6 lg:px-8 pt-32 pb-20">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-sm text-foreground/60 font-mono">
            Last updated: January 2025
          </p>
        </div>

        <div className="space-y-8 text-foreground/80 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-primary">
              1. Introduction
            </h2>
            <p>
              Neural Control ("we," "us," "our," or "Company") respects your privacy.
              This Privacy Policy explains how we collect, use, disclose, and safeguard
              your information when you visit our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-primary">
              2. Information We Collect
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Contact Form Information</h3>
                <p>
                  When you submit our contact form, we collect your name, email
                  address, and message content. This information is used only to
                  respond to your inquiry.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">
                  Automatically Collected Information
                </h3>
                <p>
                  Our website may use analytics tools to track general usage patterns,
                  including page views, referrer information, and browser type. This
                  data is aggregated and does not identify individuals.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Cookies</h3>
                <p>
                  We may use cookies and similar tracking technologies to enhance your
                  experience. You can control cookie settings through your browser.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-primary">
              3. How We Use Your Information
            </h2>
            <ul className="space-y-2">
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>To respond to contact form submissions</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>To improve website functionality and user experience</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>To analyze website traffic and performance</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>To comply with legal obligations</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-primary">
              4. Third-Party Services
            </h2>
            <p>
              Our website may contain links to external platforms (YouTube, Instagram,
              Linktree). We are not responsible for the privacy practices of these
              third-party services. Please review their privacy policies separately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-primary">
              5. Data Security
            </h2>
            <p>
              We implement reasonable security measures to protect your information.
              However, no method of transmission over the Internet is completely secure.
              We cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-primary">
              6. Your Rights
            </h2>
            <p>
              Depending on your location, you may have rights regarding your personal
              information, including the right to access, correct, or delete your data.
              Contact us if you wish to exercise these rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-primary">
              7. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy periodically. We will notify you of
              significant changes by posting a new version on this page with an updated
              "Last Updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-primary">8. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please use our contact
              form or reach out through our social media channels.
            </p>
          </section>
        </div>
      </div>
    </AnimatedBackgroundWrapper>
  );
}
