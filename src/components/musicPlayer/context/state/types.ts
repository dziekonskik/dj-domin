import { GetActionTypes, CreateBindedActions } from "@type-hub/re-action";
import { actionCreators, usePlayerControls } from "../actions";

export type Track = {
  title: string;
  src: string;
};

export type State = {
  playerState: "not_ready" | "ready" | "playing" | "paused" | "error";
  tracks: Track[];
  currentIndex: number;
  currentId: number;
};

export type Actions = GetActionTypes<typeof actionCreators>;
export type ActionCreators = CreateBindedActions<typeof actionCreators>;
export type ContextValues = State & ReturnType<typeof usePlayerControls>;
