import { SoundRef } from "../../types/controls";

export const playPause = async (soundRef: SoundRef): Promise<void> => {
  if (!soundRef.current) return;

  if (soundRef.current.playing()) {
    return new Promise((resolve) => {
      soundRef.current!.once("pause", () => resolve());
      soundRef.current!.pause();
    });
  } else {
    return new Promise((resolve) => {
      soundRef.current!.once("play", () => resolve());
      soundRef.current!.play();
    });
  }
};
