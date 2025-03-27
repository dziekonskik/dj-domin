import { usePlayer } from "../../context";
import { Next } from "./components/next";
import { PlayPause } from "./components/playPause";
import { Volume } from "./components/volume";

export const ControlPanel = () => {
  const { playerState, togglePlay } = usePlayer();
  const isPlaying = playerState === "playing";
  const isLoading = playerState === "loading";

  return (
    <div className="mx-auto flex justify-center md:gap-5 lg:gap-7 xl:gap-10">
      <Volume />
      <PlayPause {...{ isLoading, isPlaying, togglePlay }} />
      <Next />
    </div>
  );
};
