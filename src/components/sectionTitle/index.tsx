import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export const SectionTitle = ({ children, className }: Props) => {
  return (
    <h3 className={`uppercase font-grotezk text-2xl sm:text-3xl md:text-4xl xl:text-5xl ${className}`}>{children}</h3>
  );
};
