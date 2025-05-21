import { CONTACT_LINKS } from "@/consts/contactLinks";
import { useCallback } from "react";

export const useSocialMedia = () => {
  const handleFacobookClick = useCallback(() => window.open(CONTACT_LINKS.FACEBOOK, "_blank"), []);
  const handleInstagramClick = useCallback(() => window.open(CONTACT_LINKS.INSTAGRAM, "_blank"), []);
  const handleSoundCloudClick = useCallback(() => window.open(CONTACT_LINKS.SOUND_CLOUD, "_blank"), []);

  return { handleFacobookClick, handleInstagramClick, handleSoundCloudClick };
};
