import { usePlayer } from "../../context";
import { PlayButton } from "./components/playButton";
import { NextSongIcon, VolumeIcon } from "./icons";

export const Controls = () => {
  const { playerState, togglePlay } = usePlayer();
  const isPlaying = playerState === "playing";
  const isLoading = playerState === "loading";

  return (
    <div className="w-1/2 mx-auto flex justify-around">
      <VolumeIcon />
      <PlayButton {...{ isLoading, isPlaying, togglePlay }} />
      <NextSongIcon />
    </div>
  );
};
