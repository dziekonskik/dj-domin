import { AnimatePresence, motion } from "motion/react";
import { usePlayer } from "../../context";
import { Forward } from "./components/forward";
import { PlayPause } from "./components/playPause";
import { ProgressControl } from "./components/progress";
import { Volume } from "./components/volume";

export const ControlPanel = () => {
  const { playerState, togglePlay, playNext } = usePlayer();
  const isPlaying = playerState === "playing";
  const isLoading = playerState === "loading";

  return (
    <AnimatePresence>
      <motion.div transition={{ duration: 0.25 }} layout className="w-full bg-black sm:rounded-md px-2 pb-4 pt-2">
        <ProgressControl />
        <div className="mx-auto flex justify-center gap-10 xl:gap-10">
          <Volume />
          <PlayPause {...{ isLoading, isPlaying, togglePlay }} />
          <Forward {...{ playNext }} />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
