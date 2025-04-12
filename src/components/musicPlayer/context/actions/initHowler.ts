import { Howl } from "howler";
import { ActionCreators } from "../types/state";

export function initHowler(src: string, actions: ActionCreators) {
  return new Howl({
    src,
    html5: true,
    preload: true,
    onload: () => actions.setWorkingState("ready"),
    onplay: () => actions.setWorkingState("playing"),
    onpause: () => actions.setWorkingState("paused"),
    onend: () => actions.setWorkingState("ready"),
    onloaderror: actions.setErrorState,
    onplayerror: actions.setErrorState,
  });
}
