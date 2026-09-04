import { useEffect } from "react";

export interface PageSEOProps {
  title: string;
  description: string;
  path?: string;
}

/**
 * usePageSEO
 *
 * Dynamically synchronizes document title, standard SEO meta tags,
 * Open Graph social tags, Twitter Card tags, and canonical link
 * upon route change.
 */
export function usePageSEO({ title, description, path = "" }: PageSEOProps): void {
  useEffect(() => {
    // 1. Update Document Title
    document.title = title;

    // Helper to safely find or create a meta tag
    const updateOrCreateMeta = (attrName: string, attrValue: string, content: string) => {
      let element = document.querySelector(`meta[${attrName}="${attrValue}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attrName, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // 2. Meta Description
    updateOrCreateMeta("name", "description", description);

    // 3. Open Graph Metadata
    updateOrCreateMeta("property", "og:title", title);
    updateOrCreateMeta("property", "og:description", description);
    updateOrCreateMeta("property", "og:type", "website");
    updateOrCreateMeta("property", "og:site_name", "Shivam Laxman Gaikwad Portfolio");

    // 4. Twitter Card Metadata
    updateOrCreateMeta("name", "twitter:card", "summary");
    updateOrCreateMeta("name", "twitter:title", title);
    updateOrCreateMeta("name", "twitter:description", description);

    // 5. Canonical URL Link
    if (typeof window !== "undefined") {
      const canonicalUrl = `${window.location.origin}${path}`;
      updateOrCreateMeta("property", "og:url", canonicalUrl);

      let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
      if (!canonicalLink) {
        canonicalLink = document.createElement("link");
        canonicalLink.setAttribute("rel", "canonical");
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute("href", canonicalUrl);
    }
  }, [title, description, path]);
}
