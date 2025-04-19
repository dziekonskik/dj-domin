import { useCallback, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { splitEvery } from "ramda";
import { usePlayer } from "../../context";
import { Track } from "../track";
import { TRACKS_PER_PAGE } from "../consts/trackConfig";
import { NavigationBtns } from "../navigationBtns";

export const DesktopTrackList = () => {
  const [currentPageIdx, setCurrentPageIdx] = useState(0);
  const { tracks, playerState, activeIndex, currentTrack, play, pause, selectTrack } = usePlayer();
  const paginatedTracks = splitEvery(TRACKS_PER_PAGE, tracks);

  const handleSelectTrack = useCallback(
    (index: number) => () => {
      selectTrack(index);
    },
    [selectTrack]
  );

  const prevPage = useCallback(() => {
    const maxPages = Math.floor(tracks.length / TRACKS_PER_PAGE);
    setCurrentPageIdx((prev) => (prev <= 0 ? maxPages : prev - 1));
  }, [tracks.length]);

  const nextPage = useCallback(() => {
    const maxPages = Math.floor(tracks.length / TRACKS_PER_PAGE);
    setCurrentPageIdx((prev) => (prev >= maxPages ? 0 : prev + 1));
  }, [tracks.length]);

  return (
    <motion.div className="hidden sm:grid">
      <AnimatePresence mode="popLayout">
        <motion.ul
          key={currentPageIdx}
          layout="position"
          transition={{ duration: 0.2 }}
          className="grid gap-y-2 mt-2 mb-4"
        >
          <AnimatePresence>
            {paginatedTracks[currentPageIdx].map((track, index) => {
              const isSelected = track.src === tracks[activeIndex].src;
              const isPlaying = playerState === "playing" && currentTrack?.src === track.src;
              const newTotalIndex = index + currentPageIdx * TRACKS_PER_PAGE;
              return (
                <Track
                  key={track.src}
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
      {tracks.length > 3 && <NavigationBtns displayNumber={currentPageIdx + 1} prev={prevPage} next={nextPage} />}
    </motion.div>
  );
};
