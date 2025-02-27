import { AnimationControls } from "motion/react";
import { useImperativeHandle } from "react";
import { orZero } from "@/utils/orZero";
import { useRefsContext } from "../../context";

type Props = {
  controls: AnimationControls;
  getMotionDivRect: () => DOMRect | undefined;
};

export const useImperativeAnimation = ({ controls, getMotionDivRect }: Props) => {
  const { animationRef } = useRefsContext();

  useImperativeHandle(animationRef, () => ({
    runMoveAnimation: (coords) => {
      const motionDivRect = getMotionDivRect();
      controls.start({
        x: coords.x - orZero(motionDivRect?.width) / 2,
        y: coords.y - orZero(motionDivRect?.height) / 2,
      });
    },
  }));
};
