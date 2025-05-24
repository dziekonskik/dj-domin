import { motion, useScroll, useTransform } from "motion/react";
import { useInitialize } from "./hooks/useInitialize";
import { useImperativeAnimation } from "./hooks/useImperativeAnimation";
import { useOnResize } from "./hooks/useOnResize";
import { useCallback, useRef } from "react";
import { useUIContext } from "@/app/context";

export const NavAnimation = () => {
  const motionDivRef = useRef<HTMLDivElement>(null);
  const { headerAnimationControls } = useUIContext();
  const { scrollY } = useScroll();

  const getMotionDivRect = useCallback(() => motionDivRef.current?.getBoundingClientRect(), []);

  useInitialize({ controls: headerAnimationControls, getMotionDivRect });
  useOnResize({ controls: headerAnimationControls, getMotionDivRect });
  useImperativeAnimation({ controls: headerAnimationControls, getMotionDivRect });

  return (
    <motion.div
      ref={motionDivRef}
      initial={{ opacity: 0, scale: 0, left: 0, top: 0 }}
      animate={headerAnimationControls}
      style={{ marginTop: useTransform(scrollY, (value) => value).get() }}
      className="bg-primary -z-10 h-10 w-10 rounded-full absolute sm:!mt-0"
    />
  );
};
