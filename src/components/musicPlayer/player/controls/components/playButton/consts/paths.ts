export const PAUSE_LEFT = "M 7.5 9V 15 C 7.5 18 10.5 18 10.5 15 C 10.5 15 10.5 9 10.5 9 C 10.5 6 7.5 6 7.5 9";
export const PLAY_LEFT = "M 7.5 7 V 17 C 8 18.5 12 16 18 12.5 C 18.5 12 18.5 12 18 11.5 C 12 8 7.5 5.5 7.5 7";
export const PAUSE_RIGHT = "M 13.5 9 V 15 C 13.5 18 16.5 18 16.5 15 C 16.5 15 16.5 9 16.5 9 C 16.5 6 13.5 6 13.5 9";
export const PLAY_RIGHT = "M 7.5 7 V 17 C 8 18.5 12 16 18 12.5 C 18.5 12 18.5 12 18 11.5 C 12 8 7.5 5.5 7.5 7";

export const ANIMATE_CONFIG = {
  attributeName: "d",
  fill: "freeze",
  dur: "0.2s",
  begin: "indefinite",
  calcMode: "spline",
  keyTimes: "0; 1",
  keySplines: "0.5 1 0.89 1",
} as const;
