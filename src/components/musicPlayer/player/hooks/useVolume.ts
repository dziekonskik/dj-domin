import { useRef, useSyncExternalStore } from "react";
import { DragHandlers } from "motion/react";
import { Howler } from "howler";
import { getSnapsot, subscribe } from "../utils/externalStore";

const DEFAULT_VOLUME = "0.5";

export const useVolume = () => {
  const vol = parseFloat(useSyncExternalStore(subscribe, getSnapsot) ?? DEFAULT_VOLUME);
  const trackRef = useRef<HTMLDivElement>(null);
  Howler.volume(vol);

  const handleDrag: DragHandlers["onDrag"] = (_, { point }) => {
    const rect = trackRef.current?.getBoundingClientRect();
    if (!rect) return;
    const start = rect.left;
    const end = rect.left + rect.width;
    const current = point.x;
    const inputRange = end - start;
    if (current < start || current > end) return;

    const relativeCurrentPos = (current - start) / inputRange;
    const newVolume = Math.round(relativeCurrentPos * 10) / 10;
    Howler.volume(newVolume);
    localStorage.setItem("d-volume", newVolume.toString());
  };

  return { trackRef, vol, handleDrag };
};
