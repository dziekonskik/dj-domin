import { match } from "ts-pattern";
import { Actions, State } from "../types/state";

export const reducer = (state: State, action: Actions) =>
  match(action)
    .returnType<State>()
    .with({ type: "setErrorState" }, () => ({ ...state, playerState: "error" }))
    .with({ type: "setWorkingState" }, ({ payload }) => {
      if (payload === "playing") {
        return {
          ...state,
          playerState: payload,
          currentTrack: state.tracks[state.activeIndex],
        };
      }
      return { ...state, playerState: payload };
    })
    .with({ type: "setActiveIndex" }, ({ payload }) => ({ ...state, activeIndex: payload }))
    .with({ type: "setCurrentPageIndex" }, ({ payload }) => ({ ...state, currentPageIndex: payload }))
    .exhaustive();
