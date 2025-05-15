import { RefObject, useCallback, useEffect, useState } from "react";
import { Lifecycle } from "@/types/common";

export const useSubmit = (ref: RefObject<HTMLFormElement | null>) => {
  const [formStatus, setFormStatus] = useState<Lifecycle>("idle");

  const restForm = useCallback(() => {
    ref.current?.reset();
    setFormStatus("idle");
  }, [ref]);

  useEffect(() => {
    if (formStatus === "error") setTimeout(restForm, 2000);
  }, [formStatus, restForm]);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("pending");

    const formData = new FormData(e.currentTarget);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      await new Promise((res) => setTimeout(res, 500));
      setFormStatus(data.status === "success" ? "success" : "error");
    } catch (err) {
      console.error("Submit error:", err);
      setFormStatus("error");
    }
  };

  return { onSubmit, formStatus };
};
