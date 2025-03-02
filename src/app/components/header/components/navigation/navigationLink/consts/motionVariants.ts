import { Variants } from "motion/react";

export const LINK_VARIANTS = {
  MOBILE_OPEN: { y: [20, 0], opacity: 1 },
  MOBILE_CLOSED: { y: 0, opacity: 0 },
  DESKTOP: { y: 0, opacity: 1 },
} as const satisfies Variants;
