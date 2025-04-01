"use client";
import { useState } from "react";
import { PAUSE_LEFT, PAUSE_RIGHT, PLAY_LEFT, PLAY_RIGHT, ANIMATE_CONFIG } from "./consts/paths";
import { usePlayer } from "@/components/musicPlayer/context";
import { PATH_CONFIG } from "../../icons/consts/pathConfig";
import { usePlayPause } from "../../../hooks/usePlayPause";
import { COLOR } from "@/consts/colors";

export const PlayPause = () => {
  const [hasInteracted, setHasInteracted] = useState(false);
  const { playerState, togglePlay } = usePlayer();
  const isPlaying = playerState === "playing";
  const isLoading = playerState === "loading";
  const { circleRef, displacementRef, opacityAnimRef, pathLeftRef, pathRightRef, rotateDisplacementRef } = usePlayPause(
    { hasInteracted }
  );

  const handleClick = async () => {
    await togglePlay();
    if (!hasInteracted) setHasInteracted(true);
  };

  return (
    <button className="w-14 aspect-square" id="button" onClick={handleClick}>
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
        <path d={isPlaying ? PAUSE_LEFT : PLAY_LEFT} {...PATH_CONFIG} fill="white">
          <animate
            ref={pathLeftRef}
            from={isPlaying ? PLAY_LEFT : PAUSE_LEFT}
            to={isPlaying ? PAUSE_LEFT : PLAY_LEFT}
            {...ANIMATE_CONFIG}
          />
        </path>
        <path d={isPlaying ? PAUSE_RIGHT : PLAY_RIGHT} {...PATH_CONFIG} fill="white" opacity={isPlaying ? 1 : 0}>
          <animate
            ref={pathRightRef}
            from={isPlaying ? PLAY_RIGHT : PAUSE_RIGHT}
            to={isPlaying ? PAUSE_RIGHT : PLAY_RIGHT}
            {...ANIMATE_CONFIG}
          />
          <animate
            ref={opacityAnimRef}
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
