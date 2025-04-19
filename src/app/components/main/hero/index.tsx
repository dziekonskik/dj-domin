import Image from "next/image";
import djDominPath from "../../../../../public/domin.webp";
import { MusicPlayer } from "@/components/musicPlayer";

export const Hero = () => {
  return (
    <section className="w-full h-svh sm:h-[calc(100dvh-84px)] grid lg:grid-cols-2 lg:container mx-auto md:pb-20 md:px-4">
      <div className="relative w-full md:rounded-xl sm:overflow-hidden row-start-1 col-start-1">
        <Image
          src={djDominPath}
          alt="Dj Domin prowadzi imprezę"
          fill
          priority
          sizes="(max-width: 639.99px) 100vw, 50vw"
        />
      </div>
      <div className="flex flex-col row-start-1 col-start-1 lg:col-start-2 z-10">
        <div className="px-2 grid justify-center">
          <h1 className="font-grotezk text-6xl sm:text-7xl md:text-8xl 2xl:text-9xl mt-10 md:mt-0 uppercase">
            DJ <span className="sm:bg-prmiary rounded-lg inline-block sm:pr-8 sm:pt-6">DOMIN</span>
          </h1>
          <h2 className="uppercase text-4xl xl:text-5xl 2xl:text-6xl mt-4 ">Zamiksuję do kotleta</h2>
        </div>
        <div className="mt-auto sm:ml-auto bg-white md:w-min md:p-2 md:pb-0">
          <MusicPlayer />
        </div>
      </div>
    </section>
  );
};
