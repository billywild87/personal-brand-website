import { branding } from "@/content";

export default function Logo() {
  return (
    <div className="font-mono text-lg font-bold tracking-tight">
      <span className="text-cyan-400">{branding.logo.prefix}</span>
      <span className="text-zinc-300">{branding.logo.name}</span>
      <span className="animate-pulse text-cyan-400">|</span>
    </div>
  );
}
