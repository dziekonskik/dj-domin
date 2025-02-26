import { motion, MotionConfig } from "motion/react";
import { useState } from "react";
import { rectAttrs } from "./utils/getRectAttributes";
import { VARIANTS } from "./consts/motionVariants";

export const HamburgerButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen((prev) => !prev);

  return (
    <motion.div className="fixed top-10 right-5 p-1 grid place-content-center rounded-full bg-white">
      <button className="z-10 w-10 h-10" onClick={toggleOpen}>
        <svg viewBox="0 0 24 24" width="100%">
          <MotionConfig transition={{ duration: 0.4, type: "spring", bounce: 0 }}>
            <motion.rect {...rectAttrs(6)} animate={isOpen ? "open" : "closed"} variants={VARIANTS.TOP} />
            <motion.rect {...rectAttrs(11)} animate={isOpen ? "open" : "closed"} variants={VARIANTS.MIDDLE} />
            <motion.rect {...rectAttrs(16)} animate={isOpen ? "open" : "closed"} variants={VARIANTS.BOTTOM} />
          </MotionConfig>
        </svg>
      </button>
    </motion.div>
  );
};
