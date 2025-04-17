import { motion } from "motion/react";
import { IconButton } from "@/components/iconButton";
import arrowRight from "../../../../../public/arrow-right.svg";
import arrowLeft from "../../../../../public/arrow-left.svg";
import { usePlayer } from "../../context";
import { getCurrentPageIndex } from "../utils/getCurrentPage";

export const NavigationBtns = () => {
  const { nextPage, prevPage, currentIndex } = usePlayer();
  const displayedPage = getCurrentPageIndex(currentIndex) + 1;
  return (
    <div className="w-full flex gap-4 sm:justify-end items-center">
      <IconButton content={arrowLeft} onClick={prevPage} />
      <motion.span initial={{ scale: 1.2 }} animate={{ scale: 1 }} key={displayedPage} className="text-lg">
        {displayedPage}
      </motion.span>
      <IconButton content={arrowRight} onClick={nextPage} />
    </div>
  );
};
