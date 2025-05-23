"use client";
import { usePlayer } from "@/components/musicPlayer/context";
import { splitEvery } from "ramda";
import { useCallback, useEffect } from "react";
import { TRACKS_PER_PAGE } from "../../consts/trackConfig";

export const usePagination = () => {
  const { tracks, activeIndex, currentPageIndex, setCurrentPageIndex } = usePlayer();
  const paginatedTracks = splitEvery(TRACKS_PER_PAGE, tracks);

  useEffect(() => {
    const newPageIndex = Math.floor(activeIndex / TRACKS_PER_PAGE);
    setCurrentPageIndex(newPageIndex);
  }, [activeIndex, setCurrentPageIndex]);

  const prevPage = useCallback(() => {
    const maxPages = Math.floor(tracks.length / TRACKS_PER_PAGE);
    const prevPageIndex = currentPageIndex <= 0 ? maxPages : currentPageIndex - 1;
    setCurrentPageIndex(prevPageIndex);
  }, [tracks.length, currentPageIndex, setCurrentPageIndex]);

  const nextPage = useCallback(() => {
    const maxPages = Math.floor(tracks.length / TRACKS_PER_PAGE);
    const nextPageIndex = currentPageIndex >= maxPages ? 0 : currentPageIndex + 1;
    setCurrentPageIndex(nextPageIndex);
  }, [tracks.length, currentPageIndex, setCurrentPageIndex]);

  return { currentPageIndex, paginatedTracks, prevPage, nextPage };
};
