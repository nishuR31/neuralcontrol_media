'use client';

import React from "react"

import { GL } from "./gl";
import { useState } from "react";

export function AnimatedBackgroundWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [hovering, setHovering] = useState(false);

  return (
    <div className="relative min-h-screen">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <GL hovering={hovering} />
      </div>

      {/* Content Overlay */}
      <div
        className="relative z-10 min-h-screen"
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        {children}
      </div>
    </div>
  );
}
