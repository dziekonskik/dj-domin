import { motion } from "motion/react";
import { IconButton } from "@/components/iconButton";
import arrowRight from "public/arrow-right.svg";
import arrowLeft from "public/arrow-left.svg";
import { memo } from "react";

type Props = {
  displayNumber?: number;
  prev: () => void;
  next: () => void;
};

export const NavigationBtns = memo(({ displayNumber, prev, next }: Props) => {
  return (
    <div className="w-full flex gap-4 sm:justify-end items-center h-12">
      <IconButton icon={arrowLeft} onClick={prev} className="rounded-full p-1 aspect-square bg-black" />
      <motion.span
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        key={displayNumber}
        className="text-lg hidden sm:block"
      >
        {displayNumber}
      </motion.span>
      <IconButton icon={arrowRight} onClick={next} className="rounded-full p-1 aspect-square bg-black" />
    </div>
  );
});
NavigationBtns.displayName = "NavigationBtns";
