import { match } from "ts-pattern";
import { Actions, State } from "../types/state";

export const reducer = (state: State, action: Actions) =>
  match(action)
    .returnType<State>()
    .with({ type: "setError" }, () => ({ ...state, playerState: "error" }))
    .with({ type: "setReady" }, () => ({ ...state, playerState: "ready" }))
    .with({ type: "setPlaying" }, ({ payload }) => ({ ...state, playerState: "playing", currentId: payload }))
    .with({ type: "setPaused" }, () => ({ ...state, playerState: "paused" }))
    .with({ type: "setLoading" }, () => ({ ...state, playerState: "loading" }))
    .exhaustive();
