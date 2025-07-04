"use client";
import { IconButton } from "@/components/iconButton";
import facebook from "public/facebook-black-48.svg";
import instagram from "public/instagram-black-48.svg";
import soundCloud from "public/soundcloud-48.svg";
import { useSocialMedia } from "./hooks/useSocialMedia";

export const ContactDetails = () => {
  const { handleFacobookClick, handleInstagramClick, handleSoundCloudClick } = useSocialMedia();
  return (
    <article className="px-4 pt-10">
      <div className="flex gap-6">
        <IconButton icon={facebook} onClick={handleFacobookClick} />
        <IconButton icon={instagram} onClick={handleInstagramClick} />
        <IconButton icon={soundCloud} onClick={handleSoundCloudClick} />
      </div>
    </article>
  );
};
