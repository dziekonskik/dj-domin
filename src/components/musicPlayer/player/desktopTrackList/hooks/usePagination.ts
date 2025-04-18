import { usePlayer } from "@/components/musicPlayer/context";
import { splitEvery } from "ramda";
import { useState, useCallback, useEffect } from "react";
import { TRACKS_PER_PAGE } from "../../consts/trackConfig";

export const usePagination = () => {
  const [currentPageIdx, setCurrentPageIdx] = useState(0);
  const { tracks, activeIndex } = usePlayer();
  const paginatedTracks = splitEvery(TRACKS_PER_PAGE, tracks);

  useEffect(() => {
    setCurrentPageIdx((prevIndex) => {
      const newPageIndex = Math.floor(activeIndex / TRACKS_PER_PAGE);
      return prevIndex === newPageIndex ? prevIndex : newPageIndex;
    });
  }, [activeIndex]);

  const prevPage = useCallback(() => {
    const maxPages = Math.floor(tracks.length / TRACKS_PER_PAGE);
    setCurrentPageIdx((prev) => (prev <= 0 ? maxPages : prev - 1));
  }, [tracks.length]);

  const nextPage = useCallback(() => {
    const maxPages = Math.floor(tracks.length / TRACKS_PER_PAGE);
    setCurrentPageIdx((prev) => (prev >= maxPages ? 0 : prev + 1));
  }, [tracks.length]);

  return { currentPageIdx, paginatedTracks, prevPage, nextPage };
};
