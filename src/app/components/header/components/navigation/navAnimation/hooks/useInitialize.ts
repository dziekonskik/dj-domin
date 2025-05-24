import { useEffect } from "react";
import { frame, cancelFrame } from "motion";
import { AnimationControls } from "motion/react";
import { useRefsContext } from "../../context";
import { MEDIA_QUERY } from "@/consts/mediaQueries";
import { useMediaQuery } from "@/hooks";

type Props = {
  controls: AnimationControls;
  getMotionDivRect: () => DOMRect | undefined;
};

export const useInitialize = ({ controls, getMotionDivRect }: Props) => {
  const { getCurrentLinkRect } = useRefsContext();
  const isMobile = useMediaQuery(MEDIA_QUERY.IS_MOBILE);

  useEffect(() => {
    const currentLinkRect = getCurrentLinkRect();

    if (!currentLinkRect?.height) return;
    controls.set({
      x: currentLinkRect.x,
      y: isMobile ? currentLinkRect.y : 40,
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
