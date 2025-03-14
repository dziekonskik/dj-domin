import { PlayButton } from "./components/playButton";
import { NextSongIcon, VolumeIcon } from "./icons";

export const Controls = () => {
  return (
    <div className="w-1/2 mx-auto flex justify-around">
      <VolumeIcon />
      <PlayButton />
      <NextSongIcon />
    </div>
  );
};
