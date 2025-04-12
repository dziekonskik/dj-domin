import { useCallback, useEffect, useRef } from "react";
import { Howl } from "howler";
import { ActionCreators, State } from "../types/state";
import { playPause } from "./playerControls";
import { initHowler } from "./initHowler";
import { changeSong } from "./playerControls/changeSong";
import { getNextSongIndex } from "../utils/getNextSongIndex";
import { orZero } from "@/utils/orZero";

export const usePlayerControls = (state: State, actions: ActionCreators) => {
  const soundRef = useRef<Howl | null>(null);

  useEffect(() => {
    soundRef.current = initHowler(state.tracks[state.currentIndex].src, actions);
  }, [actions, state.tracks, state.currentIndex]);

  const togglePlay = useCallback(() => playPause(soundRef), []);
  const setTrackSeconds = useCallback((seconds: number) => soundRef.current?.seek(seconds), []);
  const getTrackSeconds = useCallback(() => orZero(soundRef.current?.seek()), []);
  const getDuration = useCallback(() => orZero(soundRef.current?.duration()), []);
  const playNext = useCallback(async () => {
    actions.setCurrentIndex(getNextSongIndex(state));
    await changeSong(soundRef, actions, state);
  }, [actions, state]);

  return { togglePlay, getDuration, getTrackSeconds, setTrackSeconds, playNext };
};
