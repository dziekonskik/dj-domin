import { Variants } from "motion/react";

export const VARIANTS: Record<string, Variants> = {
  TOP: {
    closed: { translateY: 0, rotate: 0, transition: { rotate: { delay: 0 }, translateY: { delay: 0.1 } } },
    open: { translateY: 5, rotate: 45, transition: { translateY: { delay: 0 }, rotate: { delay: 0.1 } } },
  },
  MIDDLE: {
    closed: { rotate: 0, transition: { delay: 0 } },
    open: { rotate: 45, transition: { delay: 0.1 } },
  },
  BOTTOM: {
    closed: { translateY: 0, rotate: 0, transition: { rotate: { delay: 0 }, translateY: { delay: 0.1 } } },
    open: { translateY: -5, rotate: -45, transition: { translateY: { delay: 0 }, rotate: { delay: 0.1 } } },
  },
};
