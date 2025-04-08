import { useCallback, useRef } from "react";
import { useUIContext } from "@/app/context";

export const useBodyScrollLock = () => {
  const scrollYRef = useRef(0);
  const { isBodyScrollLocked, setBodyScrollLocked, setBodyScrollUnlocked } = useUIContext();

  const lockScroll = useCallback(() => {
    if (isBodyScrollLocked()) return;
    setBodyScrollLocked();

    scrollYRef.current = window.scrollY;
    const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollYRef.current}px`;
    document.body.style.width = "100%";
    document.body.style.paddingRight = `${scrollBarWidth}px`;
  }, [isBodyScrollLocked, setBodyScrollLocked]);

  const unlockScroll = useCallback(() => {
    if (!isBodyScrollLocked()) return;
    setBodyScrollUnlocked();

    document.body.style.overflow = "";
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.width = "";
    document.body.style.paddingRight = "";
    window.scrollTo(0, scrollYRef.current);
  }, [isBodyScrollLocked, setBodyScrollUnlocked]);

  return { lockScroll, unlockScroll };
};
