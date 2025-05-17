import { useCallback } from "react";

export const useSocialMedia = () => {
  const handlePhoneClick = useCallback(() => window.open("tel:+48795913955", "_blank"), []);
  const handleMessengerClick = useCallback(() => window.open("https://m.me/szewcu111", "_blank"), []);
  const handleWhatsappClick = useCallback(() => window.open("https://wa.me/+4879591395", "_blank"), []);

  return { handlePhoneClick, handleMessengerClick, handleWhatsappClick };
};
