import React from "react";
import { cn } from "@/utils/helpers";

export type ContainerSize = "7xl" | "5xl" | "3xl" | "full";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: ContainerSize;
}

export function Container({
  className,
  size = "7xl",
  children,
  ...props
}: ContainerProps): React.JSX.Element {
  const sizeStyles: Record<ContainerSize, string> = {
    "7xl": "max-w-7xl",
    "5xl": "max-w-5xl",
    "3xl": "max-w-3xl",
    full: "w-full",
  };

  return (
    <div
      className={cn(
        "w-full mx-auto px-4 sm:px-6 lg:px-8",
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
