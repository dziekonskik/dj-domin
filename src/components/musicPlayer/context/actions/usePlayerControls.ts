import { useCallback, useEffect, useRef } from "react";
import { Howl } from "howler";
import { ActionCreators, State } from "../types/state";
import { playPause, pauseSong, playSong, changeSong } from "./playerControls";
import { initHowler } from "./initHowler";
import { getNextSongIndex, getPrevSongIndex } from "../utils/getSongIndex";
import { orZero } from "@/utils/orZero";

export const usePlayerControls = (state: State, actions: ActionCreators) => {
  const soundRef = useRef<Howl | null>(null);

  useEffect(() => {
    if (soundRef.current) return;
    soundRef.current = initHowler(state.tracks[state.activeIndex].src, actions);
  }, [actions, state.tracks, state.activeIndex]);

  const setTrackSeconds = useCallback((seconds: number) => soundRef.current?.seek(seconds), []);
  const getTrackSeconds = useCallback(() => orZero(soundRef.current?.seek()), []);
  const getDuration = useCallback(() => orZero(soundRef.current?.duration()), []);
  const selectTrack = useCallback((index: number) => actions.setActiveIndex(index), [actions]);
  const play = useCallback((src: string) => playSong(soundRef, actions, src), [actions]);
  const pause = useCallback(() => pauseSong(soundRef), []);
  const togglePlay = useCallback(() => playPause(soundRef), []);
  const playNext = useCallback(async () => {
    const nextSongIdx = getNextSongIndex(state);
    actions.setActiveIndex(nextSongIdx);
    await changeSong(soundRef, actions, state.tracks[nextSongIdx].src);
  }, [actions, state]);
  const playPrev = useCallback(async () => {
    const prevSongIdx = getPrevSongIndex(state);
    actions.setActiveIndex(prevSongIdx);
    await changeSong(soundRef, actions, state.tracks[prevSongIdx].src);
  }, [actions, state]);

  return {
    play,
    pause,
    playPrev,
    playNext,
    selectTrack,
    togglePlay,
    getDuration,
    getTrackSeconds,
    setTrackSeconds,
    setCurrentPageIndex: actions.setCurrentPageIndex,
  };
};
