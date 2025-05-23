"use client";
import { usePlayer } from "@/components/musicPlayer/context";
import { durationFromSec } from "../../utils/calculateDurationFromSec";
import { useIsClient } from "@/hooks/useIsClient";

type Props = {
  timeElapsed: number;
};

export const TimeDisplay = ({ timeElapsed }: Props) => {
  const { getDuration } = usePlayer();
  const isClient = useIsClient();
  const duration = isClient ? durationFromSec(Math.floor(getDuration())) : "--:--";

  return (
    <div className="w-full flex justify-between mb-2">
      <span className="text-white text-xs select-none">{durationFromSec(Math.floor(timeElapsed))}</span>
      <span className="text-white text-xs select-none">{duration}</span>
    </div>
  );
};
