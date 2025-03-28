import { RefObject } from "react";
import { Howl } from "howler";
import { ActionCreators, State } from "./state";

export type SoundRef = RefObject<Howl | null>;
export type ControlsHandler = (soundRef: SoundRef, state: State, actions: ActionCreators) => Promise<void>;
