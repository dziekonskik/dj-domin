import { SectionId } from "@/consts/sections";
import { ReactNode } from "react";

type CommonProps = {
  children: ReactNode;
  layoutId?: string;
  id?: SectionId;
};

export type AnchorVariantProps = CommonProps & {
  variant: "anchor";
  href: SectionId;
};
export type ButtonVariantProps = CommonProps & {
  variant: "button";
  onClick: (() => void) | undefined;
};

export type Props = AnchorVariantProps | ButtonVariantProps;
