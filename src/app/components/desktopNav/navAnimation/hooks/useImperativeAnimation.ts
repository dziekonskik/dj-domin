import { AnimationControls } from "motion/react";
import { AnimationRef } from "../../types";
import { useImperativeHandle } from "react";

type Props = {
  controls: AnimationControls;
  animationRef: AnimationRef;
};

export const useImperativeAnimation = ({ animationRef, controls }: Props) => {
  useImperativeHandle(animationRef, () => ({
    runMoveAnimation: (coords, element) => {
      controls.start({
        x: coords.x + (element?.width ?? 0) / 2 - window.innerWidth,
        y: coords.y - (element?.height ?? 0) / 2,
      });
    },
  }));
};
