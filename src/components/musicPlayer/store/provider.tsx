import { ReactNode, useEffect, useRef } from "react";
import { create } from "@type-hub/re-action";
import { Track, initState } from "./state";
import { reducer } from "./reducer";
import { actionCreators } from "./actions";

type Props = {
  children: ReactNode;
  tracks: Track[];
};

export const PlayerStoreProvider = ({ children, tracks }: Props) => {
  const soundRef = useRef<Howl | null>(null);
  const { PlayerProvider, usePlayerActions, usePlayerState } = create(
    reducer,
    actionCreators(soundRef.current),
    "Player"
  );

  useEffect(() => {
    if (soundRef.current) return;
    soundRef.current = new Howl({
      src: tracks.map(({ src }) => src),
      html5: true,
      volume: 1,
    });
  }, [tracks]);

  return <PlayerProvider {...{ initState }}>{children}</PlayerProvider>;
};
