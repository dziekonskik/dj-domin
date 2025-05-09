import { useUIContext } from "@/app/context";
import { SectionId } from "@/consts/sections";
import { useInView } from "motion/react";
import { useEffect, useRef } from "react";

type Props = {
  id: SectionId;
};

export const useActiveCta = ({ id }: Props) => {
  const positionRef = useRef<HTMLDivElement>(null);
  const { setActiveCta, activeCtaId } = useUIContext();
  const isInView = useInView(positionRef, { amount: 0.1 });

  useEffect(() => {
    if (isInView) setActiveCta(id);
  }, [id, isInView, setActiveCta, activeCtaId]);

  return { positionRef, isVisible: activeCtaId === id };
};
