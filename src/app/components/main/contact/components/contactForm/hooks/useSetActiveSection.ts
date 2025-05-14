import { useUIContext } from "@/app/context";
import { useInView } from "motion/react";
import { useEffect, useRef } from "react";

export const useSetActiveSection = () => {
  const { setActiveSectionId } = useUIContext();
  const ref = useRef<HTMLFormElement>(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) setActiveSectionId("contact");
  }, [setActiveSectionId, isInView]);

  return ref;
};
