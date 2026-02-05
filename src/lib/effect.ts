import { BLUR_ZONE_HEIGHT, type BlurLayerConfig } from "@/lib/blur";
import { cx } from "class-variance-authority";
import { createElement, type CSSProperties } from "react";

export const BlurLayer = ({
  blur,
  mask,
  background,
  type = "header",
}: BlurLayerConfig & { type: "header" | "footer" }) => {
  const style: CSSProperties = {
    height: BLUR_ZONE_HEIGHT,
    backdropFilter: blur,
    WebkitBackdropFilter: blur,
    maskImage: mask,
    WebkitMaskImage: mask,
    ...(background && { background }),
  };

  return createElement("div", {
    className: cx(
      "absolute inset-x-0",
      type === "header" ? "top-0" : "bottom-0"
    ),
    style,
  });
};
