import { useState, useEffect } from "react";
import { CANVAS_SCALE } from "../consts";
import { Effect } from "../utils/effect";
import { MousePos } from "@/types/common";

type Props = {
  canvas: HTMLCanvasElement | null;
  mousePos: MousePos;
};

export const useCanvasEffects = ({ canvas, mousePos }: Props) => {
  const [loadedImage, setLoadedImage] = useState<HTMLImageElement | null>(null);
  useEffect(() => {
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx || !loadedImage) return;

    canvas.width = loadedImage.naturalWidth * CANVAS_SCALE;
    canvas.height = loadedImage.naturalHeight * CANVAS_SCALE;
    const effect = new Effect(canvas, loadedImage, mousePos);

    const draw = () => {
      effect.render(ctx);
      requestAnimationFrame(draw);
    };
    draw();
  }, [loadedImage, canvas, mousePos]);

  return { setLoadedImage };
};
