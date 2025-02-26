import Link from "next/link";
import type { MouseEvent, ReactNode, RefObject } from "react";
import type { Route } from "@/consts/routes";

type Props = {
  children: ReactNode;
  href: Route;
  ref?: RefObject<HTMLLIElement | null>;
  onClick?: () => void;
  onMouseMove?: (event: MouseEvent<HTMLLIElement>) => void;
};

export const NavLinkUi = ({ href, children, ref, onClick, onMouseMove }: Props) => {
  return (
    <li {...{ ref, onClick, onMouseMove }} className="uppercase grid text-xl sm:text-lg">
      <Link {...{ href }} className="p-2 pr-4 grid place-content-center">
        {children}
      </Link>
    </li>
  );
};
