"use client";
import { useActionState } from "react";
import { useSetActiveSection } from "./hooks/useSetActiveSection";
import { SubmitButton } from "./components/submitButton";
import { submit } from "./actions/submit";

export const ContactForm = () => {
  const ref = useSetActiveSection();
  const [formState, action] = useActionState(submit, null);

  return (
    <form {...{ ref, action }} className="flex flex-col gap-10 justify-center flex-1 p-4 relative lg:p-6">
      <input
        required
        name="name"
        type="text"
        placeholder="Imie"
        aria-label="Imię"
        className="p-2 sm:max-w-xs border-b-2 border-b-white"
      />
      <input
        required
        name="email"
        type="email"
        placeholder="Email"
        aria-label="Email"
        className="p-2 sm:max-w-xs border-b-2 border-b-white"
      />
      <textarea
        required
        name="msg"
        placeholder="Wiadomość"
        aria-label="Wiadomość"
        rows={7}
        cols={20}
        className="p-2 border-2 border-white rounded-sm relative"
      ></textarea>
      <div className="flex justify-end -mt-24">
        <div className="scale-75 w-auto -mr-6 flex h-32">
          <SubmitButton {...{ formState }} />
        </div>
      </div>
    </form>
  );
};
