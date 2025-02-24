import { RefObject } from "react";

export type GetBoundingRect = {
  getBoundingRect: () => DOMRect | undefined;
};

export type ImperativeAnimation = {
  runMoveAnimation: (coords: { x: number; y: number }) => void;
};

export type NavLinksRef = RefObject<Record<string, GetBoundingRect>>;
export type AnimationRef = RefObject<ImperativeAnimation | null>;
export type MotionDivPosition = RefObject<{
  x: number;
  y: number;
}>;
