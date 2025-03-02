"use client";

import { Navigation } from "./components/navigation";
import { HamburgerButton } from "./components/hamburgerButton";
import { useMenuOpen } from "./hooks/useMenuOpen";

export const Header = () => {
  const { isMenuOpen, closeMobileMenu, toggleMenu } = useMenuOpen();

  return (
    <header className="sm:grid justify-end max-w-7xl container m-auto fixed sm:static lg:w-full">
      <HamburgerButton {...{ isMenuOpen, toggleMenu }} />
      <Navigation {...{ isMenuOpen, toggleMenu, closeMobileMenu }} />
    </header>
  );
};
