type CommonProps = {
  text: string;
};

export type AnchorVariantProps = CommonProps & {
  variant: "anchor";
};
export type ButtonVariantProps = CommonProps & {
  variant: "button";
  onClick: () => void;
};

export type Props = AnchorVariantProps | ButtonVariantProps;
