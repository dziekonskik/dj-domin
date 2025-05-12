import Image from "next/image";
import dottedArrow from "public/Arrow-Dotted.svg";

export const ArrowsDecoration = () => {
  return (
    <div className="bg-black flex justify-between h-16 lg:flex-col lg:h-full lg:rounded-bl-md lg:rounded-tl-md">
      <Image src={dottedArrow} alt="decoration" className="-translate-x-3 lg:translate-x-0" />
      <div className="flex-1 h-full" />
      <Image src={dottedArrow} alt="decoration" className="rotate-90 translate-x-3 lg:-rotate-90 lg:translate-x-0" />
    </div>
  );
};
