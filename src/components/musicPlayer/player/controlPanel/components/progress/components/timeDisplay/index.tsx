import { usePlayer } from "@/components/musicPlayer/context";
import { durationFromSec } from "@/components/musicPlayer/player/utils/calculateDurationFromSec";

type Props = {
  timeElapsed: number;
};

export const TimeDisplay = ({ timeElapsed }: Props) => {
  const { getDuration } = usePlayer();
  return (
    <div className="w-full flex justify-between mb-2">
      <span className="text-white text-xs select-none">{durationFromSec(Math.floor(timeElapsed))}</span>
      <span className="text-white text-xs select-none"> {durationFromSec(Math.floor(getDuration()))}</span>
    </div>
  );
};
