"use client";
import { createContext, ReactNode, use, useCallback, useRef, useState } from "react";
import { GetBoundingRect, ImperativeAnimation, MotionDivPosition } from "../types";
import { RefsContextValues } from "./types";
import { usePathname } from "next/navigation";
import { equals } from "ramda";

export const RefsContext = createContext<RefsContextValues | null>(null);

export const RefsProvider = ({ children }: { children: ReactNode }) => {
  const navLinksRef = useRef<Record<string, GetBoundingRect>>({});
  const animationRef = useRef<ImperativeAnimation>(null);
  const [motionDivPosition, setMotionDivPosition] = useState({ x: 0, y: 0 });
  const pathname = usePathname();

  const getCurrentLinkRect = useCallback(
    () => navLinksRef.current[pathname]?.getBoundingRect(),
    [pathname, navLinksRef]
  );

  const setNewMotionDivPosition = (values: MotionDivPosition) => {
    setMotionDivPosition((prev) => {
      if (equals(prev, values)) return prev;
      return values;
    });
  };

  return (
    <RefsContext value={{ navLinksRef, animationRef, motionDivPosition, getCurrentLinkRect, setNewMotionDivPosition }}>
      {children}
    </RefsContext>
  );
};

export const useRefsContext = () => {
  const values = use(RefsContext);
  if (!values) throw new Error("Refs context is broken");

  return values;
};
