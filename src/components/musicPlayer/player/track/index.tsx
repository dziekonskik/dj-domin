import Image from "next/image";
import { motion } from "motion/react";
import { TrackData } from "../../context";
import SzewcuLogo from "../../../../../public/djszewcu-green.svg";
import { PlayPause } from "../controlPanel/components/playPause";

type Props = {
  track?: TrackData;
  isSelected?: boolean;
  isPlaying: boolean;
  togglePlay: () => Promise<void>;
};

export const Track = ({ track, isPlaying, isSelected, togglePlay }: Props) => {
  return (
    <motion.div
      initial={{ scale: 1 }}
      animate={{ scale: isSelected ? 1.02 : 1 }}
      className="bg-black flex items-center sm:rounded-sm text-white gap-2 px-2 py-3 sm:p-2 overflow-hidden"
    >
      <span className="mx-1">
        <Image src={SzewcuLogo} alt="Dj Domin logo" width={20} height={20} className="scale-150 -translate-y-0.5" />
      </span>
      <span className="text-xs max-w-3xs truncate text-left select-none">{track?.title}</span>
      <span className="ml-auto mr-10 relative">
        <span className="absolute -top-7 sm:-top-8 -left-6 sm:scale-90">
          <PlayPause {...{ isPlaying, togglePlay }} isLoading={false} />
        </span>
      </span>
    </motion.div>
  );
};
