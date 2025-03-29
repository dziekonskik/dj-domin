import { ControlsHandler } from "../../types/controls";

export const playPause: ControlsHandler = async (soundRef, state, actions) => {
  if (!soundRef.current) {
    actions.setLoading();
    soundRef.current = new Howl({
      src: state.tracks[state.currentIndex].src,
      html5: true,
      preload: true,
      onload: actions.setReady,
      onplay: actions.setPlaying,
      onpause: actions.setPaused,
    });

    return new Promise((resolve) => {
      soundRef.current!.once("play", () => resolve());
      soundRef.current!.play();
    });
  }

  if (soundRef.current.playing()) {
    return new Promise((resolve) => {
      soundRef.current!.once("pause", () => resolve());
      soundRef.current!.pause();
    });
  } else {
    return new Promise((resolve) => {
      soundRef.current!.once("play", () => resolve());
      soundRef.current!.play();
    });
  }
};
