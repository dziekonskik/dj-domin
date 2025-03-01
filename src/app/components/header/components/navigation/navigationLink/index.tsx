"use client";
import { ReactNode } from "react";
import { motion } from "motion/react";
import type { Route } from "@/consts/routes";
import { useAnimationActions } from "./hooks/useAnimationActions";
import { NavLink } from "@/components/navLink";
import { MEDIA_QUERY } from "@/consts/mediaQueries";
import { useMediaQuery } from "@/hooks/useMediaQuery";

type Props = {
  children: ReactNode;
  href: Route;
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: (isMobile: boolean) => ({
    y: isMobile ? 20 : 0,
    opacity: isMobile ? 0 : 1,
  }),
};

export const NavigationLink = ({ href, children }: Props) => {
  const { liRef, onClick, onMouseMove } = useAnimationActions({ href });
  const isMobile = useMediaQuery(MEDIA_QUERY.IS_MOBILE);

  return (
    <motion.div key={href} variants={itemVariants} custom={isMobile}>
      <NavLink ref={liRef} {...{ href, onClick, onMouseMove }}>
        {children}
      </NavLink>
    </motion.div>
  );
};
