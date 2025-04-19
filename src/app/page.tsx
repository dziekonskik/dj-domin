import { About } from "./components/main/about";
import { Hero } from "./components/main/hero";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <main className="grid">
      <Hero />
      <About />
    </main>
  );
}
