"use client";

import { Navigation } from "./components/navigation";
import { HamburgerButton } from "./components/hamburgerButton";
import { useMenuOpen } from "./hooks/useMenuOpen";

export const Header = () => {
  const { isMenuOpen, closeMobileMenu, toggleMenu } = useMenuOpen();

  return (
    <header className="sm:grid sm:justify-end max-w-7xl container m-auto fixed sm:static lg:w-full sm:z-500">
      <HamburgerButton {...{ isMenuOpen, toggleMenu }} />
      <Navigation {...{ isMenuOpen, toggleMenu, closeMobileMenu }} />
    </header>
  );
};
