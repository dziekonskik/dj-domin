"use client";
import { Props } from "./types/props";
import { AnchorCta } from "./components/anchorCta";
import { ButtonCta } from "./components/buttonCta";
import { useActiveCta } from "./hooks/useActiveCta";

export const CircleCta = (props: Props) => {
  const { positionRef, isVisible } = useActiveCta({ id: props.id });

  return (
    <div ref={positionRef}>
      {props.variant === "anchor" ? (
        <AnchorCta {...props} {...{ isVisible }} />
      ) : (
        <ButtonCta {...props} {...{ isVisible }} />
      )}
    </div>
  );
};
