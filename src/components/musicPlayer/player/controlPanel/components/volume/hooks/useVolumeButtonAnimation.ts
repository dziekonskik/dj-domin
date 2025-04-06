import { useAnimationControls, useMotionValue, useTransform } from "motion/react";
import { useEffect } from "react";

type Props = {
  volume: number;
};

export const useVolumeButtonAnimation = ({ volume }: Props) => {
  const waveSmControls = useAnimationControls();
  const waveMdControls = useAnimationControls();
  const waveLgControls = useAnimationControls();
  const motionVolume = useMotionValue(volume);
  const waveSmVariants = useTransform(
    motionVolume,
    [0, 0.1],
    ["M 22 9 C 22 9 26 17 26 17 M 22 17 C 22 17 26 9 26 9", "M 22 8 C 24 10 24 16 22 18 M 16 22 C 16 22 16 22 16 22"]
  );

  const getPath = (volume: number) =>
    volume < 0.1
      ? "M 22 9 C 22 9 26 17 26 17 M 22 17 C 22 17 26 9 26 9"
      : "M 22 8 C 24 10 24 16 22 18 M 16 22 C 16 22 16 22 16 22";

  useEffect(() => {
    waveSmControls.start({
      d: getPath(volume),
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    });
  }, [volume, waveSmControls]);

  useEffect(() => {
    waveMdControls.start({ pathLength: volume * 2, pathOffset: 0.5 - volume, opacity: !volume ? 0 : 1 });
  }, [waveMdControls, volume]);

  useEffect(() => {
    waveLgControls.start({
      pathLength: volume - (1 - volume),
      pathOffset: (1 - volume) / 2 + (1 - volume) / 2,
      opacity: volume <= 0.5 ? 0 : 1,
    });
  }, [waveLgControls, volume]);

  return { waveSmControls, waveMdControls, waveLgControls, waveSmVariants };
};
