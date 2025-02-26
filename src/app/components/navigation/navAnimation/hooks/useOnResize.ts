import { useEffect } from "react";
import { AnimationControls } from "motion/react";
import { orZero } from "@/utils/orZero";
import { useRefsContext } from "../../context";
import { useUtils } from "./useUtils";

type Props = {
  controls: AnimationControls;
  getMotionDivRect: () => DOMRect | undefined;
};

export const useOnResize = ({ controls, getMotionDivRect }: Props) => {
  const { motionDivPosition, getCurrentLinkRect } = useRefsContext();
  const { distanceBetweenLinkAndMotionDiv } = useUtils();

  useEffect(() => {
    const distanceX = distanceBetweenLinkAndMotionDiv("x", getMotionDivRect());
    const distanceY = distanceBetweenLinkAndMotionDiv("y", getMotionDivRect());

    const hanldeResize = () => {
      const currentLinkRect = getCurrentLinkRect();
      const beforeNavLinkClick = !motionDivPosition.x;

      controls.set({
        x: beforeNavLinkClick ? orZero(currentLinkRect?.x) : orZero(currentLinkRect?.x) + distanceX,
        y: beforeNavLinkClick ? orZero(currentLinkRect?.y) : orZero(currentLinkRect?.y) + distanceY,
      });
    };

    window.addEventListener("resize", hanldeResize);
    return () => window.removeEventListener("resize", hanldeResize);
  }, [getCurrentLinkRect, getMotionDivRect, controls, distanceBetweenLinkAndMotionDiv, motionDivPosition]);
};
