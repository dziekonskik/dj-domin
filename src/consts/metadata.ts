import { Metadata } from "next";

export const homePageMetadata: Metadata = {
  title: "DJ Domin – Najlepszy DJ w mieście | Eventy, Wesela, Imprezy",
  description:
    "DJ Domin to gwarancja świetnej zabawy! Muzyka na wesela, eventy i imprezy prywatne. Rezerwuj teraz i rozkręć swoją imprezę!",
};

export const aboutMetadata = {
  title: "O mnie – DJ Domin | Pasja i doświadczenie",
  description:
    "DJ Domin to artysta z pasją i doświadczeniem. Gra na weselach, eventach i imprezach, tworząc niezapomniane wspomnienia.",
};

export const commonMetadata: Metadata = {
  metadataBase: new URL("https://djdomin.com.pl/"),
  openGraph: {
    title: "DJ Domin – Najlepszy DJ na wesela i eventy",
    description:
      "Muzyka na najwyższym poziomie. DJ Domin gra na weselach, eventach i prywatkach – rozkręci każdą imprezę!",
    url: "/",
    siteName: "DJ Domin",
    type: "website",
    images: [
      {
        url: "/domin.webp",
        width: 625,
        height: 660,
        alt: "DJ Domin grający na imprezie",
      },
    ],
  },
  keywords: [
    "DJ Domin",
    "najlepszy DJ",
    "DJ na wesele",
    "DJ na imprezę",
    "DJ Zgierz",
    "DJ Łódź",
    "DJ Ozorków",
    "DJ Aleksandrów Łódzki",
    "DJ Pabianice",
    "muzyka na event",
    "oprawa muzyczna",
  ],
  icons: {
    icon: "https://djdomin.com.pl/favicon.ico",
    apple: "https://djdomin.com.pl/apple-touch-icon.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "https://djdomin.com.pl/apple-touch-icon.png",
    },
  },
  manifest: "https://djdomin.com.pl/site.webmanifest",
};
