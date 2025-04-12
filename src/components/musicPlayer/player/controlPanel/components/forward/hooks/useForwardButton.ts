import { useAnimationControls } from "motion/react";
import { ANIMATION_CONFIG } from "../consts/animationConfig";

type Props = {
  playNext: () => Promise<void>;
};

export const useForwardButton = ({ playNext }: Props) => {
  const triangleControl = useAnimationControls();
  const lineControl = useAnimationControls();

  const handleClick = async () => {
    await triangleControl.start({ translateX: 2 }, ANIMATION_CONFIG);
    await lineControl.start({ d: "M 24 8 C 28 11 28 16 24 18" }, ANIMATION_CONFIG);
    lineControl.start({ d: "M 24 8 C 24 11 24 16 24 18" }, ANIMATION_CONFIG);
    await triangleControl.start({ translateX: 0 }, ANIMATION_CONFIG);
    playNext();
  };

  return { handleClick, triangleControl, lineControl };
};
