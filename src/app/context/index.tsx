"use client";
import { createContext, PropsWithChildren, use, useCallback, useRef, useState } from "react";
import { UIState } from "./types";
import { SectionId, SECTION_ID } from "@/consts/sections";

const UiStateContext = createContext<UIState | null>(null);

export const UIStateProvider = ({ children }: PropsWithChildren) => {
  const [activeSection, setActiveSection] = useState<SectionId>(SECTION_ID.HERO);
  const bodyScrollLockRef = useRef(false);

  const isBodyScrollLocked = useCallback(() => bodyScrollLockRef.current, []);
  const setBodyScrollLocked = useCallback(() => {
    bodyScrollLockRef.current = true;
  }, []);
  const setBodyScrollUnlocked = useCallback(() => {
    bodyScrollLockRef.current = false;
  }, []);

  const setActiveSectionId = useCallback((id: SectionId) => {
    setActiveSection(id);
  }, []);

  return (
    <UiStateContext
      value={{
        isBodyScrollLocked,
        setBodyScrollLocked,
        setBodyScrollUnlocked,
        activeSection,
        setActiveSectionId,
      }}
    >
      {children}
    </UiStateContext>
  );
};

export const useUIContext = () => {
  const values = use(UiStateContext);
  if (!values) throw new Error("UI context is broken");

  return values;
};
