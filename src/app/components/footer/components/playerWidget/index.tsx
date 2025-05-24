import { Suspense } from "react";
import { PlayerLoading } from "@/components/musicPlayer/player/loading";
import { Widget } from "./components/widget";

export const PlayerWidget = () => {
  return (
    <Suspense fallback={<PlayerLoading />}>
      <Widget />
    </Suspense>
  );
};
