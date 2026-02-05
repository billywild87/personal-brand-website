import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, type HTMLAttributes } from "react";

const headingVariants = cva("font-bold text-white tracking-tight", {
  variants: {
    level: {
      h1: "text-4xl sm:text-5xl lg:text-6xl",
      h2: "text-3xl sm:text-4xl lg:text-5xl",
      h3: "text-2xl sm:text-3xl",
      h4: "text-xl sm:text-2xl",
      h5: "text-lg sm:text-xl",
      h6: "text-base sm:text-lg",
    },
    variant: {
      default: "",
      gradient:
        "bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent",
      mono: "font-mono",
    },
  },
  defaultVariants: {
    level: "h2",
    variant: "default",
  },
});

type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export interface HeadingProps
  extends HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  as?: HeadingLevel;
}

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, level = "h2", variant, as, children, ...props }, ref) => {
    const Component = as ?? level ?? "h2";
    return (
      <Component
        ref={ref}
        className={cn(headingVariants({ level, variant }), className)}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Heading.displayName = "Heading";

const textVariants = cva("", {
  variants: {
    size: {
      xs: "text-xs",
      sm: "text-sm",
      base: "text-base",
      lg: "text-lg",
      xl: "text-xl",
    },
    color: {
      default: "text-zinc-300",
      muted: "text-zinc-400",
      subtle: "text-zinc-400",
      white: "text-white",
      primary: "text-cyan-400",
      accent: "text-violet-400",
    },
    weight: {
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
    leading: {
      tight: "leading-tight",
      snug: "leading-snug",
      normal: "leading-normal",
      relaxed: "leading-relaxed",
      loose: "leading-loose",
    },
  },
  defaultVariants: {
    size: "base",
    color: "default",
    weight: "normal",
    leading: "normal",
  },
});

export interface TextProps extends VariantProps<typeof textVariants> {
  as?: "p" | "span" | "div" | "label";
  className?: string;
  children?: React.ReactNode;
}

export function Text({
  className,
  size,
  color,
  weight,
  leading,
  as: Component = "p",
  children,
  ...props
}: TextProps & React.HTMLAttributes<HTMLElement>) {
  return (
    <Component
      className={cn(textVariants({ size, color, weight, leading }), className)}
      {...props}
    >
      {children}
    </Component>
  );
}

const codeVariants = cva("font-mono", {
  variants: {
    variant: {
      inline: [
        "px-1.5 py-0.5 rounded-md text-sm",
        "bg-zinc-800/50 text-cyan-400 border border-zinc-700/50",
      ],
      block: [
        "block p-4 rounded-lg text-sm",
        "bg-zinc-800/30 border border-zinc-700/50",
        "overflow-x-auto",
      ],
    },
    size: {
      xs: "text-xs",
      sm: "text-sm",
      base: "text-base",
    },
  },
  defaultVariants: {
    variant: "inline",
    size: "sm",
  },
});

export interface CodeProps
  extends HTMLAttributes<HTMLElement>,
    VariantProps<typeof codeVariants> {}

export const Code = forwardRef<HTMLElement, CodeProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    const Component = variant === "block" ? "pre" : "code";
    return (
      <Component
        ref={ref as React.Ref<HTMLPreElement>}
        className={cn(codeVariants({ variant, size }), className)}
        {...props}
      >
        {variant === "block" ? <code>{children}</code> : children}
      </Component>
    );
  }
);

Code.displayName = "Code";

const labelVariants = cva(
  "font-mono text-xs font-semibold uppercase tracking-wider",
  {
    variants: {
      variant: {
        default: "text-cyan-400",
        muted: "text-zinc-400",
        accent: "text-violet-400",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface LabelProps
  extends HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof labelVariants> {}

export const Label = forwardRef<HTMLSpanElement, LabelProps>(
  ({ className, variant, children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(labelVariants({ variant }), className)}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Label.displayName = "Label";

export interface ProseProps extends HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "base" | "lg";
}

export const Prose = forwardRef<HTMLDivElement, ProseProps>(
  ({ className, size = "base", children, ...props }, ref) => {
    const sizeClasses = {
      sm: "text-sm",
      base: "text-base",
      lg: "text-lg",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "prose prose-invert max-w-none",
          "prose-headings:text-white prose-headings:font-bold",
          "prose-p:text-zinc-300 prose-p:leading-relaxed",
          "prose-a:text-cyan-400 prose-a:no-underline hover:prose-a:underline",
          "prose-strong:text-white prose-strong:font-semibold",
          "prose-code:text-cyan-400 prose-code:bg-zinc-800/50 prose-code:px-1 prose-code:py-0.5 prose-code:rounded",
          "prose-pre:bg-zinc-800/30 prose-pre:border prose-pre:border-zinc-700/50",
          "prose-ul:text-zinc-300 prose-ol:text-zinc-300",
          "prose-li:marker:text-cyan-400",
          sizeClasses[size],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Prose.displayName = "Prose";

export { headingVariants, textVariants, codeVariants, labelVariants };
