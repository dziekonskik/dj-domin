export type Track = {
  title: string;
  src: string;
};

export type State = {
  playerState: "not_ready" | "ready" | "playing" | "paused" | "error";
  tracks: Track[];
  currentTrack: Track | null;
};

export const initState = {
  playerState: "not_ready",
  tracks: [],
  currentTrack: null,
} as const satisfies State;
