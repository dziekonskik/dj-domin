"use client";
import { useRef } from "react";
import { NavAnimation } from "./navAnimation";
import { routes } from "@/consts/routes";
import { NavLink } from "./navLink";
import type { GetBoundingRect, ImperativeAnimation } from "./types";

export const DesktopNav = () => {
  const navLinkRef = useRef<Record<string, GetBoundingRect>>({});
  const animationRef = useRef<ImperativeAnimation>(null);

  return (
    <nav className="mx-auto mt-24 w-min hidden sm:flex">
      <ul className="flex justify-end gap-20">
        {routes.map(({ href, name }) => (
          <NavLink key={href} {...{ href, navLinkRef, animationRef }}>
            {name}
          </NavLink>
        ))}
        <NavAnimation {...{ navLinkRef, animationRef }} />
      </ul>
    </nav>
  );
};
