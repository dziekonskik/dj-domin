import { State } from "../types/state";

export const initState = {
  playerState: "loading",
  tracks: [],
  currentIndex: 0,
  currentId: 0,
} as const satisfies State;
