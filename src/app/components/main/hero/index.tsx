import img from "../../../../../public/domin.webp";
import { MusicPlayer } from "@/components/musicPlayer";
import { CanvasImage } from "@/components/canvasImage";
import { ContactCta } from "../contactCta";

export const Hero = () => {
  return (
    <section className="w-full h-svh sm:h-[calc(100dvh-84px)] grid lg:flex max-w-full lg:container mx-auto md:pb-20 md:px-4">
      <div className="flex-1 relative w-full md:rounded-xl lg:overflow-hidden row-start-1 col-start-1 z-10">
        <CanvasImage {...{ img, alt: "Dj domin" }} />
      </div>
      <div className="flex-1 flex flex-col justify-between row-start-1 col-start-1 z-10">
        <div className="px-2 grid justify-center">
          <h1 className="font-grotezk text-6xl sm:text-7xl md:text-8xl 2xl:text-9xl mt-10 md:mt-0 uppercase">
            DJ <span className="sm:bg-prmiary rounded-lg inline-block sm:pr-8 sm:pt-6">DOMIN</span>
          </h1>
          <h2 className="uppercase text-4xl xl:text-5xl 2xl:text-6xl mt-4 ">Zamiksuję do kotleta</h2>
        </div>
        <div className="w-full flex flex-col sm:flex-row items-end justify-between z-0 sm:bg-white pt-2">
          <div className="flex-1 flex justify-start md:justify-center">
            <ContactCta />
          </div>
          <div className="w-full sm:w-auto flex justify-end">
            <MusicPlayer />
          </div>
        </div>
      </div>
    </section>
  );
};
