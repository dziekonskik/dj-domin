import { useUIContext } from "@/app/context";
import { MEDIA_QUERY } from "@/consts/mediaQueries";
import { SectionId } from "@/consts/sections";
import { useMediaQuery } from "@/hooks";
import { useScroll, useInView, useTransform } from "motion/react";
import { useRef, useEffect } from "react";

type Props = {
  id: SectionId;
};

export const useAnimations = ({ id }: Props) => {
  const { setActiveSectionId } = useUIContext();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end start", "start end"],
  });
  const isMobile = useMediaQuery(MEDIA_QUERY.IS_MOBILE);
  const isInView = useInView(ref, { amount: isMobile ? 1 : 0.75 });
  const scale = useTransform(scrollYProgress, [0.1, 0.5, 0.9], [0.9, 1, 0.9]);

  useEffect(() => {
    if (isInView) setActiveSectionId(id);
  }, [id, isInView, setActiveSectionId]);

  return { ref, scale, isMobile };
};
