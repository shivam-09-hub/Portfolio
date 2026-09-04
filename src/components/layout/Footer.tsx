import React from "react";
import { Link } from "react-router-dom";
import { personalData } from "@/data/personal";
import { navigationItems } from "@/data/navigation";
import { Container } from "./Container";
import { ChevronUp, Github, Instagram, Linkedin, Mail } from "lucide-react";

export function Footer(): React.JSX.Element {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-10 w-full border-t border-border-subtle py-8 bg-bg-secondary/50 text-text-secondary">
      <Container size="7xl">
        <div className="flex flex-col gap-6">
          {/* Top Row: Brand & Quick Navigation */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-border-subtle/50">
            {/* Brand and Description */}
            <div className="flex items-center space-x-3">
              <span className="w-8 h-8 rounded-lg bg-accent-primary/10 border border-accent-primary/30 flex items-center justify-center font-mono font-bold text-accent-primary text-xs shadow-glow">
                SG
              </span>
              <div className="flex flex-col text-left">
                <span className="font-semibold text-text-primary text-sm">
                  {personalData.name}
                </span>
                <span className="text-[11px] font-mono text-text-muted">
                  BCA Student & Aspiring Data Scientist
                </span>
              </div>
            </div>

            {/* Navigation Links */}
            <nav aria-label="Footer Navigation">
              <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs font-mono">
                {navigationItems.map((item) => (
                  <li key={item.id}>
                    <Link
                      to={item.path}
                      className="text-text-muted hover:text-accent-primary transition-colors py-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-primary rounded"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Social & Contact Links */}
            <div className="flex items-center space-x-2">
              <a
                href="https://github.com/shivam-09-hub"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-border-subtle bg-surface-card flex items-center justify-center text-text-muted hover:text-accent-primary hover:border-accent-primary/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary"
                aria-label="Visit Shivam's GitHub Profile"
                title="GitHub: shivam-09-hub"
              >
                <Github className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href="https://www.linkedin.com/in/shivamgaikwad09/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-border-subtle bg-surface-card flex items-center justify-center text-text-muted hover:text-accent-primary hover:border-accent-primary/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary"
                aria-label="Connect with Shivam on LinkedIn"
                title="LinkedIn: shivamgaikwad09"
              >
                <Linkedin className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href="https://www.instagram.com/__shivamgaikwad?utm_source=ig_web_button_share_sheet&igsi=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-border-subtle bg-surface-card flex items-center justify-center text-text-muted hover:text-accent-primary hover:border-accent-primary/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary"
                aria-label="Follow Shivam on Instagram"
                title="Instagram: __shivamgaikwad"
              >
                <Instagram className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href="mailto:shivamlgaikwad09@gmail.com"
                className="w-9 h-9 rounded-lg border border-border-subtle bg-surface-card flex items-center justify-center text-text-muted hover:text-accent-primary hover:border-accent-primary/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary"
                aria-label="Send Email to Shivam"
                title="Email: shivamlgaikwad09@gmail.com"
              >
                <Mail className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Bottom Row: Copyright & Back to Top */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-text-muted">
            <p className="text-center sm:text-left">
              © {new Date().getFullYear()} {personalData.name}. All rights reserved. • Multi-Page Architecture
            </p>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-4 py-2 min-h-[44px] rounded-button text-xs font-mono text-text-secondary hover:text-accent-primary hover:bg-slate-200/60 dark:hover:bg-white/5 border border-border-subtle transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary"
              aria-label="Back to top of page"
            >
              <ChevronUp className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>
      </Container>
    </footer>
  );
}
