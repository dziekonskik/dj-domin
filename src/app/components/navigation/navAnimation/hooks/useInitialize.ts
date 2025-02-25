import { useEffect } from "react";
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
    console.log("init");

    if (!currentLinkRect?.height) return;
    controls.set({
      x: currentLinkRect.x,
      y: currentLinkRect.y + orZero(motionDivRect?.height) / 2,
    });

    requestAnimationFrame(() => {
      controls.start({
        opacity: [0, 1],
        scale: [0, 1],
        transition: {
          duration: 0.4,
          scale: { type: "spring", duration: 0.75, bounce: 0.6 },
        },
      });
    });
  }, [controls, getMotionDivRect]);
};
