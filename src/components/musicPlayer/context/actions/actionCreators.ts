import { setupActionsCreators } from "@type-hub/re-action";

export const actionCreators = setupActionsCreators({
  setReady: (arg: number) => {
    console.log({ loaded: arg });
  },
  setError: (id, error) => {
    console.log({ id, error });
  },
  setPlaying: (id) => {
    console.log({ playing: true, id });

    return id;
  },
  setPaused: (id) => {
    console.log({ paused: true, id });
  },
});
