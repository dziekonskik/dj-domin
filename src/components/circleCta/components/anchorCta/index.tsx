"use client";
import { motion } from "motion/react";
import type { AnchorVariantProps } from "../../types/props";
import { useAnimations } from "../../hooks/useAnimations";
import { ctaClassnames } from "../../consts/classnames";

type Props = {
  isVisible: boolean;
};

export const AnchorCta = ({ children, isVisible, href, layoutId, className, target }: Props & AnchorVariantProps) => {
  const { ref, setActiveStyles, resetStyles } = useAnimations();

  if (!isVisible) return null;
  return (
    <motion.a
      {...{ ref, layoutId, href, target }}
      className={ctaClassnames}
      onHoverStart={setActiveStyles}
      onHoverEnd={resetStyles}
      onTapStart={setActiveStyles}
      onTap={resetStyles}
      onTapCancel={resetStyles}
    >
      <motion.div {...{ className }}>{children}</motion.div>
    </motion.a>
  );
};
