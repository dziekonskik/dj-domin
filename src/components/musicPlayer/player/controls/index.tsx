import { usePlayer } from "../../context";
import { PlayButton } from "./components/playButton";
import { NextSongIcon, VolumeIcon } from "./icons";

export const Controls = () => {
  const { playerState, togglePlay } = usePlayer();
  const isPlaying = playerState === "playing";

  return (
    <div className="w-1/2 mx-auto flex justify-around">
      <VolumeIcon />
      <PlayButton {...{ isPlaying, togglePlay }} />
      <NextSongIcon />
    </div>
  );
};
