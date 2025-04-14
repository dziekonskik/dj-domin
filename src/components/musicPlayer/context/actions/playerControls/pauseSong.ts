import { SoundRef } from "../../types/controls";

export async function pauseSong(soundRef: SoundRef): Promise<void> {
  return new Promise((resolve) => {
    if (soundRef.current?.playing()) soundRef.current.pause();
    soundRef.current?.on("pause", () => resolve());
  });
}
