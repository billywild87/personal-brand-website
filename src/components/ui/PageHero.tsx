import { cn } from "@/lib/utils";
import { forwardRef, type HTMLAttributes } from "react";

export interface PageHeroProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
}

const PageHero = forwardRef<HTMLDivElement, PageHeroProps>(
  ({ title, subtitle, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "mb-10 space-y-4 sm:mb-16 sm:space-y-6 lg:mb-20",
          className
        )}
        {...props}
      >
        <h1 className="font-mono text-3xl font-bold text-white sm:text-4xl lg:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    );
  }
);

PageHero.displayName = "PageHero";

export { PageHero };
