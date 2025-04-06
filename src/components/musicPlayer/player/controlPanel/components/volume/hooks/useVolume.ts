import { useRef, useSyncExternalStore } from "react";
import { DragHandlers } from "motion/react";
import { Howler } from "howler";
import { DEFAULT_VOLUME } from "../consts";
import { getSnapshot, getServerSnapshot, setVolume, subscribe } from "../utils/externalStoreVolume";

export const useVolume = () => {
  const volume = parseFloat(useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) ?? DEFAULT_VOLUME);
  const trackRef = useRef<HTMLDivElement>(null);
  Howler.volume(volume);

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
    setVolume(newVolume);
  };

  return { trackRef, volume, handleDrag };
};
