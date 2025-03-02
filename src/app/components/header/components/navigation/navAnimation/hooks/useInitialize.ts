import { useEffect } from "react";
import { frame, cancelFrame } from "motion";
import { AnimationControls } from "motion/react";
import { useRefsContext } from "../../context";
import { orZero } from "@/utils/orZero";

type Props = {
  controls: AnimationControls;
  getMotionDivRect: () => DOMRect | undefined;
};

export const useInitialize = ({ controls, getMotionDivRect }: Props) => {
  const { getCurrentLinkRect } = useRefsContext();

  useEffect(() => {
    const currentLinkRect = getCurrentLinkRect();
    const motionDivRect = getMotionDivRect();

    if (!currentLinkRect?.height) return;
    controls.set({
      x: currentLinkRect.x,
      y: currentLinkRect.y + orZero(motionDivRect?.height) / 2,
    });

    const initialize = () => {
      controls.start({
        opacity: [0, 1],
        scale: [0, 1],
        transition: {
          scale: { type: "spring", duration: 0.75, bounce: 0.6 },
        },
      });
    };

    frame.render(initialize);
    return () => {
      cancelFrame(initialize);
    };
  }, [controls, getMotionDivRect]);
};
