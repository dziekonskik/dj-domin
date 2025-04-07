import { COLOR } from "@/consts/colors";
import { PATH_CONFIG } from "../consts/pathConfig";

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
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 26" className="w-6">
            <path
              d="M 2 6 V 18 C 2.3 20.7 5 20.7 6.2 19 C 6.5 18.5 7 18.5 8 19 Q 18 23 18 22 C 20 20 20 6 18 4 Q 18 3 8 7 C 7.2 7.4 6.9 7.4 6.3 7C 6 4.3 2.3 4.4 2 6"
              {...PATH_CONFIG}
              fill="white"
            />
            <path d="M 22 9 C 22 9 26 17 26 17 M 22 17 C 22 17 26 9 26 9" {...PATH_CONFIG} />
          </svg>
          <span className="w-14 aspect-square">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="12" fill={COLOR.SECONDARY} />
            </svg>
          </span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 24" fill="white" className="w-6" id="icon">
            <path d="M 2 6 V 18 C 3 21 5 20 18 15 C 21 14 21 12 18 10.5 C 5 4 3 3 2 6" {...PATH_CONFIG} fill="white" />
            <path d="M 24 8 C 24 11 24 16 24 18" {...PATH_CONFIG} />
          </svg>
        </div>
      </div>
    </div>
  );
};
