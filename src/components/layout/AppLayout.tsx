import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { AmbientPointerGlow } from "./AmbientPointerGlow";
import { ScrollToTop } from "@/components/motion/ScrollToTop";
import { PageTransition } from "@/components/motion/PageTransition";
import { RouteLoadingFallback } from "@/components/ui/RouteLoadingFallback";

export function AppLayout(): React.JSX.Element {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary flex flex-col font-sans selection:bg-accent-primary/20 selection:text-accent-primary">
      {/* Background Ambient Radial Glows (GPU Accelerated & Composited) */}
      <div
        className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none transform-gpu"
        style={{ contain: "strict" }}
        aria-hidden="true"
      >
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-accent-primary/10 rounded-full blur-3xl will-change-transform transform-gpu" />
        <div className="absolute top-1/3 -right-40 w-96 h-96 bg-accent-primary/5 rounded-full blur-3xl will-change-transform transform-gpu" />
        <div className="absolute bottom-10 left-1/3 w-96 h-96 bg-accent-primary/5 rounded-full blur-3xl will-change-transform transform-gpu" />
      </div>

      {/* Automatic Scroll-To-Top on Route Navigation */}
      <ScrollToTop />

      {/* Subtle Interactive Ambient Pointer Spotlight */}
      <AmbientPointerGlow />

      {/* Persistent Global Header */}
      <Navbar />

      {/* Main Content Viewport Outlet with Lazy-Route Suspense */}
      <main id="main-content" className="relative z-10 flex-1 flex flex-col pt-16 md:pt-20">
        <PageTransition>
          <Suspense fallback={<RouteLoadingFallback />}>
            <Outlet />
          </Suspense>
        </PageTransition>
      </main>

      {/* Persistent Global Footer */}
      <Footer />
    </div>
  );
}
