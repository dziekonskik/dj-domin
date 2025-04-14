import { SoundRef } from "../../types/controls";
import { ActionCreators } from "../../types/state";
import { initHowler } from "../initHowler";

export async function playSong(soundRef: SoundRef, actions: ActionCreators, src: string): Promise<void> {
  if (soundRef.current) soundRef.current.unload();

  return new Promise((resolve) => {
    soundRef.current = initHowler(src, actions);
    soundRef.current.once("load", () => {
      soundRef.current?.play();
      resolve();
    });
  });
}
