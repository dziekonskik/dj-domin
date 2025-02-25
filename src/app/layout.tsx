import type { Metadata } from "next";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { apfelGrotezk, poppins } from "./styles/fonts";
import "./styles/globals.css";

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
    <html lang="pl">
      <body className={`${poppins.variable} ${apfelGrotezk.variable} font-poppins antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
