import Image from "next/image";
import djDominPath from "../../../../../public/domin.webp";
import { MusicPlayer } from "@/components/musicPlayer";

export const Hero = () => {
  return (
    <section className="w-full grid sm:grid-cols-2 container mx-auto sm:px-2 md:px-4">
      <div className="relative w-full aspect-1/1 sm:rounded-xl sm:overflow-hidden row-start-1 col-start-1">
        <Image
          src={djDominPath}
          alt="Dj Domin prowadzi imprezę"
          fill
          priority
          sizes="(max-width: 639.99px) 100vw, 50vw"
        />
      </div>
      <div className="flex flex-col sm:items-end row-start-1 col-start-1 sm:col-start-2 z-10 pointer-events-none sm:pointer-events-auto">
        <h1 className="font-grotezk text-6xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl mt-10 xl:mt-12 uppercase ml-2">
          DJ <span className="sm:bg-prmiary rounded-lg inline-block sm:pr-8 sm:pt-6">DOMIN</span>
        </h1>
        <h2 className="uppercase text-2xl xl:text-5xl 2xl:text-6xl mt-4 hidden sm:block">Zamiksuję do kotleta</h2>
        <MusicPlayer />
      </div>
    </section>
  );
};
