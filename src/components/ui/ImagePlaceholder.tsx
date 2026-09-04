import React from "react";
import { cn } from "@/utils/helpers";
import { Image as ImageIcon } from "lucide-react";

export type ImageAspectRatio = "16:9" | "16:10" | "4:3" | "1:1";

export interface ImagePlaceholderProps extends React.HTMLAttributes<HTMLDivElement> {
  aspectRatio?: ImageAspectRatio;
  label?: string;
  category?: string;
}

export function ImagePlaceholder({
  className,
  aspectRatio = "16:9",
  label = "Image to be provided",
  category,
  ...props
}: ImagePlaceholderProps): React.JSX.Element {
  const aspectStyles: Record<ImageAspectRatio, string> = {
    "16:9": "aspect-video",
    "16:10": "aspect-[16/10]",
    "4:3": "aspect-[4/3]",
    "1:1": "aspect-square",
  };

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-xl border border-border-subtle bg-bg-secondary/70 flex flex-col items-center justify-center p-6 text-center select-none group",
        aspectStyles[aspectRatio],
        className
      )}
      {...props}
    >
      {/* Ambient background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:2rem_2rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30" />

      {/* Center Icon & Content */}
      <div className="relative z-10 flex flex-col items-center gap-2 max-w-[80%]">
        <div className="w-10 h-10 rounded-lg bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center text-accent-primary group-hover:scale-105 transition-transform duration-200">
          <ImageIcon className="w-5 h-5" />
        </div>
        {category && (
          <span className="font-mono text-[10px] tracking-wider text-accent-primary uppercase px-2 py-0.5 rounded bg-accent-primary/10 border border-accent-primary/20">
            {category}
          </span>
        )}
        <span className="text-xs font-medium text-text-secondary line-clamp-2">
          {label}
        </span>
        <span className="font-mono text-[10px] text-text-muted">
          [Pending Asset]
        </span>
      </div>
    </div>
  );
}
