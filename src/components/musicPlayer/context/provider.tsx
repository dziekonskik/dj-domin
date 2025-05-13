import { createContext, ReactNode, use } from "react";
import { useBoundReducer } from "@type-hub/re-action";
import { initState } from "./state/initialState";
import { reducer } from "./state/reducer";
import { actionCreators } from "./actions/actionCreators";
import { ContextValues, TrackData } from "./types/state";
import { usePlayerControls } from "./actions/usePlayerControls";

const PlayerContext = createContext<ContextValues | null>(null);

type Props = {
  children: ReactNode;
  tracks: TrackData[];
};

export const PlayerStoreProvider = ({ children, tracks }: Props) => {
  const [state, actions] = useBoundReducer(reducer, actionCreators, { ...initState, tracks });
  const controls = usePlayerControls(state, actions);

  return <PlayerContext value={{ ...state, ...controls }}>{children}</PlayerContext>;
};

export const usePlayer = () => {
  const values = use(PlayerContext);
  if (!values) throw new Error("PlayerContext is broken");

  return values;
};
