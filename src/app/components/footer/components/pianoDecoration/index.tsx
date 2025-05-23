"use client";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { useIsClient } from "@/hooks/useIsClient";
import { RECT_WIDTH, svgContainerVariants, rectVariants } from "./consts/animationConfig";

export const PianoDecoration = () => {
  const [pianoCount, setPianoCount] = useState(0);
  const isClient = useIsClient();

  useEffect(() => {
    setPianoCount(window.innerWidth / RECT_WIDTH);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setPianoCount(window.innerWidth / RECT_WIDTH);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!isClient) return <svg height="100" />;
  return (
    <motion.svg
      variants={svgContainerVariants}
      initial="hidden"
      animate="show"
      viewBox={`0 0 ${window.innerWidth} 100`}
      preserveAspectRatio="none"
      width="100%"
      height="100"
    >
      {Array.from({ length: pianoCount }, (_, i) => (
        <motion.rect
          key={i + 1}
          x={i * RECT_WIDTH}
          width={`${RECT_WIDTH}px`}
          height="100"
          fill={i % 2 ? "#d7f8f1" : "#D9D9D9"}
          variants={rectVariants}
        />
      ))}
    </motion.svg>
  );
};
