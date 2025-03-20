import { createContext, ReactNode, use } from "react";
import { useBindedReducer } from "@type-hub/re-action";
import { initState } from "./state/initialState";
import { reducer } from "./state/reducer";
import { actionCreators } from "./actions/actionCreators";
import { ContextValues, Track } from "./state/types";
import { usePlayerControls } from "./actions/usePlayerControls";

const PlayerContext = createContext<ContextValues | null>(null);

type Props = {
  children: ReactNode;
  tracks: Track[];
};

export const PlayerStoreProvider = ({ children, tracks }: Props) => {
  const [state, actions] = useBindedReducer(reducer, actionCreators, { ...initState, tracks });
  const controls = usePlayerControls(state, actions);

  return <PlayerContext value={{ ...state, ...controls }}>{children}</PlayerContext>;
};

export const usePlayer = () => {
  const values = use(PlayerContext);
  if (!values) throw new Error("PlayerContext is broken");

  return values;
};
