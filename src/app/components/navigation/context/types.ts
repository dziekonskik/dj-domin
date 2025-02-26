import { AnimationRef, MotionDivPosition, NavLinksRef } from "../types";

export type RefsContextValues = {
  motionDivPosition: MotionDivPosition;
  navLinksRef: NavLinksRef;
  animationRef: AnimationRef;
  getCurrentLinkRect: () => DOMRect | undefined;
  setNewMotionDivPosition: (values: MotionDivPosition) => void;
};
