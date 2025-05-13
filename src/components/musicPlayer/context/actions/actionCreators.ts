import { createActionCreators } from "@type-hub/re-action";
import { PlayerState } from "../types/state";

export const actionCreators = createActionCreators({
  setWorkingState: (newState: Exclude<PlayerState, "error">) => newState,
  setErrorState: (_, error) => {
    throw new Error(`Player error: ${error}`);
  },
  setActiveIndex: (newIndex: number) => newIndex,
  setCurrentPageIndex: (newIndex: number) => newIndex,
});
