import { motion } from "motion/react";
import { ButtonVariantProps } from "../../types/props";
import { useAnimations } from "../../hooks/useAnimations";

type Props = {
  isVisible: boolean;
};

export const ButtonCta = ({ onClick, text, isVisible, layoutId }: Props & ButtonVariantProps) => {
  const { ref, setActiveStyles, resetStyles } = useAnimations();

  if (!isVisible) return null;
  return (
    <motion.button
      {...{ onClick, ref, layoutId }}
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
