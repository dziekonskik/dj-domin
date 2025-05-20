import { PianoDecoration } from "./components/pianoDecoration";
import { ContactDetails } from "./components/contactDetails";
import { PlayerWidget } from "./components/playerWidget";
import { FooterNavigation } from "./components/footerNavigation";
import { Suspense } from "react";

export const Footer = () => {
  return (
    <footer className="bg-lightgreen min-h-96">
      <Suspense fallback=" ">
        <PianoDecoration />
        <div className="lg:container mx-auto pt-20 sm:py-20 sm:px-4 grid sm:grid-cols-[1.25fr_1fr]">
          <div>
            <ContactDetails />
            <PlayerWidget />
          </div>
          <div className="hidden sm:flex justify-end items-end">
            <FooterNavigation />
          </div>
        </div>
      </Suspense>
    </footer>
  );
};
