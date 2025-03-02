import { Variants } from "motion/react";

export const LIST_VARIANTS = {
  MOBILE_OPEN: { transition: { staggerChildren: 0.07, delayChildren: 0.12 } },
  MOBILE_CLOSED: { transition: { staggerChildren: 0 } },
  DESKTOP: { transition: { staggerChildren: 0 } },
} as const satisfies Variants;
