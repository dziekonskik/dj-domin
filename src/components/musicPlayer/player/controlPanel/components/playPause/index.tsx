"use client";
import { memo } from "react";
import { motion } from "motion/react";
import { ANIMATE_CONFIG } from "./consts/paths";
import { PATH_CONFIG } from "../../../consts/pathConfig";
import { usePlayPause } from "./hooks/usePlayPause";
import { COLOR } from "@/consts/colors";

type Props = {
  isLoading: boolean;
  isPlaying: boolean;
  togglePlay: () => Promise<void>;
};

export const PlayPause = memo(({ isLoading, isPlaying, togglePlay }: Props) => {
  const { circleRef, displacementRef, rotateDisplacementRef, variantsLeftPath, variantsRightPath } = usePlayPause({
    isLoading,
    isPlaying,
  });

  const handleClick = async () => {
    await togglePlay();
  };

  return (
    <button className="w-14 xl:w-16 aspect-square" id="button" onClick={handleClick}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <filter id="loading">
          <feTurbulence type="fractalNoise" baseFrequency="0.3" numOctaves="1" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="0" xChannelSelector="R" yChannelSelector="G">
            <animate
              ref={displacementRef}
              {...ANIMATE_CONFIG}
              attributeName="scale"
              from={isLoading ? 0 : 3}
              to={isLoading ? 3 : 0}
            />
          </feDisplacementMap>
        </filter>
        <circle ref={circleRef} cx="12" cy="12" r="12" filter="url(#loading)" fill={COLOR.SECONDARY}>
          <animateTransform
            ref={rotateDisplacementRef}
            attributeName="transform"
            type="rotate"
            from="0 12 12"
            to="10800 12 12"
            dur="100s"
          />
        </circle>
        <motion.path
          variants={variantsLeftPath}
          initial="pause"
          animate={isPlaying ? "play" : "pause"}
          {...PATH_CONFIG}
          stroke="white"
          fill="white"
        />
        <motion.path
          variants={variantsRightPath}
          initial="pause"
          animate={isPlaying ? "play" : "pause"}
          {...PATH_CONFIG}
          stroke="white"
          fill="white"
        />
      </svg>
    </button>
  );
});
PlayPause.displayName = "PlayPause";
