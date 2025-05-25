"use client";
import { motion } from "motion/react";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Template({ children }: Props) {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "easeOut", duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
