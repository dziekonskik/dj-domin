import { ControlPanel } from "@/components/musicPlayer/player/controlPanel";
import { MobileTrackNavigator } from "@/components/musicPlayer/player/mobileTrackNavigator";

export const Widget = () => {
  return (
    <article className="w-full sm:w-sm grid bg-black sm:rounded-md mt-16">
      <MobileTrackNavigator isVisible isWithoutButtons />
      <ControlPanel />
    </article>
  );
};
