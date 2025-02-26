"use client";

import { NavAnimation } from "./navAnimation";
import { routes } from "@/consts/routes";
import { NavLink } from "./navLink";
import { RefsProfider } from "./context";
import { HamburgerButton } from "./hamburgerButton";

export const Navigation = () => {
  return (
    <RefsProfider>
      <nav className="mx-auto mt-24 flex justify-center items-center">
        <HamburgerButton />
        <ul className="flex flex-col sm:flex-row justify-center sm:justify-end gap-20">
          {routes.map(({ href, name }) => (
            <NavLink key={href} {...{ href }}>
              {name}
            </NavLink>
          ))}
          <NavAnimation />
        </ul>
      </nav>
    </RefsProfider>
  );
};
