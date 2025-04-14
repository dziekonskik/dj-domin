import { SoundRef } from "../../types/controls";

export async function playPause(soundRef: SoundRef): Promise<void> {
  const sound = soundRef.current;
  if (!sound) return;

  if (sound.playing()) {
    return new Promise((resolve) => {
      sound.once("pause", () => resolve());
      sound.pause();
    });
  } else {
    return new Promise((resolve) => {
      sound.once("play", () => resolve());
      sound.play();
    });
  }
}
