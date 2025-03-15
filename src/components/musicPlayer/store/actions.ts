import { setupActionsCreators } from "@type-hub/re-action";

export const actionCreators = (howl?: Howl | null) =>
  setupActionsCreators({
    setReady: (state) => {
      console.log(state);
    },
    setError: () => {},
  });
