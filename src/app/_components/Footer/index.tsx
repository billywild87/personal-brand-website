import Logo from "@/components/Logo";
import { socialLinks } from "@/content";
import { BlurLayer } from "@/lib/effect";
import Link from "next/link";
import { BLUR_LAYERS, FOOTER_HEIGHT } from "./constants";
import { BottomGlow, FloatingParticles, TopBorder } from "./effects";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="group fixed inset-x-0 bottom-0 z-50"
      style={{ height: FOOTER_HEIGHT, paddingRight: "var(--scrollbar-width, 0px)" }}
    >
      <div className="hidden md:block">
        <BottomGlow />
        <FloatingParticles />
      </div>

      <div className="hidden md:block">
        {BLUR_LAYERS.map((layer, index) => (
          <BlurLayer type="footer" key={index} {...layer} />
        ))}
      </div>

      <div className="absolute inset-0 bg-zinc-900/80 backdrop-blur-sm md:hidden" />

      <TopBorder />

      <div className="relative mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-8 lg:px-12">
        <Logo />

        <div className="flex items-center gap-6">
          {socialLinks.map((link) => (
            <SocialLink key={link.platform} href={link.url} label={link.label}>
              <LinkedInIcon />
            </SocialLink>
          ))}
        </div>

        <p className="hidden font-mono text-xs text-zinc-500 sm:block">
          <span className="text-zinc-600">{"// "}</span>
          {currentYear} All rights reserved
        </p>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="text-zinc-500 transition-all duration-300 hover:text-primary hover:shadow-glow-sm"
    >
      {children}
    </Link>
  );
}

function LinkedInIcon() {
  return (
    <svg
      className="h-5 w-5"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
