import Logo from "@/components/Logo";
import { navigation } from "@/content";
import { BlurLayer } from "@/lib/effect";
import Link from "next/link";
import { BLUR_LAYERS, HEADER_HEIGHT } from "./constants";
import { BottomBorder, FloatingParticles, TopGlow } from "./effects";
import NavLink from "./NavLink";

export default function Header() {
  return (
    <header
      className="group fixed inset-x-0 top-0 z-50 transition-all duration-500"
      style={{ height: HEADER_HEIGHT }}
    >
      <TopGlow />
      <FloatingParticles />

      {BLUR_LAYERS.map((layer, index) => (
        <BlurLayer type="header" key={index} {...layer} />
      ))}

      <BottomBorder />

      <div className="relative mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-8 lg:px-12">
        <Link href="/" className="flex items-center">
          <Logo />
        </Link>
        <nav className="flex items-center gap-8">
          {navigation.map((item) => (
            <NavLink key={item.href} href={item.href}>
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
