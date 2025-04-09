"use client";
import { use } from "react";
import { TrackData, PlayerStoreProvider } from "../context";
import { ControlPanel } from "./controlPanel";
import { MobileTrackNavigator } from "./mobileTrackNavigator";
import { DesktopTrackList } from "./desktopTrackList";

type Props = {
  tracksPromise: Promise<TrackData[]>;
};

export const Player = ({ tracksPromise }: Props) => {
  const tracks = use(tracksPromise);

  return (
    <PlayerStoreProvider {...{ tracks }}>
      <article className="w-full sm:w-sm grid">
        <MobileTrackNavigator />
        <ControlPanel />
        <DesktopTrackList />
      </article>
    </PlayerStoreProvider>
  );
};
