import { useCallback } from "react";

export const useSocialMedia = () => {
  const handleFacobookClick = useCallback(
    () => window.open("https://www.facebook.com/profile.php?id=61569687301787", "_blank"),
    []
  );
  const handleInstagramClick = useCallback(() => window.open("https://www.instagram.com/dj_domin_dj/", "_blank"), []);
  const handleSoundCloudClick = useCallback(() => window.open("https://soundcloud.com/djszewcu", "_blank"), []);

  return { handleFacobookClick, handleInstagramClick, handleSoundCloudClick };
};
