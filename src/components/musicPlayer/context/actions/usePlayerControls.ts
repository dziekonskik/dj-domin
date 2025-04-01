import { useCallback, useEffect, useRef } from "react";
import { Howl } from "howler";
import { ActionCreators, State } from "../types/state";
import { playPause } from "./playerControls";

export const usePlayerControls = (state: State, actions: ActionCreators) => {
  const soundRef = useRef<Howl | null>(null);

  useEffect(() => {
    soundRef.current = new Howl({
      src: state.tracks[state.currentIndex].src,
      preload: true,
      onload: actions.setReady,
      onplay: actions.setPlaying,
      onpause: actions.setPaused,
      onend: actions.setReady,
    });
  }, [actions, state.currentIndex, state.tracks]);

  const togglePlay = useCallback(() => playPause(soundRef, state, actions), [state, actions]);
  const getTrackSeconds = useCallback(() => soundRef.current?.seek() ?? 0, []);
  const setTrackSeconds = useCallback((seconds: number) => soundRef.current?.seek(seconds), []);
  const getDuration = useCallback(() => soundRef.current?.duration() ?? 0, []);

  return { togglePlay, getDuration, getTrackSeconds, setTrackSeconds };
};
