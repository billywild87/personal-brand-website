import { PageHero } from "@/components/ui";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface PageProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export function Page({ title, subtitle, children, className }: PageProps) {
  return (
    <div className={cn("py-8 sm:py-12 lg:py-16", className)}>
      <PageHero title={title} subtitle={subtitle} />
      <div className="mt-10 sm:mt-12 lg:mt-14">{children}</div>
    </div>
  );
}
