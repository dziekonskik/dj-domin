import { useAnimate } from "motion/react";
import { useCallback } from "react";

export const useAnimations = () => {
  const [scope, animate] = useAnimate();

  const setActiveStyles = useCallback(() => {
    if (!scope.current) return;
    animate("span", { fontSize: "32px" }, { ease: "easeOut", duration: 0.2 });
    animate(scope.current, { padding: "4px", outlineStyle: "dashed" }, { ease: "easeOut", duration: 0.2 });
  }, [animate, scope]);

  const resetStyles = useCallback(() => {
    if (!scope.current) return;
    animate("span", { fontSize: "30px" }, { ease: "easeOut" });
    animate(scope.current, { padding: "8px", outlineStyle: "solid" }, { ease: "easeOut" });
  }, [animate, scope]);

  return { setActiveStyles, resetStyles, scope };
};
