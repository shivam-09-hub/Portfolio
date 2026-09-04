import React from "react";
import { Link } from "react-router-dom";
import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { usePageSEO } from "@/hooks/usePageSEO";
import { AlertCircle, Home, FolderGit2, FileText } from "lucide-react";

export function NotFoundPage(): React.JSX.Element {
  usePageSEO({
    title: "404: Page Not Found — Shivam Laxman Gaikwad",
    description: "The requested route does not exist in this multi-page portfolio.",
    path: "/404",
  });

  return (
    <div className="flex-1 flex items-center justify-center py-16 md:py-24">
      <Container size="5xl">
        <Card
          variant="interactive"
          padding="lg"
          className="relative overflow-hidden border-border-subtle bg-surface-card/90 text-center max-w-2xl mx-auto shadow-card dark:shadow-2xl"
        >
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute -top-20 -left-20 w-60 h-60 bg-accent-primary/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col items-center gap-6 py-4">
            <div className="w-16 h-16 rounded-2xl bg-accent-primary/10 border border-accent-primary/30 flex items-center justify-center text-accent-primary shadow-glow">
              <AlertCircle className="w-8 h-8" />
            </div>

            <div className="flex flex-col gap-2">
              <span className="font-mono text-xs text-accent-primary font-bold tracking-widest uppercase">
                [ERR_404_PAGE_NOT_FOUND]
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-text-primary tracking-tight">
                Route Not Discovered
              </h1>
              <p className="text-text-secondary text-sm max-w-md mx-auto leading-relaxed">
                The requested URL path does not exist in this multi-page portfolio. Please check the route or navigate back using the options below.
              </p>
            </div>

            {/* Quick Action Navigation Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto pt-2">
              <Link to="/" className="w-full sm:w-auto">
                <Button
                  variant="primary"
                  size="md"
                  leftIcon={<Home className="w-4 h-4" />}
                  className="w-full sm:w-auto shadow-glow font-mono text-xs min-h-[44px]"
                >
                  Return to Home
                </Button>
              </Link>

              <Link to="/projects" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="md"
                  leftIcon={<FolderGit2 className="w-4 h-4" />}
                  className="w-full sm:w-auto font-mono text-xs min-h-[44px]"
                >
                  Explore Projects
                </Button>
              </Link>

              <Link to="/resume" className="w-full sm:w-auto">
                <Button
                  variant="ghost"
                  size="md"
                  leftIcon={<FileText className="w-4 h-4" />}
                  className="w-full sm:w-auto font-mono text-xs min-h-[44px]"
                >
                  View Resume
                </Button>
              </Link>
            </div>
          </div>
        </Card>
      </Container>
    </div>
  );
}

export default NotFoundPage;
