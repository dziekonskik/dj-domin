import Image from "next/image";
import { motion } from "motion/react";

type Props = {
  content: string;
  onClick: () => void;
};

export const IconButton = ({ content, onClick }: Props) => {
  return (
    <motion.button
      {...{ onClick }}
      whileTap={{ scale: 0.98 }}
      whileHover={{ scale: 1.02 }}
      className="rounded-full p-1 aspect-square bg-black w-12 flex justify-center items-center cursor-pointer"
    >
      <motion.span whileTap={{ scale: 1.05 }} className="select-none">
        <Image src={content} alt="icon" />
      </motion.span>
    </motion.button>
  );
};
