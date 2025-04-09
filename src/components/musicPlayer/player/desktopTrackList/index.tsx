import { splitEvery } from "ramda";
import { usePlayer } from "../../context";
import { Track } from "../track";
import { TRACKS_PER_PAGE } from "../consts/trackConfig";

export const DesktopTrackList = () => {
  const { tracks, playerState, currentIndex, togglePlay } = usePlayer();
  const paginatedTracks = splitEvery(TRACKS_PER_PAGE, tracks);
  const currentPage = Math.floor(currentIndex / TRACKS_PER_PAGE);

  return (
    <ul className="hidden sm:grid gap-y-2 mt-2">
      {paginatedTracks[currentPage].map((track, index) => {
        const isSelected = index === currentIndex;
        const isPlaying = playerState === "playing" && isSelected;
        return <Track key={track.title} {...{ track, isPlaying, togglePlay, isSelected }} />;
      })}
    </ul>
  );
};
