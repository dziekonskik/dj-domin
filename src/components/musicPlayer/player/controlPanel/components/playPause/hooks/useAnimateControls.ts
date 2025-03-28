import { usePlayer } from "@/components/musicPlayer/context";
import { useEffect, useRef } from "react";

type Props = {
  hasInteracted: boolean;
};

export const useAnimateControls = ({ hasInteracted }: Props) => {
  const { playerState } = usePlayer();
  const isPlaying = playerState === "playing";
  const isLoading = playerState === "loading";
  const pathLeftRef = useRef<SVGAnimateElement>(null);
  const pathRightRef = useRef<SVGAnimateElement>(null);
  const opacityAnimRef = useRef<SVGAnimateElement>(null);
  const displacementRef = useRef<SVGAnimateElement>(null);
  const rotateDisplacementRef = useRef<SVGAnimateElement>(null);

  useEffect(() => {
    if (!hasInteracted) return;
    pathLeftRef.current?.beginElement();
    pathRightRef.current?.beginElement();
    opacityAnimRef.current?.beginElement();
  }, [isPlaying, hasInteracted]);

  useEffect(() => {
    if (!isLoading) return;
    displacementRef.current?.beginElement();
    rotateDisplacementRef.current?.beginElement();
  }, [isLoading]);

  return { pathLeftRef, pathRightRef, opacityAnimRef, displacementRef, rotateDisplacementRef };
};
