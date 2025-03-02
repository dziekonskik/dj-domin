import { useEffect } from "react";
import { useAnimation } from "motion/react";
import { match } from "ts-pattern";
import { MEDIA_QUERY } from "@/consts/mediaQueries";
import { useMediaQuery } from "@/hooks";

export const useListAnimationActions = (isMenuOpen: boolean) => {
  const controls = useAnimation();
  const isMobile = useMediaQuery(MEDIA_QUERY.IS_MOBILE);

  useEffect(() => {
    match({ isMobile, isMenuOpen })
      .with({ isMobile: false }, () => {
        controls.set("DESKTOP");
      })
      .with({ isMobile: true, isMenuOpen: true }, () => {
        controls.start("MOBILE_OPEN");
      })
      .with({ isMobile: true, isMenuOpen: false }, () => {
        controls.set("MOBILE_CLOSED");
      })
      .exhaustive();
  }, [isMobile, isMenuOpen, controls]);

  return { controls };
};
