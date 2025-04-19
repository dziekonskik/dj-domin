import { usePlayer } from "@/components/musicPlayer/context";
import { useCallback } from "react";

export const useTrackActions = () => {
  const { selectTrack, play, pause } = usePlayer();

  const handleSelectTrack = useCallback(
    (index: number) => () => {
      selectTrack(index);
    },
    [selectTrack]
  );

  const handleTogglePlay = useCallback(
    (isPlaying: boolean, src: string) => (isPlaying ? pause : () => play(src)),
    [pause, play]
  );

  return { handleSelectTrack, handleTogglePlay };
};
