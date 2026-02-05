import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, type HTMLAttributes } from "react";

const sectionTitleVariants = cva(
  "font-mono font-semibold uppercase tracking-wider",
  {
    variants: {
      variant: {
        default: "text-primary",
        muted: "text-zinc-400",
      },
      size: {
        sm: "text-[10px]",
        md: "text-xs",
        lg: "text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export interface SectionTitleProps
  extends HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof sectionTitleVariants> {
  as?: "h2" | "h3" | "h4" | "p" | "span";
}

const SectionTitle = forwardRef<HTMLHeadingElement, SectionTitleProps>(
  ({ className, variant, size, as: Component = "h2", ...props }, ref) => {
    return (
      <Component
        ref={ref as React.Ref<HTMLHeadingElement>}
        className={cn(sectionTitleVariants({ variant, size }), className)}
        {...props}
      />
    );
  }
);

SectionTitle.displayName = "SectionTitle";

export { SectionTitle, sectionTitleVariants };
