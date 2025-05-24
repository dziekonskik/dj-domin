import { SectionId } from "@/consts/sections";
import { AnimationControls } from "motion/react";

export type UIState = {
  isBodyScrollLocked: () => boolean;
  setBodyScrollLocked: () => void;
  setBodyScrollUnlocked: () => void;
  setActiveSectionId: (id: SectionId) => void;
  activeSection: SectionId;
  headerAnimationControls: AnimationControls;
};
