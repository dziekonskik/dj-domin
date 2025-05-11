import { SectionId } from "@/consts/sections";

type CommonProps = {
  text: string;
  layoutId?: string;
  id?: SectionId;
};

export type AnchorVariantProps = CommonProps & {
  variant: "anchor";
  id: SectionId;
};
export type ButtonVariantProps = CommonProps & {
  variant: "button";
  onClick: () => void;
};

export type Props = AnchorVariantProps | ButtonVariantProps;
