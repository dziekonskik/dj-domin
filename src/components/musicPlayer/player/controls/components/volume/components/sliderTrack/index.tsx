import { motion } from "motion/react";
import { useVolume } from "../../../../../hooks/useVolume";

type Props = {
  isOpen: boolean;
};

const TRACK_LENGTH = 80;
const BALL_SIZE = 12;

export const SliderTrack = ({ isOpen }: Props) => {
  const { handleDrag, trackRef, vol } = useVolume();
  const initialX = TRACK_LENGTH * vol;

  return (
    <div className="absolute w-20 -translate-x-20">
      <motion.div
        ref={trackRef}
        className="bg-white h-0.5 rounded-xl"
        initial={{ scaleX: 0, transformOrigin: "right" }}
        animate={{ scaleX: isOpen ? 1 : 0 }}
      >
        <motion.div
          className="bg-red aspect-square rounded-full -translate-y-1/2 absolute"
          initial={{ left: initialX, width: BALL_SIZE }}
          whileTap={{ scale: 1.3 }}
          drag="x"
          dragConstraints={trackRef}
          dragMomentum={false}
          dragElastic={false}
          onDrag={handleDrag}
        />
      </motion.div>
    </div>
  );
};
