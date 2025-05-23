"use client";
import dynamic from "next/dynamic";
import { VolumeButton } from "./components/volumeButton";
import { useVolumeControls } from "./hooks/useVolumeControls";

const SliderTrack = dynamic(() => import("./components/sliderTrack").then((m) => m.SliderTrack), { ssr: false });

export const Volume = () => {
  const { wrapperRef, trackRef, isOpen, toggleVolumeTrack, thumbControls } = useVolumeControls();

  return (
    <div ref={wrapperRef} className="flex items-center w-max relative">
      <SliderTrack {...{ isOpen, trackRef, thumbControls }} />
      <VolumeButton {...{ toggleVolumeTrack }} />
    </div>
  );
};
