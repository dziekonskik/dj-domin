import { useCallback, useState } from "react";
import { useBodyScrollLock } from "@/hooks";

export const useMenuOpen = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { lockScroll, unlockScroll } = useBodyScrollLock();

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

  const closeMobileMenu = useCallback(() => setIsMenuOpen(false), []);

  return { isMenuOpen, toggleMenu, closeMobileMenu };
};
