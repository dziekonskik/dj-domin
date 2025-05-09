import { motion } from "motion/react";
import { ButtonVariantProps } from "../../types/props";
import { useAnimations } from "../../hooks/useAnimations";

type Props = {
  isVisible: boolean;
};

export const ButtonCta = ({ onClick, text, isVisible }: Props & ButtonVariantProps) => {
  const { scope, setActiveStyles, resetStyles } = useAnimations();

  if (!isVisible) return null;
  return (
    <motion.button
      {...{ onClick }}
      ref={scope}
      layoutId="cta"
      className="grid place-content-center outline-3 rounded-full p-2 aspect-square font-grotezk text-3xl cursor-pointer bg-white max-w-40"
      onHoverStart={setActiveStyles}
      onHoverEnd={resetStyles}
      onTapStart={setActiveStyles}
      onTap={resetStyles}
      onTapCancel={resetStyles}
    >
      <motion.span className="text-black">{text.toUpperCase()}</motion.span>
    </motion.button>
  );
};
