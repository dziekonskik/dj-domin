import { COLOR } from "@/consts/colors";
import { ForwardIcon, VolumeIcon } from "../controlPanel/icons";

export const PlayerLoading = () => {
  return (
    <div className="bg-black rounded-md px-2 py-4 mr-auto w-full sm:w-sm flex animate-pulse">
      <div className="w-full">
        <div>
          <div className="mb-2">
            <div className="h-0.5 rounded-2xl bg-white relative">
              <div className="w-3 h-3 rounded-full abosulute -translate-1/2 bg-secondary" />
            </div>
          </div>
          <div className="w-full flex justify-between mb-2">
            <span className="text-white text-xs select-none">-:--</span>
            <span className="text-white text-xs select-none">-:--</span>
          </div>
        </div>
        <div className="mx-auto flex justify-center md:gap-5 lg:gap-7 xl:gap-10">
          <VolumeIcon />
          <span className="w-14 aspect-square">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="12" fill={COLOR.SECONDARY} />
            </svg>
          </span>
          <ForwardIcon />
        </div>
      </div>
    </div>
  );
};
