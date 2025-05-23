import { ControlPanel } from "./controlPanel";
import { MobileTrackNavigator } from "./mobileTrackNavigator";
import { DesktopTrackList } from "./desktopTrackList";

export const Player = () => {
  return (
    <article className="w-full sm:w-sm grid">
      <MobileTrackNavigator />
      <ControlPanel />
      <DesktopTrackList />
    </article>
  );
};
