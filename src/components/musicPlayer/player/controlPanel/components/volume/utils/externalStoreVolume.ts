import { DEFAULT_VOLUME } from "../consts";

let currentVolume = DEFAULT_VOLUME;
const listeners = new Set<() => void>();

export function getSnapshot() {
  currentVolume = window.localStorage.getItem("d-volume") ?? DEFAULT_VOLUME;
  return currentVolume;
}

export function getServerSnapshot() {
  return DEFAULT_VOLUME;
}

export function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function setVolume(value: number) {
  window.localStorage.setItem("d-volume", value.toString());
  listeners.forEach((fn) => fn());
}
