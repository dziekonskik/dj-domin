import { useLayoutEffect, useState } from "react";

const IS_SERVER = typeof window === "undefined";

const getMatches = (query: string): boolean => {
  if (IS_SERVER) {
    return false;
  }
  return window.matchMedia(query).matches;
};

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(getMatches(query));

  useLayoutEffect(() => {
    const matchMedia = window.matchMedia(query);
    const handleChange = () => setMatches(getMatches(query));
    handleChange();

    if (matchMedia.addListener) {
      matchMedia.addListener(handleChange);
    } else {
      matchMedia.addEventListener("change", handleChange);
    }

    return () => {
      if (matchMedia.removeListener) {
        matchMedia.removeListener(handleChange);
      } else {
        matchMedia.removeEventListener("change", handleChange);
      }
    };
  }, [query]);

  return matches;
}
