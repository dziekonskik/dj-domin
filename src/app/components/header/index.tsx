"use client";

import { Navigation } from "./components/navigation";
import { HamburgerButton } from "./components/hamburgerButton";
import { useMenuOpen } from "./hooks/useMenuOpen";

export const Header = () => {
  const { isMenuOpen, closeMobileMenu, toggleMenu } = useMenuOpen();

  return (
    <>
      <HamburgerButton {...{ isMenuOpen, toggleMenu }} />
      <header className="sm:grid sm:justify-end max-w-7xl container m-auto fixed sm:static lg:w-full z-50 pointer-events-none">
        <Navigation {...{ isMenuOpen, toggleMenu, closeMobileMenu }} />
      </header>
    </>
  );
};
