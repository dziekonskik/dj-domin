"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import { Effect } from "./utils/effect";
import { MousePos } from "@/types/common";
import { CANVAS_SCALE, RADIUS } from "./consts";

type Props = {
  src: StaticImageData;
  alt: string;
};

export const CanvasImage = ({ src, alt }: Props) => {
  const [loadedImage, setLoadedImage] = useState<HTMLImageElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePos = useRef<MousePos>({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx || !loadedImage) return;

    canvas.width = loadedImage.naturalWidth * CANVAS_SCALE;
    canvas.height = loadedImage.naturalHeight * CANVAS_SCALE;
    const effect = new Effect(canvas, loadedImage, mousePos.current);

    const draw = () => {
      effect.render(ctx);
      requestAnimationFrame(draw);
    };
    draw();
  }, [loadedImage, src]);

  return (
    <div>
      <Image
        {...{ alt, src }}
        className={`opacity-0 absolute`}
        width={600}
        onLoad={({ currentTarget }) => {
          setLoadedImage(currentTarget);
        }}
      />
      <canvas
        ref={canvasRef}
        className="w-full h-full absolute"
        onMouseMove={(e) => {
          mousePos.current.x = e.clientX * CANVAS_SCALE - RADIUS;
          mousePos.current.y = e.clientY * CANVAS_SCALE - RADIUS;
        }}
        onMouseLeave={() => {
          mousePos.current.x = 0;
          mousePos.current.y = 0;
        }}
      />
    </div>
  );
};
