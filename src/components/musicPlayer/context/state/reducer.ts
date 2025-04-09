import { match } from "ts-pattern";
import { Actions, State } from "../types/state";

export const reducer = (state: State, action: Actions) =>
  match(action)
    .returnType<State>()
    .with({ type: "setErrorState" }, () => ({ ...state, playerState: "error" }))
    .with({ type: "setWorkingState" }, ({ payload }) => ({ ...state, playerState: payload }))
    .with({ type: "setCurrentIndex" }, ({ payload }) => ({ ...state, currentIndex: payload }))
    .exhaustive();
