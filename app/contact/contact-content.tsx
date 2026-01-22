'use client';

import React from "react"

import { useState } from "react";
import { AnimatedBackgroundWrapper } from "@/components/animated-background-wrapper";

export default function ContactContent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
      setFormData({ name: "", email: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }, 500);
  };

  return (
    <AnimatedBackgroundWrapper>
      <div className="container max-w-2xl mx-auto px-4 md:px-6 lg:px-8 pt-32 pb-20">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-lg text-foreground/70">
            Have a question or feedback? We'd like to hear from you. General inquiries only.
          </p>
        </div>

        {/* Form */}
        <div className="max-w-xl mx-auto">
          {submitted ? (
            <div className="p-8 border border-primary/30 rounded bg-primary/5 text-center mb-8">
              <p className="text-lg font-semibold text-primary mb-2">
                Message Received
              </p>
              <p className="text-foreground/70">
                Thank you for reaching out. We'll get back to you as soon as possible.
              </p>
            </div>
          ) : null}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-mono text-primary uppercase tracking-widest mb-3"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-foreground/5 border border-border/50 rounded focus:border-primary focus:outline-none transition-colors duration-200 text-foreground placeholder-foreground/40"
                placeholder="Your name"
              />
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-mono text-primary uppercase tracking-widest mb-3"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-foreground/5 border border-border/50 rounded focus:border-primary focus:outline-none transition-colors duration-200 text-foreground placeholder-foreground/40"
                placeholder="your@email.com"
              />
            </div>

            {/* Message Field */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-mono text-primary uppercase tracking-widest mb-3"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-foreground/5 border border-border/50 rounded focus:border-primary focus:outline-none transition-colors duration-200 text-foreground placeholder-foreground/40 resize-none"
                placeholder="Your message here..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full px-6 py-3 border border-primary text-primary font-mono text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>

          {/* Info */}
          <div className="mt-12 p-6 border border-border/50 rounded bg-foreground/2">
            <p className="text-sm text-foreground/70">
              <strong>Note:</strong> This form is for general inquiries only. For
              partnership opportunities or other business matters, please include
              relevant details in your message and we'll direct you to the
              appropriate contact.
            </p>
          </div>
        </div>
      </div>
    </AnimatedBackgroundWrapper>
  );
}
