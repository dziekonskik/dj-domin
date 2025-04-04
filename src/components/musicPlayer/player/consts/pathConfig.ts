import { SVGProps } from "react";

export const PATH_CONFIG = {
  stroke: "white",
  strokeWidth: "1.5",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  fill: "transparent",
} as const satisfies SVGProps<"path">;
