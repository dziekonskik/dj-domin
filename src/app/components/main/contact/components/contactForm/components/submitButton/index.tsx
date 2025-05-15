import { CircleCta } from "@/components/circleCta";
import { AnimatePresence, motion } from "motion/react";
import { match } from "ts-pattern";
import { Lifecycle } from "@/types/common";

type Props = {
  formStatus: Lifecycle;
};

export const SubmitButton = ({ formStatus }: Props) => {
  const { key, text } = match(formStatus)
    .with("pending", () => ({
      key: "pending",
      text: "LECI...",
    }))
    .with("error", () => ({
      key: "error",
      text: "BŁĄD :(",
    }))
    .with("success", () => ({
      key: "success",
      text: "POSZŁO! :)",
    }))
    .with("idle", () => ({
      key: "default",
      text: "WYŚLIJ",
    }))
    .otherwise(() => ({
      key: "empty",
      text: "",
    }));

  return (
    <CircleCta
      variant="button"
      type="submit"
      id="contact"
      disabled={formStatus !== "idle"}
      onClick={undefined}
      layoutId="contactBtn"
      className="relative w-28 rounded-full aspect-square"
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={key}
          className="absolute w-full h-full rounded-full grid place-content-center"
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.95 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {text}
        </motion.span>
      </AnimatePresence>
    </CircleCta>
  );
};
