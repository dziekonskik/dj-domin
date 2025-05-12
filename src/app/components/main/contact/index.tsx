"use client";
import { ContactForm } from "@/app/components/main/contact/components/contactForm";
import { Section } from "@/components/section";
import { SectionTitle } from "@/components/sectionTitle";
import { SocialMedia } from "./components/socialMedia";
import { PianoDecoration } from "./components/pianoDecoration";
import { ArrowsDecoration } from "./components/arrowsDecoration";

export const Contact = () => {
  return (
    <Section id="contact" className="min-h-svh py-20 lg:py-40 overflow-hidden">
      <div className="container mx-auto">
        <SectionTitle className="pl-4 sm:pl-0">kontakt</SectionTitle>
        <h5 className="mt-10 mb-20 px-4 text-pretty">
          Z przyjemnością zagram na Twojej imprezie :) Zostaw wiadomość a oddzwonię, lub pisz bezpośrednio na socialach.
        </h5>
        <article className="lg:flex w-full lg:h-[550px] xl:h-[600px] lg:items-center overflow-hidden">
          <ArrowsDecoration />
          <div className="bg-black text-white flex flex-col lg:flex-row sm:gap-10 lg:gap-20 lg:flex-1 lg:h-full">
            <ContactForm />
            <SocialMedia />
          </div>
          <PianoDecoration />
        </article>
      </div>
    </Section>
  );
};
