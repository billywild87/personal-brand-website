export function BottomGlow() {
  return (
    <div
      className="pointer-events-none absolute inset-x-0 bottom-0 h-px opacity-60 transition-opacity duration-500 group-hover:opacity-100"
      style={{
        background:
          "linear-gradient(90deg, transparent 0%, rgba(34, 211, 238, 0.4) 20%, rgba(139, 92, 246, 0.3) 50%, rgba(34, 211, 238, 0.4) 80%, transparent 100%)",
      }}
    />
  );
}

export function FloatingParticles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute bottom-2 left-1/4 h-1 w-1 animate-pulse rounded-full opacity-40"
        style={{ background: "rgba(34, 211, 238, 0.6)" }}
      />
      <div
        className="absolute bottom-4 right-1/3 h-0.5 w-0.5 animate-pulse rounded-full opacity-30"
        style={{ background: "rgba(139, 92, 246, 0.6)", animationDelay: "1s" }}
      />
      <div
        className="absolute bottom-3 right-1/4 h-0.5 w-0.5 animate-pulse rounded-full opacity-20"
        style={{ background: "rgba(34, 211, 238, 0.5)", animationDelay: "2s" }}
      />
    </div>
  );
}

export function TopBorder() {
  return (
    <div
      className="pointer-events-none absolute inset-x-0 top-0 h-px opacity-30"
      style={{
        background:
          "linear-gradient(90deg, transparent 0%, rgba(63, 63, 70, 0.8) 20%, rgba(63, 63, 70, 1) 50%, rgba(63, 63, 70, 0.8) 80%, transparent 100%)",
      }}
    />
  );
}
