import { useState, useEffect, useRef } from "react";
import { CANVAS_SCALE } from "../consts";
import { Effect } from "../utils/effect";
import { MousePos } from "@/types/common";
import { useAnimationFrame } from "motion/react";

type Props = {
  canvas: HTMLCanvasElement | null;
  mousePos: MousePos;
  isInView: boolean;
};

export const useCanvasEffects = ({ canvas, mousePos, isInView }: Props) => {
  const [loadedImage, setLoadedImage] = useState<HTMLImageElement | null>(null);
  const effectRef = useRef<Effect | null>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);

  useEffect(() => {
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx || !loadedImage) return;

    canvas.width = loadedImage.naturalWidth * CANVAS_SCALE;
    canvas.height = loadedImage.naturalHeight * CANVAS_SCALE;

    ctxRef.current = ctx;
    effectRef.current = new Effect(canvas, loadedImage, mousePos);
  }, [loadedImage, canvas, mousePos]);

  useAnimationFrame(() => {
    if (!isInView) return;
    const ctx = ctxRef.current;
    const effect = effectRef.current;
    if (!ctx || !effect) return;

    effect.render(ctx);
  });

  return { setLoadedImage };
};
