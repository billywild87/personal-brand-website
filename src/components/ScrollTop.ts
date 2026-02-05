"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "instant" });
}

export default function ScrollToTopOnRoute() {
  const pathname = usePathname();

  useEffect(() => {
    scrollToTop();
  }, [pathname]);

  return null;
}
