import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, type HTMLAttributes } from "react";

const iconBoxVariants = cva(
  "flex shrink-0 items-center justify-center rounded-lg border border-zinc-700 bg-zinc-800/50 text-zinc-400 transition-all",
  {
    variants: {
      size: {
        sm: "h-8 w-8",
        md: "h-10 w-10",
        lg: "h-12 w-12",
      },
      interactive: {
        true: "group-hover:border-cyan-500/50 group-hover:text-cyan-400 group-hover:shadow-[0_0_12px_rgba(34,211,238,0.3)]",
        false: "",
      },
    },
    defaultVariants: {
      size: "md",
      interactive: false,
    },
  }
);

export interface IconBoxProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof iconBoxVariants> {}

const IconBox = forwardRef<HTMLDivElement, IconBoxProps>(
  ({ className, size, interactive, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(iconBoxVariants({ size, interactive }), className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

IconBox.displayName = "IconBox";

export { IconBox, iconBoxVariants };
