import { useRef, useEffect, useCallback, MouseEvent } from "react";
import { Route } from "@/consts/routes";
import { useBodyScrollLock } from "@/hooks";
import { useRefsContext } from "../../context";

type Props = {
  href: Route;
  closeMobileMenu: () => void;
};

export const useAnimationActions = ({ href, closeMobileMenu }: Props) => {
  const liRef = useRef<HTMLLIElement>(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  const { animationRef, setNewMotionDivPosition, navLinksRef } = useRefsContext();
  const { unlockScroll } = useBodyScrollLock();

  const onClick = useCallback(() => {
    animationRef.current?.runMoveAnimation({ x: mousePosition.current.x, y: mousePosition.current.y });
    setNewMotionDivPosition({ x: mousePosition.current.x, y: mousePosition.current.y }); // store mouse pos to be reused on click to prevent situation where user hovers over link without clicking and then resize browser window
    closeMobileMenu();
    unlockScroll();
  }, [animationRef, setNewMotionDivPosition, mousePosition, closeMobileMenu, unlockScroll]);

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
