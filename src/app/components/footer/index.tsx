"use client";
import { PianoDecoration } from "./components/pianoDecoration";

export const Footer = () => {
  return (
    <footer className="bg-lightgreen">
      <PianoDecoration />
      <div className="lg:container mx-auto h-[300px]">
        <div>footer</div>
      </div>
    </footer>
  );
};
