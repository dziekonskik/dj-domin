import { TRACKS_PER_PAGE } from "../consts/trackConfig";

export function getCurrentPageIndex(currentTrackIdx: number) {
  return Math.floor(currentTrackIdx / TRACKS_PER_PAGE);
}
