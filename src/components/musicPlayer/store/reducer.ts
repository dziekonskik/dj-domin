import { match } from "ts-pattern";
import { GetActionTypes } from "@type-hub/re-action";
import { State } from "./state";
import { actionCreators } from "./actions";

export const reducer = (state: State, action: GetActionTypes<ReturnType<typeof actionCreators>>) =>
  match(action)
    .returnType<State>()
    .with({ type: "setError" }, () => ({ ...state, playerState: "error" }))
    .with({ type: "setReady" }, () => ({ ...state, playerState: "ready" }))
    .exhaustive();
