"use client";
import { useSetActiveSection } from "./hooks/useSetActiveSection";
import { SubmitButton } from "./components/submitButton";
import { useSubmit } from "./hooks/useSubmit";

export const ContactForm = () => {
  const ref = useSetActiveSection();
  const { onSubmit, formStatus } = useSubmit(ref);

  return (
    <form {...{ ref, onSubmit }} className="flex flex-col gap-10 justify-center flex-1 p-4 relative lg:p-6">
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
      <div className="flex justify-end -mt-24 z-10 h-28">
        <SubmitButton {...{ formStatus }} />
      </div>
    </form>
  );
};
