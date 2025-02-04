"use client";
import { useAnimeContext } from "@/app/context/useAnimeContext";

export default function AnimeTitle() {
  const { anime } = useAnimeContext();

  if (!anime) {
    return <div>anime not found</div>;
  }
  return (
    <div>
      <h1>{anime.title}</h1>
      <h2>{anime.title_english}</h2>
    </div>
  );
}
