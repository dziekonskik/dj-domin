"use client";
import { useEffect, useRef, useState } from "react";
import { PATH_CONFIG } from "../../icons/consts/pathConfig";
import { PAUSE_LEFT, PAUSE_RIGHT, PLAY_LEFT, PLAY_RIGHT, ANIMATE_CONFIG } from "./consts/paths";

type Props = {
  isLoading: boolean;
  isPlaying: boolean;
  togglePlay: () => Promise<unknown>;
};

export const PlayButton = ({ isLoading, isPlaying, togglePlay }: Props) => {
  const [hasInteracted, setHasInteracted] = useState(false);
  const pathLeft = useRef<SVGAnimateElement>(null);
  const pathRight = useRef<SVGAnimateElement>(null);
  const opacityAnim = useRef<SVGAnimateElement>(null);
  const displacementRef = useRef<SVGAnimateElement>(null);
  const rotateDisplacementRef = useRef<SVGAnimateElement>(null);

  const handleClick = async () => {
    await togglePlay();
    if (!hasInteracted) setHasInteracted(true);
  };

  useEffect(() => {
    if (!hasInteracted) return;
    pathLeft.current?.beginElement();
    pathRight.current?.beginElement();
    opacityAnim.current?.beginElement();
  }, [isPlaying, hasInteracted]);

  useEffect(() => {
    if (!isLoading) return;
    displacementRef.current?.beginElement();
    rotateDisplacementRef.current?.beginElement();
  }, [isLoading]);

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
              from={isLoading ? 0 : 10}
              to={isLoading ? 10 : 0}
            />
          </feDisplacementMap>
        </filter>
        <circle cx="12" cy="12" r="12" fill={isPlaying ? "#aef0e3" : "#ff7574"} filter="url(#loading)">
          <animateTransform
            ref={rotateDisplacementRef}
            attributeName="transform"
            type="rotate"
            from="0 12 12"
            to="360 12 12"
            dur="5s"
          />
        </circle>
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
            {...ANIMATE_CONFIG}
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
