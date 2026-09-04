import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Register ScrollTrigger and useGSAP plugin once
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
  
  // Set global GSAP defaults
  gsap.defaults({
    ease: "power3.out",
    duration: 0.8,
  });
}

export { gsap, ScrollTrigger, useGSAP };
