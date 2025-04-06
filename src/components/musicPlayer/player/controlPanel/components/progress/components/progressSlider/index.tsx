import { memo } from "react";
import { motion } from "motion/react";
import { useProgressSlider } from "../../hooks/useProgressSlider";

type Props = {
  setProgress: (seconds: number) => void;
};

export const ProgressSlider = memo(({ setProgress }: Props) => {
  const { ballRef, ballX, handleDrag, progressLineLength, progressLineRef, trackRef } = useProgressSlider({
    setProgress,
  });

  return (
    <div className="mb-2">
      <div ref={trackRef} className="h-0.5 rounded-2xl bg-white relative">
        <motion.div ref={progressLineRef} className="h-full absolute" style={{ width: progressLineLength }} />
        <motion.div
          ref={ballRef}
          className="w-3 h-3 rounded-full abosulute -translate-1/2 bg-secondary"
          style={{ x: ballX }}
          transition={{ type: "tween", ease: "linear" }}
          whileTap={{ scale: 1.3 }}
          drag="x"
          dragConstraints={trackRef}
          dragMomentum={false}
          dragElastic={false}
          onDrag={handleDrag}
        />
      </div>
    </div>
  );
});
ProgressSlider.displayName = "ProgressSlider";
