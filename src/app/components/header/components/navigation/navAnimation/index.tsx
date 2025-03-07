import { motion, useAnimationControls, useScroll, useTransform } from "motion/react";
import { useInitialize } from "./hooks/useInitialize";
import { useImperativeAnimation } from "./hooks/useImperativeAnimation";
import { useOnResize } from "./hooks/useOnResize";
import { useCallback, useRef } from "react";

export const NavAnimation = () => {
  const motionDivRef = useRef<HTMLDivElement>(null);
  const controls = useAnimationControls();
  const { scrollY } = useScroll();

  const getMotionDivRect = useCallback(() => motionDivRef.current?.getBoundingClientRect(), []);

  useInitialize({ controls, getMotionDivRect });
  useOnResize({ controls, getMotionDivRect });
  useImperativeAnimation({ controls, getMotionDivRect });

  return (
    <motion.div
      ref={motionDivRef}
      initial={{ opacity: 0, scale: 0, left: 0, top: 0 }}
      animate={controls}
      style={{ marginTop: useTransform(scrollY, (value) => value).get() }}
      className="bg-green -z-10 h-10 w-10 rounded-full absolute"
    />
  );
};
