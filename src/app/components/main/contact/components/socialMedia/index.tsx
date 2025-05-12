import Image from "next/image";
import { IconButton } from "@/components/iconButton";
import telephone from "public/Phone-icon.svg";
import messenger from "public/Messenger.svg";
import whatsapp from "public/WhatsApp.svg";
import contact from "public/contact.svg";

export const SocialMedia = () => {
  return (
    <div className="flex-1 flex justify-between mb-10 p-4 pt-0 lg:p-6 lg:flex-col">
      <div className="hidden flex-1 lg:flex justify-center">
        <Image src={contact} alt="decoration" />
      </div>
      <div className="flex lg:flex-col justify-between flex-1 lg:h-0.5">
        <span>
          <IconButton icon={whatsapp} onClick={() => {}} />
        </span>
        <span>
          <IconButton icon={messenger} onClick={() => {}} />
        </span>
        <span className="flex items-center gap-10 cursor-pointer">
          <IconButton icon={telephone} onClick={() => {}} />
          <p className="hidden lg:block text-4xl font-grotezk">795 913 955</p>
        </span>
      </div>
    </div>
  );
};
