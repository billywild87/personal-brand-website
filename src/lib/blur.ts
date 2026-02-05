// Constantes partagées header/footer
export const BAR_HEIGHT = 80;
export const BLUR_ZONE_HEIGHT = 120;

export type BlurLayerConfig = {
  blur: string;
  mask: string;
  background?: string;
};

// Génère les layers de blur avec la direction spécifiée
export function createBlurLayers(
  direction: "to bottom" | "to top"
): BlurLayerConfig[] {
  return [
    {
      blur: "blur(2px)",
      mask: `linear-gradient(${direction}, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 70%, transparent 100%)`,
    },
    {
      blur: "blur(4px)",
      mask: `linear-gradient(${direction}, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 60%, transparent 90%)`,
    },
    {
      blur: "blur(6px)",
      mask: `linear-gradient(${direction}, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 50%, transparent 80%)`,
    },
    {
      blur: "blur(8px)",
      mask: `linear-gradient(${direction}, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 40%, transparent 70%)`,
    },
    {
      blur: "blur(10px)",
      mask: `linear-gradient(${direction}, rgba(0,0,0,1) 0%, rgba(0,0,0,0.4) 30%, transparent 60%)`,
    },
    {
      blur: "blur(12px)",
      mask: `linear-gradient(${direction}, rgba(0,0,0,1) 0%, rgba(0,0,0,0.3) 20%, transparent 50%)`,
    },
    {
      blur: "blur(14px)",
      mask: `linear-gradient(${direction}, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 15%, transparent 40%)`,
    },
    {
      blur: "blur(16px)",
      mask: `linear-gradient(${direction}, rgba(0,0,0,0.6) 0%, transparent 25%)`,
    },
  ];
}
