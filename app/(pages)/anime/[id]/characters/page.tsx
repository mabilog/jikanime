"use client";
import { useAnimeContext } from "@/app/context/useAnimeContext";
// import { fetchAnimeCharacters } from "@/app/lib/data";
import { Character } from "@/app/lib/definitions";
import Search from "@/app/ui/search";
import Image from "next/image";
import Link from "next/link";
import { use } from "react";

export default function Characters({
  searchParams,
}: {
  searchParams?: Promise<{ query?: string }>;
}) {
  const { characters } = useAnimeContext();
  const resolvedSearchParams = use(searchParams || Promise.resolve({})) as {
    query?: string;
  };
  const query = resolvedSearchParams.query || "";

  if (!characters) return <p>no characters</p>;

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
    voice_actors: char.voice_actors.filter(
      (va) => va.language === "Japanese" || va.language === "English"
    ),
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
    : characters;

  return (
    <>
      <Search placeholder="search for a character or an actor" />
      <div className="flex flex-col h-[85vh] overflow-y-auto scrollbar-hide">
        <p>Characters maybe</p>
        {filteredCharacters.map((char: Character) => {
          const { character, favorites, role, voice_actors } = char;
          return (
            <div
              className="flex flex-row justify-between border-b py-2"
              key={character.mal_id}
            >
              <div className="flex flex-row justify-start gap-2">
                <Image
                  width={100}
                  height={200}
                  alt={character.name}
                  src={character.images.webp.image_url}
                  className="object-contain h-fit"
                />
                <div>
                  <p>{character.name}</p>
                  <p>{role}</p>
                  <p>{favorites} favorites</p>
                </div>
              </div>
              <div className="flex flex-col items-end gap-2">
                {voice_actors.map((va) => (
                  <div className="flex gap-2" key={va.person.mal_id}>
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
                        className="object-contain"
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
