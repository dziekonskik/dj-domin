"use client";
import { ReactNode } from "react";
import Link from "next/link";
import type { Route } from "@/consts/routes";
import type { AnimationRef, NavLinkRef } from "../types";
import { useAnimationActions } from "./hooks/useAnimationActions";

type Props = {
  children: ReactNode;
  href: Route;
  navLinkRef: NavLinkRef;
  animationRef: AnimationRef;
};

export const NavLink = ({ href, children, navLinkRef, animationRef }: Props) => {
  const { liRef, onClick, onMouseMove } = useAnimationActions({ href, animationRef, navLinkRef });

  return (
    <li ref={liRef} {...{ onClick, onMouseMove }} className="uppercase w-20 h-12 grid">
      <Link {...{ href }} className="row-start-1 col-start-1 p-2 pr-4 grid place-content-center">
        {children}
      </Link>
    </li>
  );
};
