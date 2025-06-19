import { homePageMetadata } from "@/consts/metadata";
import { About } from "./components/main/about";
import { Contact } from "./components/main/contact";
import { Hero } from "./components/main/hero";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = homePageMetadata;

export default function Home() {
  return (
    <main className="grid">
      <Hero />
      <About />
      <Contact />
    </main>
  );
}
