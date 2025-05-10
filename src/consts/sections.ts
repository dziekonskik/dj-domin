import { ValueOf } from "@/types";

export const SECTION_ID = {
  HERO: "hero",
  ABOUT: "about",
  CONTACT: "contact",
} as const;

export type SectionId = ValueOf<typeof SECTION_ID>;
