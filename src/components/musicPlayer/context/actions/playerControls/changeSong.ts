import { ActionCreators, State } from "../../types/state";
import { initHowler } from "../initHowler";
import { SoundRef } from "../../types/controls";

export async function changeSong(soundRef: SoundRef, actions: ActionCreators, state: State): Promise<void> {
  const wasPlaying = soundRef.current?.playing();
  if (soundRef.current) soundRef.current.unload();

  return new Promise((resolve) => {
    const newSrc = state.tracks[state.currentIndex].src;
    soundRef.current = initHowler(newSrc, actions);
    soundRef.current.once("load", () => {
      if (wasPlaying) soundRef.current?.play();
      resolve();
    });
  });
}
