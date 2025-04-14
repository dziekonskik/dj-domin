import { splitEvery } from "ramda";
import { usePlayer } from "../../context";
import { Track } from "../track";
import { TRACKS_PER_PAGE } from "../consts/trackConfig";
import { useCallback } from "react";

export const DesktopTrackList = () => {
  const { tracks, playerState, currentIndex, play, pause, selectTrack } = usePlayer();
  const paginatedTracks = splitEvery(TRACKS_PER_PAGE, tracks);
  const currentPage = Math.floor(currentIndex / TRACKS_PER_PAGE);

  const handleSelectTrack = useCallback(
    (index: number) => () => {
      selectTrack(index);
    },
    [selectTrack]
  );

  return (
    <ul className="hidden sm:grid gap-y-2 mt-2">
      {paginatedTracks[currentPage].map((track, index) => {
        const isSelected = index === currentIndex % TRACKS_PER_PAGE;
        const isPlaying = playerState === "playing" && isSelected;
        return (
          <Track
            key={track.title}
            {...{
              track,
              isPlaying,
              togglePlay: isPlaying ? pause : () => play(track.src),
              isSelected,
              selectTrack: handleSelectTrack(index),
            }}
          />
        );
      })}
    </ul>
  );
};
