import { Suspense } from "react";
import { PlayerLoading } from "@/components/musicPlayer/player/loading";
import { getMusic } from "@/components/musicPlayer/utils/getMusic";
import { Widget } from "./components/widget";

export const PlayerWidget = () => {
  const tracksPromise = getMusic();

  return (
    <Suspense fallback={<PlayerLoading />}>
      <Widget {...{ tracksPromise }} />
    </Suspense>
  );
};
