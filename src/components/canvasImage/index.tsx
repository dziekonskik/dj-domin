"use client";
import { useRef } from "react";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import { MousePos } from "@/types/common";
import { CANVAS_SCALE, RADIUS } from "./consts";
import { useCanvasEffects } from "./hooks/useCanvasEffects";

type Props = {
  img: StaticImageData;
  alt: string;
};

export const CanvasImage = ({ img, alt }: Props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePos = useRef<MousePos>({ x: 0, y: 0 });
  const { setLoadedImage } = useCanvasEffects({ canvas: canvasRef.current, mousePos: mousePos.current });

  const onMouseMove = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    mousePos.current.x = e.clientX * CANVAS_SCALE - RADIUS;
    mousePos.current.y = e.clientY * CANVAS_SCALE - RADIUS;
  };
  const onMouseLeave = () => {
    mousePos.current.x = 0;
    mousePos.current.y = 0;
  };

  return (
    <div>
      <Image
        {...{ alt, src: img }}
        className={`opacity-0 absolute`}
        width={600}
        onLoad={({ currentTarget }) => {
          setLoadedImage(currentTarget);
        }}
      />
      <canvas ref={canvasRef} {...{ onMouseMove, onMouseLeave }} className="w-full h-full absolute" />
    </div>
  );
};
