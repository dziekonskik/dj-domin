import { RefObject } from "react";

export type GetBoundingRect = {
  getBoundingRect: () => DOMRect | undefined;
};

export type ImperativeAnimation = {
  runMoveAnimation: (coords: { x: number; y: number }, element?: DOMRect) => void;
};

export type NavLinkRef = RefObject<Record<string, GetBoundingRect>>;
export type AnimationRef = RefObject<ImperativeAnimation | null>;
