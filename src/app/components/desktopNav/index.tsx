"use client";

import { NavAnimation } from "./navAnimation";
import { routes } from "@/consts/routes";
import { NavLink } from "./navLink";
import { RefsProfider } from "./context";

export const DesktopNav = () => {
  return (
    <RefsProfider>
      <nav className="mx-auto mt-24 w-min hidden sm:flex">
        <ul className="flex justify-end gap-20">
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
