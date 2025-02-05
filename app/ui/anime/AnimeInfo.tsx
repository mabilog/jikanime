"use client";
import { useAnimeContext } from "@/app/context/useAnimeContext";

export default function AnimeInfo() {
  const { anime } = useAnimeContext();

  if (!anime) {
    return <div>not found? maybe?</div>;
  }

  return (
    <div className="flex flex-col">
      <div className="flex">
        <div className="flex flex-col items-center w-fit text-center">
          <p className="w-full text-[10px] bg-blue-800 text-white">Score</p>
          <div className="text-lg font-bold">{anime.score}</div>
          <p className="w-full text-[10px]">
            {anime.scored_by.toLocaleString()} users
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <div className="flex">
              <p>Ranked: #{anime.rank}</p>
            </div>
            <div className="flex">
              <p>Popularity: #{anime.popularity}</p>
            </div>
          </div>
        </div>
      </div>

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
