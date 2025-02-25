import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { AnimationControls } from "motion/react";
import { orZero } from "@/utils/orZero";
import { useRefsContext } from "../../context";

type Props = {
  controls: AnimationControls;
  getMotionDivRect: () => DOMRect | undefined;
};

export const useOnResize = ({ controls, getMotionDivRect }: Props) => {
  const pathname = usePathname();
  const { motionDivPosition, getCurrentLinkRect } = useRefsContext();

  useEffect(() => {
    const differenceBetweenLinkAndMotionDiv =
      motionDivPosition.current.x - orZero(getCurrentLinkRect()?.left) - orZero(getMotionDivRect()?.width) / 2;

    const hanldeResize = () => {
      const currentLinkRect = getCurrentLinkRect();
      const beforeNavLinkClick = !motionDivPosition.current.x;
      console.log("resized");
      controls.set({
        x: beforeNavLinkClick
          ? orZero(currentLinkRect?.left)
          : orZero(currentLinkRect?.left) + differenceBetweenLinkAndMotionDiv,
      });
    };

    window.addEventListener("resize", hanldeResize);
    return () => window.removeEventListener("resize", hanldeResize);
  }, [pathname, controls, motionDivPosition, getCurrentLinkRect, getMotionDivRect]);
};
