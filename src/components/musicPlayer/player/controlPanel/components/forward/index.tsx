import { motion } from "motion/react";
import { PATH_CONFIG } from "../../../consts/pathConfig";
import { useForwardButton } from "./hooks/useForwardButton";

type Props = {
  playNext: () => Promise<void>;
};

export const Forward = ({ playNext }: Props) => {
  const { handleClick, lineControl, triangleControl } = useForwardButton({ playNext });

  return (
    <button className="flex items-center cursor-pointer" onClick={handleClick}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 24" fill="white" className="w-6" id="icon">
        <motion.path
          animate={triangleControl}
          d="M 2 6
            V 18
            C 3 21 5 20 18 15
            C 21 14 21 12 18 10.5
            C 5 4 3 3 2 6
            "
          {...PATH_CONFIG}
          fill="white"
        />
        <motion.path
          animate={lineControl}
          id="p2"
          d="M 24 8
            C 24 11 24 16 24 18"
          {...PATH_CONFIG}
          strokeWidth="1.5"
        />
      </svg>
    </button>
  );
};
