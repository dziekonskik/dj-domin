import { useRef, useEffect, useCallback } from "react";
import { PanInfo, useAnimationFrame, useMotionValue } from "motion/react";
import { COLOR } from "@/consts/colors";
import { usePlayer } from "../../context";

type Props = {
  setProgress: (seconds: number) => void;
};

export const useProgressSlider = ({ setProgress }: Props) => {
  const { getDuration, getTrackSeconds, playerState } = usePlayer();
  const trackRef = useRef<HTMLDivElement>(null);
  const ballRef = useRef<HTMLDivElement>(null);
  const progressLineRef = useRef<HTMLDivElement>(null);
  const ballX = useMotionValue(0);
  const progressLineLength = useMotionValue(0);
  const isPlaying = playerState === "playing";

  const handleDrag = useCallback(
    (_: Event, { point }: PanInfo) => {
      const trackRect = trackRef.current?.getBoundingClientRect();
      const ballRect = ballRef.current?.getBoundingClientRect();
      if (!trackRect || !ballRect) return;
      if (point.x < trackRect.left || point.x > trackRect.right) return;
      const currentProgress = ((point.x - trackRect.left) / trackRect.width) * getDuration();
      setProgress(currentProgress);
      progressLineLength.set(point.x - trackRect.left);
    },
    [getDuration, progressLineLength, setProgress]
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
    const trackRect = trackRef.current?.getBoundingClientRect();
    const ballRect = ballRef.current?.getBoundingClientRect();
    if (!trackRect || !ballRect || !isPlaying) return;
    const currentPosition = (getTrackSeconds() / getDuration()) * trackRect.width;
    ballX.set(currentPosition);
    progressLineLength.set(currentPosition);
  });

  return { handleDrag, ballX, ballRef, progressLineRef, progressLineLength, trackRef };
};
