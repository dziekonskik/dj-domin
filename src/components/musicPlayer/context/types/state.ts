import { GetActionTypes, CreateBoundActions } from "@type-hub/re-action";
import { actionCreators, usePlayerControls } from "../actions";

export type TrackData = {
  title: string;
  src: string;
};

export type PlayerState = "loading" | "ready" | "playing" | "paused" | "error";

export type State = {
  playerState: PlayerState;
  tracks: TrackData[];
  currentTrack: TrackData | null;
  activeIndex: number;
  currentPageIndex: number;
};

export type Actions = GetActionTypes<typeof actionCreators>;
export type ActionCreators = CreateBoundActions<typeof actionCreators>;
export type ContextValues = State & ReturnType<typeof usePlayerControls>;
