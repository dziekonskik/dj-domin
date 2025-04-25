import { AnimatePresence, motion } from "motion/react";
import { usePlayer } from "../../context";
import { Track } from "../track";
import { TRACKS_PER_PAGE } from "../consts/trackConfig";
import { NavigationBtns } from "../navigationBtns";
import { usePagination } from "./hooks/usePagination";
import { useTrackActions } from "./hooks/useTrackActions";

export const DesktopTrackList = () => {
  const { tracks, playerState, activeIndex, currentTrack } = usePlayer();
  const { currentPageIndex, paginatedTracks, nextPage, prevPage } = usePagination();
  const { handleSelectTrack, handleTogglePlay } = useTrackActions();

  return (
    <motion.div className="hidden sm:grid">
      <AnimatePresence>
        <motion.ul layout transition={{ duration: 0.2 }} className="grid gap-y-2 mt-2 mb-4">
          {paginatedTracks[currentPageIndex].map((track, index) => {
            const isSelected = track.src === tracks[activeIndex].src;
            const isPlaying = playerState === "playing" && currentTrack?.src === track.src;
            const newTotalIndex = index + currentPageIndex * TRACKS_PER_PAGE;
            return (
              <Track
                key={track.src}
                {...{
                  track,
                  index,
                  isPlaying,
                  togglePlay: handleTogglePlay(isPlaying, track.src),
                  isSelected,
                  selectTrack: handleSelectTrack(newTotalIndex),
                }}
              />
            );
          })}
        </motion.ul>
      </AnimatePresence>
      {tracks.length > TRACKS_PER_PAGE && (
        <NavigationBtns displayNumber={currentPageIndex + 1} prev={prevPage} next={nextPage} />
      )}
    </motion.div>
  );
};
