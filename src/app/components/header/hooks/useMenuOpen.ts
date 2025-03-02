import { useCallback, useState } from "react";
import { useBodyScrollLock } from "@/hooks";

export const useMenuOpen = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { lockScroll, unlockScroll } = useBodyScrollLock();

  const toggleMenu = useCallback(
    () =>
      setIsMenuOpen((prev) => {
        if (prev === false) lockScroll();
        if (prev === true) unlockScroll();
        return !prev;
      }),
    [lockScroll, unlockScroll]
  );

  const closeMobileMenu = useCallback(() => setIsMenuOpen(false), []);

  return { isMenuOpen, toggleMenu, closeMobileMenu };
};
