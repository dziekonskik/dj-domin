"use client";
import { PlayerStoreProvider, TrackData } from "@/components/musicPlayer/context";
import { ControlPanel } from "@/components/musicPlayer/player/controlPanel";
import { MobileTrackNavigator } from "@/components/musicPlayer/player/mobileTrackNavigator";
import { use } from "react";

type Props = {
  tracksPromise: Promise<TrackData[]>;
};

export const Widget = ({ tracksPromise }: Props) => {
  const tracks = use(tracksPromise);

  return (
    <PlayerStoreProvider {...{ tracks }}>
      <article className="w-full sm:w-sm grid bg-black sm:rounded-md mt-16">
        <MobileTrackNavigator isVisible isWithoutButtons />
        <ControlPanel />
      </article>
    </PlayerStoreProvider>
  );
};
