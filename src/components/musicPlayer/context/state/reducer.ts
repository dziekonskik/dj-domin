import { match } from "ts-pattern";
import { PlayerActions, State } from "../types";

export const reducer = (state: State, action: PlayerActions) =>
  match(action)
    .returnType<State>()
    .with({ type: "set_error" }, () => ({ ...state, playerState: "error" }))
    .with({ type: "set_ready" }, ({ tracks }) => ({ ...state, playerState: "ready", tracks }))
    .with({ type: "set_playing" }, ({ currentTrack }) => ({ ...state, playerState: "playing", currentTrack }))
    .with({ type: "set_paused" }, () => ({ ...state, playerState: "paused" }))
    .exhaustive();
