import { useProgressCounter } from "./hooks/useProgressCounter";
import { ProgressSlider } from "./components/progressSlider";
import { TimeDisplay } from "./components/timeDisplay";

export const ProgressControl = () => {
  const { setProgress, timeElapsed } = useProgressCounter();

  return (
    <div>
      <ProgressSlider {...{ setProgress }} />
      <TimeDisplay {...{ timeElapsed }} />
    </div>
  );
};
