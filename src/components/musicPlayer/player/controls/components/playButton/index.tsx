"use client";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { PATH_CONFIG } from "../../icons/consts/pathConfig";
import { PAUSE_LEFT, PAUSE_RIGHT, PLAY_LEFT, PLAY_RIGHT, ANIMATE_CONFIG } from "./consts/paths";

export const PlayButton = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const pathLeft = useRef<SVGAnimateElement>(null);
  const pathRight = useRef<SVGAnimateElement>(null);
  const opacityAnim = useRef<SVGAnimateElement>(null);

  const handleClick = () => {
    setIsPlaying((prev) => {
      setHasInteracted(true);
      return !prev;
    });
  };

  useEffect(() => {
    if (!hasInteracted) return;
    pathLeft.current?.beginElement();
    pathRight.current?.beginElement();
    opacityAnim.current?.beginElement();
  }, [isPlaying, hasInteracted]);

  return (
    <button className="w-14 aspect-square" id="button" onClick={handleClick}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <motion.circle cx="12" cy="12" r="12" fill={isPlaying ? "#aef0e3" : "#ff7574"} />
        <path d={isPlaying ? PAUSE_LEFT : PLAY_LEFT} {...PATH_CONFIG} fill="white">
          <animate
            ref={pathLeft}
            from={isPlaying ? PLAY_LEFT : PAUSE_LEFT}
            to={isPlaying ? PAUSE_LEFT : PLAY_LEFT}
            {...ANIMATE_CONFIG}
          />
        </path>
        <path d={isPlaying ? PAUSE_RIGHT : PLAY_RIGHT} {...PATH_CONFIG} fill="white" opacity={isPlaying ? 1 : 0}>
          <animate
            ref={pathRight}
            from={isPlaying ? PLAY_RIGHT : PAUSE_RIGHT}
            to={isPlaying ? PAUSE_RIGHT : PLAY_RIGHT}
          />
          <animate
            ref={opacityAnim}
            from={isPlaying ? "0" : "1"}
            to={isPlaying ? "1" : "0"}
            {...ANIMATE_CONFIG}
            dur="0.1s"
            attributeName="opacity"
          />
        </path>
      </svg>
    </button>
  );
};
