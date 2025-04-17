import { usePlayer } from "../../context";
import { NavigationBtns } from "../navigationBtns";
import { Track } from "../track";

export const MobileTrackNavigator = () => {
  const { tracks, playerState, currentIndex, togglePlay } = usePlayer();
  const isPlaying = playerState === "playing";
  const currenTrack = tracks[currentIndex];

  return (
    <div className="sm:hidden relative">
      <span className="absolute -top-13 ml-2 z-10">
        <NavigationBtns />
      </span>
      <Track track={currenTrack} {...{ isPlaying, togglePlay }} />
    </div>
  );
};
