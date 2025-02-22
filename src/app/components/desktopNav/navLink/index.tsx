"use client";
import { ReactNode, useEffect, useRef } from "react";
import Link from "next/link";
import type { Route } from "@/consts/routes";
import type { NavLinkRef } from "../types";

type Props = {
  children: ReactNode;
  href: Route;
  navLinkRef: NavLinkRef;
};

export const NavLink = ({ href, children, navLinkRef }: Props) => {
  const liRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    if (liRef.current && navLinkRef) {
      const getBoundingRect = () => liRef.current?.getBoundingClientRect();
      navLinkRef.current[href] = { getBoundingRect };
    }
  }, [href, liRef, navLinkRef]);

  return (
    <li ref={liRef} className="uppercase w-20 h-12 grid">
      <Link
        {...{ href }}
        className="row-start-1 col-start-1 p-2 pr-4 grid place-content-center"
      >
        {children}
      </Link>
    </li>
  );
};
