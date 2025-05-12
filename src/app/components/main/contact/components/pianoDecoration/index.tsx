import Image from "next/image";
import mobilePiano from "public/mobile-piano.svg";
import tabletPiano from "public/tablet-piano.svg";
import desktopPiano from "public/desktop-piano2.svg";

export const PianoDecoration = () => {
  return (
    <div className="bg-black">
      <Image src={mobilePiano} alt="decoration" className="sm:hidden" />
      <Image src={tabletPiano} alt="decoration" className="hidden sm:block lg:hidden" />
      <Image src={desktopPiano} alt="decoration" className="hidden lg:block" />
    </div>
  );
};
