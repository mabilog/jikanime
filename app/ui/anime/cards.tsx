import { Anime as AnimeType, Genre } from "@/app/lib/definitions";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

import { StarIcon, HashtagIcon } from "@heroicons/react/24/outline";

export async function Cards({ animes }: { animes: AnimeType[] }) {
  // return (
  //   <div className="flex flex-wrap justify-center gap-2">
  //     {animes.map((anime: AnimeType) => (
  //       <Card anime={anime} key={anime.mal_id} />
  //     ))}
  //   </div>
  // );

  console.log("anime: ", animes);
  return <p>Cards!</p>;
}

export function Card({ anime }: { anime: AnimeType }) {
  return (
    <Link
      className="flex p-2 gap-4 border-2 border-gray-600 rounded-xl h-64"
      href={`/anime/${anime.mal_id}`}
    >
      <div className="flex">
        <Image
          width={225}
          height={318}
          alt={anime.title_english}
          src={anime.images.webp.image_url}
          className="rounded-xl object-contain w-40"
        />
      </div>
      <div className="flex flex-col py-3 justify-between w-48">
        <div
          className={clsx(
            "rounded-lg border-2 w-max px-2 py-1 text-xs border-gray-600",
            {
              "text-gray-600": anime.status === "Finished Airing",
              "text-orange-300": anime.status === "Currently Airing",
              "text-green-300": anime.status === "Not yet aired",
            }
          )}
        >
          <span>{anime.status}</span>
        </div>
        <div className="flex items-center gap-2">
          <small>
            {anime.season} {anime.year}
          </small>
          <div className="w-1 h-1 rounded-full bg-gray-500"></div>
          <small>
            {anime.episodes} {anime.episodes > 1 ? "episodes" : "episode"}
          </small>
        </div>
        <p className="text-base font-semibold">{anime.title_english}</p>
        <div className="flex gap-5">
          <div className="flex flex-col">
            <div className="flex gap-1 text-lg items-center">
              <StarIcon className="w-4 md:w-6" />
              {anime.score}
            </div>
            <small>{anime.scored_by} users</small>
          </div>
          <div className="flex flex-col">
            <div className="flex gap-1 text-lg items-center">
              <HashtagIcon className="w-4 md:w-6" />
              {anime.rank}
            </div>
            <small>Ranking</small>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          {anime.genres.slice(0, 2).map((genre: Genre) => (
            <div
              className="py-1 px-2 bg-gray-700 rounded text-xs"
              key={genre.mal_id}
            >
              {genre.name}
            </div>
          ))}
          {anime.genres.length > 2 && (
            <div className="py-1 px-2 bg-gray-700 rounded text-xs">
              + {anime.genres.length - 2}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
