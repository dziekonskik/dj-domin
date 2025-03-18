import { State } from "../types";

export const initState = {
  playerState: "not_ready",
  tracks: [],
  currentTrack: null,
} as const satisfies State;
