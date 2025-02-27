import { Variant } from "motion/react";

export const VARIANTS = {
  mobileInit: { opacity: 0, pointerEvents: "none" },
  desktopInit: { opacity: 1 },
} as const satisfies Record<string, Variant>;
