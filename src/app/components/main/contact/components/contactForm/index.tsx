"use client";
import { useUIContext } from "@/app/context";
import { useInView } from "motion/react";
import { useEffect, useRef } from "react";
import { CircleCta } from "@/components/circleCta";

export const ContactForm = () => {
  const { setActiveSectionId } = useUIContext();
  const ref = useRef<HTMLFormElement>(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) setActiveSectionId("contact");
  }, [setActiveSectionId, isInView]);
  return (
    <form {...{ ref }} className="flex flex-col gap-10 justify-center flex-1 p-4 relative lg:p-6">
      <input type="text" placeholder="Imie" className="p-2 sm:max-w-xs border-b-2 border-b-white" />
      <input type="tel" placeholder="Telefon" className="p-2 sm:max-w-xs border-b-2 border-b-white" />
      <textarea rows={7} cols={20} className="p-2 border-2 border-white rounded-sm relative"></textarea>
      <div className="flex justify-end -mt-24">
        <div className="scale-75 w-auto -mr-6 flex h-32">
          <CircleCta text="wyślij" variant="button" id="contact" onClick={() => {}} layoutId="contactBtn" />
        </div>
      </div>
    </form>
  );
};
