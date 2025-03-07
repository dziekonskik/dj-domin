import { motion } from "motion/react";
import { rectAttrs } from "./utils/getRectAttributes";
import { RECT_VARIANTS } from "./consts/motionVariants";

type Props = {
  isMenuOpen: boolean;
  toggleMenu: () => void;
};

export const HamburgerButton = ({ isMenuOpen, toggleMenu }: Props) => (
  <div className="fixed top-10 right-5 p-1 grid place-content-center sm:hidden">
    <button className="w-10 h-10" onClick={toggleMenu}>
      <svg viewBox="0 0 24 24">
        <motion.rect
          {...rectAttrs(6)}
          animate={isMenuOpen ? "open" : "closed"}
          variants={RECT_VARIANTS.TOP}
          className="!origin-[12px_6.75px]"
        />
        <motion.rect
          {...rectAttrs(11)}
          animate={isMenuOpen ? "open" : "closed"}
          variants={RECT_VARIANTS.MIDDLE}
          className="!origin-[12px_11.75px]"
        />
        <motion.rect
          {...rectAttrs(16)}
          animate={isMenuOpen ? "open" : "closed"}
          variants={RECT_VARIANTS.BOTTOM}
          className="!origin-[12px_16.75px]"
        />
      </svg>
    </button>
  </div>
);
