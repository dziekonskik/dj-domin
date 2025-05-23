import { SectionId } from "@/consts/sections";
import { ReactNode } from "react";

type CommonProps = {
  children: ReactNode;
  layoutId?: string;
  id?: SectionId;
  className?: string;
};

export type AnchorVariantProps = CommonProps & {
  variant: "anchor";
  href: string;
  target?: HTMLAnchorElement["target"];
};
export type ButtonVariantProps = CommonProps & {
  variant: "button";
  onClick: (() => void) | undefined;
  type?: HTMLButtonElement["type"];
  disabled?: HTMLButtonElement["disabled"];
};

export type Props = AnchorVariantProps | ButtonVariantProps;
