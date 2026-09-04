import React, { forwardRef } from "react";
import { cn } from "@/utils/helpers";
import { Container, type ContainerSize } from "./Container";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id: string;
  containerSize?: ContainerSize;
  withContainer?: boolean;
  bordered?: boolean;
}

export const Section = forwardRef<HTMLElement, SectionProps>(
  (
    {
      id,
      className,
      containerSize = "7xl",
      withContainer = true,
      bordered = false,
      children,
      ...props
    },
    ref
  ) => {
    const sectionContent = withContainer ? (
      <Container size={containerSize}>{children}</Container>
    ) : (
      children
    );

    return (
      <section
        id={id}
        ref={ref}
        className={cn(
          "relative w-full py-16 md:py-24 lg:py-28 scroll-mt-20",
          bordered && "border-t border-border-subtle",
          className
        )}
        {...props}
      >
        {sectionContent}
      </section>
    );
  }
);

Section.displayName = "Section";
