import { useRef, useEffect, useCallback } from "react";
import { PanInfo, useAnimationFrame, useInView, useMotionValue } from "motion/react";
import { COLOR } from "@/consts/colors";
import { usePlayer } from "@/components/musicPlayer/context";
import { orZero } from "@/utils/orZero";

type Props = {
  setProgress: (seconds: number) => void;
};

export const useProgressSlider = ({ setProgress }: Props) => {
  const { getDuration, getTrackSeconds, playerState, activeIndex } = usePlayer();
  const trackRef = useRef<HTMLDivElement>(null);
  const ballRef = useRef<HTMLDivElement>(null);
  const progressLineRef = useRef<HTMLDivElement>(null);
  const ballX = useMotionValue(0);
  const progressLineLength = useMotionValue(0);
  const isPlaying = playerState === "playing";
  const savedIndex = useRef(activeIndex);
  const isInView = useInView(trackRef);

  const handleSliderPos = useCallback(
    (x: number) => {
      const trackRect = trackRef.current?.getBoundingClientRect();
      const ballRect = ballRef.current?.getBoundingClientRect();
      if (!trackRect || !ballRect) return;
      if (x < trackRect.left || x > trackRect.right) return;
      const currentProgress = orZero(((x - trackRect.left) / trackRect.width) * getDuration());
      setProgress(currentProgress);
      progressLineLength.set(x - trackRect.left);
    },
    [getDuration, setProgress, progressLineLength]
  );

  const handleTap = useCallback(
    (_: Event, { point }: PanInfo) => {
      const trackRect = trackRef.current?.getBoundingClientRect();
      if (!trackRect) return;
      handleSliderPos(point.x);
      ballX.set(point.x - trackRect.left);
    },
    [ballX, handleSliderPos]
  );

  const handleDrag = useCallback(
    (_: Event, { point }: PanInfo) => {
      handleSliderPos(point.x);
    },
    [handleSliderPos]
  );

  useEffect(() => {
    const colorAnimationRefs = [ballRef.current, progressLineRef.current].map((aRef) =>
      aRef?.animate(
        { backgroundColor: isPlaying ? COLOR.PRIMARY : COLOR.SECONDARY },
        { duration: 200, fill: "forwards" }
      )
    );

    return () => colorAnimationRefs.forEach((aRef) => aRef?.finish());
  }, [isPlaying]);

  useAnimationFrame(() => {
    if (!isInView) return;
    const trackRect = trackRef.current?.getBoundingClientRect();
    const ballRect = ballRef.current?.getBoundingClientRect();
    const isIdle = !isPlaying && activeIndex === savedIndex.current;
    if (!trackRect || !ballRect || isIdle) return;

    const currentPosition = orZero((getTrackSeconds() / getDuration()) * trackRect.width);
    ballX.set(currentPosition);
    progressLineLength.set(currentPosition);
    savedIndex.current = activeIndex;
  });

  return { handleDrag, handleTap, ballX, ballRef, progressLineRef, progressLineLength, trackRef };
};
