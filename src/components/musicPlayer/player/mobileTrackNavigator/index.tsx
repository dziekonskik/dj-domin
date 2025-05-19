import { usePlayer } from "../../context";
import { NavigationBtns } from "../navigationBtns";
import { Track } from "../track";

type Props = {
  isVisible?: boolean;
  isWithoutButtons?: boolean;
};

export const MobileTrackNavigator = ({ isVisible, isWithoutButtons }: Props) => {
  const { tracks, playerState, activeIndex, togglePlay, playPrev, playNext } = usePlayer();
  const isPlaying = playerState === "playing";
  const currentTrack = tracks[activeIndex];

  return (
    <div className={`${!isVisible ? "sm:hidden" : ""} relative`}>
      <span className={`absolute -top-13 ml-4 z-10 ${isWithoutButtons ? "hidden" : ""}`}>
        <NavigationBtns next={playNext} prev={playPrev} />
      </span>
      <Track track={currentTrack} {...{ isPlaying, togglePlay }} index={0} />
    </div>
  );
};
