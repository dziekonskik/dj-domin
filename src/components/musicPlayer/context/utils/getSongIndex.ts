import { TRACKS_PER_PAGE } from "../../player/consts/trackConfig";
import { State } from "../types/state";

export function getPrevSongIndex(state: State) {
  return state.currentIndex - 1 > 0 ? state.currentIndex - 1 : state.tracks.length - 1;
}

export function getNextSongIndex(state: State) {
  return state.currentIndex + 1 < state.tracks.length ? state.currentIndex + 1 : 0;
}

export function fromPrevPageIndex(state: State) {
  const currentPageIndex = Math.floor(state.currentIndex / TRACKS_PER_PAGE);
  const lastPageIndex = Math.floor((state.tracks.length - 1) / TRACKS_PER_PAGE);
  const prevPageIndex = currentPageIndex - 1 <= 0 ? lastPageIndex : currentPageIndex - 1;
  return prevPageIndex * TRACKS_PER_PAGE;
}

export function fromNextPageIndex(state: State) {
  const currentPageIndex = Math.floor(state.currentIndex / TRACKS_PER_PAGE);
  const lastPageIndex = Math.floor((state.tracks.length - 1) / TRACKS_PER_PAGE);
  const nextPageIndex = currentPageIndex + 1 > lastPageIndex ? 0 : currentPageIndex + 1;

  return nextPageIndex * TRACKS_PER_PAGE;
}
