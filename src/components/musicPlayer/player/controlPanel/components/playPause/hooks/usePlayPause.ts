import { COLOR } from "@/consts/colors";
import { useEffect, useRef } from "react";
import { PLAY_LEFT, PAUSE_LEFT, PLAY_RIGHT, PAUSE_RIGHT } from "../consts/paths";

type Props = {
  isLoading: boolean;
  isPlaying: boolean;
};

export const usePlayPause = ({ isLoading, isPlaying }: Props) => {
  const circleRef = useRef<SVGCircleElement>(null);
  const displacementRef = useRef<SVGAnimateElement>(null);
  const rotateDisplacementRef = useRef<SVGAnimateElement>(null);

  useEffect(() => {
    displacementRef.current?.beginElement();
    rotateDisplacementRef.current?.beginElement();
  }, [isLoading]);

  useEffect(() => {
    const colorAnimation = circleRef.current?.animate(
      { fill: isPlaying ? COLOR.PRIMARY : COLOR.SECONDARY },
      { duration: 200, fill: "forwards" }
    );

    return () => colorAnimation?.finish();
  }, [isPlaying]);

  const variantsLeftPath = {
    play: {
      d: PLAY_LEFT,
    },
    pause: {
      d: PAUSE_LEFT,
    },
  };

  const variantsRightPath = {
    play: {
      d: PLAY_RIGHT,
    },
    pause: {
      d: PAUSE_RIGHT,
    },
  };

  return { circleRef, variantsLeftPath, variantsRightPath, displacementRef, rotateDisplacementRef };
};
