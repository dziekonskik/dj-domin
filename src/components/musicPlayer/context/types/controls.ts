import { RefObject } from "react";
import { Howl } from "howler";

export type SoundRef = RefObject<Howl | null>;
