import { Suspense } from "react";
import { Player } from "./player";
import { PlayerLoading } from "./player/loading";
import { getMusic } from "./utils/getMusic";

export async function MusicPlayer() {
  const tracksPromise = getMusic();

  return (
    <Suspense fallback={<PlayerLoading />}>
      <Player {...{ tracksPromise }} />
    </Suspense>
  );
}
