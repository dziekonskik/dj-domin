import type { Metadata } from "next";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { apfelGrotezk, poppins } from "./styles/fonts";
import "./styles/globals.css";
import { UIStateProvider } from "./context";
import { PlayerStoreProvider } from "@/components/musicPlayer/context";
import { RefsProvider } from "./components/header/components/navigation/context";
import { getMusic } from "@/components/musicPlayer/utils/getMusic";

export const metadata: Metadata = {
  title: "Dj Domin",
  description: "Najlepszy dj w mieście",
};
const tracks = await getMusic();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className="scroll-smooth">
      <body className={`${poppins.variable} ${apfelGrotezk.variable} font-poppins antialiased`}>
        <UIStateProvider>
          <RefsProvider>
            <PlayerStoreProvider {...{ tracks }}>
              <Header />
              {children}
              <Footer />
            </PlayerStoreProvider>
          </RefsProvider>
        </UIStateProvider>
      </body>
    </html>
  );
}
