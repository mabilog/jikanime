"use client";
import { useAnimeContext } from "@/app/context/useAnimeContext";
import { Character } from "@/app/lib/definitions";
import AnimeCharacterSearch from "@/app/ui/anime/AnimeCharacterSearch";
import Image from "next/image";
import Link from "next/link";
import { use } from "react";

export default function Characters({
  searchParams,
}: {
  searchParams?: Promise<{ query?: string; language?: string }>;
}) {
  const { characters } = useAnimeContext();
  const resolvedSearchParams = use(searchParams || Promise.resolve({})) as {
    query?: string;
    language?: string;
  };
  const query = resolvedSearchParams.query || "";
  const language = resolvedSearchParams.language || "Japanese";

  if (!characters) return <p>no characters</p>;

  const languages = [
    "All",
    ...new Set(
      characters.flatMap((char) => char.voice_actors.map((va) => va.language))
    ),
  ];

  const chars = characters.map((char: Character) => ({
    character: {
      mal_id: char.character.mal_id,
      images: {
        jpg: {
          image_url: char.character.images.jpg.image_url,
        },
        webp: {
          image_url: char.character.images.webp.image_url,
          small_image_url: char.character.images.webp.small_image_url,
        },
      },
      name: char.character.name,
      url: char.character.url,
    },
    role: char.role,
    favorites: char.favorites,
    voice_actors:
      language === "All"
        ? char.voice_actors
        : char.voice_actors.filter((va) => va.language === language),
  }));

  const filteredCharacters = query
    ? chars.filter((char: Character) => {
        const characterNameMatch = char.character.name
          .toLowerCase()
          .includes(query.toLowerCase());

        const voiceActorMatch = char.voice_actors.some((va) =>
          va.person.name.toLowerCase().includes(query.toLowerCase())
        );

        return characterNameMatch || voiceActorMatch;
      })
    : chars;

  return (
    <>
      <AnimeCharacterSearch
        placeholder="search for a character or an actor"
        languages={languages}
      />
      <div className="flex flex-col h-full overflow-y-auto scrollbar-hide">
        {filteredCharacters.map((char: Character, index) => {
          const { character, favorites, role, voice_actors } = char;
          return (
            <div
              className="flex flex-row justify-between border-b py-2"
              key={index}
            >
              <div className="flex flex-row justify-start gap-2">
                <Image
                  width={100}
                  height={200}
                  alt={character.name}
                  src={character.images.webp.image_url}
                  className="object-contain h-fit w-auto"
                />
                <div>
                  <p>{character.name}</p>
                  <p>{role}</p>
                  <p>{favorites} favorites</p>
                </div>
              </div>
              <div className="flex flex-col items-end gap-2">
                {voice_actors.map((va, index) => (
                  <div className="flex gap-2" key={index}>
                    <div className="flex flex-col gap-2 items-end">
                      <Link
                        href={`/people/${va.person.mal_id}`}
                        className="transistion-colors duration-300 ease-in-out hover:text-blue-600"
                      >
                        {va.person.name}
                      </Link>
                      <span>{va.language}</span>
                    </div>
                    <Link href={`/people/${va.person.mal_id}`}>
                      <Image
                        width={75}
                        height={150}
                        alt={va.person.name}
                        src={va.person.images.jpg.image_url}
                        className="object-contain w-auto"
                      />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
