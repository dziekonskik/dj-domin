import { usePlayer } from "../../context";
import { Track } from "../track";

export const MobileTrackNavigator = () => {
  const { tracks, playerState, currentIndex, togglePlay } = usePlayer();
  const isPlaying = playerState === "playing";
  const currenTrack = tracks[currentIndex];

  return (
    <div className="sm:hidden">
      <Track track={currenTrack} {...{ isPlaying, togglePlay }} />
    </div>
  );
};
