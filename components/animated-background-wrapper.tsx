// "use client";

// import React from "react";

// import { GL } from "./gl";
// import { useState } from "react";

// export function AnimatedBackgroundWrapper({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const [hovering, setHovering] = useState(false);

//   return (
//     <div className="relative w-full">
//       <div className="fixed inset-0 z-0">
//         <GL hovering={hovering} />
//       </div>
//       <div
//         className="relative z-10 w-full"
//         onMouseEnter={() => setHovering(true)}
//         onMouseLeave={() => setHovering(false)}
//       >
//         {children}
//       </div>
//     </div>
//   );
// }


"use client";

import React from "react";

import { GL } from "./gl";
import { useState } from "react";

export function AnimatedBackgroundWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [hovering, setHovering] = useState(false);

  return (
    <div className="relative w-full">
      {/* Background - pointer-events-none allows clicks through */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <GL hovering={hovering} />
      </div>
      
      {/* Content with proper stacking */}
      <div
        className="relative z-10 w-full pointer-events-auto"
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        {children}
      </div>
    </div>
  );
}