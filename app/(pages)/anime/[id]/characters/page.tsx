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
        : char.voice_actors
            .filter((va) => va.language === language)
            .slice(0, 1),
  }));

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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

  const charsFlatMap = characters.flatMap((char: Character) =>
    char.voice_actors
      .filter((va) => language === "all" || va.language === language)
      .map((va) => ({
        character: {
          mal_id: char.character.mal_id,
          images: {
            jpg: { image_url: char.character.images.jpg.image_url },
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
        voice_actor: va, // Single voice actor per entry
      }))
  );

  const filteredCharsFlatMap = query
    ? charsFlatMap.filter(({ character, voice_actor }) => {
        const characterNameMatch = character.name
          .toLowerCase()
          .includes(query.toLowerCase());

        const voiceActorMatch = voice_actor.person.name
          .toLowerCase()
          .includes(query.toLowerCase());

        return characterNameMatch || voiceActorMatch;
      })
    : charsFlatMap;

  return (
    <div className="px-2">
      <AnimeCharacterSearch
        placeholder="search for a character or an actor"
        languages={languages}
      />
      <div className="flex flex-col md:grid md:grid-cols-2 h-full overflow-y-auto scrollbar-hide gap-2">
        {filteredCharsFlatMap.map((char, index) => {
          const { character, favorites, role, voice_actor } = char;
          return (
            <div
              className="flex flex-row border-b py-2 px-2 rounded-md bg-blue-100 "
              key={index}
            >
              <div className="flex flex-row w-1/2 justify-start gap-2">
                <Image
                  width={50}
                  height={100}
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
              <div className="flex flex-col w-1/2 items-end gap-2">
                <div className="flex gap-2 h-full justify-end" key={index}>
                  <div className="flex flex-col gap-2 items-end">
                    <Link
                      href={`/person/${voice_actor.person.mal_id}`}
                      className="transistion-colors duration-300 ease-in-out hover:text-blue-600 text-end"
                    >
                      {voice_actor.person.name}
                    </Link>
                    <span>{voice_actor.language}</span>
                  </div>
                  <Link
                    href={`/person/${voice_actor.person.mal_id}`}
                    className="h-auto "
                  >
                    <Image
                      width={50}
                      height={100}
                      alt={voice_actor.person.name}
                      src={voice_actor.person.images.jpg.image_url}
                      className="object-contain w-auto"
                    />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
