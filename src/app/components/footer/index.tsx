"use client";
import { useUIContext } from "@/app/context";
import { useEffect } from "react";

export const Footer = () => {
  const { setActiveSectionId } = useUIContext();
  useEffect(() => {
    setActiveSectionId("contact");
  }, [setActiveSectionId]);

  return (
    <footer className="bg-lightgreen h-[300px]">
      <div className="!pt-0 sm:p-12">footer</div>
    </footer>
  );
};
