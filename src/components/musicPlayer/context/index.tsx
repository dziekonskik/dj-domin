import { createContext, ReactNode, use, useEffect, useMemo, useReducer, useRef } from "react";
import { Howl } from "howler";
import { initState } from "./state/initialState";
import { reducer } from "./state/reducer";
import { ContextValues, Track } from "./types";

type Props = {
  children: ReactNode;
  tracks: Track[];
};

const PlayerContext = createContext<ContextValues | null>(null);

export const PlayerStoreProvider = ({ children, tracks }: Props) => {
  const soundRef = useRef<Howl | null>(null);
  const [state, dispatch] = useReducer(reducer, initState);

  useEffect(() => {
    if (soundRef.current) return;
    soundRef.current = new Howl({
      src: tracks.map(({ src }) => src),
      html5: true,
      volume: 1,
      onload: () => {
        dispatch({ type: "set_ready", tracks });
      },
      onloaderror: () => {
        dispatch({ type: "set_error" });
      },
      onplayerror: () => {
        dispatch({ type: "set_error" });
      },
    });

    return () => {
      soundRef.current?.unload();
    };
  }, [tracks]);

  const memState = useMemo(() => [state, dispatch, soundRef.current] as const, [state]);

  return <PlayerContext value={memState}>{children}</PlayerContext>;
};

export const usePlayer = () => {
  const values = use(PlayerContext);
  if (!values) throw new Error("Player context is broken");

  return values;
};
