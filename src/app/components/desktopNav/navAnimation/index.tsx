import { motion, useAnimationControls } from "motion/react";
import { useInitialize } from "./hooks/useInitialize";
import { useImperativeAnimation } from "./hooks/useImperativeAnimation";
import type { AnimationRef, NavLinkRef } from "../types";

type Props = {
  navLinkRef: NavLinkRef;
  animationRef: AnimationRef;
};

export const NavAnimation = ({ navLinkRef, animationRef }: Props) => {
  const controls = useAnimationControls();
  useInitialize({ controls, navLinkRef });
  useImperativeAnimation({ animationRef, controls });

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, right: 0, top: 0 }}
      animate={controls}
      className="bg-green -z-10 h-10 w-10 rounded-full absolute"
    />
  );
};
