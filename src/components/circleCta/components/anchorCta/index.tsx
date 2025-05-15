import { motion } from "motion/react";
import type { AnchorVariantProps } from "../../types/props";
import { useAnimations } from "../../hooks/useAnimations";

type Props = {
  isVisible: boolean;
};

export const AnchorCta = ({ children, isVisible, href, layoutId, className }: Props & AnchorVariantProps) => {
  const { ref, setActiveStyles, resetStyles } = useAnimations();

  if (!isVisible) return null;
  return (
    <motion.a
      {...{ ref, layoutId }}
      href={`#${href}`}
      className="grid place-content-center outline-3 rounded-full p-2 aspect-square font-grotezk text-3xl cursor-pointer bg-white max-w-40"
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
