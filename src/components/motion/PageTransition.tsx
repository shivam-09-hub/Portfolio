import React from "react";
import { useLocation } from "react-router-dom";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface PageTransitionProps {
  children: React.ReactNode;
}

export function PageTransition({ children }: PageTransitionProps): React.JSX.Element {
  const location = useLocation();
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return <div className="w-full flex-1 flex flex-col">{children}</div>;
  }

  return (
    <div
      key={location.pathname}
      className="w-full flex-1 flex flex-col animate-fade-in transition-all duration-200 ease-out"
    >
      {children}
    </div>
  );
}
