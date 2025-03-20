import { State } from "./types";

export const initState = {
  playerState: "not_ready",
  tracks: [],
  currentIndex: 0,
  currentId: 0,
} as const satisfies State;
