import { useCallback, useLayoutEffect, useState } from "react";

const IS_SERVER = typeof window === "undefined";
const DEFAULT_VALUE = false;

const getMatches = (query: string): boolean => {
  if (IS_SERVER) {
    return DEFAULT_VALUE;
  }
  return window.matchMedia(query).matches;
};

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(getMatches(query));

  const handleChange = useCallback(() => setMatches(getMatches(query)), [query]);

  useLayoutEffect(() => {
    const matchMedia = window.matchMedia(query);
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
  }, [query, handleChange]);

  return matches;
}
