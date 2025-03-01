import { useLayoutEffect, useCallback, useRef } from "react";

export const useBodyScrollLock = () => {
  const isLockedRef = useRef(false);
  const scrollYRef = useRef(0);

  const lockScroll = useCallback(() => {
    if (isLockedRef.current) return;
    isLockedRef.current = true;

    scrollYRef.current = window.scrollY;
    const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollYRef.current}px`;
    document.body.style.width = "100%";
    document.body.style.paddingRight = `${scrollBarWidth}px`;
  }, []);

  const unlockScroll = useCallback(() => {
    if (!isLockedRef.current) return;
    isLockedRef.current = false;

    document.body.style.overflow = "";
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.width = "";
    document.body.style.paddingRight = "";

    window.scrollTo(0, scrollYRef.current);
  }, []);

  useLayoutEffect(() => {
    return () => unlockScroll();
  }, [unlockScroll]);

  return { lockScroll, unlockScroll };
};
