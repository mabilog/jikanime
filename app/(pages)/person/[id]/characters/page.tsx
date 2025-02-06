"use client";
import { usePersonContext } from "@/app/context/usePeopleContext";
import Image from "next/image";
import Link from "next/link";
import { use } from "react";

export default function Characters({
  searchParams,
}: {
  searchParams?: Promise<{ query?: string }>;
}) {
  const { voices } = usePersonContext();
  const resolveSearchParam = use(searchParams || Promise.resolve({})) as {
    query?: string;
  };
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const query = resolveSearchParam.query || "";

  if (!voices) return <div>No voices</div>;

  return (
    <div className="flex flex-col md:grid md:grid-cols-2 h-full overflow-y-auto scrollbar-hide gap-2">
      {voices.map((voice, index) => {
        const { anime, character, role } = voice;

        return (
          <div
            className="flex flex-row border-b py-2 px-2 rounded-md bg-blue-100 "
            key={index}
          >
            <div className="flex flex-row w-1/2 justify-start gap-2">
              <Image
                width={100}
                height={300}
                alt={anime.title}
                src={anime.images.webp.large_image_url}
                className="object-contain h-fit w-auto"
              />
              <div>
                <p>{anime.title}</p>
              </div>
            </div>
            <div className="flex flex-col w-1/2 items-end gap-2">
              <div className="flex gap-2 h-full justify-end" key={index}>
                <div className="flex flex-col gap-2 items-end">
                  <Link
                    href={`/character/${character.mal_id}`}
                    className="transistion-colors duration-300 ease-in-out hover:text-blue-600 text-end"
                  >
                    {character.name}
                  </Link>
                  <span>{role}</span>
                </div>
                <Link href={`/person/${character.mal_id}`} className="">
                  <Image
                    width={100}
                    height={300}
                    alt={character.name}
                    src={character.images.jpg.image_url}
                    className=""
                  />
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
