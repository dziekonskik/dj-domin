import { useAnimate } from "motion/react";
import { useCallback } from "react";

export const useAnimations = () => {
  const [ref, animate] = useAnimate();

  const setActiveStyles = useCallback(() => {
    if (!ref.current) return;
    animate("span", { fontSize: "32px" }, { ease: "easeOut", duration: 0.2 });
    animate(ref.current, { padding: "4px", outlineStyle: "dashed" }, { ease: "easeOut", duration: 0.2 });
  }, [animate, ref]);

  const resetStyles = useCallback(() => {
    if (!ref.current) return;
    animate("span", { fontSize: "30px" }, { ease: "easeOut" });
    animate(ref.current, { padding: "8px", outlineStyle: "solid" }, { ease: "easeOut" });
  }, [animate, ref]);

  return { setActiveStyles, resetStyles, ref };
};
