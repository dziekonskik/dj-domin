import { RefObject } from "react";

export type GetBoundingRect = {
  getBoundingRect: () => DOMRect | undefined;
};

export type NavLinkRef = RefObject<Record<string, GetBoundingRect>>;
