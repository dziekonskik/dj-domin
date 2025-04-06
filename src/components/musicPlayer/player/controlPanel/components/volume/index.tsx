import { useCallback, useState } from "react";
import { VolumeButton } from "./components/volumeButton";
import dynamic from "next/dynamic";
import { usePlayer } from "@/components/musicPlayer/context";
import { useVolume } from "./hooks/useVolume";

const SliderTrack = dynamic(() => import("./components/sliderTrack").then((m) => m.SliderTrack), { ssr: false });

export const Volume = () => {
  const [isTrackOpen, setIsTrackopen] = useState(false);
  const { playerState } = usePlayer();
  const { volume } = useVolume();

  const toggleVolumeTrack = useCallback(() => {
    if (playerState === "loading") return;
    setIsTrackopen((prev) => !prev);
  }, [playerState]);

  return (
    <div className="flex items-center w-min relative">
      <SliderTrack isOpen={isTrackOpen} />
      <VolumeButton {...{ volume, toggleVolumeTrack }} />
    </div>
  );
};
