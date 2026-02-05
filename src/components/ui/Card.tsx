import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, type HTMLAttributes } from "react";

const cardVariants = cva("rounded-lg border", {
  variants: {
    variant: {
      default: "border-zinc-700/60 bg-zinc-800/30",
      gradient:
        "border-zinc-700 bg-linear-to-br from-zinc-800/40 to-zinc-900/40 shadow-lg",
      accent: "border-cyan-500/30 bg-cyan-500/5",
      accentViolet: "border-violet-500/30 bg-violet-500/5",
      interactive:
        "border-zinc-700/60 bg-zinc-800/30 transition-all hover:border-cyan-500/30 hover:bg-zinc-800/50",
      interactiveViolet:
        "border-zinc-700/60 bg-zinc-800/30 transition-all hover:border-violet-500/30 hover:bg-zinc-800/50",
    },
    padding: {
      none: "p-0",
      sm: "p-3 sm:p-4",
      md: "p-4 sm:p-6",
      lg: "p-5 sm:p-8",
    },
  },
  defaultVariants: {
    variant: "default",
    padding: "md",
  },
});

export interface CardProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  as?: "div" | "article" | "section";
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    { className, variant, padding, as: Component = "div", children, ...props },
    ref
  ) => {
    return (
      <Component
        ref={ref}
        className={cn(cardVariants({ variant, padding }), className)}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Card.displayName = "Card";

export { Card, cardVariants };
