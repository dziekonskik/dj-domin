"use client";
import { ReactNode } from "react";
import type { Route } from "@/consts/routes";
import { useAnimationActions } from "./hooks/useAnimationActions";
import { NavLinkUi } from "@/components/navLinkUi";

type Props = {
  children: ReactNode;
  href: Route;
};

export const NavLink = ({ href, children }: Props) => {
  const { liRef, onClick, onMouseMove } = useAnimationActions({ href });

  return (
    <NavLinkUi ref={liRef} {...{ href, onClick, onMouseMove }}>
      {children}
    </NavLinkUi>
  );
};
