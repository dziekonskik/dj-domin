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
      onload: () => actions.setWorkingState("ready"),
      onplay: () => actions.setWorkingState("playing"),
      onpause: () => actions.setWorkingState("paused"),
      onend: () => actions.setWorkingState("ready"),
      onloaderror: actions.setErrorState,
      onplayerror: actions.setErrorState,
    });
  }, [actions, state.tracks, state.currentIndex]);

  const togglePlay = useCallback(() => playPause(soundRef), []);
  const getTrackSeconds = useCallback(() => soundRef.current?.seek() ?? 0, []);
  const setTrackSeconds = useCallback((seconds: number) => soundRef.current?.seek(seconds), []);
  const getDuration = useCallback(() => soundRef.current?.duration() ?? 0, []);
  const setCurrentTrackIndex = useCallback(
    (newIndex: number) => {
      if (newIndex === state.currentIndex) return;
      actions.setCurrentIndex(newIndex);
    },
    [actions, state.currentIndex]
  );

  return { togglePlay, getDuration, getTrackSeconds, setTrackSeconds, setCurrentTrackIndex };
};
