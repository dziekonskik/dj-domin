import { setupActionsCreators } from "@type-hub/re-action";
import { PlayerState } from "../types/state";

export const actionCreators = setupActionsCreators({
  setWorkingState: (newState: Exclude<PlayerState, "error">) => newState,
  setErrorState: (_, error) => {
    throw new Error(`Player error: ${error}`);
  },
  setCurrentIndex: (newIndex: number) => newIndex,
});
