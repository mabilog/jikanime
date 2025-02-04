"use client";
import { useAnimeContext } from "@/app/context/useAnimeContext";

export default function AnimeInfo() {
  const { anime } = useAnimeContext();

  if (!anime) {
    return <div>not found? maybe?</div>;
  }

  return (
    <div className="flex flex-col">
      <div>
        <h3>Synopsis</h3>
        <p>{anime.synopsis}</p>
      </div>
      <div>
        <h3>Background</h3>
        <p>{anime.background}</p>
      </div>
    </div>
  );
}
