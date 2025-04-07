import { VOLUME_RANGE, TRACK_LENGTH, THUMB_SIZE } from "../consts";

export function getInitialVolumePos(volume: number) {
  if (volume === VOLUME_RANGE.MIN) return VOLUME_RANGE.MIN;
  if (volume === VOLUME_RANGE.MAX) return TRACK_LENGTH - THUMB_SIZE;

  return TRACK_LENGTH * volume - THUMB_SIZE / 2;
}
