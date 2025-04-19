import { ActionCreators } from "../../types/state";
import { initHowler } from "../initHowler";
import { SoundRef } from "../../types/controls";

export async function changeSong(soundRef: SoundRef, actions: ActionCreators, newSrc: string): Promise<void> {
  const wasPlaying = soundRef.current?.playing();
  if (soundRef.current) soundRef.current.unload();

  return new Promise((resolve) => {
    soundRef.current = initHowler(newSrc, actions);
    soundRef.current.once("load", () => {
      if (wasPlaying) soundRef.current?.play();
      resolve();
    });
  });
}
