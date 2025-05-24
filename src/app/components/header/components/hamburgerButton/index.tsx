import { motion } from "motion/react";
import { rectAttrs } from "./utils/getRectAttributes";
import { RECT_VARIANTS } from "./consts/motionVariants";

type Props = {
  isMenuOpen: boolean;
  toggleMenu: () => void;
};

export const HamburgerButton = ({ isMenuOpen, toggleMenu }: Props) => (
  <div className="fixed top-10 right-5 p-1 grid place-content-center sm:hidden z-500">
    <button className="w-10 h-10" onClick={toggleMenu}>
      <svg viewBox="0 0 24 24">
        <motion.rect {...rectAttrs(6)} animate={isMenuOpen ? "open" : "closed"} variants={RECT_VARIANTS.TOP} />
        <motion.rect {...rectAttrs(11)} animate={isMenuOpen ? "open" : "closed"} variants={RECT_VARIANTS.MIDDLE} />
        <motion.rect {...rectAttrs(16)} animate={isMenuOpen ? "open" : "closed"} variants={RECT_VARIANTS.BOTTOM} />
      </svg>
    </button>
  </div>
);
