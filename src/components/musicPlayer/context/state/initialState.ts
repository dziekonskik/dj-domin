import { State } from "../types/state";

export const initState = {
  playerState: "loading",
  tracks: [],
  currentTrack: null,
  activeIndex: 0,
  currentPageIndex: 0,
} as const satisfies State;
