import { CONTACT_LINKS } from "@/consts/contactLinks";
import { useCallback } from "react";

export const useSocialMedia = () => {
  const handlePhoneClick = useCallback(() => window.open(CONTACT_LINKS.TEL, "_blank"), []);
  const handleMessengerClick = useCallback(() => window.open(CONTACT_LINKS.MESSENGER, "_blank"), []);
  const handleWhatsappClick = useCallback(() => window.open(CONTACT_LINKS.WHATSAPP, "_blank"), []);

  return { handlePhoneClick, handleMessengerClick, handleWhatsappClick };
};
