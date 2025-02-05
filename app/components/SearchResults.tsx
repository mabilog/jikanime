"use client";

import Image from "next/image";
import { AnimesWithPagination } from "../lib/definitions";
import Link from "next/link";

export default function SearchResults(props: {
  results: AnimesWithPagination;
}) {
  const { results } = props;

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {results &&
        results.data.map((anime, index) => (
          <Link
            href={`/anime/${anime.mal_id}`}
            key={index}
            className="flex flex-col max-w-[200px]"
          >
            <Image
              src={anime.images.webp.large_image_url}
              alt={anime.title}
              height={300}
              width={200}
              className="object-cover h-[300px] w-[200px] rounded"
            />
            <h3 className="text-wrap">
              {anime.title.length > 40
                ? `${anime.title.substring(0, 40)}...`
                : anime.title}
            </h3>
          </Link>
        ))}
    </div>
  );
}
