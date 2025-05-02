import { motion, useAnimate } from "motion/react";

type Props = {
  onClick: () => void;
  text: string;
};

export const CircleCta = ({ onClick, text }: Props) => {
  const [scope, animate] = useAnimate();

  const setActiveStyles = () => {
    animate("span", { fontSize: "26px" }, { ease: "easeOut", duration: 0.2 });
    animate(scope.current, { padding: "4px" }, { ease: "easeOut", duration: 0.2 });
  };

  const resetStyles = () => {
    animate("span", { fontSize: "24px" }, { ease: "easeOut" });
    animate(scope.current, { padding: "8px" }, { ease: "easeOut" });
  };

  return (
    <motion.button
      ref={scope}
      {...{ onClick }}
      className="border-3 rounded-full p-2 aspect-square font-grotezk text-2xl cursor-pointer"
      onHoverStart={setActiveStyles}
      onHoverEnd={resetStyles}
      onTapStart={setActiveStyles}
      onTap={resetStyles}
      onTapCancel={resetStyles}
    >
      <motion.span>{text.toUpperCase()}</motion.span>
    </motion.button>
  );
};
