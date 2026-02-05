"use client";

import { type ReactNode } from "react";
import "@/app/template.css";

export default function Template({ children }: { children: ReactNode }) {
  return <div className="template-fade-in">{children}</div>;
}
