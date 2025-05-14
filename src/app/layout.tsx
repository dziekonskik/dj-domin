import type { Metadata } from "next";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { apfelGrotezk, poppins } from "./styles/fonts";
import "./styles/globals.css";
import { UIStateProvider } from "./context";

export const metadata: Metadata = {
  title: "Dj Domin",
  description: "Najlepszy dj w mieście",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className="scroll-smooth">
      <body className={`${poppins.variable} ${apfelGrotezk.variable} font-poppins antialiased`}>
        <UIStateProvider>
          <Header />
          {children}
          <Footer />
        </UIStateProvider>
      </body>
    </html>
  );
}
