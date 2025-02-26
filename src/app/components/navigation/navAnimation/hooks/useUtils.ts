import { useCallback } from "react";
import { useRefsContext } from "../../context";

export const useUtils = () => {
  const { motionDivPosition, getCurrentLinkRect } = useRefsContext();

  const distanceBetweenLinkAndMotionDiv = useCallback(
    (axis: "x" | "y", motionDivRect: DOMRect | undefined) => {
      const currentLinkRect = getCurrentLinkRect();
      const dimension = axis === "x" ? "width" : "height";
      if (!currentLinkRect || !motionDivRect) return 0;

      return motionDivPosition[axis] - currentLinkRect[axis] - motionDivRect[dimension] / 2;
    },
    [getCurrentLinkRect, motionDivPosition]
  );

  return { distanceBetweenLinkAndMotionDiv };
};
