import { useCallback, useRef } from "react";
import { Howl } from "howler";
import { ActionCreators, State } from "../state/types";
import { playPause } from "./playerControls";

export const usePlayerControls = (state: State, actions: ActionCreators) => {
  const soundRef = useRef<Howl | null>(null);

  const togglePlay = useCallback(() => playPause(soundRef, state, actions), [state, actions]);

  return { togglePlay };
};
