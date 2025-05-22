import { Section } from "@/components/section";
import { CanvasImage } from "@/components/canvasImage";
import img from "public/domin.webp";
import { HeroCta } from "../heroCta";

export const AboutHero = () => {
  return (
    <Section id="hero" className="w-full overflow-hidden sm:px-4 sm:py-8">
      <div className="lg:h-full sm:flex w-full lg:container mx-auto gap-6">
        <div className="sm:flex-1">
          <div className="relative aspect-square sm:w-full sm:h-84 lg:h-auto sm:rounded-md overflow-hidden md:rounded-xl">
            <CanvasImage {...{ img, alt: "Dj domin" }} className="scale-x-115 sm:scale-x-100 w-full h-full sm:h-auto" />
          </div>
          <div className="lg:hidden -mt-20 sm:mt-0 scale-80">
            <HeroCta />
          </div>
        </div>
        <div className="flex-1 z-10 flex flex-col gap-6 mb-10 sm:mb-0 px-4 sm:px-0">
          <p>
            Jestem DJ-em specjalizującym się w imprezach okolicznościowych, gdzie moim celem jest tworzenie wyjątkowej
            atmosfery i zapewnienie niezapomnianych wrażeń muzycznych. Niezależnie od tego, czy to wesela, urodziny, czy
            inne uroczystości, staram się dopasować do gustu publiczności, mieszając różne style muzyczne – od
            klasycznych hitów po najnowsze trendy. Moja praca to nie tylko odtwarzanie muzyki, ale też wyczucie momentu,
            energia i umiejętność rozkręcenia każdej imprezy.
          </p>
          <p>
            Poza sceną jestem biegam amatorsko Dla mnie bieganie to nie tylko forma aktywności fizycznej, ale też sposób
            na relaks i wyzwanie. Regularne treningi uczą mnie dyscypliny, wytrwałości i pokonywania własnych słabości.
            Ta pasja przekłada się na moje podejście do życia – zarówno na parkiecie, jak i na trasie biegowej daję z
            siebie 100%.
          </p>
          <p>
            Łącząc te dwie pasje, znajduję równowagę między dynamiczną energią imprez a spokojem i skupieniem, które
            towarzyszą mi podczas biegania. To połączenie sprawia, że jestem zarówno kreatywny, jak i zdeterminowany,
            gotowy stawiać czoła nowym wyzwaniom – zarówno na scenie, jak i w życiu codziennym.
          </p>
          <div className="hidden lg:block w-3/4 mx-auto">
            <HeroCta />
          </div>
        </div>
      </div>
    </Section>
  );
};
