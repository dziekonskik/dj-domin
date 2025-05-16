import { Variants } from "motion/react";

export const RECT_WIDTH = 10;

export const rectVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
} as const satisfies Variants;

export const svgContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.007,
      staggerDirection: -1,
    },
  },
} as const satisfies Variants;
