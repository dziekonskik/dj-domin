import { useState } from "react";
import { VolumeIcon } from "../../icons";
import dynamic from "next/dynamic";

const SliderTrack = dynamic(() => import("./components/sliderTrack").then((m) => m.SliderTrack), { ssr: false });

export const Volume = () => {
  const [isTrackOpen, setIsTrackopen] = useState(false);
  const toggleVolumeTrack = () => setIsTrackopen((prev) => !prev);

  return (
    <div className="flex items-center w-min relative">
      <SliderTrack isOpen={isTrackOpen} />
      <button onClick={toggleVolumeTrack}>
        <VolumeIcon />
      </button>
    </div>
  );
};
