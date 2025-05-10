import { useUIContext } from "@/app/context";
import { SectionId } from "@/consts/sections";
import { useInView } from "motion/react";
import { useEffect, useRef } from "react";

type Props = {
  id: SectionId;
};

export const useActiveCta = ({ id }: Props) => {
  const positionRef = useRef<HTMLDivElement>(null);
  const { setActiveSectionId, activeSection } = useUIContext();
  const isInView = useInView(positionRef, { amount: 0.1 });

  useEffect(() => {
    if (isInView) setActiveSectionId(id);
  }, [id, isInView, setActiveSectionId, activeSection]);

  return { positionRef, isVisible: activeSection === id };
};
