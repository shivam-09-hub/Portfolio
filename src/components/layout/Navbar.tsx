import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { navigationItems } from "@/data/navigation";
import { personalData } from "@/data/personal";
import { Container } from "./Container";
import { Button } from "@/components/ui/Button";
import { useIsScrolled } from "@/hooks/useScrollPosition";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Menu, X, FileText, ArrowUpRight } from "lucide-react";
import { cn } from "@/utils/helpers";

export interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps): React.JSX.Element {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isScrolled = useIsScrolled(20);
  const location = useLocation();

  const mobileDrawerRef = useRef<HTMLDivElement>(null);
  const hamburgerButtonRef = useRef<HTMLButtonElement>(null);

  // Helper to determine active state
  const isRouteActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  // Close mobile menu on window resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Handle Escape key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
        hamburgerButtonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Skip to main content accessibility link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-accent-primary focus:text-bg-primary focus:font-semibold focus:rounded-button focus:shadow-glow focus:outline-none"
      >
        Skip to main content
      </a>

      {/* Main Sticky Header */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "glass-panel border-b border-border-subtle shadow-card py-2.5 sm:py-3"
            : "bg-bg-primary/80 backdrop-blur-md border-b border-border-subtle/50 py-3.5 sm:py-4",
          className
        )}
      >
        <Container size="7xl">
          <div className="flex items-center justify-between">
            {/* Brand Monogram & Name -> Links to / */}
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center space-x-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary rounded-lg p-1 -ml-1 transition-transform duration-200 active:scale-95"
              aria-label={`${personalData.name} - Home`}
            >
              <span className="w-8 h-8 rounded-lg bg-accent-primary/10 border border-accent-primary/30 flex items-center justify-center font-mono font-bold text-accent-primary text-sm shadow-glow group-hover:border-accent-primary/60 transition-colors duration-200">
                SG
              </span>
              <div className="flex flex-col min-w-0">
                <span className="font-semibold tracking-tight text-text-primary text-xs sm:text-base truncate max-w-[150px] xs:max-w-[190px] sm:max-w-none group-hover:text-accent-primary transition-colors duration-200">
                  {personalData.name}
                </span>
                <span className="text-[10px] font-mono text-text-muted hidden sm:block truncate">
                  BCA Aspiring Data Scientist
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav
              className="hidden lg:flex items-center space-x-0.5 xl:space-x-1"
              aria-label="Desktop Navigation"
            >
              <ul className="flex items-center space-x-0.5 xl:space-x-1">
                {navigationItems
                  .filter((item) => !item.isAction)
                  .map((item) => {
                    const active = isRouteActive(item.path);
                    return (
                      <li key={item.id}>
                        <Link
                          to={item.path}
                          className={cn(
                            "relative px-2 xl:px-2.5 py-1.5 rounded-lg text-xs xl:text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary group flex flex-col items-center whitespace-nowrap",
                            active
                              ? "text-accent-primary font-semibold bg-accent-primary/10 border border-accent-primary/25"
                              : "text-text-secondary hover:text-text-primary hover:bg-slate-200/60 dark:hover:bg-white/5 border border-transparent"
                          )}
                          aria-current={active ? "page" : undefined}
                        >
                          <span>{item.label}</span>
                          {/* Active glowing micro-dot indicator */}
                          <span
                            className={cn(
                              "absolute bottom-0.5 w-1 h-1 rounded-full bg-accent-primary transition-all duration-300 shadow-[0_0_8px_rgba(56,189,248,0.8)]",
                              active
                                ? "opacity-100 scale-100"
                                : "opacity-0 scale-0 group-hover:opacity-40 group-hover:scale-75"
                            )}
                            aria-hidden="true"
                          />
                        </Link>
                      </li>
                    );
                  })}
              </ul>
            </nav>

            {/* Desktop Actions (ThemeToggle + Resume Button) + Mobile Hamburger Button */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              {/* Theme Toggle Button */}
              <ThemeToggle />

              {/* Resume CTA Button (Desktop & Tablet) */}
              <div className="hidden sm:block">
                <Link to="/resume">
                  <Button
                    variant="primary"
                    size="sm"
                    leftIcon={<FileText className="w-3.5 h-3.5" />}
                    className="shadow-glow text-xs px-3 py-1.5"
                  >
                    Resume
                  </Button>
                </Link>
              </div>

              {/* Mobile Hamburger Toggle Button */}
              <button
                ref={hamburgerButtonRef}
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden w-11 h-11 min-w-[44px] min-h-[44px] rounded-lg border border-border-subtle bg-bg-card/80 hover:bg-bg-card text-text-primary flex items-center justify-center transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary shrink-0 shadow-sm"
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-nav-drawer"
                aria-label={mobileMenuOpen ? "Close menu" : "Open navigation menu"}
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5 text-accent-primary" aria-hidden="true" />
                ) : (
                  <Menu className="w-5 h-5 text-text-primary" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Mobile Drawer Backdrop Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/70 backdrop-blur-sm lg:hidden transition-opacity duration-300",
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Slide-Out Drawer Navigation */}
      <aside
        id="mobile-nav-drawer"
        ref={mobileDrawerRef}
        className={cn(
          "fixed top-0 right-0 bottom-0 z-50 w-[84%] max-w-sm bg-bg-secondary border-l border-border-subtle shadow-2xl lg:hidden flex flex-col transition-transform duration-300 ease-smooth pt-[env(safe-area-inset-top,0px)] pb-[env(safe-area-inset-bottom,0px)]",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
        role="dialog"
        aria-modal="true"
        aria-hidden={!mobileMenuOpen}
        aria-label="Mobile Navigation Menu"
      >
        {/* Drawer Header */}
        <div className="p-4 sm:p-5 border-b border-border-subtle flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <span className="w-7 h-7 rounded-md bg-accent-primary/10 border border-accent-primary/30 flex items-center justify-center font-mono font-bold text-accent-primary text-xs" aria-hidden="true">
              SG
            </span>
            <span className="font-semibold text-sm text-text-primary">
              Portfolio Routes
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-md border border-border-subtle hover:bg-slate-200/60 dark:hover:bg-white/5 text-text-secondary hover:text-text-primary flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary"
              aria-label="Close menu"
            >
              <X className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Drawer Navigation List */}
        <nav className="flex-1 overflow-y-auto p-4 sm:p-5" aria-label="Mobile Menu Links">
          <ul className="flex flex-col space-y-1.5">
            {navigationItems
              .filter((item) => !item.isAction)
              .map((item, index) => {
                const active = isRouteActive(item.path);
                return (
                  <li key={item.id}>
                    <Link
                      to={item.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        "flex items-center justify-between px-3.5 py-3 rounded-lg text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary min-h-[48px]",
                        active
                          ? "bg-accent-primary/10 text-accent-primary font-semibold border border-accent-primary/25"
                          : "text-text-secondary hover:text-text-primary hover:bg-slate-200/60 dark:hover:bg-white/5"
                      )}
                      aria-current={active ? "page" : undefined}
                    >
                      <div className="flex items-center space-x-3">
                        <span className="font-mono text-xs text-text-muted">
                          0{index + 1}.
                        </span>
                        <span>{item.label}</span>
                      </div>
                      {active && (
                        <span className="w-2 h-2 rounded-full bg-accent-primary shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
                      )}
                    </Link>
                  </li>
                );
              })}
          </ul>
        </nav>

        {/* Drawer Footer Actions */}
        <div className="p-4 sm:p-5 border-t border-border-subtle flex flex-col gap-3 bg-bg-primary/50">
          <Link
            to="/resume"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full"
          >
            <Button
              variant="primary"
              size="md"
              leftIcon={<FileText className="w-4 h-4" />}
              rightIcon={<ArrowUpRight className="w-4 h-4" />}
              className="w-full justify-center shadow-glow min-h-[44px]"
            >
              View / Download Resume
            </Button>
          </Link>
          <p className="text-[11px] text-center font-mono text-text-muted">
            Shivam Laxman Gaikwad • 2026
          </p>
        </div>
      </aside>
    </>
  );
}
