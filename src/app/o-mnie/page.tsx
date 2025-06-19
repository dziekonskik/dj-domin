import { aboutMetadata } from "@/consts/metadata";
import { AboutHero } from "./components/hero";

export const metadata = aboutMetadata;

export default function Omnie() {
  return (
    <main className="grid">
      <AboutHero />
    </main>
  );
}
