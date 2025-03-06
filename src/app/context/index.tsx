"use client";
import { createContext, PropsWithChildren, use, useCallback, useRef } from "react";
import { UIState } from "./types";

const UiStateContext = createContext<UIState | null>(null);

export const UIStateProvider = ({ children }: PropsWithChildren) => {
  const bodyScrollLockRef = useRef(false);

  const isBodyScrollLocked = useCallback(() => bodyScrollLockRef.current, []);
  const setBodyScrollLocked = useCallback(() => {
    bodyScrollLockRef.current = true;
  }, []);
  const setBodyScrollUnlocked = useCallback(() => {
    bodyScrollLockRef.current = false;
  }, []);

  return (
    <UiStateContext value={{ isBodyScrollLocked, setBodyScrollLocked, setBodyScrollUnlocked }}>
      {children}
    </UiStateContext>
  );
};

export const useUIContext = () => {
  const values = use(UiStateContext);
  if (!values) throw new Error("UI context is broken");

  return values;
};
