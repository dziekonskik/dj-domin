import { State } from "../types/state";

export function getNextSongIndex(state: State) {
  return state.currentIndex + 1 < state.tracks.length ? state.currentIndex + 1 : 0;
}
