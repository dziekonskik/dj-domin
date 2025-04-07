"use client";

import { memo } from "react";
import { motion } from "motion/react";
import { PATH_CONFIG } from "../../../../../consts/pathConfig";
import { useVolumeButtonAnimation } from "../../hooks/useVolumeButtonAnimation";
import { useVolume } from "../../hooks/useVolume";

type Props = {
  toggleVolumeTrack: () => void;
};

export const VolumeButton = memo(({ toggleVolumeTrack }: Props) => {
  const { volume } = useVolume();
  const { waveSmControls, waveMdControls, waveLgControls, waveSmVariants } = useVolumeButtonAnimation({ volume });

  return (
    <button onClick={toggleVolumeTrack}>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 30 26"
        className="w-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <motion.path
          d="M 2 6 V 18 C 2.3 20.7 5 20.7 6.2 19 C 6.5 18.5 7 18.5 8 19 Q 18 23 18 22 C 20 20 20 6 18 4 Q 18 3 8 7 C 7.2 7.4 6.9 7.4 6.3 7C 6 4.3 2.3 4.4 2 6"
          {...PATH_CONFIG}
          fill="white"
        />
        <motion.path d={waveSmVariants} {...PATH_CONFIG} animate={waveSmControls} />
        <motion.path
          d="M 24 6
          C 27 10 27 16 24 20"
          {...PATH_CONFIG}
          animate={waveMdControls}
        />
        <motion.path
          d="M 26 4
          C 30 9 30 18 26 22"
          {...PATH_CONFIG}
          animate={waveLgControls}
        />
      </motion.svg>
    </button>
  );
});
VolumeButton.displayName = "VolumeButton";
