"use client";
import { use } from "react";
import { Track, PlayerStoreProvider } from "../context";
import { ControlPanel } from "./controlPanel";

type Props = {
  tracksPromise: Promise<Track[]>;
};

export const Player = ({ tracksPromise }: Props) => {
  const tracks = use(tracksPromise);

  return (
    <PlayerStoreProvider {...{ tracks }}>
      <div className="bg-black rounded-md px-2 py-4 mr-auto w-full sm:w-sm flex">
        <ControlPanel />
      </div>
    </PlayerStoreProvider>
  );
};
