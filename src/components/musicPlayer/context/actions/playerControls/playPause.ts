import { SoundRef } from "../../types/controls";

export async function playPause(soundRef: SoundRef): Promise<void> {
  if (soundRef.current?.playing()) {
    return new Promise((resolve) => {
      soundRef.current?.once("pause", () => resolve());
      soundRef.current?.pause();
    });
  } else {
    return new Promise((resolve) => {
      soundRef.current?.once("play", () => resolve());
      soundRef.current?.play();
    });
  }
}
