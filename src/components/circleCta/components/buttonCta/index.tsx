import { AnimationScope } from "motion";
import { motion } from "motion/react";
import { ButtonVariantProps } from "../../types/props";

type Props = {
  setActiveStyles: () => void;
  resetStyles: () => void;
  scope: AnimationScope<HTMLButtonElement>;
};

export const ButtonCta = ({ onClick, resetStyles, setActiveStyles, text, scope }: Props & ButtonVariantProps) => {
  return (
    <motion.button
      {...{ onClick }}
      layoutId={text}
      ref={scope}
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
