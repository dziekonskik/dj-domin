"use client";
import { useRef } from "react";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import { MousePos } from "@/types/common";
import { CANVAS_SCALE, RADIUS } from "./consts";
import { useCanvasEffects } from "./hooks/useCanvasEffects";
import { useInView } from "motion/react";

type Props = {
  img: StaticImageData;
  alt: string;
  className?: string;
};

export const CanvasImage = ({ img, alt, className = "" }: Props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePos = useRef<MousePos>({ x: 0, y: 0 });
  const isInView = useInView(canvasRef);
  const { setLoadedImage } = useCanvasEffects({ canvas: canvasRef.current, mousePos: mousePos.current, isInView });

  const onMouseMove = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    mousePos.current.x = e.nativeEvent.offsetX * CANVAS_SCALE - RADIUS;
    mousePos.current.y = e.nativeEvent.offsetY * CANVAS_SCALE - RADIUS;
  };
  const onMouseLeave = () => {
    mousePos.current.x = 0;
    mousePos.current.y = 0;
  };

  return (
    <div>
      <Image
        {...{ alt, src: img }}
        className={`lg:opacity-0 absolute ${className}`}
        width={600}
        onLoad={({ currentTarget }) => {
          setLoadedImage(currentTarget);
        }}
      />
      <canvas
        ref={canvasRef}
        {...{ onMouseMove, onMouseLeave }}
        className="w-full h-full absolute opacity-0 lg:opacity-100"
      />
    </div>
  );
};
