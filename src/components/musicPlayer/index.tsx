import { Suspense } from "react";
import { Player } from "./player";
import { PlayerLoading } from "./player/loading";

export function MusicPlayer() {
  return (
    <Suspense fallback={<PlayerLoading />}>
      <Player />
    </Suspense>
  );
}
