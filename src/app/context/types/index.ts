import { SectionId } from "@/consts/sections";

export type UIState = {
  isBodyScrollLocked: () => boolean;
  setBodyScrollLocked: () => void;
  setBodyScrollUnlocked: () => void;
  setActiveSectionId: (id: SectionId) => void;
  activeSection: SectionId;
};
