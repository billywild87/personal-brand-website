"use client";

import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import NextLink, { type LinkProps as NextLinkProps } from "next/link";
import { forwardRef, type AnchorHTMLAttributes, type ReactNode } from "react";
import { ArrowUpRightIcon, ExternalLinkIcon } from "@/components/icons";

const linkVariants = cva("inline-flex items-center gap-1 transition-all duration-300", {
  variants: {
    variant: {
      default: "text-cyan-400 hover:text-cyan-300",
      muted: "text-zinc-400 hover:text-zinc-200",
      subtle: "text-zinc-400 hover:text-zinc-200",
      white: "text-white hover:text-cyan-400",
      nav: [
        "text-zinc-400 hover:text-zinc-100",
        "relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0",
        "after:bg-cyan-400 after:transition-all after:duration-300",
        "hover:after:w-full",
      ],
      button: [
        "px-4 py-2 rounded-lg",
        "bg-zinc-800/50 border border-zinc-700/60",
        "text-zinc-300 hover:text-cyan-400",
        "hover:border-cyan-500/30 hover:bg-zinc-800",
      ],
    },
    size: {
      sm: "text-sm",
      base: "text-base",
      lg: "text-lg",
    },
    underline: {
      always: "underline underline-offset-4",
      hover: "hover:underline underline-offset-4",
      none: "",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "base",
    underline: "none",
  },
});

// INTERNAL LINK (Next.js Link)

export interface InternalLinkProps
  extends Omit<NextLinkProps, "href">,
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">,
    VariantProps<typeof linkVariants> {
  href: string;
  children: ReactNode;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

export const Link = forwardRef<HTMLAnchorElement, InternalLinkProps>(
  (
    {
      className,
      variant,
      size,
      underline,
      href,
      children,
      leftIcon,
      rightIcon,
      ...props
    },
    ref
  ) => {
    return (
      <NextLink
        ref={ref}
        href={href}
        className={cn(linkVariants({ variant, size, underline }), className)}
        {...props}
      >
        {leftIcon}
        {children}
        {rightIcon}
      </NextLink>
    );
  }
);

Link.displayName = "Link";

// EXTERNAL LINK

export interface ExternalLinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkVariants> {
  href: string;
  children: ReactNode;
  leftIcon?: ReactNode;
  showExternalIcon?: boolean;
}

export const ExternalLink = forwardRef<HTMLAnchorElement, ExternalLinkProps>(
  (
    {
      className,
      variant,
      size,
      underline,
      href,
      children,
      leftIcon,
      showExternalIcon = true,
      ...props
    },
    ref
  ) => {
    return (
      <a
        ref={ref}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(linkVariants({ variant, size, underline }), className)}
        {...props}
      >
        {leftIcon}
        {children}
        {showExternalIcon && (
          <ArrowUpRightIcon
            size={14}
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        )}
      </a>
    );
  }
);

ExternalLink.displayName = "ExternalLink";

// NAV LINK (for navigation with active state)

export interface NavLinkProps extends InternalLinkProps {
  isActive?: boolean;
}

export const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ className, isActive, children, ...props }, ref) => {
    return (
      <Link
        ref={ref}
        variant="nav"
        className={cn(
          isActive && "text-cyan-400 after:w-full",
          className
        )}
        {...props}
      >
        {children}
      </Link>
    );
  }
);

NavLink.displayName = "NavLink";

// ANCHOR LINK (for in-page navigation)

export interface AnchorLinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkVariants> {
  href: string;
  children: ReactNode;
  offset?: number;
}

export const AnchorLink = forwardRef<HTMLAnchorElement, AnchorLinkProps>(
  (
    { className, variant, size, underline, href, children, offset = 80, ...props },
    ref
  ) => {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      const id = href.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        const top = element.offsetTop - offset;
        window.scrollTo({ top, behavior: "smooth" });
      }
    };

    return (
      <a
        ref={ref}
        href={href}
        onClick={handleClick}
        className={cn(linkVariants({ variant, size, underline }), className)}
        {...props}
      >
        {children}
      </a>
    );
  }
);

AnchorLink.displayName = "AnchorLink";

// SOCIAL LINK

export interface SocialLinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  icon: ReactNode;
  label: string;
  showLabel?: boolean;
}

export const SocialLink = forwardRef<HTMLAnchorElement, SocialLinkProps>(
  ({ className, href, icon, label, showLabel = false, ...props }, ref) => {
    return (
      <a
        ref={ref}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className={cn(
          "flex items-center gap-2 text-zinc-400 transition-colors hover:text-cyan-400",
          className
        )}
        {...props}
      >
        {icon}
        {showLabel && <span>{label}</span>}
      </a>
    );
  }
);

SocialLink.displayName = "SocialLink";

export { linkVariants };
