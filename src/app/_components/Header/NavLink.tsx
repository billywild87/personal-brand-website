import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";

const navLinkVariants = cva(
  "relative font-mono font-medium transition-all duration-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]",
  {
    variants: {
      variant: {
        default: "text-zinc-400",
        active: "text-white",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface NavLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof navLinkVariants> {
  href: string;
}

export default function NavLink({
  href,
  className,
  variant,
  children,
  ...props
}: NavLinkProps) {
  return (
    <Link
      href={href}
      className={cn(navLinkVariants({ variant }), className, "group/link")}
      {...props}
    >
      {children}
      <span className="absolute -bottom-1 left-0 h-px w-0 bg-linear-to-r from-cyan-400 to-blue-400 transition-all duration-300 group-hover/link:w-full group-hover/link:shadow-[0_0_8px_rgba(34,211,238,0.6)]" />
    </Link>
  );
}
