import { createContext, ReactNode, use, useCallback, useRef } from "react";
import { GetBoundingRect, ImperativeAnimation } from "../types";
import { RefsContextValues } from "./types";
import { usePathname } from "next/navigation";

export const RefsContext = createContext<RefsContextValues | null>(null);

export const RefsProfider = ({ children }: { children: ReactNode }) => {
  const navLinksRef = useRef<Record<string, GetBoundingRect>>({});
  const animationRef = useRef<ImperativeAnimation>(null);
  const motionDivPosition = useRef({ x: 0, y: 0 });
  const pathname = usePathname();

  const getCurrentLinkRect = useCallback(() => navLinksRef.current[pathname].getBoundingRect(), [pathname]);

  return (
    <RefsContext value={{ navLinksRef, animationRef, motionDivPosition, getCurrentLinkRect }}>{children}</RefsContext>
  );
};

export const useRefsContext = () => {
  const values = use(RefsContext);
  if (!values) throw new Error("Refs context is broken");

  return values;
};
