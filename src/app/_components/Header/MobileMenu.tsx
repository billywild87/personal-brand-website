"use client";

import Logo from "@/components/Logo";
import { navigation } from "@/content";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    if (isOpen) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.documentElement.style.setProperty("--scrollbar-width", `${scrollbarWidth}px`);
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.documentElement.style.setProperty("--scrollbar-width", "0px");
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }
    return () => {
      document.documentElement.style.setProperty("--scrollbar-width", "0px");
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [closeMenu]);

  return (
    <>
      <button
        onClick={toggleMenu}
        className={cn(
          "relative flex h-8 w-8 flex-col items-center justify-center gap-1.5 md:hidden",
          isOpen && "invisible"
        )}
        aria-label="Ouvrir le menu"
      >
        <span className="h-px w-5 bg-zinc-400" />
        <span className="h-px w-5 bg-zinc-400" />
      </button>

      <div
        className={cn(
          "fixed inset-0 z-100 bg-zinc-950/60 transition-opacity duration-300 will-change-[opacity] md:hidden",
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        )}
        onClick={closeMenu}
      />

      <div
        className={cn(
          "fixed inset-y-0 right-0 z-100 w-full bg-zinc-900 transition-transform duration-300 ease-out will-change-transform md:hidden",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex h-full flex-col px-6 pt-6 pb-8">
          <div className="mb-8 flex items-center justify-between">
            <Logo />
            <button
              onClick={closeMenu}
              className="flex h-10 w-10 items-center justify-center"
              aria-label="Fermer le menu"
            >
              <svg
                className="h-6 w-6 text-zinc-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="flex-1">
            <p className="section-title mb-6">Navigation</p>

            <div className="space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="bordered-item group flex items-center justify-between py-4"
                >
                  <span className="font-mono text-lg text-zinc-300 transition-colors group-hover:text-white">
                    {item.label}
                  </span>
                  <svg
                    className="h-5 w-5 text-zinc-600 transition-colors group-hover:text-cyan-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </Link>
              ))}
            </div>
          </div>

          <div className="border-t border-zinc-800 pt-6">
            <div className="flex items-center gap-2">
              <span className="pulse-dot" />
              <span className="font-mono text-xs text-zinc-500">
                Disponible
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
