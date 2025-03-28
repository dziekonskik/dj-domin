import { Next } from "./components/next";
import { PlayPause } from "./components/playPause";
import { Volume } from "./components/volume";

export const ControlPanel = () => {
  return (
    <div className="w-full">
      <div className="mx-auto flex justify-center md:gap-5 lg:gap-7 xl:gap-10">
        <Volume />
        <PlayPause />
        <Next />
      </div>
    </div>
  );
};
