import Logo from "@/components/Logo";
import { navigation, routes } from "@/content";
import { BlurLayer } from "@/lib/effect";
import Link from "next/link";
import { BLUR_LAYERS, HEADER_HEIGHT } from "./constants";
import { BottomBorder, FloatingParticles, TopGlow } from "./effects";
import MobileMenu from "./MobileMenu";
import NavLink from "./NavLink";

export default function Header() {
  return (
    <header
      className="group fixed inset-x-0 top-0 z-50"
      style={{ height: HEADER_HEIGHT, paddingRight: "var(--scrollbar-width, 0px)" }}
    >
      <div className="hidden md:block">
        <TopGlow />
        <FloatingParticles />
      </div>

      <div className="hidden md:block">
        {BLUR_LAYERS.map((layer, index) => (
          <BlurLayer type="header" key={index} {...layer} />
        ))}
      </div>

      <div className="absolute inset-0 bg-zinc-900/80 backdrop-blur-sm md:hidden" />

      <BottomBorder />

      <div className="relative mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-8 lg:px-12">
        <Link href={routes.home} className="flex items-center">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <NavLink key={item.href} href={item.href}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <MobileMenu />
      </div>
    </header>
  );
}
