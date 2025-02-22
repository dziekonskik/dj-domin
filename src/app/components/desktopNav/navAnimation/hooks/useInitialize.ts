import { useEffect } from "react";
import { AnimationControls } from "motion/react";
import { usePathname } from "next/navigation";
import { NavLinkRef } from "../../types";

type Props = {
  controls: AnimationControls;
  navLinkRef: NavLinkRef;
};

export const useInitialize = ({ controls, navLinkRef }: Props) => {
  const pathname = usePathname();

  useEffect(() => {
    const initRef = navLinkRef?.current[pathname]?.getBoundingRect();
    if (!initRef?.height) return;
    controls.set({
      x: initRef.x - window.innerWidth + initRef.width,
      y: initRef.y,
    });

    // Opóźnienie startu animacji, aby pozycja się zaktualizowała
    requestAnimationFrame(() => {
      controls.start({
        opacity: [0, 1],
        scale: [0, 1],
        transition: {
          duration: 0.4,
          scale: { type: "spring", duration: 0.75, bounce: 0.6 },
        },
      });
    });
  }, [navLinkRef]);
};
