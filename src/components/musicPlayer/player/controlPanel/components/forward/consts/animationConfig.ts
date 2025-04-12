import { Transition } from "motion";

export const ANIMATION_CONFIG = {
  duration: 0.1,
  type: "tween",
  ease: "linear",
} as const satisfies Transition;
