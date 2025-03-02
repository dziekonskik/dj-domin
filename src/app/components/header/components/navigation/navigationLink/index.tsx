"use client";
import { ReactNode } from "react";
import { motion } from "motion/react";
import type { Route } from "@/consts/routes";
import { useAnimationActions } from "./hooks/useAnimationActions";
import { NavLink } from "@/components/navLink";
import { LINK_VARIANTS } from "./consts/motionVariants";

type Props = {
  children: ReactNode;
  href: Route;
  closeMobileMenu: () => void;
};

export const NavigationLink = ({ href, children, closeMobileMenu }: Props) => {
  const { liRef, onClick, onMouseMove } = useAnimationActions({ href, closeMobileMenu });

  return (
    <motion.div key={href} variants={LINK_VARIANTS} whileTap={{ scale: 0.95 }}>
      <NavLink ref={liRef} {...{ href, onClick, onMouseMove }}>
        {children}
      </NavLink>
    </motion.div>
  );
};
