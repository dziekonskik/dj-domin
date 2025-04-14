import { AnimationControls, motion } from "motion/react";
import { useVolume } from "../../hooks/useVolume";
import { THUMB_SIZE } from "../../consts";
import { getInitialVolumePos } from "../../utils/getinitialVolumePos";
import { RefObject } from "react";

type Props = {
  isOpen: boolean;
  trackRef: RefObject<HTMLDivElement | null>;
  thumbControls: AnimationControls;
};

export const SliderTrack = ({ isOpen, trackRef, thumbControls }: Props) => {
  const { handleDrag, handleClick, volume } = useVolume(trackRef, thumbControls);
  const initialX = getInitialVolumePos(volume);

  return (
    <motion.div className="absolute w-20 -translate-x-20 py-2 cursor-pointer" onTap={handleClick}>
      <motion.div
        ref={trackRef}
        className="bg-white h-0.5 rounded-xl"
        initial={{ scaleX: 0, transformOrigin: "right" }}
        animate={{ scaleX: isOpen ? 1 : 0 }}
      >
        <motion.div
          className="bg-white aspect-square rounded-full -translate-y-1/2 absolute origin-left"
          initial={{ x: initialX, width: THUMB_SIZE }}
          animate={thumbControls}
          whileTap={{ scale: 1.3 }}
          drag="x"
          dragConstraints={trackRef}
          dragMomentum={false}
          dragElastic={false}
          onDrag={handleDrag}
        />
      </motion.div>
    </motion.div>
  );
};
