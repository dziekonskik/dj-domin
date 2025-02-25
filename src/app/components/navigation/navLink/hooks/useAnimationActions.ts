import { useRef, useEffect, useCallback, MouseEvent } from "react";
import { Route } from "@/consts/routes";
import { useRefsContext } from "../../context";

type Props = {
  href: Route;
};

export const useAnimationActions = ({ href }: Props) => {
  const liRef = useRef<HTMLLIElement>(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  const { animationRef, motionDivPosition, navLinksRef } = useRefsContext();

  const onClick = useCallback(() => {
    animationRef.current?.runMoveAnimation({ x: mousePosition.current.x, y: mousePosition.current.y });
    motionDivPosition.current = mousePosition.current; // store mouse pos to be reused on click to prevent situation where user hovers over link without clicking and then resize browser window
  }, [animationRef, motionDivPosition, mousePosition]);

  const onMouseMove = useCallback(
    ({ pageX, pageY }: MouseEvent<HTMLLIElement>) => {
      mousePosition.current.x = pageX;
      mousePosition.current.y = pageY;
    },
    [mousePosition]
  );

  useEffect(() => {
    if (liRef.current && navLinksRef) {
      const getBoundingRect = () => liRef.current?.getBoundingClientRect();
      navLinksRef.current[href] = { getBoundingRect };
    }
  }, [href, liRef, navLinksRef]);

  return { liRef, onClick, onMouseMove };
};
