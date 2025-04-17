import { useCallback, useEffect, useRef } from "react";
import { Howl } from "howler";
import { ActionCreators, State } from "../types/state";
import { playPause, pauseSong, playSong, changeSong } from "./playerControls";
import { initHowler } from "./initHowler";
import { fromPrevPageIndex, fromNextPageIndex, getNextSongIndex } from "../utils/getSongIndex";
import { orZero } from "@/utils/orZero";

export const usePlayerControls = (state: State, actions: ActionCreators) => {
  const soundRef = useRef<Howl | null>(null);

  useEffect(() => {
    if (soundRef.current) return;
    soundRef.current = initHowler(state.tracks[state.currentIndex].src, actions);
  }, [actions, state.tracks, state.currentIndex]);

  const setTrackSeconds = useCallback((seconds: number) => soundRef.current?.seek(seconds), []);
  const getTrackSeconds = useCallback(() => orZero(soundRef.current?.seek()), []);
  const getDuration = useCallback(() => orZero(soundRef.current?.duration()), []);
  const selectTrack = useCallback((index: number) => actions.setCurrentIndex(index), [actions]);
  const play = useCallback((src: string) => playSong(soundRef, actions, src), [actions]);
  const pause = useCallback(() => pauseSong(soundRef), []);
  const togglePlay = useCallback(() => playPause(soundRef), []);
  const playNext = useCallback(async () => {
    actions.setCurrentIndex(getNextSongIndex(state));
    await changeSong(soundRef, actions, state);
  }, [actions, state]);
  const nextPage = useCallback(async () => {
    actions.setCurrentIndex(fromNextPageIndex(state));
  }, [actions, state]);
  const prevPage = useCallback(async () => {
    actions.setCurrentIndex(fromPrevPageIndex(state));
  }, [actions, state]);

  return {
    play,
    pause,
    playNext,
    prevPage,
    nextPage,
    selectTrack,
    togglePlay,
    getDuration,
    getTrackSeconds,
    setTrackSeconds,
  };
};
