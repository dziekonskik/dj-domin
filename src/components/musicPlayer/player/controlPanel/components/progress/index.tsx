import { useProgressControl } from "../../../hooks/useProgressControl";
import { ProgressSlider } from "./components/progressSlider";
import { TimeDisplay } from "./components/timeDisplay";

export const ProgressControl = () => {
  const { setProgress, timeElapsed } = useProgressControl();

  return (
    <div>
      <ProgressSlider {...{ setProgress }} />
      <TimeDisplay {...{ timeElapsed }} />
    </div>
  );
};
