import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, type HTMLAttributes } from "react";

const badgeVariants = cva(
  "inline-flex items-center rounded-md border font-mono",
  {
    variants: {
      variant: {
        default: "border-zinc-700/60 bg-zinc-800/50 text-zinc-400",
        muted: "border-zinc-700/40 bg-zinc-800/30 text-zinc-400",
        primary: "border-primary-500/30 bg-primary-500/10 text-primary",
        accent: "border-secondary/30 bg-secondary/10 text-secondary-400",
      },
      size: {
        sm: "px-1.5 py-0.5 text-[10px]",
        md: "px-2 py-0.5 text-xs",
        lg: "px-2.5 py-1 text-xs",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export interface BadgeProps
  extends HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(badgeVariants({ variant, size }), className)}
        {...props}
      />
    );
  }
);

Badge.displayName = "Badge";

export { Badge, badgeVariants };
