export const PAUSE_LEFT = "M 7.5 9V 15 C 7.5 18 10.5 18 10.5 15 C 10.5 15 10.5 9 10.5 9 C 10.5 6 7.5 6 7.5 9";
export const PAUSE_RIGHT = "M 13.5 9 V 15 C 13.5 18 16.5 18 16.5 15 C 16.5 15 16.5 9 16.5 9 C 16.5 6 13.5 6 13.5 9";

export const PLAY_LEFT = "M 7 7 V 17 C 8 20 12 17 12 17 C 12 17 12 8.5 12 8 C 12.5 8 8 5 7 7";
export const PLAY_RIGHT =
  "M 11 7.5 V 17.3 C 12 17.5 18 12.5 18 12.5 C 18.5 12.2 18.5 12 18.5 11.5 C 13 8.2 13.2 8.3 11 7.5";

export const ANIMATE_CONFIG = {
  attributeName: "d",
  fill: "freeze",
  dur: "0.2s",
  begin: "indefinite",
  calcMode: "spline",
  keyTimes: "0; 1",
  keySplines: "0.5 1 0.89 1",
} as const;
