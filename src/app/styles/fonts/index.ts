import { Poppins } from "next/font/google";
import localFont from "next/font/local";

export const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "600"],
  variable: "--font-poppins",
  display: "fallback",
});

export const apfelGrotezk = localFont({
  src: "./ApfelGrotezk/ApfelGrotezk-Satt.woff2",
  variable: "--font-grotezk",
  display: "fallback",
});
