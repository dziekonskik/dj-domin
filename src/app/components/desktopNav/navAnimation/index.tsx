import { motion, useAnimationControls } from "motion/react";
import type { NavLinkRef } from "../types";
import { useInitialize } from "./hooks/useInitialize";

type Props = {
  navLinkRef: NavLinkRef;
};

export const NavAnimation = ({ navLinkRef }: Props) => {
  const controls = useAnimationControls();

  useInitialize({ controls, navLinkRef });

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, right: 0 }}
      animate={controls}
      className="bg-green -z-10 h-10 w-10 rounded-full absolute"
    />
  );
};
