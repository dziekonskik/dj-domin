"use client";

import { motion } from "motion/react";
import { NavAnimation } from "./navAnimation";
import { routes } from "@/consts/routes";
import { NavLink } from "./navLink";
import { RefsProfider } from "./context";

type Props = {
  isMenuOpen: boolean;
};

export const Navigation = ({ isMenuOpen }: Props) => {
  return (
    <RefsProfider>
      <motion.nav className="mx-auto mt-52 sm:mt-24 flex justify-center items-center">
        <ul className="flex flex-col sm:flex-row justify-center sm:justify-end gap-20">
          {routes.map(({ href, name }) => (
            <NavLink key={href} {...{ href }}>
              {name}
            </NavLink>
          ))}
        </ul>
        <NavAnimation />
      </motion.nav>
    </RefsProfider>
  );
};
