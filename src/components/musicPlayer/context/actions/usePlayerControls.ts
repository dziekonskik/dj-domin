import { useCallback, useRef } from "react";
import { Howl } from "howler";
import { ActionCreators, State } from "../types/state";
import { playPause } from "./playerControls";

export const usePlayerControls = (state: State, actions: ActionCreators) => {
  const soundRef = useRef<Howl | null>(null);

  const togglePlay = useCallback(() => playPause(soundRef, state, actions), [state, actions]);
  const getTrackSeconds = useCallback(() => soundRef.current?.seek() ?? 0, []);
  const setTrackSeconds = useCallback((seconds: number) => soundRef.current?.seek(seconds), []);
  const getDuration = useCallback(() => soundRef.current?.duration() ?? 0, []);

  return { togglePlay, getDuration, getTrackSeconds, setTrackSeconds };
};
