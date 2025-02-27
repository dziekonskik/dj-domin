"use client";
import { useCallback, useState } from "react";
import { Navigation } from "./components/navigation";
import { HamburgerButton } from "./components/hamburgerButton";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => setIsMenuOpen((prev) => !prev), []);

  return (
    <header className="sm:grid justify-end max-w-7xl container m-auto fixed sm:static">
      <HamburgerButton {...{ isMenuOpen, toggleMenu }} />
      <Navigation {...{ isMenuOpen, toggleMenu }} />
    </header>
  );
};
