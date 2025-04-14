import { useCallback, useEffect, useRef } from "react";
import { Howl } from "howler";
import { ActionCreators, State } from "../types/state";
import { playPause, changeSong, pauseSong, playSong } from "./playerControls";
import { initHowler } from "./initHowler";
import { getNextSongIndex } from "../utils/getNextSongIndex";
import { orZero } from "@/utils/orZero";

export const usePlayerControls = (state: State, actions: ActionCreators) => {
  const soundRef = useRef<Howl | null>(null);

  useEffect(() => {
    soundRef.current = initHowler(state.tracks[state.currentIndex].src, actions);
  }, [actions, state.tracks, state.currentIndex]);

  const setTrackSeconds = useCallback((seconds: number) => soundRef.current?.seek(seconds), []);
  const getTrackSeconds = useCallback(() => orZero(soundRef.current?.seek()), []);
  const getDuration = useCallback(() => orZero(soundRef.current?.duration()), []);
  const play = useCallback((src: string) => playSong(soundRef, actions, src), [actions]);
  const pause = useCallback(() => pauseSong(soundRef), []);
  const togglePlay = useCallback(() => playPause(soundRef), []);
  const playNext = useCallback(async () => {
    actions.setCurrentIndex(getNextSongIndex(state));
    await changeSong(soundRef, actions, state);
  }, [actions, state]);
  const selectTrack = useCallback((index: number) => actions.setCurrentIndex(index), [actions]);

  return { play, pause, playNext, selectTrack, togglePlay, getDuration, getTrackSeconds, setTrackSeconds };
};
