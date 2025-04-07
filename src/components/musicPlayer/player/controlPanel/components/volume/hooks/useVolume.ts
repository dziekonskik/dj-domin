import { RefObject, useSyncExternalStore } from "react";
import { AnimationControls, DragHandlers, TapHandlers } from "motion/react";
import { Howler } from "howler";
import { DEFAULT_VOLUME, THUMB_SIZE } from "../consts";
import { getSnapshot, getServerSnapshot, setVolume, subscribe } from "../utils/externalStoreVolume";

export const useVolume = (trackRef?: RefObject<HTMLDivElement | null>, thumbControls?: AnimationControls) => {
  const volume = parseFloat(useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) ?? DEFAULT_VOLUME);
  Howler.volume(volume);

  const hanldleThumbPos = (x: number) => {
    const rect = trackRef?.current?.getBoundingClientRect();
    if (!rect) return;
    const start = rect.left;
    const end = rect.left + rect.width;
    const inputRange = end - start;
    if (x < start || x > end) return;

    const relativeCurrentPos = (x - start) / inputRange;
    const newVolume = Math.round(relativeCurrentPos * 10) / 10;
    Howler.volume(newVolume);
    setVolume(newVolume);
  };

  const handleDrag: DragHandlers["onDrag"] = (_, { point }) => {
    hanldleThumbPos(point.x);
  };

  const handleClick: TapHandlers["onTap"] = (_, { point }) => {
    const rect = trackRef?.current?.getBoundingClientRect();
    if (!rect) return;
    hanldleThumbPos(point.x);
    const newX = point.x - rect.left - THUMB_SIZE / 2;
    thumbControls?.start({ x: newX });
  };

  return { volume, handleDrag, handleClick };
};
