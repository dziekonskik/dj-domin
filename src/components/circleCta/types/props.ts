import { SectionId } from "@/consts/sections";

type CommonProps = {
  text: string;
  id: SectionId;
};

export type AnchorVariantProps = CommonProps & {
  variant: "anchor";
};
export type ButtonVariantProps = CommonProps & {
  variant: "button";
  onClick: () => void;
};

export type Props = AnchorVariantProps | ButtonVariantProps;
