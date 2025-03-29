import Image from "next/image";
import { SectionTitle } from "@/components/sectionTitle";
import decki from "../../../../../public/decki-w-lesie.webp";
import footSvg from "../../../../../public/Foot.svg";

export const About = () => {
  return (
    <section className="bg-primary overflow-hidden">
      <div className="container mx-auto flex flex-col sm:grid sm:grid-cols-2 my-[60px] md:my-[100px] xl:mb-[150px] sm:px-2 md:px-4">
        <SectionTitle className="sm:hidden pl-2 sm:pl-0">o mnie</SectionTitle>
        <div className="order-2 sm:order-1 pl-2 sm:pl-0">
          <SectionTitle className="hidden sm:block mb-6">o mnie</SectionTitle>
          <p className="text-pretty xl:mt-24 w-[85%] mr-10 text-left text-sm lg:text-base">
            Jestem DJ-em specjalizującym się w imprezach okolicznościowych, gdzie moim celem jest tworzenie wyjątkowej
            atmosfery i zapewnienie niezapomnianych wrażeń muzycznych. Niezależnie od tego, czy to wesela, urodziny, czy
            inne uroczystości, staram się dopasować do gustu publiczności, mieszając różne style muzyczne – od
            <Image src={footSvg} alt="decoration" className="float-right w-40" />
            klasycznych hitów po najnowsze trendy. Moja praca to nie tylko odtwarzanie muzyki, ale też wyczucie momentu,
            energia i umiejętność rozkręcenia każdej imprezy.
          </p>
        </div>
        <div className="relative h-full order-1 sm:order-2 my-10 sm:my-0">
          <div className="sm:absolute inset-0 top-1/8 ml-0 sm:-mr-[150px] xl:-mr-[250px] rounded-xl 2xl:rounded-2xl overflow-hidden h-52 sm:h-64 lg:h-72 xl:h-auto">
            <Image src={decki} alt="Abstrakcja decki w lesie" fill sizes="(max-width: 639.99px) 100vw, 50vw" priority />
          </div>
        </div>
      </div>
    </section>
  );
};
