"use client";
import { Track, PlayerStoreProvider } from "../context";
import { ControlPanel } from "./controlPanel";

type Props = {
  tracks: Track[];
};

export const Player = ({ tracks }: Props) => {
  return (
    <PlayerStoreProvider {...{ tracks }}>
      <div className="bg-black rounded-md p-2 mr-auto w-full sm:w-sm flex">
        <ControlPanel />
      </div>
    </PlayerStoreProvider>
  );
};
