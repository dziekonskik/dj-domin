import Image from "next/image";
import { motion } from "motion/react";
import { TrackData } from "../../context";
import SzewcuLogo from "../../../../../public/djszewcu-green.svg";
import { PlayPause } from "../controlPanel/components/playPause";
import { memo } from "react";

type Props = {
  track?: TrackData;
  isSelected?: boolean;
  isPlaying: boolean;
  togglePlay: () => Promise<void>;
  selectTrack?: () => void;
};

export const Track = memo(({ track, isPlaying, isSelected, togglePlay, selectTrack }: Props) => {
  return (
    <motion.li
      animate={{ scale: isSelected ? 1.02 : 1, y: 0 }}
      exit={{ y: 20 }}
      transition={{ duration: 0.2 }}
      className="bg-black flex items-center sm:rounded-sm text-white gap-2 px-2 py-3 sm:p-2 overflow-hidden cursor-pointer h-9"
      onClick={selectTrack}
    >
      <span className="mx-1 select-none">
        <Image src={SzewcuLogo} alt="Dj Domin logo" width={20} height={20} className="scale-150 -translate-y-0.5" />
      </span>
      <span className="text-xs max-w-3xs truncate text-left select-none">{track?.title}</span>
      <span className="ml-auto mr-10 relative">
        <span className="absolute -top-7 sm:-top-8 -left-6 sm:scale-90">
          <PlayPause {...{ isPlaying, togglePlay }} isLoading={false} />
        </span>
      </span>
    </motion.li>
  );
});
Track.displayName = "Track";
