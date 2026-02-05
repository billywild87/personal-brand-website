import { routes } from "./routes";
import type { NavItem } from "./types";

export const navigation: NavItem[] = [
  { href: routes.home, label: "home" },
  { href: routes.about, label: "about" },
  { href: routes.experiences, label: "experiences" },
  { href: routes.contact, label: "contact" },
];
