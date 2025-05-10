import { SectionId } from "@/consts/sections";

export type UIState = {
  isBodyScrollLocked: () => boolean;
  setBodyScrollLocked: () => void;
  setBodyScrollUnlocked: () => void;
  setActiveCta: (id: SectionId) => void;
  activeCtaId: SectionId;
};
