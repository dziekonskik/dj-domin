"use client";
import { ReactNode } from "react";
import { motion } from "motion/react";
import { SectionId } from "@/consts/sections";
import { useIsClient } from "@/hooks/useIsClient";
import { useAnimations } from "./hooks/useAnimations";

type Props = {
  children: ReactNode;
  className: string;
  id: SectionId;
};

export const Section = ({ children, className, id }: Props) => {
  const isClient = useIsClient();
  const { ref, isMobile, scale } = useAnimations({ id });

  return (
    <section {...{ className, id }}>
      <motion.div {...{ ref }} style={{ scale: isClient && !isMobile ? scale : 1 }} className="w-full h-full">
        {children}
      </motion.div>
    </section>
  );
};
