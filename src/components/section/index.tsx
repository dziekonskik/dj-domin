"use client";
import { MEDIA_QUERY } from "@/consts/mediaQueries";
import { useMediaQuery } from "@/hooks";
import { motion, useScroll, useTransform } from "motion/react";
import { ReactNode, useRef } from "react";

type Props = {
  children: ReactNode;
  className: string;
};

export const Section = ({ children, className }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end start", "start end"],
  });
  const isMobile = useMediaQuery(MEDIA_QUERY.IS_MOBILE);
  const scale = useTransform(scrollYProgress, [0.1, 0.5, 0.9], [0.9, 1, 0.9]);

  return (
    <section {...{ className }}>
      <motion.div {...{ ref }} style={{ scale: isMobile ? 1 : scale }} className="w-full h-full">
        {children}
      </motion.div>
    </section>
  );
};
