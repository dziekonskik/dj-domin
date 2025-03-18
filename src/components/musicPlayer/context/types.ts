import { ActionDispatch } from "react";

export type Track = {
  title: string;
  src: string;
};

export type State = {
  playerState: "not_ready" | "ready" | "playing" | "paused" | "error";
  tracks: Track[];
  currentTrack: Track | null;
};

export type PlayerActions =
  | { type: "set_error" }
  | { type: "set_ready"; tracks: Track[] }
  | { type: "set_playing"; currentTrack: Track }
  | { type: "set_paused" };

export type ContextValues = readonly [
  state: State,
  dispatch: ActionDispatch<[action: PlayerActions]>,
  howler: Howl | null
];
