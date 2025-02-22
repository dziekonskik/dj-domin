import { useRef, useEffect, useCallback, MouseEvent } from "react";
import { AnimationRef, NavLinkRef } from "../../types";
import { Route } from "@/consts/routes";

type Props = {
  href: Route;
  animationRef: AnimationRef;
  navLinkRef: NavLinkRef;
};

export const useAnimationActions = ({ href, animationRef, navLinkRef }: Props) => {
  const liRef = useRef<HTMLLIElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });

  const onClick = useCallback(() => {
    const coords = liRef.current?.getBoundingClientRect();
    animationRef.current?.runMoveAnimation({ x: mousePos.current.x, y: mousePos.current.y }, coords);
  }, [animationRef]);

  const onMouseMove = useCallback(({ pageX, pageY }: MouseEvent<HTMLLIElement>) => {
    mousePos.current.x = pageX;
    mousePos.current.y = pageY;
  }, []);

  useEffect(() => {
    if (liRef.current && navLinkRef) {
      const getBoundingRect = () => liRef.current?.getBoundingClientRect();
      navLinkRef.current[href] = { getBoundingRect };
    }
  }, [href, liRef, navLinkRef]);

  return { liRef, onClick, onMouseMove };
};
