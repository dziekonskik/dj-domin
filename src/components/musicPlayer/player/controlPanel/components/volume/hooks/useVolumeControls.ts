"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { usePlayer } from "@/components/musicPlayer/context";
import { useAnimationControls } from "motion/react";

export const useVolumeControls = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { playerState } = usePlayer();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const thumbControls = useAnimationControls();

  const toggleVolumeTrack = useCallback(() => {
    if (playerState === "loading") return;
    setIsOpen((prev) => !prev);
  }, [playerState]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!wrapperRef.current?.contains(e.target as Node)) setIsOpen(false);
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return { isOpen, wrapperRef, trackRef, thumbControls, toggleVolumeTrack };
};
