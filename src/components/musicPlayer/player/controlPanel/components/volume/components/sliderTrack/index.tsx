import { motion } from "motion/react";
import { useVolume } from "../../hooks/useVolume";
import { BALL_SIZE } from "../../consts";
import { getInitialVolumePos } from "../../utils/getinitialVolumePos";

type Props = {
  isOpen: boolean;
};

export const SliderTrack = ({ isOpen }: Props) => {
  const { handleDrag, trackRef, volume } = useVolume();
  const initialX = getInitialVolumePos(volume);

  return (
    <div className="absolute w-20 -translate-x-20">
      <motion.div
        ref={trackRef}
        className="bg-white h-0.5 rounded-xl"
        initial={{ scaleX: 0, transformOrigin: "right" }}
        animate={{ scaleX: isOpen ? 1 : 0 }}
      >
        <motion.div
          className="bg-white aspect-square rounded-full -translate-y-1/2 absolute origin-left"
          initial={{ x: initialX, width: BALL_SIZE }}
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
