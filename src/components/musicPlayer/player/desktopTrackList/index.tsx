import { useCallback } from "react";
import { AnimatePresence, motion } from "motion/react";
import { splitEvery } from "ramda";
import { usePlayer } from "../../context";
import { Track } from "../track";
import { TRACKS_PER_PAGE } from "../consts/trackConfig";
import { NavigationBtns } from "../navigationBtns";
import { getCurrentPageIndex } from "../utils/getCurrentPage";

export const DesktopTrackList = () => {
  const { tracks, playerState, currentIndex, play, pause, selectTrack } = usePlayer();
  const paginatedTracks = splitEvery(TRACKS_PER_PAGE, tracks);
  const currentPageIndex = getCurrentPageIndex(currentIndex);

  const handleSelectTrack = useCallback(
    (index: number) => () => {
      selectTrack(index);
    },
    [selectTrack]
  );

  return (
    <motion.div className="hidden sm:grid">
      <AnimatePresence mode="popLayout">
        <motion.ul
          key={currentIndex}
          layout="position"
          transition={{ duration: 0.2 }}
          className="grid gap-y-2 mt-2 mb-4"
        >
          <AnimatePresence>
            {paginatedTracks[currentPageIndex].map((track, index) => {
              const isSelected = track.title === tracks[currentIndex].title;
              const isPlaying = playerState === "playing" && isSelected;
              const newTotalIndex = index + currentPageIndex * TRACKS_PER_PAGE;
              return (
                <Track
                  key={track.title}
                  {...{
                    track,
                    isPlaying,
                    togglePlay: isPlaying ? pause : () => play(track.src),
                    isSelected,
                    selectTrack: handleSelectTrack(newTotalIndex),
                  }}
                />
              );
            })}
          </AnimatePresence>
        </motion.ul>
      </AnimatePresence>
      <NavigationBtns />
    </motion.div>
  );
};
