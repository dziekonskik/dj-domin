import { setupActionsCreators } from "@type-hub/re-action";

export const actionCreators = setupActionsCreators({
  setReady: () => null,
  setError: (_, error) => {
    throw new Error(`Player error: ${error}`);
  },
  setPlaying: (id) => id,
  setPaused: () => null,
  setLoading: () => null,
});
