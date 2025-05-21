"use client";
import { motion } from "motion/react";
import { ButtonVariantProps } from "../../types/props";
import { useAnimations } from "../../hooks/useAnimations";
import { ctaClassnames } from "../../consts/classnames";

type Props = {
  isVisible: boolean;
};

export const ButtonCta = ({
  onClick,
  children,
  isVisible,
  layoutId,
  type = "button",
  className,
  disabled,
}: Props & ButtonVariantProps) => {
  const { ref, setActiveStyles, resetStyles } = useAnimations();

  if (!isVisible) return null;
  return (
    <motion.button
      {...{ onClick, ref, layoutId, type, disabled }}
      className={ctaClassnames}
      onHoverStart={setActiveStyles}
      onHoverEnd={resetStyles}
      onTapStart={setActiveStyles}
      onTap={resetStyles}
      onTapCancel={resetStyles}
    >
      <motion.div {...{ className }}>{children}</motion.div>
    </motion.button>
  );
};
