import { CircleCta } from "@/components/circleCta";
import { useFormStatus } from "react-dom";
import { FormState } from "../../types";

type Props = {
  formState: FormState;
};

export const SubmitButton = ({ formState }: Props) => {
  const { pending, data, method, action } = useFormStatus();

  console.log({ pending, data: data?.get("name"), method, action, formState });
  return (
    <CircleCta variant="button" id="contact" onClick={undefined} layoutId="contactBtn">
      WYŚLIJ
    </CircleCta>
  );
};
