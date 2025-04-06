import { useCallback, useState } from "react";
import { useAnimationFrame } from "framer-motion";
import { usePlayer } from "@/components/musicPlayer/context";

export const useProgressCounter = () => {
  const [timeElapsed, setTimeElapsed] = useState(0);
  const { playerState, getTrackSeconds, getDuration, setTrackSeconds } = usePlayer();

  const setProgress = useCallback(
    (secodns: number) => {
      if (secodns < 0 || secodns > getDuration()) return;
      setTimeElapsed(secodns);
      setTrackSeconds(secodns);
    },
    [getDuration, setTrackSeconds]
  );

  useAnimationFrame(() => {
    if (playerState !== "playing") return;
    const currentSeconds = getTrackSeconds();
    const currentRounded = Math.floor(currentSeconds);

    setTimeElapsed((prevElapsed) => {
      if (Math.floor(prevElapsed) !== currentRounded) {
        return currentSeconds;
      }
      return prevElapsed;
    });
  });

  return { timeElapsed, setProgress };
};
