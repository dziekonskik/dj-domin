import { useCallback, useEffect, useState } from "react";
import { useBodyScrollLock, useMediaQuery } from "@/hooks";
import { MEDIA_QUERY } from "@/consts/mediaQueries";

export const useMenuOpen = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { lockScroll, unlockScroll } = useBodyScrollLock();
  const isDesktop = useMediaQuery(MEDIA_QUERY.IS_DESKTOP);

  const closeMobileMenu = useCallback(() => setIsMenuOpen(false), []);
  const toggleMenu = useCallback(
    () =>
      setIsMenuOpen((prev) => {
        const menuOpen = prev === false;
        const menuClosed = prev === true;
        if (menuOpen) lockScroll();
        if (menuClosed) unlockScroll();
        return !prev;
      }),
    [lockScroll, unlockScroll]
  );
  const cleanup = useCallback(() => {
    closeMobileMenu();
    unlockScroll();
  }, [closeMobileMenu, unlockScroll]);

  useEffect(() => {
    if (isDesktop) cleanup();
    return () => cleanup();
  }, [cleanup, isDesktop]);

  return { isMenuOpen, toggleMenu, closeMobileMenu };
};
