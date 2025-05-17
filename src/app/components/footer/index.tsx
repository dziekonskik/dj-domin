import { PianoDecoration } from "./components/pianoDecoration";
import { ContactDetails } from "./components/contactDetails";

export const Footer = () => {
  return (
    <footer className="bg-lightgreen min-h-96">
      <PianoDecoration />
      <div className="lg:container mx-auto py-20 px-4">
        <ContactDetails />
      </div>
    </footer>
  );
};
