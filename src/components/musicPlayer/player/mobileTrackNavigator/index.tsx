import { usePlayer } from "../../context";
import { NavigationBtns } from "../navigationBtns";
import { Track } from "../track";

export const MobileTrackNavigator = () => {
  const { tracks, playerState, activeIndex, togglePlay, playPrev, playNext } = usePlayer();
  const isPlaying = playerState === "playing";
  const currentTrack = tracks[activeIndex];

  return (
    <div className="sm:hidden relative">
      <span className="absolute -top-13 ml-2 z-10">
        <NavigationBtns next={playNext} prev={playPrev} />
      </span>
      <Track track={currentTrack} {...{ isPlaying, togglePlay }} index={0} />
    </div>
  );
};
