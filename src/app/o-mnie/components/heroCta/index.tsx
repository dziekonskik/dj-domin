import { AnchorCta } from "@/components/circleCta/components/anchorCta";
import { CONTACT_LINKS } from "@/consts/contactLinks";

export const HeroCta = () => {
  return (
    <div className="flex relative">
      <span className="flex-1 flex justify-center items-center">
        <AnchorCta variant="anchor" href="/#contact" isVisible className="p-2">
          KONTAKT
        </AnchorCta>
      </span>
      <span className="flex-1 flex justify-center items-center ">
        <AnchorCta variant="anchor" target="_blank" href={CONTACT_LINKS.INSTAGRAM} isVisible>
          INSTAGRAM
        </AnchorCta>
      </span>
    </div>
  );
};
